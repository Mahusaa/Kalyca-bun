import type { SVGProps } from "react";

// Brand glyphs (paths from Simple Icons, CC0). Lucide no longer ships brand icons.

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Line icon for "Islamic Holistic Education" (Lucide has no mosque icon). */
export function MosqueIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12.6 2.6a1.9 1.9 0 1 0 1.3 3.4 1.5 1.5 0 1 1-1.3-3.4z" />
      <path d="M12 7.5v1.5" />
      <path d="M6 14a6 5 0 0 1 12 0" />
      <path d="M4.5 14h15v7h-15z" />
      <path d="M10 21v-3a2 2 0 0 1 4 0v3" />
      <path d="M2.5 21h19" />
    </svg>
  );
}

/** Decorative leaf, as on the PPDB posters. Colour via text-* classes. */
export function Leaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 72" aria-hidden="true" focusable="false" {...props}>
      <path d="M4 40C28 6 78 2 116 24 80 66 30 70 4 40Z" fill="currentColor" />
      <path d="M10 39c35-6 70-11 102-14" fill="none" stroke="#fff" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** Decorative dandelion — the seed head from Kalyca's crest. */
export function Dandelion({ seeds = 14, ...props }: SVGProps<SVGSVGElement> & { seeds?: number }) {
  const rays = Array.from({ length: seeds }, (_, i) => {
    const angle = (Math.PI * 2 * i) / seeds - Math.PI / 2;
    const long = i % 2 === 0;
    const r = long ? 74 : 52;
    return {
      x: 100 + Math.cos(angle) * r,
      y: 100 + Math.sin(angle) * r,
      dot: long ? 5.5 : 3.6,
    };
  });
  return (
    <svg viewBox="0 0 200 260" fill="none" aria-hidden="true" focusable="false" {...props}>
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        {rays.map((ray, i) => (
          <line key={i} x1="100" y1="100" x2={ray.x.toFixed(1)} y2={ray.y.toFixed(1)} />
        ))}
        <path d="M100 106 C 102 160, 96 205, 104 256" />
      </g>
      <g fill="currentColor">
        <circle cx="100" cy="100" r="8" />
        {rays.map((ray, i) => (
          <circle key={i} cx={ray.x.toFixed(1)} cy={ray.y.toFixed(1)} r={ray.dot} />
        ))}
      </g>
    </svg>
  );
}
