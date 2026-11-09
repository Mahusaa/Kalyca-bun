import { AchievementCarousel } from "../components/AchievementCarousel";
import { Photo } from "../components/Photo";
import { Section, SectionHeading } from "../components/Section";
import { isVisible, statusAttrs } from "../lib/status";
import type { AchievementsContent } from "../types";

export function AchievementsSection({ achievements }: { achievements: AchievementsContent }) {
  const slides = achievements.slides.filter(isVisible);

  return (
    <Section id="prestasi" tone="white">
      <SectionHeading id="prestasi" intro={achievements} />
      <div className="mt-10">
        <AchievementCarousel
          label="Prestasi siswa Kalyca"
          slides={slides.map((slide) => ({
            key: slide.photo,
            image: <Photo slot={slide.photo} sizes="(min-width: 1024px) 360px, (min-width: 640px) 46vw, 82vw" />,
            title: slide.title,
            event: slide.event,
            name: slide.name,
            attrs: statusAttrs(slide),
          }))}
        />
      </div>
    </Section>
  );
}
