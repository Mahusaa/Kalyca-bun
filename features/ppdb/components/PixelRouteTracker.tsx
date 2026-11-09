"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * The Pixel base code tracks PageView on the first load only. This records one
 * for each client-side navigation (next/link) after that.
 */
export function PixelRouteTracker() {
  const pathname = usePathname();
  const lastPathname = useRef(pathname);

  useEffect(() => {
    if (lastPathname.current === pathname) return;
    lastPathname.current = pathname;
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
