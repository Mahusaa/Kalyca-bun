"use client";

import { useEffect, useState } from "react";
import { getAttribution } from "../lib/attribution";
import { trackViewContent } from "../lib/tracking";

/** Fires the optional ViewContent event once, when the section is first seen. */
export function ViewContentTracker({ sectionId }: { sectionId: string }) {
  useEffect(() => {
    const target = document.getElementById(sectionId);
    if (!target) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          trackViewContent(sectionId, getAttribution());
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [sectionId]);
  return null;
}

/** Captures UTM parameters as early as possible (before any CTA is clicked). */
export function AttributionCapture() {
  useEffect(() => {
    getAttribution();
  }, []);
  return null;
}

/**
 * Review mode for preview builds: open the page with ?review=1 to outline
 * every block that still needs Kalyca's confirmation, with its source.
 */
export function ReviewMode() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("review") === "1") {
      document.documentElement.dataset.review = "on";
      setActive(true);
    }
  }, []);

  if (!active) return null;
  return (
    <div className="fixed top-3 left-1/2 z-50 w-[min(94vw,34rem)] -translate-x-1/2 rounded-2xl bg-stone-900/95 px-4 py-3 text-[0.78rem] leading-snug text-white shadow-lg">
      <strong className="font-display">Mode review</strong> — garis kuning: perlu konfirmasi Kalyca ·
      garis oranye: placeholder (tidak tampil di production). Label kecil = sumber informasi.
    </div>
  );
}
