import type { PhotoSlotId } from "./photo-slots";

/**
 * approved    — confirmed by Kalyca for PPDB 2027/2028; safe to publish.
 * unverified  — taken from Kalyca's own materials (website, briefs, press release)
 *               but not yet confirmed for this campaign. Shown in preview only.
 * placeholder — information is missing. Shown as a marked placeholder in preview,
 *               never rendered in production.
 */
export type ContentStatus = "approved" | "unverified" | "placeholder";

export interface Reviewable {
  status: ContentStatus;
  /** Where the information came from — shown in review mode (?review=1). */
  source?: string;
}

/** Text that may contain *highlighted words* (rendered as a marker highlight). */
export type RichText = string;

export interface SectionIntro extends Reviewable {
  eyebrow: string;
  title: RichText;
  intro?: string;
}

export interface CtaCopy {
  label: string;
}

export interface HeroContent extends Reviewable {
  /** Announcement pill, e.g. "PPDB 2027/2028 Telah Dibuka". */
  badge: string;
  title: RichText;
  /** Supports *highlight* (yellow box) and **bold**. */
  description: RichText;
  /**
   * In-page scroll buttons. WhatsApp CTAs deliberately start from the investment
   * section so visitors read the brochure first (intent filter).
   */
  primaryCta: CtaCopy & { href: string };
  /**
   * Second scroll button (to fees, with Early Bird right after) plus a one-line teaser above
   * the buttons. The teaser shows only while Early Bird is on and before its deadline.
   */
  promoCta: CtaCopy & { href: string; teaser: RichText };
  /** Photo collage. */
  photos: PhotoSlotId[];
  why: Reviewable & {
    title: string;
    items: Array<{ icon: "award" | "school" | "mosque"; title: string; text: string }>;
  };
}

export interface FacilityItem extends Reviewable {
  title: string;
  text: string;
  photo: PhotoSlotId;
}

export interface FacilitiesContent extends SectionIntro {
  feature: FacilityItem;
  items: FacilityItem[];
  extras: Reviewable & { label: string; items: string[] };
}

export interface CurriculumContent extends SectionIntro {
  photo: PhotoSlotId;
  pillars: Array<Reviewable & { title: string; text: string }>;
  daily: Reviewable & { title: string; items: string[] };
}

/** One row of the "Keunggulan Kalyca" comparison: a parent consideration, Kalyca's answer, other schools. */
export interface AdvantageRow extends Reviewable {
  consideration: string;
  kalyca: string;
  /** Kept neutral on purpose ("Bervariasi …") — no negative claims about other schools. */
  others: string;
}

export interface AdvantageContent extends SectionIntro {
  enabled: boolean;
  /** Table column headings (desktop) and legend labels (mobile cards). */
  columns: { consideration: string; kalyca: string; others: string };
  rows: AdvantageRow[];
}

export interface ProgramItem extends Reviewable {
  id: string;
  name: string;
  level: string;
  ages: string;
  classes: string;
  text: string;
  points: string[];
  photo: PhotoSlotId;
}

export interface ProgramsContent extends SectionIntro {
  items: ProgramItem[];
}

/** One slide of the student-achievement carousel (appreciation design + caption). */
export interface AchievementSlide extends Reviewable {
  photo: PhotoSlotId;
  title: string;
  event: string;
  name: string;
}

export interface AchievementsContent extends SectionIntro {
  enabled: boolean;
  slides: AchievementSlide[];
}

export interface VideoTestimonial extends Reviewable {
  kind: "video";
  title: string;
  caption: string;
  /** Short verbatim excerpt from the video's transcript, shown under the card. */
  excerpt?: string;
  poster?: PhotoSlotId;
  /** Self-hosted MP4 in /public (preferred — light, plays everywhere). */
  videoSrc?: string;
  /** Original upload, kept for reference / fallback embed. */
  driveFileId?: string;
  youtubeId?: string;
}

export interface QuoteTestimonial extends Reviewable {
  kind: "quote";
  quote: string;
  name: string;
  meta: string;
}

