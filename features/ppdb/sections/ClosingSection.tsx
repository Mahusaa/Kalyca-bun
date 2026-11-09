import { ArrowUpRight, MapPin } from "lucide-react";
import { lpwaConfig } from "../config";
import { InstagramIcon, WhatsAppIcon } from "../components/BrandIcons";
import { Photo } from "../components/Photo";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { renderRichText } from "../lib/rich-text";
import { statusAttrs } from "../lib/status";
import type { ClosingContent, SchoolInfo } from "../types";

export function ClosingSection({ closing, school }: { closing: ClosingContent; school: SchoolInfo }) {
  return (
    <section id="penutup" aria-labelledby="penutup-title" className="bg-white pt-4 pb-16 sm:pb-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-forest-900/5 lg:grid lg:grid-cols-[1fr_1.1fr]">
          <Photo
            slot={closing.photo}
            sizes="(min-width: 1024px) 540px, 100vw"
            className="lg:aspect-auto lg:h-full lg:min-h-[28rem]"
          />

          <div className="p-6 sm:p-10 lg:p-12">
            <h2
              id="penutup-title"
              className="text-[1.75rem] leading-[1.1] font-extrabold tracking-[-0.025em] italic sm:text-[2.3rem]"
              {...statusAttrs(closing)}
            >
              {renderRichText(closing.title)}
            </h2>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-500">{closing.text}</p>

            <WhatsAppButton location="penutup" fullWidth className="mt-7 sm:w-auto">
              {closing.cta.label}
            </WhatsAppButton>

            <ul className="mt-8 space-y-4 border-t border-forest-900/10 pt-6 text-[0.9rem] leading-snug text-ink-700">
              <li className="flex gap-3" {...statusAttrs(school.address)}>
                <MapPin className="mt-0.5 size-5 shrink-0 text-forest-700" aria-hidden="true" />
                <span>
                  {school.address.street}
                  <br />
                  {school.address.area}
                  <br />
                  <a
                    href={school.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 font-semibold text-forest-800 underline decoration-sage-300 decoration-2 underline-offset-4 hover:decoration-forest-700"
                  >
                    Buka Google Maps
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="size-5 shrink-0 text-forest-700" />
                <span>
                  WhatsApp Admission: <span className="font-semibold">{lpwaConfig.whatsapp.displayNumber}</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon className="size-5 shrink-0 text-forest-700" />
                <a
                  href={school.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-forest-800 underline decoration-sage-300 decoration-2 underline-offset-4 hover:decoration-forest-700"
                >
                  {school.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
