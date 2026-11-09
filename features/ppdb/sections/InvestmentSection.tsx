import { Clock, Lock, Wallet } from "lucide-react";
import { Section, SectionHeading } from "../components/Section";
import { Txt } from "../components/Txt";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { isVisible, statusAttrs } from "../lib/status";
import type { FeeRow, InvestmentContent } from "../types";

/**
 * Amount cell. Open amounts are printed; the rest show a blurred placeholder
 * ("Rp 0.000.000") — the real figure is never in the HTML, so it can't be read from the source.
 */
function Amount({ fee, lockedNote }: { fee: FeeRow; lockedNote: string }) {
  if (fee.amount) {
    return (
      <div className="sm:text-right">
        <p className="font-display text-[1.3rem] leading-none font-extrabold text-forest-900 sm:text-[1.45rem]">
          {fee.amount}
        </p>
        {fee.period ? <p className="mt-1 text-[0.75rem] text-ink-500">{fee.period}</p> : null}
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start sm:items-end sm:text-right">
      <span className="flex items-center gap-1.5">
        <Lock className="size-4 shrink-0 text-forest-700" aria-hidden="true" />
        <span
          className="font-display text-[1.15rem] leading-none font-extrabold text-forest-900 blur-[5px] select-none sm:text-[1.3rem]"
          aria-hidden="true"
        >
          Rp 0.000.000
        </span>
      </span>
      <span className="mt-1.5 text-[0.72rem] leading-tight font-semibold text-leaf-500">
        {fee.period ? `${fee.period} · ` : ""}
        {lockedNote}
      </span>
    </div>
  );
}

export function InvestmentSection({ investment }: { investment: InvestmentContent }) {
  const notes = [{ item: investment.payment, Icon: Wallet }].filter(({ item }) => isVisible(item));
  const fees = investment.fees.filter(isVisible);
  const { levels } = investment;

  return (
    <Section id="biaya" tone="white">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading id="biaya" intro={investment} />
          <div className="mt-8 hidden lg:block">
            <WhatsAppButton location="biaya">{investment.cta.label}</WhatsAppButton>
            <p className="mt-3 text-[0.82rem] text-ink-500">{investment.ctaNote}</p>
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-card ring-1 ring-forest-900/5">
            <div className="flex items-center justify-between gap-3 bg-forest-900 px-5 py-3.5 sm:px-7">
              <p className="font-display text-[0.8rem] font-extrabold tracking-[0.08em] text-sun-400 uppercase">
                Komponen Biaya
              </p>
              <p className="hidden font-display text-[0.8rem] font-extrabold tracking-[0.08em] text-sun-400 uppercase sm:block">
                Nominal
              </p>
            </div>
            <ol className="divide-y divide-forest-900/8 px-5 sm:px-7">
              {fees.map((fee) => (
                <li key={fee.title} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-4" {...statusAttrs(fee)}>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <h3 className="text-[1.05rem] leading-snug font-bold">{fee.title}</h3>
                      <span className="text-[0.8rem] font-medium text-forest-700">{fee.alias}</span>
                    </div>
                    <p className="mt-1 text-[0.86rem] leading-relaxed text-ink-500">{fee.text}</p>
                    {fee.badge ? (
                      <span className="mt-2 inline-block rounded-full bg-sun-400 px-2.5 py-0.5 font-display text-[0.7rem] font-extrabold text-forest-950 uppercase">
                        {fee.badge}
                      </span>
                    ) : null}
                  </div>
                  <div className="shrink-0">
                    <Amount fee={fee} lockedNote={investment.lockedNote} />
                  </div>
                </li>
              ))}
            </ol>
            <div className="flex items-start gap-2.5 border-t border-forest-900/8 bg-leaf-50 px-5 py-4 sm:px-7">
              <Lock className="mt-0.5 size-4 shrink-0 text-forest-700" aria-hidden="true" />
              <p className="text-[0.88rem] leading-snug font-semibold text-forest-900">
                Info detail biaya silakan tanyakan ke Tim Admission kami.
              </p>
            </div>
          </div>

          {isVisible(levels) ? (
            <div className="mt-4 rounded-[1.5rem] bg-sky-100 p-5 sm:p-6" {...statusAttrs(levels)}>
              <p className="flex items-center gap-2 font-display text-[0.95rem] font-bold text-forest-900">
                <Clock className="size-4.5 text-forest-700" aria-hidden="true" />
                {levels.title}
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {levels.items.map((level) => (
                  <li key={level.name} className="rounded-2xl bg-white p-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="font-display text-[0.95rem] font-extrabold text-forest-900">{level.name}</p>
                      <p className="text-[0.78rem] font-semibold whitespace-nowrap text-leaf-500">{level.ages}</p>
                    </div>
                    <ul className="mt-1.5 space-y-0.5 text-[0.84rem] text-ink-700">
                      {level.schedule.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {notes.length > 0 ? (
            <ul className="mt-4 grid gap-3">
              {notes.map(({ item, Icon }) => (
                <li key={item.title} className="flex gap-3.5 rounded-2xl bg-sky-100 p-4 sm:p-5" {...statusAttrs(item)}>
                  <Icon className="mt-0.5 size-5 shrink-0 text-forest-700" aria-hidden="true" />
                  <div>
                    <p className="font-display text-[0.95rem] font-semibold text-forest-900">{item.title}</p>
                    <p className="mt-1 text-[0.86rem] leading-relaxed text-ink-700">
                      <Txt status={item.status}>{item.text}</Txt>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}

          {investment.footnotes.length > 0 ? (
            <ul className="mt-4 space-y-1 text-[0.78rem] leading-snug text-ink-500">
              {investment.footnotes.map((note) => (
                <li key={note}>* {note}</li>
              ))}
            </ul>
          ) : null}

          <div className="mt-6 lg:hidden">
            <WhatsAppButton location="biaya" fullWidth>
              {investment.cta.label}
            </WhatsAppButton>
            <p className="mt-3 text-center text-[0.82rem] text-ink-500">{investment.ctaNote}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
