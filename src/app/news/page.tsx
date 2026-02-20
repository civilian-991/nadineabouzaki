"use client";

import { useEffect, useRef } from "react";
import { newsItems } from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NewsPage() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const cards = gridRef.current.querySelectorAll(".news-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
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
        <h1 className="section-title mb-10">News</h1>

        <div ref={gridRef} className="news-grid">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="news-card reveal"
              style={{
                opacity: 0,
                backgroundColor: "#1a1a1a",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              {/* Image */}
              <PlaceholderImage
                title={item.title}
                aspectRatio="16/10"
                className="w-full"
              />

              {/* Content */}
              <div className="px-5 py-5">
                {/* Date badge */}
                <span
                  className="inline-block text-xs tracking-wider uppercase mb-3 px-3 py-1"
                  style={{
                    fontFamily: "var(--font-ubuntu-condensed), sans-serif",
                    color: "var(--accent)",
                    backgroundColor: "rgba(201, 169, 110, 0.1)",
                    border: "1px solid rgba(201, 169, 110, 0.2)",
                  }}
                >
                  {item.date}
                </span>

                <h3
                  className="text-[var(--foreground)] text-sm font-medium leading-snug mb-2"
                  style={{
                    fontFamily: "var(--font-ubuntu-condensed), sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--muted)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
