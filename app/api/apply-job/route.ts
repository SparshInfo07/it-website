import { NextRequest, NextResponse } from "next/server";
import nodemailer, { type SendMailOptions } from "nodemailer";
import { sanitize } from "@/lib/sanitize";
import {
  jobApplicationEmailAdmin,
  jobApplicationEmailUser,
  SanitizedJobApplicationData,
} from "@/lib/emailTemplates";

// Helper to strip quotes and extra whitespace from env vars
function getCleanEnv(key: string): string {
  const raw = process.env[key];
  if (!raw) return "";
  return raw.trim().replace(/^["']|["']$/g, "").trim();
}

// Env var checker
function checkRequiredEnvVars(vars: string[]): void {
  const missingVars: string[] = [];
  for (const envVar of vars) {
    const value = getCleanEnv(envVar);
    if (!value) {
      missingVars.push(envVar);
    }
  }
  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`,
    );
  }
}

// Create Nodemailer transporter
function createTransporter() {
  checkRequiredEnvVars([
    "MAIL_HOST",
    "MAIL_PORT",
    "MAIL_USERNAME",
    "MAIL_PASSWORD",
    "MAIL_FROM_ADDRESS",
    "MAIL_FROM_NAME",
  ]);

  const host = getCleanEnv("MAIL_HOST");
  const port = Number(getCleanEnv("MAIL_PORT")) || 587;
  const user = getCleanEnv("MAIL_USERNAME");
  const pass = getCleanEnv("MAIL_PASSWORD");
  const allowInsecureTls =
    process.env.NODE_ENV !== "production" &&
    getCleanEnv("MAIL_ALLOW_INSECURE_TLS") === "true";

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for 587/25
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: !allowInsecureTls,
    },
  });
}

// Simple email regex validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json(
        { error: "Invalid form data submission." },
        { status: 400 },
      );
    }

    const fullName = (formData.get("fullName") as string | null)?.trim() || "";
    const email = (formData.get("email") as string | null)?.trim() || "";
    const phone = (formData.get("phone") as string | null)?.trim() || "";
    const bio = (formData.get("bio") as string | null)?.trim() || "";
    const jobId = (formData.get("jobId") as string | null)?.trim() || "";
    const jobTitle = (formData.get("jobTitle") as string | null)?.trim() || "";
    const jobCategory = (formData.get("jobCategory") as string | null)?.trim() || "";
    const jobLocation = (formData.get("jobLocation") as string | null)?.trim() || "";
    const agreedToPolicy = formData.get("agreedToPolicy");
    const resume = formData.get("resume") as File | null;

    // 1. Validate required fields
    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (at least 2 characters)." },
        { status: 400 },
      );
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!phone || phone.length < 5) {
      return NextResponse.json(
        { error: "Please enter a valid contact phone number." },
        { status: 400 },
      );
    }

    if (!bio || bio.length < 5) {
      return NextResponse.json(
        { error: "Please provide a brief bio or background summary." },
        { status: 400 },
      );
    }

    if (agreedToPolicy !== "true" && agreedToPolicy !== "1") {
      return NextResponse.json(
        { error: "You must agree to the data storage and handling policy." },
        { status: 400 },
      );
    }

    // 2. Validate Resume File
    if (!resume || !(resume instanceof File) || resume.size === 0) {
      return NextResponse.json(
        { error: "Please upload your CV/Resume." },
        { status: 400 },
      );
    }

    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const fileExt = "." + (resume.name.split(".").pop()?.toLowerCase() || "");
    if (!allowedExtensions.includes(fileExt)) {
      return NextResponse.json(
        {
          error:
            "Invalid file format for resume. Allowed formats are: .pdf, .doc, .docx",
        },
        { status: 400 },
      );
    }

    const maxSizeBytes = 20 * 1024 * 1024; // 20MB
    if (resume.size > maxSizeBytes) {
      return NextResponse.json(
        {
          error:
            "Resume file exceeds the 20MB limit. Please upload a smaller file.",
        },
        { status: 400 },
      );
    }

    // 3. XSS Sanitization
    const sanitizedData: SanitizedJobApplicationData = {
      fullName: sanitize(fullName),
      email: email.toLowerCase(),
      phone: sanitize(phone),
      bio: sanitize(bio),
      jobId: sanitize(jobId) || "N/A",
      jobTitle: sanitize(jobTitle) || "General Application",
      jobCategory: jobCategory ? sanitize(jobCategory) : undefined,
      jobLocation: jobLocation ? sanitize(jobLocation) : undefined,
      fileName: sanitize(resume.name),
    };

    console.log(
      `Job application received for position: ${sanitizedData.jobTitle} (${sanitizedData.jobId}) from ${sanitizedData.email}`,
    );

    // 4. Configure Transporter
    const transporter = createTransporter();

    // Verify connection configuration
    try {
      await transporter.verify();
    } catch (verifyError: unknown) {
      console.error("Transporter verification failed:", verifyError);

      const err = verifyError as {
        code?: string;
        responseCode?: number;
        message?: string;
        response?: string;
      };

      const isUnauthorizedIp =
        err?.responseCode === 525 ||
        String(err?.message || "").includes("525") ||
        String(err?.response || "").includes("Unauthorized IP");

      const errorMessage = isUnauthorizedIp
        ? "Brevo SMTP Error 525 (Unauthorized IP): Please deactivate 'Blocking unauthorized IP addresses' in your Brevo account (Settings > Security > Authorized IPs) or add your current IP address to the whitelist."
        : `Mail server connection error: ${err?.message || "Unable to connect to SMTP host"}`;

      return NextResponse.json(
        { error: errorMessage },
        { status: 500 },
      );
    }

    const fromName = getCleanEnv("MAIL_FROM_NAME") || "Sparsh IT";
    const fromAddress = getCleanEnv("MAIL_FROM_ADDRESS");
    const adminToAddress =
      getCleanEnv("MAIL_FROM_CAREER") ||
      getCleanEnv("MAIL_TO_ADDRESS") ||
      getCleanEnv("MAIL_FROM_ADDRESS") ||
      "careers@sparshit.com";

    // Testing CC: Only if SPARSH_APPLICATION_ENV === 'development'
    const appEnv = getCleanEnv("SPARSH_APPLICATION_ENV");
    const testMail = getCleanEnv("MAIL_FOR_TEST");
    const ccAddress = appEnv === "development" && testMail ? testMail : undefined;

    // Convert uploaded resume into a Buffer for Nodemailer attachment
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    // 5. Dual email options
    const mailOptionsAdmin: SendMailOptions = {
      from: `"${fromName}" <${fromAddress}>`,
      to: adminToAddress,
      ...(ccAddress ? { cc: ccAddress } : {}),
      replyTo: sanitizedData.email,
      subject: `New Job Application: ${sanitizedData.jobTitle} (#${sanitizedData.jobId}) - ${sanitizedData.fullName}`,
      html: jobApplicationEmailAdmin(sanitizedData),
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
          contentType: resume.type || "application/octet-stream",
        },
      ],
    };

    const mailOptionsUser: SendMailOptions = {
      from: `"${fromName}" <${fromAddress}>`,
      to: sanitizedData.email,
      subject: `Application Received: ${sanitizedData.jobTitle} - Sparsh IT`,
      html: jobApplicationEmailUser({
        fullName: sanitizedData.fullName,
        jobTitle: sanitizedData.jobTitle,
        jobId: sanitizedData.jobId,
      }),
    };

    // 6. Send dual emails
    const results = await Promise.allSettled([
      transporter.sendMail(mailOptionsAdmin),
      transporter.sendMail(mailOptionsUser),
    ]);

    const adminResult = results[0];
    const userResult = results[1];

    if (adminResult.status === "rejected") {
      console.error(
        "Failed to send admin job application notification:",
        adminResult.reason,
      );
    }
    if (userResult.status === "rejected") {
      console.error(
        "Failed to send candidate confirmation email:",
        userResult.reason,
      );
    }

    // If both failed, return an informative 500 error
    if (
      adminResult.status === "rejected" &&
      userResult.status === "rejected"
    ) {
      const reason = (adminResult.reason || userResult.reason) as {
        responseCode?: number;
        message?: string;
      };

      const isUnauthorizedIp =
        reason?.responseCode === 525 ||
        String(reason?.message || "").includes("525") ||
        String(reason?.message || "").includes("Unauthorized IP");

      const errorMsg = isUnauthorizedIp
        ? "Brevo SMTP Error 525: Unauthorized IP address. Please deactivate 'Blocking unauthorized IP addresses' in your Brevo account (Settings > Security > Authorized IPs) or add your current IP."
        : `Email delivery failed: ${reason?.message || "Please check your SMTP credentials."}`;

      return NextResponse.json(
        { error: errorMsg },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for applying! Your application has been submitted successfully.",
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error("API apply-job route error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 },
    );
  }
}
