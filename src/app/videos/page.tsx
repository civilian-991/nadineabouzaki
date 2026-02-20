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
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
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
    <section className="min-h-screen pt-24 pb-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title mb-10">Videos</h1>

        <div ref={gridRef} className="video-grid">
          {videoItems.map((video) => (
            <div
              key={video.id}
              className="video-card reveal"
              style={{ opacity: 0 }}
            >
              <div
                className="overflow-hidden"
                style={{ backgroundColor: "#1a1a1a", borderRadius: "2px" }}
              >
                {/* Video thumbnail placeholder */}
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    aspectRatio: "16/9",
                    background:
                      "linear-gradient(135deg, #141414 0%, #1e1e1e 50%, #141414 100%)",
                  }}
                >
                  {/* Decorative film-strip lines */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(255,255,255,0.3) 48px, rgba(255,255,255,0.3) 49px)",
                    }}
                  />

                  {/* Play button */}
                  <div
                    className="relative flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                    style={{
                      width: "56px",
                      height: "56px",
                      backgroundColor: "rgba(201, 169, 110, 0.15)",
                      border: "2px solid rgba(201, 169, 110, 0.4)",
                    }}
                  >
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="none"
                      style={{ marginLeft: "3px" }}
                    >
                      <path
                        d="M20 12L0 24V0L20 12Z"
                        fill="rgba(201, 169, 110, 0.7)"
                      />
                    </svg>
                  </div>
                </div>

                {/* Card info */}
                <div className="px-5 py-4">
                  <h3
                    className="text-[var(--foreground)] text-sm font-medium leading-snug mb-1"
                    style={{
                      fontFamily:
                        "var(--font-ubuntu-condensed), sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {video.title}
                  </h3>
                  <p
                    className="text-xs"
                    style={{ color: "var(--muted)" }}
                  >
                    {video.venue}
                    {video.venue && " · "}
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
