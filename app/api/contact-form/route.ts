import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema, ContactFormValues } from "@/validation/contact.schema";
import { sanitize } from "@/lib/sanitize";
import {
  contactFormEmailAdmin,
  contactFormEmailUser,
  SanitizedContactData,
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

export async function POST(request: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON payload" },
        { status: 400 },
      );
    }

    // 1. Server-side validation with Yup schema (abortEarly: true)
    let validatedData: ContactFormValues;
    try {
      validatedData = contactSchema.validateSync(body, {
        abortEarly: true,
        stripUnknown: true,
      });
    } catch (validationError: unknown) {
      const errorMessage =
        validationError instanceof Error
          ? validationError.message
          : "Invalid form data";
      return NextResponse.json(
        { error: errorMessage },
        { status: 400 },
      );
    }

    // 2. XSS Sanitization of all string fields
    const sanitizedData: SanitizedContactData = {
      firstName: sanitize(validatedData.firstName),
      lastName: sanitize(validatedData.lastName),
      email: validatedData.email.trim().toLowerCase(),
      phone: sanitize(validatedData.phone),
      referral: sanitize(validatedData.referral),
      requirement: sanitize(validatedData.requirement || validatedData.description || ""),
      description: validatedData.description ? sanitize(validatedData.description) : undefined,
      country: validatedData.country ? sanitize(validatedData.country) : undefined,
      designation: validatedData.designation
        ? sanitize(validatedData.designation)
        : undefined,
      service: validatedData.service ? sanitize(validatedData.service) : undefined,
      agreeToMarketing: Boolean(validatedData.agreeToMarketing),
    };

    console.log("Contact form submission received for:", sanitizedData.email);

    // 3. Configure Transporter
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
        String(err?.message || "").includes("Unauthorized IP") ||
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
      getCleanEnv("MAIL_TO_ADDRESS") ||
      getCleanEnv("MAIL_FROM_CAREER") ||
      "info@sparshit.com";

    // 4. Dual email configurations
    const mailOptionsAdmin = {
      from: `"${fromName}" <${fromAddress}>`,
      to: adminToAddress,
      replyTo: sanitizedData.email,
      subject: `New Contact Request: ${sanitizedData.firstName} ${sanitizedData.lastName}`,
      html: contactFormEmailAdmin(sanitizedData),
    };

    const mailOptionsUser = {
      from: `"${fromName}" <${fromAddress}>`,
      to: sanitizedData.email,
      subject: `We've received your message - ${fromName}`,
      html: contactFormEmailUser(sanitizedData.firstName),
    };

    // 5. Send dual emails using Promise.allSettled
    const results = await Promise.allSettled([
      transporter.sendMail(mailOptionsAdmin),
      transporter.sendMail(mailOptionsUser),
    ]);

    const adminResult = results[0];
    const userResult = results[1];

    if (adminResult.status === "rejected") {
      console.error("Failed to send admin notification email:", adminResult.reason);
    }
    if (userResult.status === "rejected") {
      console.error("Failed to send user confirmation email:", userResult.reason);
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

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for contacting us. Your message has been sent successfully!",
      },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error("API contact-form route error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 },
    );
  }
}
