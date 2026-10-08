"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoEmbedProps {
  videoId: string;
  title: string;
  /** "large" is the standard performance-video width used on every project page. */
  size?: "large" | "small";
}

const widthClass = {
  large: "max-w-[960px]",
  small: "max-w-[560px]",
};

/**
 * One video format for every Portfolio page: a 16:9 frame that shows the
 * YouTube poster until clicked, then swaps in the player. Nothing is loaded
 * from YouTube until the visitor asks for it.
 */
export default function VideoEmbed({
  videoId,
  title,
  size = "large",
}: VideoEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className={`w-full ${widthClass[size]}`}>
      <div
        className="relative overflow-hidden border border-white/20 bg-[var(--surface)]"
        style={{ aspectRatio: "16 / 9" }}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full"
            aria-label={`Play video: ${title}`}
          >
            <Image
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt=""
              fill
              className="object-cover filter brightness-[0.75] transition-all duration-700 group-hover:brightness-95"
              unoptimized
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center border border-white/25 bg-black/30 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--accent)]/50">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                  <path
                    d="M14 8L0 16V0L14 8Z"
                    fill="currentColor"
                    className="text-white/85 transition-colors duration-500 group-hover:text-[var(--accent)]"
                  />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-medium">
        {title}
      </figcaption>
    </figure>
  );
}
