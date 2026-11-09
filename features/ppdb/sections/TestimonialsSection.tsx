import { Quote } from "lucide-react";
import { Photo } from "../components/Photo";
import { Section, SectionHeading } from "../components/Section";
import { Txt } from "../components/Txt";
import { VideoTestimonialCard } from "../components/VideoTestimonialCard";
import { isVisible, statusAttrs } from "../lib/status";
import type { QuoteTestimonial, TestimonialsContent, VideoTestimonial } from "../types";

function QuoteCard({ quote }: { quote: QuoteTestimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-[1.75rem] bg-white p-6 shadow-card ring-1 ring-forest-900/5 sm:p-7" {...statusAttrs(quote)}>
      <span className="flex size-11 items-center justify-center rounded-full bg-forest-900 text-sun-400" aria-hidden="true">
        <Quote className="size-5 fill-current" />
      </span>
      <blockquote className="mt-4 flex-1 text-[1rem] leading-relaxed text-ink-700 sm:text-[1.04rem]">
        “<Txt status={quote.status}>{quote.quote}</Txt>”
      </blockquote>
      <figcaption className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-forest-900/8 pt-4">
        <span className="font-display text-[0.95rem] font-extrabold text-forest-900">
          <Txt status={quote.status}>{quote.name}</Txt>
        </span>
        <span className="rounded-full bg-sun-400 px-2.5 py-0.5 text-[0.74rem] font-bold text-forest-950">
          <Txt status={quote.status}>{quote.meta}</Txt>
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialsSection({ testimonials }: { testimonials: TestimonialsContent }) {
  const items = testimonials.items.filter(isVisible);
  const videos = items.filter((item): item is VideoTestimonial => item.kind === "video");
  const quotes = items.filter((item): item is QuoteTestimonial => item.kind === "quote");

  return (
    <Section id="testimoni" tone="sky">
      <SectionHeading id="testimoni" intro={testimonials} />

      {quotes.length > 0 ? (
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {quotes.map((quote) => (
            <li key={quote.name + quote.meta}>
              <QuoteCard quote={quote} />
            </li>
          ))}
        </ul>
      ) : null}

      {videos.length > 0 ? (
        <>
          <p className="mt-12 font-display text-[0.8rem] font-extrabold tracking-[0.1em] text-forest-700 uppercase">
            Video testimoni
          </p>
          {/* Compact collage: three small tiles in one row on every screen, tap to play. */}
          <ul className="mt-4 grid max-w-2xl grid-cols-3 gap-2.5 sm:gap-4">
            {videos.map((video, index) => (
              <li key={video.driveFileId ?? video.youtubeId ?? index} {...statusAttrs(video)}>
                <VideoTestimonialCard
                  item={video}
                  compact
                  className="aspect-[9/14]"
                  poster={
                    video.poster ? (
                      <Photo slot={video.poster} ratio="auto" className="size-full" sizes="(min-width: 768px) 220px, 33vw" />
                    ) : null
                  }
                />
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </Section>
  );
}
