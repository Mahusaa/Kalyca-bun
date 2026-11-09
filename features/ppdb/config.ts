/**
 * One place for everything the marketing / web team may need to change
 * without touching layout code: WhatsApp destination, pre-filled message,
 * tracking IDs, and the content mode used to gate production builds.
 *
 * Tracking IDs come from environment variables (see .env.example).
 * Never commit real secrets — Pixel / GA4 / GTM IDs are public identifiers,
 * but keep them in env files so preview and production can differ.
 */

export const lpwaConfig = {
  campaign: {
    label: "PPDB 2027/2028",
    /** Short code appended to the WhatsApp message so Admission can tag the lead source. */
    referenceCode: "PPDB27",
  },

  whatsapp: {
    /**
     * Primary: dedicated WhatsApp Business number of Tim Admission (confirmed 9 Nov 2026).
     * International format, digits only (no "+", no leading 0). Every CTA opens this one.
     */
    number: "6281776446546",
    displayNumber: "0817-7644-6546",
    /** Pre-filled message (draft from the LPWA brief — confirm with Kalyca). */
    message:
      "Halo Tim Admission Kalyca, saya ingin mengetahui informasi pendaftaran dan program pendidikan di Kalyca.",
    /**
     * Appends e.g. "(Ref: PPDB27 · biaya · ig · ey-carousel-02)" to the message.
     * Lets Admission log which CTA / ad a chat came from — needed to measure
     * qualified-lead rate per campaign. Set to false to send the plain message.
     */
    appendReference: true,
  },

  tracking: {
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? "",
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID?.trim() ?? "",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "",
    /**
     * Optional Meta `ViewContent` + GA4 `view_programs`, fired once per page view
     * when the programs section is first seen. Off by default to keep the event
     * set clean; switch on if the ad set needs a mid-funnel signal.
     */
    viewContent: { enabled: false, sectionId: "program" },
  },

  site: {
    /** Production URL, e.g. https://www.kalycaazzahra.com/ppdb-2027 — set only once confirmed. */
    url: process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "",
    basePath: process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "",
  },

  /**
   * "preview"    → placeholders and unconfirmed content are shown (marked), page is noindex.
   * "production" → build fails while any visible content is not approved (see content-audit.ts).
   * Set by `npm run build:production`.
   */
  contentMode: process.env.NEXT_PUBLIC_CONTENT_MODE === "production" ? "production" : "preview",
} as const;

export const isProductionContent = lpwaConfig.contentMode === "production";

/** Prefix for files in /public when the app is served under a base path. */
export function asset(path: string): string {
  return `${lpwaConfig.site.basePath}${path}`;
}
