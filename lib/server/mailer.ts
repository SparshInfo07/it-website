import nodemailer, { type SendMailOptions } from "nodemailer";

/**
 * Notification mail for website forms.
 *
 * Mail is a notification, not the record: the submission is stored in
 * sparsh-backend first. So a mail failure is logged and reported back to the
 * caller, never thrown — the route decides what that means.
 */

export function mailEnv(key: string): string {
  const raw = process.env[key];
  if (!raw) return "";
  return raw.trim().replace(/^["']|["']$/g, "").trim();
}

const REQUIRED = [
  "MAIL_HOST",
  "MAIL_PORT",
  "MAIL_USERNAME",
  "MAIL_PASSWORD",
  "MAIL_FROM_ADDRESS",
] as const;

function createTransporter() {
  const missing = REQUIRED.filter((k) => !mailEnv(k));
  if (missing.length) {
    console.error(`[mailer] not configured, missing: ${missing.join(", ")}`);
    return null;
  }
  const port = Number(mailEnv("MAIL_PORT")) || 587;
  const allowInsecureTls =
    process.env.NODE_ENV !== "production" && mailEnv("MAIL_ALLOW_INSECURE_TLS") === "true";
  return nodemailer.createTransport({
    host: mailEnv("MAIL_HOST"),
    port,
    secure: port === 465,
    auth: { user: mailEnv("MAIL_USERNAME"), pass: mailEnv("MAIL_PASSWORD") },
    tls: { rejectUnauthorized: !allowInsecureTls },
  });
}

export function mailFrom(): string {
  const name = mailEnv("MAIL_FROM_NAME") || "Sparsh IT";
  return `"${name}" <${mailEnv("MAIL_FROM_ADDRESS")}>`;
}

/** Send the team notification and (optionally) the visitor's confirmation. */
export async function sendNotifications(
  admin: SendMailOptions,
  visitor?: SendMailOptions,
): Promise<{ adminSent: boolean; visitorSent: boolean }> {
  const transporter = createTransporter();
  if (!transporter) return { adminSent: false, visitorSent: false };

  const [a, v] = await Promise.allSettled([
    transporter.sendMail({ from: mailFrom(), ...admin }),
    visitor ? transporter.sendMail({ from: mailFrom(), ...visitor }) : Promise.resolve(null),
  ]);
  if (a.status === "rejected") console.error("[mailer] team notification failed:", a.reason);
  if (v.status === "rejected") console.error("[mailer] visitor confirmation failed:", v.reason);
  return {
    adminSent: a.status === "fulfilled",
    visitorSent: Boolean(visitor) && v.status === "fulfilled",
  };
}
