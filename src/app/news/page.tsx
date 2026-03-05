"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/lib/data";
import gsap from "gsap";

export default function NewsPage() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (!sliderRef.current) return;
    const cards = sliderRef.current.querySelectorAll(".news-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power3.out" }
    );
  }, []);

  const updateScrollButtons = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    updateScrollButtons();
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.clientWidth * 0.75;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Split items into two rows
  const half = Math.ceil(newsItems.length / 2);
  const topRow = newsItems.slice(0, half);
  const bottomRow = newsItems.slice(half);

  const renderCard = (item: (typeof newsItems)[0]) => (
    <Link
      key={item.id}
      href={`/news/${item.slug}`}
      className="news-card group block shrink-0 w-[320px]"
    >
      <div className="overflow-hidden bg-[var(--surface)] rounded-lg transition-colors duration-500 group-hover:bg-[var(--surface-hover)]">
        <div className="relative w-full h-[200px] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="320px"
          />
        </div>
        <div className="p-5">
          <h3 className="text-sm text-[var(--foreground)]/90 tracking-[0.04em] uppercase font-normal leading-snug transition-colors duration-500 group-hover:text-[var(--foreground)] mb-2.5 line-clamp-2">
            {item.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="w-4 h-px bg-[var(--accent)]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[var(--muted)] font-medium">
              {item.date}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <section className="min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h1 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.3em] text-[var(--accent)] font-normal mb-4">
              News
            </h1>
            <div className="divider-line" />
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-[var(--foreground)]/15 flex items-center justify-center text-[var(--foreground)]/60 transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-20 disabled:cursor-default"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-[var(--foreground)]/15 flex items-center justify-center text-[var(--foreground)]/60 transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-20 disabled:cursor-default"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="overflow-x-auto scrollbar-hide px-6 md:px-8 lg:px-12"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex flex-col gap-5 w-max">
          {/* Top row */}
          <div className="flex gap-5">
            {topRow.map(renderCard)}
          </div>
          {/* Bottom row */}
          <div className="flex gap-5">
            {bottomRow.map(renderCard)}
          </div>
        </div>
      </div>
    </section>
  );
}
