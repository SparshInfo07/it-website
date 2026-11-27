import { NextRequest, NextResponse } from "next/server";
import { contactSchema, ContactFormValues } from "@/validation/contact.schema";
import { sanitize } from "@/lib/sanitize";
import {
  contactFormEmailAdmin,
  contactFormEmailUser,
  SanitizedContactData,
} from "@/lib/emailTemplates";
import { forwardToBackend } from "@/lib/server/backendProxy";
import { mailEnv, sendNotifications } from "@/lib/server/mailer";

const GENERIC_FAILURE =
  "We couldn't send your enquiry right now. Please try again in a minute, or email support@sparshinfosystem.com.";

/**
 * Contact enquiry: validate → store in sparsh-backend (shown in the admin
 * "Sparshit → Enquiries" inbox) → email the team and the visitor.
 *
 * The backend copy is the record. If the backend is down but the team email
 * goes out, the lead still reaches someone, so the visitor sees success.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  let data: ContactFormValues;
  try {
    data = contactSchema.validateSync(body, { abortEarly: true, stripUnknown: true });
  } catch (validationError: unknown) {
    return NextResponse.json(
      { error: validationError instanceof Error ? validationError.message : "Invalid form data" },
      { status: 400 },
    );
  }

  // Honeypot filled: look successful, do nothing.
  if (data.website) {
    return NextResponse.json({ success: true, message: "Thank you for contacting us." });
  }

  const requirement = data.requirement || data.description || "";
  const stored = await forwardToBackend("enquiry", request, {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    referral: data.referral,
    requirement,
    service: data.service ?? "",
    company: data.company ?? "",
    country: data.country ?? "",
    designation: data.designation ?? "",
    agreeToMarketing: Boolean(data.agreeToMarketing),
    sourcePage: data.sourcePage ?? "",
  });

  if (stored.clientError) {
    return NextResponse.json({ error: stored.clientError }, { status: stored.status });
  }

  const emailData: SanitizedContactData = {
    firstName: sanitize(data.firstName),
    lastName: sanitize(data.lastName),
    email: data.email.trim().toLowerCase(),
    phone: sanitize(data.phone),
    referral: sanitize(data.referral),
    requirement: sanitize(requirement),
    country: data.country ? sanitize(data.country) : undefined,
    designation: data.designation ? sanitize(data.designation) : undefined,
    service: data.service ? sanitize(data.service) : undefined,
    company: data.company ? sanitize(data.company) : undefined,
    sourcePage: data.sourcePage ? sanitize(data.sourcePage) : undefined,
    agreeToMarketing: Boolean(data.agreeToMarketing),
  };
  const fromName = mailEnv("MAIL_FROM_NAME") || "Sparsh IT";
  const { adminSent } = await sendNotifications(
    {
      to: mailEnv("MAIL_TO_ADDRESS") || mailEnv("MAIL_FROM_CAREER") || "support@sparshinfosystem.com",
      replyTo: emailData.email,
      subject: `New Contact Request: ${data.firstName} ${data.lastName}`,
      html: contactFormEmailAdmin(emailData),
    },
    {
      to: emailData.email,
      subject: `We've received your message - ${fromName}`,
      html: contactFormEmailUser(emailData.firstName),
    },
  );

  if (!stored.ok && !adminSent) {
    console.error("[contact-form] lead lost: backend and team email both failed for", emailData.email);
    return NextResponse.json({ error: GENERIC_FAILURE }, { status: 502 });
  }

  return NextResponse.json({
    success: true,
    message: "Thank you for contacting us. Your message has been sent successfully!",
  });
}
