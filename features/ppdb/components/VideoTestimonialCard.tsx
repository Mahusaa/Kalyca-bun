"use client";

import { Play } from "lucide-react";
import { useRef, useState, type ReactNode } from "react";
import { asset } from "../config";
import type { VideoTestimonial } from "../types";

interface VideoTestimonialCardProps {
  item: VideoTestimonial;
  /** Server-rendered <Photo> used as the poster frame. */
  poster?: ReactNode;
  className?: string;
  /** Small collage tile: smaller play button, no title overlay. */
  compact?: boolean;
}

/**
 * Tap-to-play testimonial. Prefers a self-hosted MP4 (`videoSrc`, ~0.7 Mbps 540p with
 * faststart) played by the browser's native player; nothing is downloaded until the tap.
 * Falls back to a YouTube / Google Drive embed when no MP4 is available.
 */
export function VideoTestimonialCard({ item, poster, className = "", compact = false }: VideoTestimonialCardProps) {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const embedSrc = item.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`
    : item.driveFileId
      ? `https://drive.google.com/file/d/${item.driveFileId}/preview`
      : "";

  const start = () => {
    setStarted(true);
    // play() inside the tap handler, so mobile browsers allow playback with sound.
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    video?.play().catch(() => undefined);
    // Collage tiles are small: open the player fullscreen (iOS Safari only allows its own fullscreen API).
    if (compact && video) {
      if (video.requestFullscreen) video.requestFullscreen().catch(() => undefined);
      else video.webkitEnterFullscreen?.();
    }
  };

  return (
    <div className={`relative overflow-hidden bg-forest-950 ${compact ? "rounded-2xl" : "rounded-3xl"} ${className}`}>
      {item.videoSrc ? (
        <video
          ref={videoRef}
          src={asset(item.videoSrc)}
          preload="none"
          playsInline
          controls={started}
          aria-label={`${item.title} — ${item.caption}`}
          className={`absolute inset-0 size-full object-contain ${started ? "" : "invisible"}`}
        />
      ) : started && embedSrc ? (
        <iframe
          src={embedSrc}
          title={`${item.title} — ${item.caption}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      ) : null}

      {!started ? (
        <button
          type="button"
          onClick={start}
          className="on-dark group absolute inset-0 text-left text-white"
          aria-label={`Putar video: ${item.title} (${item.caption})`}
        >
          {poster ? <span className="absolute inset-0">{poster}</span> : null}
          <span
            className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/15 to-transparent"
            aria-hidden="true"
          />
          {compact ? null : (
            <span className="absolute top-4 left-4 rounded-full bg-forest-950/60 px-2.5 py-1 font-display text-[0.7rem] font-semibold tracking-[0.14em] text-sun-400 uppercase backdrop-blur-sm">
              {item.caption}
            </span>
          )}
          <span className="absolute inset-0 flex items-center justify-center">
            <span
              className={`flex items-center justify-center rounded-full bg-white/90 text-forest-900 shadow-float transition-transform duration-300 ease-soft group-hover:scale-105 ${
                compact ? "size-10 sm:size-14" : "size-14 sm:size-16"
              }`}
            >
              <Play className={`ml-0.5 fill-current ${compact ? "size-4 sm:size-6" : "size-6"}`} aria-hidden="true" />
            </span>
          </span>
          {compact ? null : (
            <span className="absolute inset-x-4 bottom-4 font-display text-[0.98rem] leading-snug font-semibold sm:text-[1.05rem]">
              {item.title}
            </span>
          )}
        </button>
      ) : null}
    </div>
  );
}
