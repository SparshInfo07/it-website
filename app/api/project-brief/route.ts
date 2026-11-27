import { NextRequest, NextResponse } from "next/server";
import { projectBriefSchema, type ProjectBriefValues } from "@/validation/projectBrief.schema";
import { sanitize } from "@/lib/sanitize";
import { forwardToBackend } from "@/lib/server/backendProxy";
import { mailEnv, sendNotifications } from "@/lib/server/mailer";

/**
 * Project Explorer brief: validate → store in sparsh-backend (admin
 * "Sparshit → Project Briefs") → notify the team.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  let data: ProjectBriefValues;
  try {
    data = projectBriefSchema.validateSync(body, { abortEarly: true, stripUnknown: true });
  } catch (err: unknown) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Invalid form data" },
      { status: 400 },
    );
  }

  if (data.website) return NextResponse.json({ success: true, message: "Brief sent." });

  const capabilities = data.capabilities ?? [];
  const stored = await forwardToBackend("projectBrief", request, {
    company: data.company,
    email: data.email,
    package: data.package ?? "",
    industry: data.industry ?? "",
    capabilities,
    timeline: data.timeline ?? "",
    brief: data.brief ?? "",
    sourcePage: data.sourcePage ?? "",
  });
  if (stored.clientError) {
    return NextResponse.json({ error: stored.clientError }, { status: stored.status });
  }

  const rows: Array<[string, string]> = [
    ["Company", data.company],
    ["Email", data.email],
    ["Package", data.package ?? ""],
    ["Industry", data.industry ?? ""],
    ["Capabilities", capabilities.join(", ") || "To be discussed"],
    ["Timeline", data.timeline ?? ""],
    ["Submitted from", data.sourcePage ?? ""],
  ];
  const html = `<div style="font-family:Arial,sans-serif;color:#1f2937">
<h2 style="margin:0 0 12px">New Project Brief</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><th align="left" style="color:#6b7280">${k}</th><td>${sanitize(v)}</td></tr>`)
    .join("")}</table>
${data.brief ? `<pre style="white-space:pre-wrap;background:#f3f4f6;padding:12px;border-radius:8px">${sanitize(data.brief)}</pre>` : ""}
</div>`;

  const { adminSent } = await sendNotifications({
    to: mailEnv("MAIL_TO_ADDRESS") || mailEnv("MAIL_FROM_CAREER") || "support@sparshinfosystem.com",
    replyTo: data.email,
    subject: `New Project Brief: ${data.company} (${data.package || "Package TBD"})`,
    html,
  });

  if (!stored.ok && !adminSent) {
    return NextResponse.json(
      { error: "We couldn't send your brief right now. Please try again, or use Copy brief and email us." },
      { status: 502 },
    );
  }
  return NextResponse.json({ success: true, message: "Brief sent. Our team will be in touch shortly." });
}
