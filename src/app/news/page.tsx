"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/lib/data";
import gsap from "gsap";

const ITEMS_PER_PAGE = 8;

export default function NewsPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleItems = newsItems.slice(0, visibleCount);
  const hasMore = visibleCount < newsItems.length;

  // Animate cards on mount
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".news-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power3.out" }
    );
  }, []);

  // Animate new cards when more are loaded
  const animateNewCards = useCallback((startIndex: number) => {
    if (!gridRef.current) return;
    const allCards = gridRef.current.querySelectorAll(".news-card");
    const newCards = Array.from(allCards).slice(startIndex);
    gsap.fromTo(
      newCards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power3.out" }
    );
  }, []);

  const loadMore = () => {
    const prev = visibleCount;
    const next = Math.min(prev + ITEMS_PER_PAGE, newsItems.length);
    setVisibleCount(next);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => animateNewCards(prev));
    });
  };

  const renderCard = (item: (typeof newsItems)[0]) => (
    <Link
      key={item.id}
      href={`/news/${item.slug}`}
      className="news-card group block"
    >
      <div className="overflow-hidden bg-[var(--surface)] rounded-lg transition-colors duration-500 group-hover:bg-[var(--surface-hover)] h-[340px] flex flex-col">
        <div className="relative w-full h-[200px] shrink-0 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="p-5 flex flex-col justify-between flex-1">
          <h3 className="text-sm text-[var(--foreground)]/90 tracking-[0.04em] uppercase font-normal leading-snug transition-colors duration-500 group-hover:text-[var(--foreground)] line-clamp-2">
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
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h1 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.3em] text-[var(--accent)] font-normal mb-4">
            News
          </h1>
          <div className="divider-line" />
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {visibleItems.map(renderCard)}
        </div>

        {/* Load more button */}
        {hasMore && (
          <div className="flex justify-center pt-16">
            <button
              onClick={loadMore}
              className="px-8 py-3 border border-[var(--foreground)]/15 rounded-full text-xs tracking-[0.2em] uppercase text-[var(--muted)] font-medium transition-all duration-500 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
