import DOMPurify from "isomorphic-dompurify";

/**
 * Runs a function while providing a stable, deterministic Date constructor.
 *
 * Why this is needed:
 * Next.js 15+ tracks synchronous IO such as Date.now() and new Date() during static prerendering.
 * On the server, isomorphic-dompurify relies on JSDOM, whose internal DOM event and document lifecycle
 * implementations call Date.now() and new Date(), triggering:
 * "Next.js encountered the unstable value new Date() while prerendering."
 *
 * This wrapper intercepts those internal calls during synchronous server sanitization by passing
 * a deterministic timestamp, preventing prerender aborts while preserving complete XSS sanitization.
 */
function withPrerenderSafeDate<T>(fn: () => T): T {
  if (typeof window !== "undefined") {
    return fn();
  }

  const currentGlobalDate = globalThis.Date;
  const properties = Object.getOwnPropertyDescriptors(currentGlobalDate);

  if (properties.now) {
    properties.now = {
      ...properties.now,
      value: () => 0,
    };
  }

  const construct = Reflect.construct;
  const safeConstructor = Object.defineProperties(
    function SafeDate(...args: unknown[]) {
      // Pass [0] when called with no arguments so Next.js does not detect arguments.length === 0 (new Date())
      const effectiveArgs = args.length === 0 ? [0] : args;
      return construct(currentGlobalDate, effectiveArgs, new.target);
    },
    properties
  );

  try {
    globalThis.Date = safeConstructor as unknown as DateConstructor;
    return fn();
  } finally {
    globalThis.Date = currentGlobalDate;
  }
}

/**
 * Sanitizes an untrusted HTML string using isomorphic-dompurify to prevent XSS vulnerabilities.
 * Safely sanitizes HTML in both Server-Side Rendering (SSR) and Client-Side Rendering environments
 * without causing Next.js prerender errors.
 *
 * @param dirty - The raw HTML string to sanitize.
 * @returns The sanitized, safe HTML string for use with dangerouslySetInnerHTML.
 */
export const sanitizeHtml = (dirty: string): string => {
  if (!dirty || typeof dirty !== "string") {
    return "";
  }

  return withPrerenderSafeDate(() => DOMPurify.sanitize(dirty));
};

export default sanitizeHtml;
