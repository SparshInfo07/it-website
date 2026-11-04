/**
 * Anti-Spam Heuristics and Input Validation Rules
 */

// 1. Blacklist for spam, dummy, and keyboard-mash words
export const SPAM_WORDS = [
  "test",
  "testing",
  "tester",
  "dummy",
  "fake",
  "sample",
  "asdf",
  "asdfgh",
  "asdfghjkl",
  "qwerty",
  "qwertyuiop",
  "zxcv",
  "zxcvbnm",
  "abcd",
  "abcdef",
  "none",
  "null",
  "undefined",
  "random",
  "trash",
  "garbage",
  "spam",
  "spammer",
  "temp",
  "throwaway",
  "noreply",
  "no-reply",
  "foobar",
  "admin",
  "administrator",
] as const;

/**
 * Checks if a word or string token matches known spam or keyboard-mash patterns.
 */
export function isSpamWord(word?: string | null): boolean {
  if (!word || typeof word !== "string") return false;
  const normalized = word.toLowerCase().trim();

  // Exact match
  if (SPAM_WORDS.includes(normalized as (typeof SPAM_WORDS)[number])) {
    return true;
  }

  // Check if string is composed purely of repeated short spam words or ends with 123/1234
  return SPAM_WORDS.some((spam) => {
    if (normalized === spam) return true;
    if (normalized.startsWith(spam) && /^\d+$/.test(normalized.slice(spam.length))) {
      return true;
    }
    return false;
  });
}

/**
 * Validates names (First / Last name) with strict anti-spam and keyboard-mash heuristics.
 *
 * Rules:
 * - Must contain letters, spaces, hyphens, and apostrophes only.
 * - Minimum length enforced (e.g. 2 for first name, 1 for last name).
 * - Reject 3+ repeated consecutive characters (e.g., "aaa", "bbb").
 * - Reject 5+ consecutive consonants (e.g. "bfbjsakgd").
 * - Must contain at least one vowel if 3+ letters (with common exceptions like "Ng").
 * - Must not match spam words.
 */
