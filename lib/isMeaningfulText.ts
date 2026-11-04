/**
 * Checks whether the given text appears meaningful and not spam, keyboard mash, or dummy filler.
 *
 * Rules:
 * 1. Must contain at least 3 words.
 * 2. Must contain at least 2 unique words (rejects repetition like "test test test").
 * 3. Rejects 5+ consecutive consonants (e.g. keyboard mash like "bfbjsakgd").
 * 4. Rejects 5+ repeated characters (e.g. "aaaaa", "!!!!!").
 * 5. Rejects words with 4+ letters having 0 vowels.
 */
export function isMeaningfulText(text?: string | null): boolean {
  if (!text || typeof text !== "string") return false;

  const trimmed = text.trim();
  if (trimmed.length < 10) return false;

  // 1. Rejects 5+ repeated characters (e.g., "aaaaa", ".....", "11111")
  if (/(.)\1{4,}/i.test(trimmed)) {
    return false;
  }

  // 2. Rejects 5+ consecutive consonants in any word/segment
  if (/[bcdfghjklmnpqrstvwxyz]{5,}/i.test(trimmed)) {
    return false;
  }

  // Split into words
  const words = trimmed
    .split(/\s+/)
    .map((w) => w.trim().replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, ""))
    .filter((w) => w.length > 0);

  // 3. Must contain at least 3 words
  if (words.length < 3) {
    return false;
  }

  // 4. Must contain at least 2 unique words
  const uniqueWords = new Set(words.map((w) => w.toLowerCase()));
  if (uniqueWords.size < 2) {
    return false;
  }

  // 5. Rejects words with 4+ letters having 0 vowels (including 'y' as semi-vowel)
  for (const word of words) {
    const lettersOnly = word.replace(/[^a-zA-Z]/g, "");
    if (lettersOnly.length >= 4 && !/[aeiouy]/i.test(lettersOnly)) {
      return false;
    }
  }

  return true;
}
