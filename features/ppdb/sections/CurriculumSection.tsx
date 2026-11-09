import { Photo } from "../components/Photo";
import { Section, SectionHeading } from "../components/Section";
import { statusAttrs } from "../lib/status";
import type { CurriculumContent } from "../types";

export function CurriculumSection({ curriculum }: { curriculum: CurriculumContent }) {
  const { pillars, daily } = curriculum;
  return (
    <Section id="kurikulum" tone="white">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8">
        <SectionHeading id="kurikulum" intro={curriculum} className="lg:col-start-1 lg:row-start-1" />

        <div className="lg:sticky lg:top-8 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:self-start">
          <Photo
            slot={curriculum.photo}
            sizes="(min-width: 1024px) 520px, 100vw"
            className="rounded-[1.75rem] shadow-card"
          />
        </div>

        <ol className="space-y-3 lg:col-start-1 lg:row-start-2">
          {pillars.map((pillar, index) => (
            <li
              key={pillar.title}
              className="flex gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-forest-900/5 sm:p-6"
              {...statusAttrs(pillar)}
            >
              <span
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest-900 font-display text-[0.92rem] font-semibold text-sun-400"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-[1.08rem] leading-snug font-bold">{pillar.title}</h3>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-500">{pillar.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div
          className="on-dark rounded-2xl bg-forest-900 p-5 sm:p-6 lg:col-start-1 lg:row-start-3"
          {...statusAttrs(daily)}
        >
          <h3 className="text-[1rem] font-bold text-white">{daily.title}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {daily.items.map((item) => (
              <li
                key={item}
                className="rounded-full bg-white/10 px-3 py-1.5 text-[0.8rem] text-white/90 ring-1 ring-white/15"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
