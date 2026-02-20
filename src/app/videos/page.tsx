"use client";

import { useEffect, useRef } from "react";
import { videoItems } from "@/lib/data";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideosPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".video-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h1 className="section-title">Videos</h1>
          <div className="divider-line" />
        </div>

        <div ref={gridRef} className="video-grid">
          {videoItems.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card group block"
              style={{ opacity: 0 }}
            >
              <div className="overflow-hidden bg-[var(--card)]">
                {/* YouTube thumbnail */}
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100"
                    unoptimized
                  />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center w-14 h-14 border border-white/20 bg-black/30 backdrop-blur-sm transition-all duration-500 group-hover:border-[var(--accent)]/50 group-hover:scale-110 group-hover:bg-black/50">
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                        <path d="M14 8L0 16V0L14 8Z" fill="currentColor" className="text-white/70 transition-all duration-500 group-hover:text-[var(--accent)]" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="px-5 py-4 border-t border-white/[0.03]">
                  <h3 className="font-[family-name:var(--font-display)] text-[0.75rem] text-[var(--foreground)]/80 tracking-[0.1em] uppercase font-normal mb-1 transition-colors duration-300 group-hover:text-[var(--foreground)]">
                    {video.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-xs text-[var(--muted)] font-light italic">
                    {video.venue}
                    {video.venue && " \u00B7 "}
                    {video.year}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
