// Derives a short display gloss from a word's full chineseMeaning, so other data files
// can reference the canonical meaning instead of re-typing their own shortened copy.
export function shortGloss(meaning: string, maxClauses = 2): string {
  const stripped = meaning.replace(/[（(][^）)]*[）)]\s*$/, '').trim();
  return stripped
    .split(/[、,]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .slice(0, maxClauses)
    .join('、');
}
