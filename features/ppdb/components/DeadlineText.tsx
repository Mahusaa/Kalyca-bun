"use client";

import { useEffect, useState } from "react";

const TZ = "Asia/Jakarta";

/** Last moment of the given day in WIB. */
export const endOfDay = (isoDate: string) => new Date(`${isoDate}T23:59:59+07:00`);

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric", timeZone: TZ }).format(date);

const monthKey = (date: Date) =>
  new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "2-digit", timeZone: TZ }).format(date);

interface DeadlineState {
  headline: string;
  detail: string;
  ended: boolean;
}

/**
 * Early Bird period computed from the REAL last day (WIB), on the visitor's clock:
 *   same month  → "Berakhir pada bulan ini"
 *   later month → "Berakhir 31 Desember 2026"
 *   passed      → "Periode Early Bird telah berakhir"
 * Static HTML shows the plain date until the browser computes the rest.
 */
export function DeadlineText({ date }: { date: string }) {
  const [state, setState] = useState<DeadlineState>(() => ({
    headline: `Berakhir ${formatDate(endOfDay(date))}`,
    detail: "",
    ended: false,
  }));

  useEffect(() => {
    const end = endOfDay(date);
    const now = new Date();
    if (now > end) {
      setState({ headline: "Periode Early Bird telah berakhir", detail: "Tanyakan promo terbaru ke Tim Admission", ended: true });
      return;
    }
    setState({
      headline: monthKey(now) === monthKey(end) ? "Berakhir pada bulan ini" : `Berakhir ${formatDate(end)}`,
      detail: "",
      ended: false,
    });
  }, [date]);

  return (
    <>
      <span
        className={`block font-display text-[1.35rem] leading-tight font-extrabold text-alert-300 ${state.ended ? "" : "urgency-blink"}`}
      >
        {state.headline}
      </span>
      {state.detail ? <span className="mt-1 block text-[0.85rem] font-semibold text-white/75">{state.detail}</span> : null}
    </>
  );
}
