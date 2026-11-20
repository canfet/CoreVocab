/**
 * Text formatting utilities for CoreVocab
 */

/**
 * Capitalizes the first letter and lowercases the rest of the word.
 * Example: "contain" -> "Contain", "ADDICTIVE" -> "Addictive", "contradict" -> "Contradict"
 */
export function capitalizeWord(word: string | undefined | null): string {
  if (!word) return '';
  const trimmed = word.trim();
  if (!trimmed) return '';
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

/**
 * Capitalizes all words in a phrase or single word
 */
export function toTitleCase(text: string | undefined | null): string {
  if (!text) return '';
  return text
    .split(/\s+/)
    .map(capitalizeWord)
    .join(' ');
}
