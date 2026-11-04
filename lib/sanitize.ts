/**
 * Sanitizes a string by escaping HTML special characters to prevent XSS.
 * @param str The string to sanitize
 * @returns The sanitized string
 */
export function sanitize(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim();
}
