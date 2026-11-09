import { Check, CircleDashed } from "lucide-react";
import { Section, SectionHeading } from "../components/Section";
import { Logo } from "../components/SiteChrome";
import { isVisible, statusAttrs } from "../lib/status";
import type { AdvantageContent } from "../types";

/** White check badge — the positive marker in the Kalyca column. */
function CheckBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-white text-forest-500 ${className}`}
      aria-hidden="true"
    >
      <Check className="size-[64%]" strokeWidth={3.4} />
    </span>
  );
}

/**
 * Keunggulan Kalyca: two-column comparison table, Kalyca in green and other private schools in
 * dark neutral ("Bervariasi …" with a dashed circle, never a red cross). Each parent
 * consideration is a caption above Kalyca's answer. Same table on every screen; on desktop the
 * heading sits on the left.
 */
export function AdvantageSection({ advantage }: { advantage: AdvantageContent }) {
  const { columns } = advantage;
  const rows = advantage.rows.filter(isVisible);

  return (
    <Section id="keunggulan" tone="fade">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
        <SectionHeading id="keunggulan" intro={advantage} className="lg:sticky lg:top-10" />

        <div className="overflow-hidden rounded-[1.75rem] border-2 border-forest-500 shadow-card md:max-w-2xl lg:max-w-none">
          <table aria-labelledby="keunggulan-title" className="w-full table-fixed border-collapse text-left">
            <colgroup>
              <col className="w-[55%]" />
              <col className="w-[45%]" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" className="bg-forest-700 px-3 py-4 text-center align-middle sm:px-5 sm:py-5">
                  <span className="flex flex-col items-center gap-2">
                    <span className="rounded-xl bg-white p-1">
                      <Logo alt="" className="h-9 w-auto sm:h-10" />
                    </span>
                    <span className="font-display text-[0.95rem] leading-tight font-extrabold text-white sm:text-[1.1rem]">
                      {columns.kalyca}
                    </span>
                  </span>
                </th>
                <th
                  scope="col"
                  className="bg-charcoal-950 px-3 py-4 text-center align-middle font-display text-[0.9rem] leading-tight font-bold text-charcoal-300 sm:px-5 sm:text-[1.05rem]"
                >
                  {columns.others}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.consideration}>
                  <th
                    scope="row"
                    className="border-t border-white/12 bg-forest-500 px-3 py-4 text-left align-middle font-normal sm:px-5"
                    {...statusAttrs(row)}
                  >
                    {/* Icons are inline: full cell width on phones, hanging indent from sm up. */}
                    <span className="block text-[0.72rem] leading-tight font-semibold text-leaf-50 sm:pl-8.5 sm:text-[0.78rem]">
                      {row.consideration}
                    </span>
                    <span
                      lang="en"
                      className="mt-1 block font-display text-[0.94rem] leading-snug font-bold wrap-break-word text-white sm:pl-8.5 sm:-indent-8.5 sm:text-[1.02rem]"
                    >
                      <CheckBadge className="mr-1.5 size-[1.05rem] align-middle indent-0 sm:mr-3 sm:size-5.5" />
                      {row.kalyca}
                    </span>
                  </th>
                  <td className="border-t border-white/[0.06] bg-charcoal-900 px-3 py-4 align-middle sm:px-5">
                    <span className="block text-[0.86rem] leading-snug wrap-break-word text-charcoal-300 sm:pl-7 sm:-indent-7 sm:text-[0.95rem]">
                      <CircleDashed
                        className="mr-1.5 inline size-[0.95rem] align-[-0.18em] text-charcoal-300/60 sm:mr-3 sm:size-4"
                        aria-hidden="true"
                      />
                      {row.others}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
