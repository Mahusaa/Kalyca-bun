import type { Attribution } from "./attribution";
import type { CtaLocation } from "./whatsapp";

/*
 * Event map (see docs/HANDOVER.md → Tracking):
 *   Meta Pixel  PageView      page load (loaded in TrackingScripts)
 *   Meta Pixel  Contact       click on any WhatsApp CTA — intent only, NOT a sent message
 *   GA4         whatsapp_click (params: cta_location + utm_*)
 *   dataLayer   whatsapp_click (for GTM triggers)
 *   Optional    ViewContent / view_programs once per page view (config.tracking.viewContent)
 * No `Lead` event: a WhatsApp click is not a lead submission.
 */

type Fbq = (command: "track" | "trackCustom", event: string, params?: Record<string, unknown>) => void;
type Gtag = (command: "event", event: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    fbq?: Fbq;
    gtag?: Gtag;
    dataLayer?: Record<string, unknown>[];
  }
}

const lastFired = new Map<string, number>();

/** Guards against double-taps / duplicate handlers firing the same event twice. */
function once(key: string, windowMs = 800): boolean {
  const now = Date.now();
  const previous = lastFired.get(key) ?? 0;
  if (now - previous < windowMs) return false;
  lastFired.set(key, now);
  return true;
}

export function trackWhatsAppClick(location: CtaLocation, attribution: Attribution) {
  if (!once(`wa:${location}`)) return;
  const params = { cta_location: location, ...attribution };

  window.fbq?.("track", "Contact", { content_name: `whatsapp_${location}`, content_category: "ppdb_2027" });
  window.gtag?.("event", "whatsapp_click", params);
  window.dataLayer?.push({ event: "whatsapp_click", ...params });
}

export function trackViewContent(sectionId: string, attribution: Attribution) {
  if (!once(`view:${sectionId}`, Number.POSITIVE_INFINITY)) return;
  window.fbq?.("track", "ViewContent", { content_name: `ppdb_${sectionId}`, content_category: "ppdb_2027" });
  window.gtag?.("event", "view_programs", { section: sectionId, ...attribution });
  window.dataLayer?.push({ event: "view_programs", section: sectionId, ...attribution });
}
