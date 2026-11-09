import { Check } from "lucide-react";
import { Photo } from "../components/Photo";
import { Section, SectionHeading } from "../components/Section";
import { statusAttrs } from "../lib/status";
import type { ProgramsContent } from "../types";

export function ProgramsSection({ programs }: { programs: ProgramsContent }) {
  return (
    <Section id="program" tone="leaf">
      <SectionHeading id="program" intro={programs} />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {programs.items.map((item) => (
          <article
            key={item.id}
            id={item.id}
            className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-card ring-1 ring-forest-900/5"
            {...statusAttrs(item)}
          >
            <div className="relative">
              <Photo slot={item.photo} sizes="(min-width: 768px) 33vw, 100vw" />
              <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 font-display text-[0.76rem] font-semibold text-forest-900 shadow-card">
                {item.ages}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="font-display text-[0.74rem] font-semibold tracking-[0.16em] text-leaf-500 uppercase">
                {item.level}
              </p>
              <h3 className="mt-1 text-[1.5rem] leading-tight font-bold tracking-[-0.02em]">{item.name}</h3>
              <p className="mt-1 text-[0.82rem] font-medium text-forest-700">{item.classes}</p>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-500">{item.text}</p>
              <ul className="mt-4 space-y-2 border-t border-forest-900/8 pt-4">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-[0.88rem] text-ink-700">
                    <Check className="mt-0.5 size-4 shrink-0 text-forest-600" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
