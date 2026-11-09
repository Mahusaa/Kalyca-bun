import { Check } from "lucide-react";
import { Photo } from "../components/Photo";
import { Section, SectionHeading } from "../components/Section";
import { statusAttrs } from "../lib/status";
import type { FacilitiesContent } from "../types";

export function FacilitiesSection({ facilities }: { facilities: FacilitiesContent }) {
  const { feature, items, extras } = facilities;
  return (
    <Section id="fasilitas" tone="sky">
      <SectionHeading id="fasilitas" intro={facilities} />

      <figure
        className="mt-10 overflow-hidden rounded-[1.75rem] bg-white shadow-card ring-1 ring-forest-900/5 lg:grid lg:grid-cols-[1.35fr_1fr]"
        {...statusAttrs(feature)}
      >
        <Photo slot={feature.photo} sizes="(min-width: 1024px) 640px, 100vw" className="lg:aspect-auto lg:h-full" />
        <figcaption className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <p className="font-display text-[0.75rem] font-semibold tracking-[0.16em] text-leaf-500 uppercase">
            Sekolah Alam Kebun
          </p>
          <h3 className="mt-2 text-[1.35rem] leading-snug font-bold tracking-[-0.015em] sm:text-[1.6rem]">
            {feature.title}
          </h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">{feature.text}</p>
        </figcaption>
      </figure>

      <ul className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <li
            key={item.title}
            className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-forest-900/5 sm:rounded-3xl"
            {...statusAttrs(item)}
          >
            <Photo slot={item.photo} sizes="(min-width: 1024px) 360px, 50vw" ratio="4 / 3" />
            <div className="p-3.5 sm:p-5">
              <h3 className="text-[0.98rem] leading-snug font-bold sm:text-[1.1rem]">{item.title}</h3>
              <p className="mt-1.5 text-[0.8rem] leading-snug text-ink-500 sm:text-[0.9rem] sm:leading-relaxed">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-wrap items-center gap-2" {...statusAttrs(extras)}>
        <span className="mr-1 font-display text-[0.82rem] font-semibold text-forest-800">{extras.label}</span>
        {extras.items.map((extra) => (
          <span
            key={extra}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[0.8rem] text-ink-700 ring-1 ring-forest-900/10"
          >
            <Check className="size-3.5 text-forest-600" aria-hidden="true" />
            {extra}
          </span>
        ))}
      </div>
    </Section>
  );
}
