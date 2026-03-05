"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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
        duration: 0.8,
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
          <span className="section-number block mb-4">Latest</span>
          <h1 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.3em] text-[var(--accent)] font-normal mb-4">
            News
          </h1>
          <div className="divider-line" />
        </div>

        <div ref={gridRef} className="news-grid">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="news-card group block"
              style={{ opacity: 0 }}
            >
              <div className="overflow-hidden bg-[var(--surface)] transition-colors duration-500 group-hover:bg-[var(--surface-hover)]">
                {/* Image */}
                <div className="relative w-full h-[240px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Date overlay */}
                  <div className="absolute bottom-0 left-0 px-4 py-2.5 bg-[var(--background)]/80 backdrop-blur-sm">
                    <span className="font-[family-name:var(--font-body)] text-xs tracking-[0.25em] uppercase text-[var(--accent)] font-medium">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-[0.85rem] text-[var(--foreground)]/90 tracking-[0.04em] uppercase font-normal leading-snug transition-colors duration-500 group-hover:text-[var(--foreground)]">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
