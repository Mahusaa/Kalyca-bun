/**
 * Campaign attribution captured from the landing URL (e.g. Meta ad UTMs).
 * Kept in sessionStorage so it survives in-page navigation and reloads,
 * and passed to tracking events and the WhatsApp reference code.
 */

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const STORAGE_KEY = "kalyca_ppdb_attribution";

export type UtmKey = (typeof UTM_KEYS)[number];
export type Attribution = Partial<Record<UtmKey, string>>;

let cached: Attribution | null = null;

function readStorage(): Attribution {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

function writeStorage(value: Attribution) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Storage can be blocked (private mode, in-app browsers) — attribution still works for this page view.
  }
}

/** Browser-only. Returns {} during server rendering. */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  if (cached) return cached;

  const params = new URLSearchParams(window.location.search);
  const fromUrl: Attribution = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key)?.trim();
    if (value) fromUrl[key] = value.slice(0, 120);
  }

  if (Object.keys(fromUrl).length > 0) {
    writeStorage(fromUrl);
    cached = fromUrl;
  } else {
    cached = readStorage();
  }
  return cached;
}