export interface TestimonialsContent extends SectionIntro {
  enabled: boolean;
  items: Array<VideoTestimonial | QuoteTestimonial>;
}

/** A way to experience the school before enrolling (Sit In Program, Trial Class). */
export interface VisitProgram extends Reviewable {
  name: string;
  /** Short pill above the name, e.g. "Setiap hari sekolah". */
  tag: string;
  summary: string;
  facts: Array<{ label: string; text: string }>;
  photo: PhotoSlotId;
  /** Optional chips, e.g. activities from past Trial Class batches. */
  highlights?: Reviewable & { title: string; items: string[] };
  /** Visually emphasised card (dark green). */
  featured?: boolean;
  /** Round sticker on the photo, e.g. "Gratis". */
  badge?: string;
}

export interface VisitContent extends SectionIntro {
  enabled: boolean;
  programs: VisitProgram[];
  note: string;
}

/** One fee line of the pricelist table. */
export interface FeeRow extends Reviewable {
  title: string;
  alias: string;
  text: string;
  /** Shown openly (e.g. "Rp 500K"). Omit to show a blurred placeholder: real amounts never reach the HTML. */
  amount?: string;
  /** Small label under the amount, e.g. "per bulan". */
  period?: string;
  /** Highlight chip, e.g. "Diskon Early Bird". */
  badge?: string;
}

export interface FeeLevel {
  name: string;
  ages: string;
  schedule: string[];
}

export interface InvestmentContent extends SectionIntro {
  fees: FeeRow[];
  /** Hint shown with every blurred amount. */
  lockedNote: string;
  levels: Reviewable & { title: string; items: FeeLevel[] };
  footnotes: string[];
  payment: Reviewable & { title: string; text: string };
  cta: CtaCopy;
  ctaNote: string;
}

export interface PromoOffer {
  kicker: string;
  title: string;
  text: string;
  icon: "percent" | "installment";
  /** Headline offer: full-width yellow block with an oversized number. */
  featured?: boolean;
}

export interface EarlyBirdContent extends Reviewable {
  enabled: boolean;
  label: string;
  title: string;
  description: string;
  /** Poster-style promo card (Registration fee + offers). */
  promo: Reviewable & { sticker: string; label: string; value: string; offers: PromoOffer[] };
  urgency: { badge: string; alert: string };
  /** Last day of the current Early Bird wave, ISO yyyy-mm-dd (WIB). */
  deadline: Reviewable & { date: string };
  levels: Reviewable & { text: string };
  /**
   * Monthly Early Bird allotment. `left` applies to `month` (yyyy-mm); in any other month
   * the page shows `perMonth` (fresh allotment) so a stale number never carries over.
   */
  quota: Reviewable & { perMonth: number; left: number; month: string };
  terms: Reviewable & { text: string };
  cta: CtaCopy;
}

export interface FaqItem extends Reviewable {
  question: string;
  answer: string;
  link?: { label: string; href: string };
}

export interface FaqContent extends SectionIntro {
  enabled: boolean;
  items: FaqItem[];
}

export interface ClosingContent extends Reviewable {
  title: RichText;
  text: string;
  cta: CtaCopy;
  photo: PhotoSlotId;
}

export interface SchoolInfo {
  name: string;
  foundation: string;
  /** Level chips in the header, as on the posters: "Early Years (PG – TK)". */
  levels: Array<{ name: string; detail: string }>;
  tagline: Reviewable & { text: string };
  /** street + area: full address; line: one-line version for the hero; short: area name only. */
  address: Reviewable & { street: string; area: string; line: string; short: string };
  mapsUrl: string;
  instagram: { handle: string; url: string };
}

export interface PpdbContent {
  school: SchoolInfo;
  hero: HeroContent;
  facilities: FacilitiesContent;
  curriculum: CurriculumContent;
  advantage: AdvantageContent;
  programs: ProgramsContent;
  achievements: AchievementsContent;
  testimonials: TestimonialsContent;
  visit: VisitContent;
  investment: InvestmentContent;
  earlyBird: EarlyBirdContent;
  faq: FaqContent;
  closing: ClosingContent;
}
