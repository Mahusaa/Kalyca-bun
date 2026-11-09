import { lpwaConfig } from "../config";
import type { Attribution } from "./attribution";

/**
 * Where a WhatsApp CTA sits on the page. Used in tracking and the reference code.
 * WhatsApp CTAs only appear from the investment section onwards (intent filter).
 */
export type CtaLocation = "biaya" | "promo" | "penutup" | "sticky";

const SOURCE_ALIASES: Record<string, string> = {
  facebook: "fb",
  fb: "fb",
  instagram: "ig",
  ig: "ig",
  meta: "meta",
  google: "ggl",
  tiktok: "tt",
};

function slug(value: string, max: number): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, max);
}

/** e.g. "PPDB27 · biaya · ig · ey-carousel-02 · K7M2QX" */
export function buildReference(location: CtaLocation, attribution: Attribution = {}, visitorCode = ""): string {
  const parts: string[] = [lpwaConfig.campaign.referenceCode, location];
  if (attribution.utm_source) {
    const source = attribution.utm_source.toLowerCase();
    parts.push(SOURCE_ALIASES[source] ?? slug(source, 8));
  }
  const adName = attribution.utm_content || attribution.utm_campaign;
  if (adName) parts.push(slug(adName, 32));
  parts.push(visitorCode);
  return parts.filter(Boolean).join(" · ");
}

/** Official click-to-chat format: https://wa.me/<number>?text=<url-encoded message> */
export function buildWhatsAppUrl(location: CtaLocation, attribution?: Attribution, visitorCode?: string): string {
  const { number, message, appendReference } = lpwaConfig.whatsapp;
  const text = appendReference
    ? `${message}\n\n(Ref: ${buildReference(location, attribution, visitorCode)})`
    : message;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
