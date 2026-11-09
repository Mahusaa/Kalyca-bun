import { MapPin, Phone } from "lucide-react";
import { asset, lpwaConfig } from "../config";
import type { SchoolInfo } from "../types";
import { InstagramIcon } from "./BrandIcons";

export function Logo({ className = "", alt = "Logo Kalyca Azzahra School" }: { className?: string; alt?: string }) {
  return (
    <picture>
      <source type="image/webp" srcSet={`${asset("/brand/kalyca-logo-96.webp")} 1x, ${asset("/brand/kalyca-logo-192.webp")} 2x`} />
      <img
        src={asset("/brand/kalyca-logo-192.png")}
        width={103}
        height={96}
        alt={alt}
        className={className}
      />
    </picture>
  );
}

function SekolahRamahAnakLogo({ className = "" }: { className?: string }) {
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={`${asset("/brand/sekolah-ramah-anak-96.webp")} 1x, ${asset("/brand/sekolah-ramah-anak-192.webp")} 2x`}
      />
      <img
        src={asset("/brand/sekolah-ramah-anak-192.png")}
        width={101}
        height={96}
        alt="Sekolah Ramah Anak"
        className={className}
      />
    </picture>
  );
}

/** Header card from the PPDB poster template: logo · name + level chips · Sekolah Ramah Anak. */
export function SiteHeader({ school }: { school: SchoolInfo }) {
  return (
    <header className="relative z-20 px-3 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 rounded-b-[1.75rem] bg-white px-3 py-3 shadow-card sm:gap-6 sm:rounded-b-[2.5rem] sm:px-8 sm:py-4">
        <a href="#beranda" className="shrink-0 rounded-xl">
          <Logo className="h-11 w-auto sm:h-14" />
        </a>
        <div className="min-w-0 flex-1 text-center">
          <p className="font-display text-[0.86rem] leading-tight font-extrabold tracking-[-0.01em] text-forest-900 uppercase sm:text-[1.4rem]">
            {school.name}
          </p>
          <ul className="mt-1.5 flex flex-wrap justify-center gap-1 sm:mt-2 sm:gap-2">
            {school.levels.map((level) => (
              <li
                key={level.name}
                className="rounded-full bg-sun-400 px-2 py-0.5 text-[0.62rem] font-bold whitespace-nowrap text-forest-950 sm:px-3 sm:text-[0.76rem]"
              >
                <span className="sm:hidden">{level.detail}</span>
                <span className="hidden sm:inline">
                  {level.name} ({level.detail})
                </span>
              </li>
            ))}
          </ul>
        </div>
        <SekolahRamahAnakLogo className="h-11 w-auto shrink-0 sm:h-14" />
      </div>
    </header>
  );
}

/** Dark green footer band from the poster template. */
export function SiteFooter({ school, campaignLabel }: { school: SchoolInfo; campaignLabel: string }) {
  const iconWrap = "flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-forest-900";
  return (
    <footer className="on-dark rounded-t-[2.5rem] bg-forest-900 text-white sm:rounded-t-[3.5rem]">
      <div className="mx-auto w-full max-w-6xl px-6 pt-10 pb-8 sm:px-8">
        <ul className="flex flex-col gap-4 text-[0.95rem] sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10">
          <li>
            <a href={school.instagram.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-full">
              <span className={iconWrap}>
                <InstagramIcon className="size-5" />
              </span>
              {school.instagram.handle.replace("@", "")}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <span className={iconWrap}>
              <Phone className="size-[1.1rem]" aria-hidden="true" />
            </span>
            {lpwaConfig.whatsapp.displayNumber}
          </li>
          <li className="flex items-center gap-3">
            <span className={iconWrap}>
              <MapPin className="size-[1.1rem]" aria-hidden="true" />
            </span>
            {school.address.line}
          </li>
        </ul>
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <span className="rounded-2xl bg-white p-1.5">
              <Logo className="h-10 w-auto" />
            </span>
            <div>
              <p className="font-display text-[0.95rem] font-extrabold text-white uppercase">{school.name}</p>
              <p className="text-[0.8rem] text-white/70">{school.foundation}</p>
            </div>
          </div>
          <p className="text-[0.78rem] text-white/55">
            © 2026 {school.name} · {campaignLabel}
          </p>
        </div>
      </div>
    </footer>
  );
}
