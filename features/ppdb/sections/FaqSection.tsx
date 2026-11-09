import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "../components/Section";
import { Txt } from "../components/Txt";
import { isVisible, statusAttrs } from "../lib/status";
import type { FaqContent, SchoolInfo } from "../types";

export function FaqSection({ faq, school }: { faq: FaqContent; school: SchoolInfo }) {
  const items = faq.items.filter(isVisible);
  return (
    <Section id="faq" tone="sky">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading id="faq" intro={faq} />
        <div className="divide-y divide-forest-900/10 rounded-[1.75rem] bg-white px-5 shadow-card ring-1 ring-forest-900/5 sm:px-7">
          {items.map((item) => (
            <details key={item.question} className="group" {...statusAttrs(item)}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 font-display text-[1rem] leading-snug font-bold text-forest-900 [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  className="mt-0.5 size-5 shrink-0 text-forest-700 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="pb-5 text-[0.93rem] leading-relaxed text-ink-500">
                <p>
                  <Txt status={item.status}>{item.answer}</Txt>
                </p>
                {item.link ? (
                  <a
                    href={item.link.href === "maps" ? school.mapsUrl : item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 font-semibold text-forest-800 underline decoration-sage-300 decoration-2 underline-offset-4 hover:decoration-forest-700"
                  >
                    {item.link.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
