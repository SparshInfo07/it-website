import type { NextRequest } from "next/server";

/**
 * Reverse proxy from the website's /api routes to sparsh-backend.
 *
 * Runs on the server only: the shared WEBSITE_API_KEY never reaches the
 * browser. The visitor's IP and user agent travel as X-Client-IP /
 * X-Client-User-Agent so the backend can rate-limit per visitor rather than
 * per website server. Only the fixed paths in WEBSITE_ENDPOINTS can be
 * reached, so the site can't be used as an open gateway into the backend.
 */

export const WEBSITE_ENDPOINTS = {
  enquiry: "/website/enquiries",
  jobApplication: "/website/job-applications",
  projectBrief: "/website/project-briefs",
} as const;

export type WebsiteEndpoint = keyof typeof WEBSITE_ENDPOINTS;

export interface BackendResult {
  /** True when the backend stored the submission. */
  ok: boolean;
  status: number;
  /** The submitter's mistake (4xx) — safe to show them. */
  clientError?: string;
  /** Backend unreachable / misconfigured / 5xx — not the visitor's fault. */
  unavailable?: boolean;
}

function env(key: string): string {
  return (process.env[key] ?? "").trim().replace(/^["']|["']$/g, "").trim();
}

/**
 * The visitor's IP, as seen by the proxy in front of this server.
 *
 * X-Real-IP is set (overwritten) by nginx / the host. Failing that, the
 * RIGHTMOST X-Forwarded-For entry is the one our own proxy appended; the
 * leftmost is whatever the visitor sent and would let anyone pick a fresh
 * rate-limit bucket per request.
 */
function clientIp(req: NextRequest): string {
  const real = req.headers.get("x-real-ip")?.trim();
  if (real) return real;
  const hops = (req.headers.get("x-forwarded-for") ?? "")
    .split(",")
    .map((h) => h.trim())
    .filter(Boolean);
  return hops[hops.length - 1] ?? "";
}

/** Pull a human message out of the backend's `{ success:false, error:{ message, details } }`. */
function errorMessage(body: unknown): string | undefined {
  if (!body || typeof body !== "object") return undefined;
  const err = (body as { error?: unknown }).error;
  if (typeof err === "string") return err;
  if (err && typeof err === "object") {
    const e = err as { message?: string; details?: Array<{ message?: string }> };
    const detail = Array.isArray(e.details) ? e.details.find((d) => d?.message)?.message : undefined;
    return detail || e.message;
  }
  return undefined;
}

export async function forwardToBackend(
  endpoint: WebsiteEndpoint,
  req: NextRequest,
  body: Record<string, unknown> | FormData,
): Promise<BackendResult> {
  const base = env("BACKEND_API_URL").replace(/\/+$/, "");
  const key = env("WEBSITE_API_KEY");
  if (!base || !key) {
    console.error("[backendProxy] BACKEND_API_URL / WEBSITE_API_KEY not set; submission not stored");
    return { ok: false, status: 503, unavailable: true };
  }

  const headers: Record<string, string> = {
    "X-Website-Key": key,
    "X-Client-IP": clientIp(req),
    "X-Client-User-Agent": (req.headers.get("user-agent") ?? "").slice(0, 512),
    Accept: "application/json",
  };
  const isForm = body instanceof FormData;
  if (!isForm) headers["Content-Type"] = "application/json";

  try {
    const res = await fetch(`${base}${WEBSITE_ENDPOINTS[endpoint]}`, {
      method: "POST",
      headers,
      // FormData: fetch sets the multipart boundary itself.
      body: isForm ? body : JSON.stringify(body),
      cache: "no-store",
      signal: AbortSignal.timeout(20_000),
    });
    const data: unknown = await res.json().catch(() => null);

    if (res.ok) return { ok: true, status: res.status };

    if (res.status === 429) {
      return {
        ok: false,
        status: 429,
        clientError: "Too many submissions. Please try again in a few minutes.",
      };
    }
    if (res.status === 400 || res.status === 422) {
      return {
        ok: false,
        status: 400,
        clientError: errorMessage(data) || "Please check the form and try again.",
      };
    }
    // 401/503 = key mismatch or backend not configured; 5xx = backend fault.
    console.error(`[backendProxy] ${endpoint} failed: HTTP ${res.status}`, errorMessage(data));
    return { ok: false, status: res.status, unavailable: true };
  } catch (err) {
    console.error(`[backendProxy] ${endpoint} unreachable:`, err);
    return { ok: false, status: 502, unavailable: true };
  }
}
