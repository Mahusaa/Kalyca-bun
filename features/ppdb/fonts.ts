import { DM_Sans, Montserrat } from "next/font/google";

// Brand fonts (Kalyca Guideline 2025). The PPDB 2027/2028 posters use heavy italic
// headlines → Montserrat (incl. italic) for display; DM Sans for body copy.
// next/font self-hosts them at build time — no request to Google from the visitor.
export const fontDisplay = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  style: ["normal", "italic"],
  display: "swap",
});

export const fontBody = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