export function isValidName(name?: string | null, minLength = 1): boolean {
  if (!name || typeof name !== "string") return false;
  const trimmed = name.trim();

  if (trimmed.length < minLength) return false;

  // Allowed characters: letters, spaces, hyphens, apostrophes
  if (!/^[A-Za-z\s'-]+$/.test(trimmed)) {
    return false;
  }

  // Reject 3+ repeated consecutive characters (e.g., "aaa", "ZZZ")
  if (/([a-zA-Z])\1{2,}/i.test(trimmed)) {
    return false;
  }

  // Reject 5+ consecutive consonants (e.g. keyboard mash "bcdfgh", "bfbjsakgd")
  if (/[bcdfghjklmnpqrstvwxyz]{5,}/i.test(trimmed)) {
    return false;
  }

  // Letter count extraction
  const lettersOnly = trimmed.replace(/[^a-zA-Z]/g, "");

  // Must contain at least one vowel if 3+ letters (with common exceptions like "Ng")
  const commonVowellessExceptions = ["ng", "hmong"];
  if (
    lettersOnly.length >= 3 &&
    !/[aeiouy]/i.test(lettersOnly) &&
    !commonVowellessExceptions.includes(lettersOnly.toLowerCase())
  ) {
    return false;
  }

  // Must not match spam words
  const words = trimmed.split(/[\s'-]+/).filter(Boolean);
  for (const w of words) {
    if (isSpamWord(w)) return false;
  }

  return true;
}

// Disposable / temporary email domain blacklist
export const DISPOSABLE_DOMAINS = [
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "yopmail.com",
  "throwawaymail.com",
  "test.com",
  "fake.com",
  "trashmail.com",
  "guerrillamail.com",
  "sharklasers.com",
  "dispostable.com",
  "getairmail.com",
  "mailnesia.com",
  "temp-mail.org",
  "fakemailgenerator.com",
  "dropmail.me",
  "nada.ltd",
  "burnermail.io",
  "mohmal.com",
  "mytemp.email",
  "generator.email",
  "emailondeck.com",
  "crazymailing.com",
  "maildrop.cc",
  "inboxkitten.com",
] as const;

/**
 * Validates email addresses using RFC specifications and anti-bot/spam heuristics.
 *
 * Rules:
 * - RFC email regex.
 * - No consecutive dots ("..").
 * - Local part: length 2-64, not a spam word, no 4+ repeated chars, no 5+ consecutive consonants, vowel check for 4+ letters.
 * - Domain: blacklist disposable/temp email domains.
 * - TLD: valid letters (2-24 chars).
 */
export function isValidEmailAddress(email?: string | null): boolean {
  if (!email || typeof email !== "string") return false;
  const trimmed = email.trim();

  // No consecutive dots
  if (trimmed.includes("..")) return false;

  // RFC email regex
  const rfcEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  if (!rfcEmailRegex.test(trimmed)) return false;

  const atIndex = trimmed.lastIndexOf("@");
  if (atIndex <= 0) return false;

  const localPart = trimmed.slice(0, atIndex);
  const domain = trimmed.slice(atIndex + 1).toLowerCase();

  // Local part checks:
  // 1. Length 2 to 64
  if (localPart.length < 2 || localPart.length > 64) return false;

  // 2. Not a spam word
  if (isSpamWord(localPart)) return false;

  // 3. No 4+ repeated chars (e.g. "aaaa", "1111")
  if (/(.)\1{3,}/i.test(localPart)) return false;

  // 4. No 5+ consecutive consonants
  if (/[bcdfghjklmnpqrstvwxyz]{5,}/i.test(localPart)) return false;

  // 5. Vowel check for 4+ letters
  const lettersInLocal = localPart.replace(/[^a-zA-Z]/g, "");
  if (lettersInLocal.length >= 4 && !/[aeiouy]/i.test(lettersInLocal)) {
    return false;
  }

  // Domain checks:
  // 1. Blacklist disposable domains
  if (
    DISPOSABLE_DOMAINS.includes(domain as (typeof DISPOSABLE_DOMAINS)[number]) ||
    DISPOSABLE_DOMAINS.some((d) => domain.endsWith(`.${d}`))
  ) {
    return false;
  }

  // 2. Domain structure & TLD (2-24 letters)
  const domainParts = domain.split(".");
  if (domainParts.length < 2) return false;

  const tld = domainParts[domainParts.length - 1];
  if (!/^[a-zA-Z]{2,24}$/.test(tld)) return false;

  for (const part of domainParts) {
    if (!part || part.startsWith("-") || part.endsWith("-")) {
      return false;
    }
  }

  return true;
}

/**
 * Validates phone numbers with digits check, length limits, and anti-dummy filters.
 *
 * Rules:
 * - Digits only count: between 7 and 15 digits.
 * - Allowed characters in original: +, digits, spaces, hyphens, parentheses.
 * - Rejects all-zeros (e.g. 0000000000).
 * - Rejects all-same digits (e.g. 1111111111).
 * - Rejects sequential dummy patterns (e.g. 0123456789, 9876543210, 12345678).
 */
export function isValidPhoneNumber(phone?: string | null): boolean {
  if (!phone || typeof phone !== "string") return false;
  const trimmed = phone.trim();
  if (!trimmed) return false;

  // Allowed characters: +, numbers, spaces, parentheses, dashes
  if (!/^[+\d\s().-]+$/.test(trimmed)) {
    return false;
  }

  const digits = trimmed.replace(/\D/g, "");

  // Must be between 7 and 15 digits (ITU-T E.164 standard)
  if (digits.length < 7 || digits.length > 15) {
    return false;
  }

  // Reject all-zeros
  if (/^0+$/.test(digits)) {
    return false;
  }

  // Reject all-same digits (e.g. "1111111111")
  if (/^(\d)\1+$/.test(digits)) {
    return false;
  }

  // Reject sequential dummy patterns
  const dummySequences = [
    "0123456789",
    "1234567890",
    "9876543210",
    "0987654321",
    "12345678",
    "87654321",
    "1234567",
    "7654321",
    "23456789",
    "98765432",
  ];
  if (dummySequences.some((seq) => digits.includes(seq))) {
    return false;
  }

  // Dynamic consecutive run check (reject 6+ strictly incrementing or decrementing digits)
  let incCount = 1;
  let decCount = 1;
  for (let i = 1; i < digits.length; i++) {
    const prev = Number(digits[i - 1]);
    const curr = Number(digits[i]);
    if (curr === prev + 1) {
      incCount++;
      decCount = 1;
    } else if (curr === prev - 1) {
      decCount++;
      incCount = 1;
    } else {
      incCount = 1;
      decCount = 1;
    }

    if (incCount >= 6 || decCount >= 6) {
      return false;
    }
  }

  return true;
}

