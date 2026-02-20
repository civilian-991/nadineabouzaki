"use client";

import { useEffect, useRef } from "react";
import { videoItems } from "@/lib/data";
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
            <div
              key={video.id}
              className="video-card group"
              style={{ opacity: 0 }}
            >
              <div className="overflow-hidden bg-[var(--card)]">
                {/* Video thumbnail */}
                <div
                  className="relative flex items-center justify-center overflow-hidden"
                  style={{ aspectRatio: "16/9" }}
                >
                  {/* Gradient bg */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0d] via-[#151413] to-[#0e0e0d] transition-all duration-700 group-hover:scale-105" />

                  {/* Subtle grid */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(232,228,222,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(232,228,222,0.3) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Play button */}
                  <div className="relative flex items-center justify-center w-14 h-14 border border-[var(--accent)]/20 transition-all duration-500 group-hover:border-[var(--accent)]/50 group-hover:scale-110">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                      <path d="M14 8L0 16V0L14 8Z" fill="currentColor" className="text-[var(--accent)]/50 transition-all duration-500 group-hover:text-[var(--accent)]" />
                    </svg>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
