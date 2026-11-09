"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export interface CarouselSlide {
  key: string;
  /** Server-rendered <Photo>. */
  image: ReactNode;
  title: string;
  event: string;
  name: string;
  attrs?: Record<string, string>;
}

interface AchievementCarouselProps {
  slides: CarouselSlide[];
  label: string;
  intervalMs?: number;
}

/**
 * Auto-sliding carousel built on native horizontal scroll-snap (swipe works everywhere).
 * Autoplay pauses on hover / focus / touch, when off-screen, and is off for
 * prefers-reduced-motion. A pause button satisfies WCAG 2.2.2.
 */
export function AchievementCarousel({ slides, label, intervalMs = 4000 }: AchievementCarouselProps) {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pausedUntil = useRef(0);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Track the slide that is mostly in view.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(items.indexOf(entry.target as HTMLElement));
        }
      },
      { root: el, threshold: 0.6 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [slides.length]);

  // Only autoplay while the carousel is on screen.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const el = track.current;
      if (!el || slides.length === 0) return;
      const target = el.children[(index + slides.length) % slides.length] as HTMLElement;
      el.scrollTo({ left: target.offsetLeft, behavior: reducedMotion ? "auto" : "smooth" });
    },
    [slides.length, reducedMotion],
  );

  useEffect(() => {
    if (!playing || hovered || !visible || reducedMotion || slides.length < 2) return;
    const timer = window.setTimeout(() => {
      if (Date.now() < pausedUntil.current) return;
      goTo(active + 1);
    }, intervalMs);
    return () => window.clearTimeout(timer);
  }, [active, playing, hovered, visible, reducedMotion, slides.length, intervalMs, goTo]);

  const holdAutoplay = () => {
    pausedUntil.current = Date.now() + 8000;
  };

  const buttonClass =
    "flex size-11 items-center justify-center rounded-full bg-white text-forest-900 shadow-card ring-1 ring-forest-900/10 transition-colors hover:bg-sky-50";

  return (
    <div
      ref={root}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onPointerEnter={(event) => event.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHovered(false);
      }}
      onTouchStart={holdAutoplay}
    >
      <ul
        ref={track}
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, index) => (
          <li
            key={slide.key}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} dari ${slides.length}: ${slide.title}`}
            className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-2rem)/3)]"
            {...slide.attrs}
          >
            <figure className="h-full overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-forest-900/5">
              {slide.image}
              <figcaption className="p-4 sm:p-5">
                <p className="font-display text-[1rem] leading-snug font-extrabold text-forest-900">{slide.title}</p>
                <p className="mt-1 text-[0.83rem] leading-snug text-ink-500">{slide.event}</p>
                <p className="mt-3 inline-flex rounded-full bg-sun-400 px-3 py-1 text-[0.76rem] font-bold text-forest-950">
                  {slide.name}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {slides.map((slide, index) => (
            <button
              key={slide.key}
              type="button"
              onClick={() => {
                holdAutoplay();
                goTo(index);
              }}
              aria-label={`Tampilkan prestasi ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all ${index === active ? "w-7 bg-forest-900" : "w-2.5 bg-forest-900/20 hover:bg-forest-900/40"}`}
            />
          ))}
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? "Jeda slide otomatis" : "Putar slide otomatis"}
            className={buttonClass}
          >
            {playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => {
              holdAutoplay();
              goTo(active - 1);
            }}
            aria-label="Prestasi sebelumnya"
            className={buttonClass}
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => {
              holdAutoplay();
              goTo(active + 1);
            }}
            aria-label="Prestasi berikutnya"
            className={buttonClass}
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
