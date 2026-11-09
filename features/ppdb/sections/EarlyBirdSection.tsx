import { AlarmClock, BellRing, Flame } from "lucide-react";
import { Dandelion } from "../components/BrandIcons";
import { DeadlineText } from "../components/DeadlineText";
import { PromoCard } from "../components/PromoCard";
import { QuotaText } from "../components/QuotaText";
import { Txt } from "../components/Txt";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { renderRichText } from "../lib/rich-text";
import { isVisible, statusAttrs } from "../lib/status";
import type { EarlyBirdContent } from "../types";

/** Shown only when the promo is enabled; in production only once every detail is approved. */
export function EarlyBirdSection({ earlyBird }: { earlyBird: EarlyBirdContent }) {
  const { deadline, levels, quota, urgency } = earlyBird;

  return (
    <section id="promo" aria-labelledby="promo-title" className="bg-white px-5 pb-16 sm:px-8 sm:pb-20 lg:pb-28">
      {/* Mobile order: intro → promo card → period/levels/quota + CTA. Desktop: intro + details left, promo card right. */}
      <div
        className="on-dark relative mx-auto grid w-full max-w-6xl gap-8 overflow-hidden rounded-[2rem] bg-forest-900 px-6 py-10 text-white sm:px-10 sm:py-14 lg:grid-cols-[1fr_1.05fr] lg:gap-x-14 lg:gap-y-6 lg:px-16 lg:py-16"
        {...statusAttrs(earlyBird)}
      >
        <Dandelion
          seeds={16}
          className="pointer-events-none absolute -right-16 -bottom-24 w-72 text-sun-400/15 sm:w-96"
        />

        <div className="relative lg:col-start-1 lg:row-start-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="inline-flex rounded-full bg-sun-400 px-3.5 py-1.5 font-display text-[0.76rem] font-bold tracking-[0.14em] text-forest-950 uppercase">
              {earlyBird.label}
            </p>
            <p className="alarm-glow inline-flex items-center gap-2 rounded-full bg-alert-600 px-3.5 py-1.5 font-display text-[0.76rem] font-extrabold tracking-[0.1em] text-white uppercase">
              <span className="relative flex size-2.5" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-white/75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-white" />
              </span>
              {urgency.badge}
            </p>
          </div>
          <h2
            id="promo-title"
            className="mt-5 text-[1.85rem] leading-[1.1] font-extrabold tracking-[-0.025em] text-white italic sm:text-[2.5rem]"
          >
            {earlyBird.status === "placeholder" ? (
              <Txt status={earlyBird.status}>{earlyBird.title}</Txt>
            ) : (
              renderRichText(earlyBird.title)
            )}
          </h2>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-white/80">
            <Txt status={earlyBird.status}>{earlyBird.description}</Txt>
          </p>
        </div>

        {isVisible(earlyBird.promo) ? (
          <div className="relative mt-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-center">
            <PromoCard promo={earlyBird.promo} />
          </div>
        ) : null}

        <div className="relative lg:col-start-1 lg:row-start-2">
          <dl className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="alarm-glow rounded-2xl bg-alert-600/12 p-4" {...statusAttrs(deadline)}>
              <dt className="flex items-center gap-1.5 text-[0.72rem] font-semibold tracking-[0.14em] text-white/60 uppercase">
                <AlarmClock className="size-3.5 text-alert-300" aria-hidden="true" />
                Periode
              </dt>
              <dd className="mt-1.5">
                <DeadlineText date={deadline.date} />
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 p-4" {...statusAttrs(levels)}>
              <dt className="text-[0.72rem] font-semibold tracking-[0.14em] text-white/55 uppercase">Jenjang</dt>
              <dd className="mt-1 font-display text-[1rem] font-semibold text-white">{levels.text}</dd>
            </div>
            <div className="alarm-glow rounded-2xl bg-alert-600/12 p-4" {...statusAttrs(quota)}>
              <dt className="flex items-center gap-1.5 text-[0.72rem] font-semibold tracking-[0.14em] text-white/60 uppercase">
                <Flame className="size-3.5 text-alert-300" aria-hidden="true" />
                Kuota Early Bird
              </dt>
              <dd className="mt-1.5">
                <QuotaText perMonth={quota.perMonth} left={quota.left} month={quota.month} />
              </dd>
            </div>
          </dl>

          {isVisible(earlyBird.terms) ? (
            <p className="mt-5 text-[0.8rem] leading-relaxed text-white/60" {...statusAttrs(earlyBird.terms)}>
              <Txt status={earlyBird.terms.status}>{earlyBird.terms.text}</Txt>
            </p>
          ) : null}

          <p className="mt-6 flex items-start gap-3 rounded-2xl bg-alert-600 p-4 text-white shadow-float">
            <BellRing className="bell-ring mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <span className="text-[0.95rem] leading-snug font-bold">{urgency.alert}</span>
          </p>

          <WhatsAppButton location="promo" variant="sun" className="cta-shine mt-4 w-full">
            {earlyBird.cta.label}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
