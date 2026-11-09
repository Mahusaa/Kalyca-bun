/**
 * Random per-visitor code for the WhatsApp reference, so Admission can tell chats apart.
 * Kept in localStorage: the same browser keeps its code across visits and buttons.
 * Contains no personal data.
 */

const STORAGE_KEY = "kalyca_ppdb_visitor";
const CODE_LENGTH = 6;
// No 0/O or 1/I/L, so Admission can read the code without mistaking characters.
const ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

let cached: string | null = null;

function generateCode(): string {
  const bytes = window.crypto.getRandomValues(new Uint8Array(CODE_LENGTH));
  return Array.from(bytes, (byte) => ALPHABET[byte % ALPHABET.length]).join("");
}

/** Browser-only. Returns "" during server rendering. */
export function getVisitorCode(): string {
  if (typeof window === "undefined") return "";
  if (cached) return cached;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) return (cached = stored);
  } catch {
    // Storage can be blocked (private mode, in-app browsers).
  }

  cached = generateCode();
  try {
    window.localStorage.setItem(STORAGE_KEY, cached);
  } catch {
    // The code still works for this page view.
  }
  return cached;
}
