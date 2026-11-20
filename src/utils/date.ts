/** 本地時區的今天（YYYY-MM-DD）。不能用 toISOString()：那是 UTC，台灣會在早上 8 點才換日。 */
export function todayLocal(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}
