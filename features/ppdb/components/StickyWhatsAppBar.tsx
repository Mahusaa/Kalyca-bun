"use client";

import { useEffect, useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";

interface StickyWhatsAppBarProps {
  label: string;
  /** The bar appears once this element is reached (in view or scrolled past). */
  revealFromId: string;
  /** Element that hides the bar again while visible (final CTA). */
  hideWhenVisibleId: string;
}

/**
 * Sticky WhatsApp CTA for the last part of the page only: it appears from the
 * investment section onwards (visitors read the brochure first — intent filter)
 * and hides at the closing section so it never doubles the final CTA or covers
 * the footer. Respects the iOS home-indicator safe area.
 */
export function StickyWhatsAppBar({ label, revealFromId, hideWhenVisibleId }: StickyWhatsAppBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reveal = document.getElementById(revealFromId);
    const hide = document.getElementById(hideWhenVisibleId);
    if (!reveal || !hide) return;

    // Position-based (not IntersectionObserver) so big jumps — anchor links,
    // "back to top" — always leave the bar in the right state.
    let frame = 0;
    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const reached = reveal.getBoundingClientRect().top < viewport * 0.85;
      const closing = hide.getBoundingClientRect();
      const closingInView = closing.top < viewport && closing.bottom > 0;
      setVisible(reached && !closingInView);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [revealFromId, hideWhenVisibleId]);

  return (
    <div
      inert={!visible}
      className={[
        "pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.85rem,env(safe-area-inset-bottom))] sm:px-6",
        "transition-[transform,opacity] duration-300 ease-soft",
        visible ? "translate-y-0 opacity-100" : "translate-y-[130%] opacity-0",
      ].join(" ")}
    >
      <div className="pointer-events-auto mx-auto max-w-md sm:mr-0 sm:ml-auto sm:max-w-xs">
        <WhatsAppButton location="sticky" fullWidth className="ring-4 ring-white/70">
          {label}
        </WhatsAppButton>
      </div>
    </div>
  );
}
