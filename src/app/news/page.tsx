"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { newsItems } from "@/lib/data";
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
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
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
          <h1 className="section-title">News</h1>
          <div className="divider-line" />
        </div>

        <div ref={gridRef} className="news-grid">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="news-card group"
              style={{ opacity: 0 }}
            >
              <div className="overflow-hidden bg-[var(--card)] transition-colors duration-500 group-hover:bg-[var(--card-hover)]">
                {/* Image */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  />
                  {/* Date overlay */}
                  <div className="absolute bottom-0 left-0 px-4 py-2 bg-[var(--background)]/80 backdrop-blur-sm">
                    <span className="font-[family-name:var(--font-display)] text-[0.6rem] tracking-[0.25em] uppercase text-[var(--accent)]">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-[0.8rem] text-[var(--foreground)]/80 tracking-[0.08em] uppercase font-normal leading-snug mb-3 transition-colors duration-300 group-hover:text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[var(--muted)] font-light">
                    {item.description}
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
