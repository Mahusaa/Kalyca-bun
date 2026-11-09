import { Camera } from "lucide-react";
import type { CSSProperties } from "react";
import { asset, isProductionContent } from "../config";
import imageManifest from "../images.generated.json";
import { photoSlots, type PhotoSlotId } from "../photo-slots";

interface ManifestEntry {
  width: number;
  height: number;
  widths: number[];
  blur?: string;
}

const manifest = imageManifest as Record<string, ManifestEntry>;

interface PhotoProps {
  slot: PhotoSlotId;
  /** `sizes` attribute — how wide the photo renders at each breakpoint. */
  sizes: string;
  className?: string;
  /** Load eagerly with high priority (hero only). */
  priority?: boolean;
  /** Override the slot's aspect ratio for this usage. */
  ratio?: string;
}

type RatioStyle = CSSProperties & { "--ratio": string };

/**
 * Renders a slot's optimised photo (AVIF + WebP srcset from `npm run images`)
 * or, while the photo is missing, a marked placeholder describing what to shoot.
 */
export function Photo({ slot, sizes, className = "", priority = false, ratio }: PhotoProps) {
  const def = photoSlots[slot];
  const meta = manifest[slot];
  // Aspect ratio goes through a CSS variable so callers can override it per
  // breakpoint, e.g. className="lg:aspect-auto lg:h-full" to fill a grid cell.
  const ratioStyle: RatioStyle = { "--ratio": ratio ?? def.ratio };

  if (!meta) {
    if (isProductionContent) return null;
    return (
      <div
        className={`photo-ph relative flex aspect-(--ratio) flex-col items-center justify-center gap-2 overflow-hidden p-5 text-center ${className}`}
        style={ratioStyle}
        data-status="placeholder"
        data-source={`Slot foto: ${slot}`}
        role="img"
        aria-label={`Placeholder foto: ${def.alt}`}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 font-display text-[0.7rem] font-semibold tracking-[0.08em] text-forest-700 uppercase">
          <Camera className="size-3.5" aria-hidden="true" />
          Foto · {slot}
        </span>
        <span className="max-w-[28ch] text-[0.78rem] leading-snug text-ink-500">{def.brief}</span>
      </div>
    );
  }

  const base = asset(`/images/ppdb/${slot}`);
  const srcSet = (format: "avif" | "webp") =>
    meta.widths.map((w) => `${base}-${w}.${format} ${w}w`).join(", ");
  const fallbackWidth = meta.widths.find((w) => w >= 800) ?? meta.widths[meta.widths.length - 1];

  return (
    <picture className={`block aspect-(--ratio) overflow-hidden ${className}`} style={ratioStyle}>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      {/* Plain <img>: pre-optimised srcset works in static export and in any host app. */}
      <img
        src={`${base}-${fallbackWidth}.webp`}
        width={meta.width}
        height={meta.height}
        alt={def.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="size-full object-cover"
        style={{
          objectPosition: def.focus ?? "50% 50%",
          backgroundImage: meta.blur ? `url(${meta.blur})` : undefined,
          backgroundSize: "cover",
        }}
      />
    </picture>
  );
}
