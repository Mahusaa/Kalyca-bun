import type { ReactNode } from "react";
import { renderRichText } from "../lib/rich-text";
import { statusAttrs } from "../lib/status";
import type { SectionIntro } from "../types";

const tones = {
  white: "bg-white",
  sky: "bg-sky-50",
  leaf: "bg-leaf-50",
  /** White fading into leaf: bridges a white section into a following leaf one. */
  fade: "bg-white bg-gradient-to-b from-white via-white to-leaf-50",
} as const;

interface SectionProps {
  id: string;
  tone?: keyof typeof tones;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}

export function Section({ id, tone = "white", children, className = "", labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy ?? `${id}-title`}
      className={`${tones[tone]} py-16 sm:py-20 lg:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

/** Dark green pill with yellow caps — the label style used on the PPDB posters. */
export function PillLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-forest-900 px-4 py-2 font-display text-[0.74rem] font-extrabold tracking-[0.08em] text-sun-400 uppercase ${className}`}
    >
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  id: string;
  intro: SectionIntro;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ id, intro, align = "left", className = "" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <header className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`} {...statusAttrs(intro)}>
      <PillLabel>{intro.eyebrow}</PillLabel>
      <h2
        id={`${id}-title`}
        className="mt-4 text-[1.9rem] leading-[1.08] font-extrabold tracking-[-0.025em] italic sm:text-[2.45rem] lg:text-[2.9rem]"
      >
        {renderRichText(intro.title)}
      </h2>
      {intro.intro ? (
        <p className="mt-4 text-[1rem] leading-relaxed text-ink-500 sm:text-[1.08rem]">{intro.intro}</p>
      ) : null}
    </header>
  );
}
