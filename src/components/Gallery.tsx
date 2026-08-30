"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const columnClass: Record<number, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
};

const sizesFor: Record<number, string> = {
  2: "(max-width: 640px) 100vw, 50vw",
  3: "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw",
  4: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
};

interface GalleryProps {
  images: string[];
  /** Accessible label stem; each tile gets "<alt> — n". */
  alt: string;
  columns?: 2 | 3 | 4;
  /** Container aspect ratio. Images are contained, never cropped.
   *  Defaults to 16/9, close to the 980x474 source files so letterboxing stays small. */
  ratio?: string;
}

/**
 * One presentation system for every gallery on the site.
 *
 * Uniform containers with `object-contain` so no work is cropped or stretched,
 * a consistent gap so tiles never touch, and a thin border on every tile so
 * black-background photographs stay legible against the black page instead of
 * bleeding into it and into each other.
 */
export default function Gallery({
  images,
  alt,
  columns = 2,
  ratio = "16 / 9",
}: GalleryProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const ctx = gsap.context(() => {
      const tiles = gridRef.current!.querySelectorAll(".gallery-item");
      if (!tiles.length) return;
      gsap.fromTo(
        tiles,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [images]);

  if (!images.length) return null;

  return (
    <div ref={gridRef} className={`grid gap-4 ${columnClass[columns]}`}>
      {images.map((src, i) => (
        <div
          key={src + i}
          className="gallery-item relative overflow-hidden border border-white/10 bg-black/20"
          style={{ aspectRatio: ratio }}
        >
          <Image
            src={src}
            alt={`${alt} — ${i + 1}`}
            fill
            className="object-contain"
            sizes={sizesFor[columns]}
          />
        </div>
      ))}
    </div>
  );
}
