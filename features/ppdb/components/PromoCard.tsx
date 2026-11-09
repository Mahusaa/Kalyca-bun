import { BadgePercent, CalendarClock } from "lucide-react";
import { statusAttrs } from "../lib/status";
import type { EarlyBirdContent } from "../types";

const offerIcons = { percent: BadgePercent, installment: CalendarClock } as const;

/** Early Bird card — the white "Registration Fee" block from the PPDB posters (feed24). */
export function PromoCard({ promo }: { promo: EarlyBirdContent["promo"] }) {
  // With a featured (full-width) offer, the remaining offers go full width too.
  const hasFeatured = promo.offers.some((offer) => offer.featured);
  return (
    <div className="relative rounded-[1.75rem] bg-white px-5 pt-8 pb-5 text-forest-900 shadow-card sm:px-7" {...statusAttrs(promo)}>
      <span
        className="absolute -top-5 -right-2 flex size-[4.6rem] rotate-[-14deg] flex-col items-center justify-center rounded-full bg-forest-900 text-center font-display text-[0.8rem] leading-[1.05] font-extrabold text-sun-400 uppercase shadow-float ring-4 ring-sun-400 sm:-right-4"
        aria-hidden="true"
      >
        {promo.sticker.split(" ").map((word) => (
          <span key={word}>{word}</span>
        ))}
      </span>
      <p className="text-center">
        <span className="inline-block rounded-full bg-forest-900 px-4 py-1.5 font-display text-[0.8rem] font-extrabold tracking-[0.05em] text-sun-400 uppercase">
          {promo.label}
          <span className="sr-only"> ({promo.sticker})</span>
        </span>
      </p>
      <p className="mt-2 text-center font-display text-[3rem] leading-none font-extrabold tracking-[-0.03em] text-forest-900">
        {promo.value}
      </p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {promo.offers.map((offer) => {
          const Icon = offerIcons[offer.icon];
          if (offer.featured) {
            return (
              <li
                key={offer.title}
                className="cta-shine relative rounded-2xl bg-sun-400 px-4 py-4 text-forest-950 shadow-float ring-2 ring-forest-900 sm:col-span-2 sm:px-6"
              >
                <div className="relative z-[2] flex items-center gap-3 sm:gap-5">
                  <Icon className="hidden size-14 shrink-0 text-forest-900 sm:block" strokeWidth={1.7} aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="font-display text-[0.8rem] leading-none font-extrabold tracking-[0.08em] uppercase">
                      Hemat {offer.kicker}
                    </p>
                    <p className="mt-1 font-display text-[clamp(2.1rem,10vw,3.8rem)] leading-[0.95] font-black tracking-[-0.03em] whitespace-nowrap italic">
                      {offer.title}
                    </p>
                    <p className="mt-1.5 text-[0.85rem] leading-snug font-bold">{offer.text}</p>
                  </div>
                </div>
              </li>
            );
          }
          return (
            <li
              key={offer.title}
              className={`rounded-2xl bg-forest-900 p-3.5 text-white sm:p-4 ${hasFeatured ? "sm:col-span-2" : ""}`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className="size-8 shrink-0 text-sun-400" strokeWidth={1.6} aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-[0.66rem] leading-none font-bold tracking-[0.04em] uppercase">{offer.kicker}</p>
                  <p className="mt-1 font-display text-[1.35rem] leading-none font-extrabold whitespace-nowrap text-sun-400">
                    {offer.title}
                  </p>
                </div>
              </div>
              <p className="mt-2.5 text-[0.75rem] leading-snug text-white/80">{offer.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
