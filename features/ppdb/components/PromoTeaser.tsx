"use client";

import { useEffect, useState, type ReactNode } from "react";
import { endOfDay } from "./DeadlineText";

/**
 * One-line Early Bird teaser for the hero ("promo sedang berlangsung") with a live dot.
 * Hides itself on the visitor's clock once the Early Bird deadline (WIB) has passed.
 */
export function PromoTeaser({ deadline, children }: { deadline: string; children: ReactNode }) {
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    setEnded(new Date() > endOfDay(deadline));
  }, [deadline]);

  if (ended) return null;
  return (
    <p className="flex items-center gap-2.5 text-[0.95rem] leading-snug font-semibold text-forest-900">
      <span className="relative flex size-2.5 shrink-0" aria-hidden="true">
        <span className="absolute inset-0 animate-ping rounded-full bg-alert-600/70" />
        <span className="relative size-2.5 rounded-full bg-alert-600" />
      </span>
      <span>{children}</span>
    </p>
  );
}
