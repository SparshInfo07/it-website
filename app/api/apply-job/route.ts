import { NextRequest, NextResponse } from "next/server";
import { sanitize } from "@/lib/sanitize";
import {
  jobApplicationEmailAdmin,
  jobApplicationEmailUser,
  SanitizedJobApplicationData,
} from "@/lib/emailTemplates";
import { forwardToBackend } from "@/lib/server/backendProxy";
import { mailEnv, sendNotifications } from "@/lib/server/mailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];
/** Must match RESUME_MAX_BYTES in sparsh-backend. */
const MAX_RESUME_BYTES = 10 * 1024 * 1024;

const bad = (error: string, status = 400) => NextResponse.json({ error }, { status });

/**
 * Job application: validate → store in sparsh-backend with the resume (admin
 * "Sparshit → Job Applications") → email the careers inbox (resume attached)
 * and the candidate.
 */
export async function POST(request: NextRequest) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return bad("Invalid form data. Please try again.");
  }

  const field = (k: string) => (formData.get(k) as string | null)?.trim() || "";
  const fullName = field("fullName");
  const email = field("email").toLowerCase();
  const phone = field("phone");
  const bio = field("bio");
  const jobId = field("jobId");
  const jobTitle = field("jobTitle") || "General Application";
  const jobCategory = field("jobCategory");
  const jobLocation = field("jobLocation");
  const agreedToPolicy = field("agreedToPolicy");
  const sourcePage = field("sourcePage");
  const resume = formData.get("resume");

  if (field("website")) {
    return NextResponse.json({ success: true, message: "Thank you for applying!" });
  }

  if (fullName.length < 2) return bad("Please enter your full name (at least 2 characters).");
  if (!EMAIL_REGEX.test(email)) return bad("Please enter a valid email address.");
  if (phone.length < 5) return bad("Please enter a valid contact phone number.");
  if (bio.length < 5) return bad("Please provide a brief bio or background summary.");
  if (agreedToPolicy !== "true" && agreedToPolicy !== "1") {
    return bad("You must agree to the data storage and handling policy.");
  }
  if (!(resume instanceof File) || resume.size === 0) return bad("Please upload your CV/Resume.");
  const fileExt = "." + (resume.name.split(".").pop()?.toLowerCase() || "");
  if (!ALLOWED_EXTENSIONS.includes(fileExt)) {
    return bad("Invalid file format for resume. Allowed formats are: .pdf, .doc, .docx");
  }
  if (resume.size > MAX_RESUME_BYTES) {
    return bad("Resume file exceeds the 10MB limit. Please upload a smaller file.");
  }

  const resumeBuffer = Buffer.from(await resume.arrayBuffer());

  const outbound = new FormData();
  outbound.append("fullName", fullName);
  outbound.append("email", email);
  outbound.append("phone", phone);
  outbound.append("bio", bio);
  outbound.append("jobId", jobId);
  outbound.append("jobTitle", jobTitle);
  outbound.append("jobCategory", jobCategory);
  outbound.append("jobLocation", jobLocation);
  outbound.append("agreedToPolicy", "true");
  outbound.append("sourcePage", sourcePage);
  outbound.append(
    "resume",
    new Blob([resumeBuffer], { type: resume.type || "application/octet-stream" }),
    resume.name,
  );

  const stored = await forwardToBackend("jobApplication", request, outbound);
  if (stored.clientError) return bad(stored.clientError, stored.status);

  const data: SanitizedJobApplicationData = {
    fullName: sanitize(fullName),
    email,
    phone: sanitize(phone),
    bio: sanitize(bio),
    jobId: sanitize(jobId) || "N/A",
    jobTitle: sanitize(jobTitle),
    jobCategory: jobCategory ? sanitize(jobCategory) : undefined,
    jobLocation: jobLocation ? sanitize(jobLocation) : undefined,
    fileName: sanitize(resume.name),
  };

  const testCc =
    mailEnv("SPARSH_APPLICATION_ENV") === "development" && mailEnv("MAIL_FOR_TEST")
      ? mailEnv("MAIL_FOR_TEST")
      : undefined;

  const { adminSent } = await sendNotifications(
    {
      to:
        mailEnv("MAIL_FROM_CAREER") ||
        mailEnv("MAIL_TO_ADDRESS") ||
        mailEnv("MAIL_FROM_ADDRESS") ||
        "support@sparshinfosystem.com",
      ...(testCc ? { cc: testCc } : {}),
      replyTo: email,
      subject: `New Job Application: ${jobTitle} (#${data.jobId}) - ${fullName}`,
      html: jobApplicationEmailAdmin(data),
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
          contentType: resume.type || "application/octet-stream",
        },
      ],
    },
    {
      to: email,
      subject: `Application Received: ${jobTitle} - Sparsh IT`,
      html: jobApplicationEmailUser({ fullName: data.fullName, jobTitle: data.jobTitle, jobId: data.jobId }),
    },
  );

  if (!stored.ok && !adminSent) {
    console.error("[apply-job] application lost: backend and careers email both failed for", email);
    return bad("We couldn't submit your application right now. Please try again in a few minutes.", 502);
  }

  return NextResponse.json({
    success: true,
    message: "Thank you for applying! Your application has been submitted successfully.",
  });
}
