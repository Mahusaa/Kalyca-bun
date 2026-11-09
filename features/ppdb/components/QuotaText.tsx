"use client";

import { useEffect, useState } from "react";

const TZ = "Asia/Jakarta";

const monthKey = (date: Date) =>
  new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "2-digit", timeZone: TZ }).format(date);

interface QuotaTextProps {
  perMonth: number;
  left: number;
  /** yyyy-mm that `left` applies to. */
  month: string;
}

/**
 * Monthly Early Bird quota. `left` is shown for its own month; in any later month the
 * fresh monthly allotment (`perMonth`) is shown, so a stale "sisa 1" never carries over.
 */
export function QuotaText({ perMonth, left, month }: QuotaTextProps) {
  const [count, setCount] = useState(left);

  useEffect(() => {
    setCount(monthKey(new Date()) === month ? left : perMonth);
  }, [perMonth, left, month]);

  return (
    <span className="urgency-blink block font-display text-[1.35rem] leading-tight font-extrabold text-alert-300">
      {count > 0 ? `Sisa ${count} kuota` : "Kuota bulan ini habis"}
    </span>
  );
}
