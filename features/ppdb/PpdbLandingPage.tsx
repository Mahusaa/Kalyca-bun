import { Leaf } from "./components/BrandIcons";
import { AttributionCapture, ReviewMode, ViewContentTracker } from "./components/ClientHelpers";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { StickyWhatsAppBar } from "./components/StickyWhatsAppBar";
import { TrackingScripts } from "./components/TrackingScripts";
import { isProductionContent, lpwaConfig } from "./config";
import { content } from "./content";
import { fontBody, fontDisplay } from "./fonts";
import { auditContent, formatIssues } from "./lib/content-audit";
import { isVisible } from "./lib/status";
import { AchievementsSection } from "./sections/AchievementsSection";
import { AdvantageSection } from "./sections/AdvantageSection";
import { ClosingSection } from "./sections/ClosingSection";
import { CurriculumSection } from "./sections/CurriculumSection";
import { EarlyBirdSection } from "./sections/EarlyBirdSection";
import { FacilitiesSection } from "./sections/FacilitiesSection";
import { FaqSection } from "./sections/FaqSection";
import { HeroSection } from "./sections/HeroSection";
import { InvestmentSection } from "./sections/InvestmentSection";
import { ProgramsSection } from "./sections/ProgramsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { VisitSection } from "./sections/VisitSection";

/** Sky gradient + flying leaves behind the header and hero (PPDB poster visual direction). */
function SkyBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[78rem] overflow-hidden lg:h-[52rem]">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-white" />
      <div className="absolute -top-24 left-1/2 h-[28rem] w-[46rem] -translate-x-1/2 rounded-full bg-white/60 blur-3xl" />
      <Leaf className="absolute top-[11rem] -right-5 w-16 rotate-[24deg] text-leaf-400 blur-[1px] sm:w-28 lg:top-40" />
      <Leaf className="absolute top-[54rem] -left-10 w-20 rotate-[-32deg] text-leaf-500/90 blur-[2px] lg:top-[30rem] lg:-left-8 lg:w-24" />
      <Leaf className="absolute top-24 left-[46%] hidden w-16 rotate-[-12deg] text-leaf-400/80 blur-[3px] lg:block" />
    </div>
  );
}

/**
 * Kalyca PPDB 2027/2028 landing page (Simple LPWA: brochure → WhatsApp).
 * Self-contained: fonts, styles scope (.ppdb), tracking and CTAs travel with it.
 */
export default function PpdbLandingPage() {
  if (isProductionContent) {
    const issues = auditContent(content);
    if (issues.length > 0) {
      throw new Error(
        `Production build dibatalkan: ${issues.length} konten belum "approved" atau foto belum ada.\n` +
          `${formatIssues(issues)}\n` +
          `Ubah status menjadi "approved" setelah dikonfirmasi Kalyca, atau set enabled: false untuk menyembunyikan bagian.`,
      );
    }
  }

  const { school, advantage, achievements, testimonials, visit, earlyBird, faq } = content;
  const show = {
    visit: visit.enabled && visit.programs.some(isVisible),
    advantage: advantage.enabled && advantage.rows.some(isVisible),
    achievements: achievements.enabled && achievements.slides.some(isVisible),
    testimonials: testimonials.enabled && testimonials.items.some(isVisible),
    earlyBird: earlyBird.enabled && isVisible(earlyBird),
    faq: faq.enabled && faq.items.some(isVisible),
  };

  return (
    <div className={`ppdb ${fontDisplay.variable} ${fontBody.variable} relative min-h-screen overflow-x-clip`}>
      <SkyBackdrop />
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-forest-900 px-4 py-2 font-display text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Langsung ke konten
      </a>

      <SiteHeader school={school} />

      <main id="main" className="relative">
        <HeroSection
          hero={content.hero}
          school={school}
          earlyBirdDeadline={show.earlyBird ? earlyBird.deadline.date : undefined}
        />
        <FacilitiesSection facilities={content.facilities} />
        <CurriculumSection curriculum={content.curriculum} />
        {show.advantage ? <AdvantageSection advantage={advantage} /> : null}
        <ProgramsSection programs={content.programs} />
        {show.achievements ? <AchievementsSection achievements={achievements} /> : null}
        {show.testimonials ? <TestimonialsSection testimonials={testimonials} /> : null}
        {show.visit ? <VisitSection visit={visit} /> : null}
        <InvestmentSection investment={content.investment} />
        {show.earlyBird ? <EarlyBirdSection earlyBird={earlyBird} /> : null}
        {show.faq ? <FaqSection faq={faq} school={school} /> : null}
        <ClosingSection closing={content.closing} school={school} />
      </main>

      <SiteFooter school={school} campaignLabel={lpwaConfig.campaign.label} />

      <StickyWhatsAppBar label={content.closing.cta.label} revealFromId="biaya" hideWhenVisibleId="penutup" />

      <TrackingScripts />
      <AttributionCapture />
      {lpwaConfig.tracking.viewContent.enabled ? (
        <ViewContentTracker sectionId={lpwaConfig.tracking.viewContent.sectionId} />
      ) : null}
      {!isProductionContent ? <ReviewMode /> : null}
    </div>
  );
}
