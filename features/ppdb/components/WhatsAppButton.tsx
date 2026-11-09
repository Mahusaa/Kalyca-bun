"use client";

import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { getAttribution } from "../lib/attribution";
import { trackWhatsAppClick } from "../lib/tracking";
import { getVisitorCode } from "../lib/visitor";
import { buildWhatsAppUrl, type CtaLocation } from "../lib/whatsapp";
import { WhatsAppIcon } from "./BrandIcons";

type Variant = "primary" | "secondary" | "sun" | "ghost";
type Size = "lg" | "md" | "icon";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-900 text-white shadow-float hover:bg-forest-800 active:bg-forest-950",
  secondary:
    "bg-white text-forest-900 ring-1 ring-inset ring-forest-900/15 hover:ring-forest-900/40",
  sun: "bg-sun-400 text-forest-950 hover:bg-sun-200 active:bg-sun-400",
  ghost: "text-forest-900 ring-1 ring-inset ring-forest-900/20 hover:bg-forest-900/5",
};

const sizes: Record<Size, string> = {
  lg: "min-h-14 px-6 text-[1.02rem] gap-2.5",
  md: "min-h-12 px-5 text-[0.95rem] gap-2",
  icon: "size-11 justify-center",
};

interface WhatsAppButtonProps {
  location: CtaLocation;
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  id?: string;
  /** Required for icon-only buttons. */
  ariaLabel?: string;
}

/**
 * Every WhatsApp CTA on the page goes through this component, so the number,
 * message, reference code and tracking stay consistent.
 */
export function WhatsAppButton({
  location,
  children,
  variant = "primary",
  size = "lg",
  fullWidth = false,
  className = "",
  id,
  ariaLabel,
}: WhatsAppButtonProps) {
  // Server HTML gets the plain link; the browser adds UTM context and the visitor code after load.
  const [href, setHref] = useState(() => buildWhatsAppUrl(location));

  useEffect(() => {
    setHref(buildWhatsAppUrl(location, getAttribution(), getVisitorCode()));
  }, [location]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const attribution = getAttribution();
    event.currentTarget.href = buildWhatsAppUrl(location, attribution, getVisitorCode());
    trackWhatsAppClick(location, attribution);
  };

  return (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={ariaLabel}
      data-cta="whatsapp"
      data-cta-location={location}
      className={[
        "inline-flex items-center justify-center rounded-full font-body font-bold tracking-[-0.01em]",
        "transition-[background-color,box-shadow,transform] duration-200 ease-soft active:scale-[0.98]",
        variants[variant],
        sizes[size],
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
    >
      <WhatsAppIcon className={size === "icon" ? "size-5" : "size-[1.3em] shrink-0"} />
      {children ? <span>{children}</span> : null}
      {children ? <span className="sr-only"> (membuka WhatsApp)</span> : null}
    </a>
  );
}
