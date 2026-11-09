import { CalendarDays, Info, Sparkles } from "lucide-react";
import { Photo } from "../components/Photo";
import { Section, SectionHeading } from "../components/Section";
import { isVisible, statusAttrs } from "../lib/status";
import type { VisitContent, VisitProgram } from "../types";

function ProgramCard({ program }: { program: VisitProgram }) {
  const dark = program.featured;
  const TagIcon = dark ? Sparkles : CalendarDays;
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-[1.75rem] shadow-card ${
        dark ? "on-dark bg-forest-900 text-white" : "bg-white ring-1 ring-forest-900/5"
      }`}
      {...statusAttrs(program)}
    >
      <div className="relative">
        <Photo slot={program.photo} sizes="(min-width: 768px) 50vw, 100vw" />
        {program.badge ? (
          <span className="absolute top-4 right-4 flex size-[5.2rem] rotate-[-12deg] items-center justify-center rounded-full bg-sun-400 font-display text-[1.05rem] font-black tracking-[0.02em] text-forest-950 uppercase italic shadow-float ring-4 ring-forest-900">
            {program.badge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <p
          className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 font-display text-[0.74rem] font-extrabold tracking-[0.06em] uppercase ${
            dark ? "bg-sun-400 text-forest-950" : "bg-leaf-100 text-forest-800"
          }`}
        >
          <TagIcon className="size-3.5" aria-hidden="true" />
          {program.tag}
        </p>
        <h3 className={`mt-3 text-[1.6rem] leading-tight font-extrabold italic ${dark ? "text-white" : ""}`}>
          {program.name}
        </h3>
        <p className={`mt-2 text-[0.95rem] leading-relaxed ${dark ? "text-white/85" : "text-ink-500"}`}>
          {program.summary}
        </p>

        <dl className={`mt-5 space-y-3 border-t pt-5 ${dark ? "border-white/15" : "border-forest-900/10"}`}>
          {program.facts.map((fact) => (
            <div key={fact.label} className="grid grid-cols-[6.5rem_1fr] gap-3 text-[0.9rem] leading-snug">
              <dt className={`font-semibold ${dark ? "text-sun-400" : "text-forest-700"}`}>{fact.label}</dt>
              <dd className={dark ? "text-white" : "text-ink-700"}>{fact.text}</dd>
            </div>
          ))}
        </dl>

        {program.highlights && isVisible(program.highlights) ? (
          <div className="mt-6" {...statusAttrs(program.highlights)}>
            <p className="text-[0.85rem] font-bold text-white/90">{program.highlights.title}</p>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {program.highlights.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white/10 px-3 py-1.5 text-[0.8rem] text-white/90 ring-1 ring-white/15"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}

/** Sit In Program & Trial Class: two ways to experience Kalyca before enrolling (no WA CTA: intent filter). */
export function VisitSection({ visit }: { visit: VisitContent }) {
  const programs = visit.programs.filter(isVisible);
  return (
    <Section id="coba" tone="leaf">
      <SectionHeading id="coba" intro={visit} />
      <div className="mt-10 grid gap-5 md:grid-cols-2 md:items-start">
        {programs.map((program) => (
          <ProgramCard key={program.name} program={program} />
        ))}
      </div>
      <p className="mt-6 flex items-start gap-2.5 text-[0.95rem] leading-snug font-semibold text-forest-900">
        <Info className="mt-0.5 size-5 shrink-0 text-forest-700" aria-hidden="true" />
        {visit.note}
      </p>
    </Section>
  );
}
