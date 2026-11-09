import type { Metadata, Viewport } from "next";
import { asset, lpwaConfig } from "./config";

const title = "PPDB 2027/2028 · Kalyca Azzahra School, Depok";
const description =
  "Sekolah Islam Montessori dengan konsep Sekolah Alam Kebun di Tapos, Depok — Early Years, Primary Years, dan Secondary Years. Konsultasi pendaftaran dengan Tim Admission via WhatsApp.";

const siteUrl = lpwaConfig.site.url;
// Link previews need an absolute image URL, so the OG image is only declared
// once NEXT_PUBLIC_SITE_URL (the confirmed production URL) is set.
const ogImage = siteUrl
  ? [{ url: asset("/og-ppdb-2027.jpg"), width: 1200, height: 630, alt: "PPDB 2027/2028 Kalyca Azzahra School" }]
  : undefined;

export const ppdbMetadata: Metadata = {
  title,
  description,
  // Facebook ad landing page: reached from ads only, so it stays out of search results.
  // Meta's link-preview crawler still reads the Open Graph tags below.
  robots: { index: false, follow: false },
  // metadataBase is the origin only: the OG image lives at the site root, not under the route.
  ...(siteUrl ? { metadataBase: new URL(new URL(siteUrl).origin), alternates: { canonical: siteUrl } } : {}),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "id_ID",
    siteName: "Kalyca Azzahra School",
    ...(siteUrl ? { url: siteUrl } : {}),
    images: ogImage,
  },
  twitter: { card: "summary_large_image", title, description, images: ogImage },
};

export const ppdbViewport: Viewport = {
  themeColor: "#fbf8f1",
  width: "device-width",
  initialScale: 1,
};
