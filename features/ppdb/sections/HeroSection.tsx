import { ArrowDown, Award, MapPin, Megaphone, School } from "lucide-react";
import { MosqueIcon } from "../components/BrandIcons";
import { Photo } from "../components/Photo";
import { PromoTeaser } from "../components/PromoTeaser";
import { renderRichText } from "../lib/rich-text";
import { statusAttrs } from "../lib/status";
import type { HeroContent, SchoolInfo } from "../types";

const whyIcons = { award: Award, school: School, mosque: MosqueIcon } as const;

/** Poster-style collage: white-framed photos, slightly tilted. */
function PhotoCollage({ photos }: { photos: HeroContent["photos"] }) {
  const tilt = ["-rotate-2", "rotate-2", "rotate-1", "-rotate-1"];
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4">
      {photos.map((slot, index) => (
        <li key={slot} className={`rounded-[1.4rem] bg-white p-1.5 shadow-card ${tilt[index % tilt.length]}`}>
          <Photo
            slot={slot}
            ratio="1 / 1"
            priority={index === 0}
            sizes="(min-width: 1024px) 260px, 45vw"
            className="rounded-[1.1rem]"
          />
        </li>
      ))}
    </ul>
  );
}

function WhyKalyca({ why }: { why: HeroContent["why"] }) {
  return (
    <div className="relative rounded-[2rem] bg-white px-5 pt-12 pb-7 shadow-card ring-1 ring-forest-900/5 sm:px-10" {...statusAttrs(why)}>
      <h2
        id="why-title"
        className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-forest-900 px-6 py-2.5 font-display text-[0.92rem] font-extrabold tracking-[0.06em] whitespace-nowrap text-sun-400 uppercase"
      >
        {why.title}
      </h2>
      <ul className="grid gap-7 sm:grid-cols-3 sm:gap-8">
        {why.items.map((item) => {
          const Icon = whyIcons[item.icon];
          return (
            <li key={item.title} className="flex gap-4 sm:flex-col sm:items-center sm:text-center">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-forest-900">
                <Icon className="size-8" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="text-[0.95rem] leading-snug font-extrabold uppercase">{item.title}</h3>
                <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-500">{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

interface HeroSectionProps {
  hero: HeroContent;
  school: SchoolInfo;
  /** Set while the Early Bird section is on the page: shows "Lihat Promo" + the teaser. */
  earlyBirdDeadline?: string;
}

export function HeroSection({ hero, school, earlyBirdDeadline }: HeroSectionProps) {
  return (
    <section id="beranda" aria-labelledby="hero-title" className="relative">
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 pt-8 pb-14 sm:px-8 lg:grid-cols-[1.08fr_1fr] lg:items-center lg:gap-14 lg:pt-14 lg:pb-20">
        <div {...statusAttrs(hero)}>
          <p className="inline-flex items-center gap-2 rounded-full bg-forest-900 px-4 py-2 font-display text-[0.8rem] font-bold text-sun-400 shadow-card">
            <Megaphone className="size-4" aria-hidden="true" />
            {hero.badge}
          </p>

          <h1 id="hero-title" className="display-title mt-6 text-[2.7rem] sm:text-[3.7rem] lg:text-[4.3rem]">
            {hero.title}
          </h1>

          <p className="mt-7 max-w-xl text-[1.05rem] leading-[1.75] text-ink-700 sm:text-[1.15rem]">
            {renderRichText(hero.description)}
          </p>

          {/* Scroll buttons only — WhatsApp CTAs start at the investment section (intent filter). */}
          {earlyBirdDeadline ? (
            <div className="mt-7">
              <PromoTeaser deadline={earlyBirdDeadline}>{renderRichText(hero.promoCta.teaser)}</PromoTeaser>
            </div>
          ) : null}

          <div className={`${earlyBirdDeadline ? "mt-4" : "mt-8"} flex flex-col gap-3 sm:flex-row`}>
            <a
              href={hero.primaryCta.href}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-forest-900 px-5 font-body text-[1rem] font-bold text-white shadow-float transition-colors hover:bg-forest-800 sm:px-7"
            >
              {hero.primaryCta.label}
              <ArrowDown className="size-4 text-sun-400" aria-hidden="true" />
            </a>
            <a
              href={hero.promoCta.href}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-sun-400 px-5 font-body text-[1rem] font-bold text-forest-950 shadow-card ring-1 ring-forest-900/10 transition-colors ring-inset hover:bg-sun-200 sm:px-7"
            >
              {hero.promoCta.label}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-6 flex items-start gap-2 text-[0.9rem] leading-snug text-ink-700" {...statusAttrs(school.address)}>
            <MapPin className="mt-0.5 size-4 shrink-0 text-forest-700" aria-hidden="true" />
            <span>
              {school.address.line} ·{" "}
              <a
                href={school.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold whitespace-nowrap text-forest-900 underline decoration-sun-400 decoration-[3px] underline-offset-4 hover:decoration-forest-700"
              >
                Lihat peta
              </a>
            </span>
          </p>
        </div>

        <PhotoCollage photos={hero.photos} />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pt-4 pb-16 sm:px-8 lg:pb-24">
        <WhyKalyca why={hero.why} />
      </div>
    </section>
  );
}
