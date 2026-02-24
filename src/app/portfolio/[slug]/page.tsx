"use client";

import { use, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { portfolioItems } from "@/lib/data";

export default function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const itemIndex = portfolioItems.findIndex((item) => item.slug === slug);
  const item = portfolioItems[itemIndex];
  const prevItem = itemIndex > 0 ? portfolioItems[itemIndex - 1] : null;
  const nextItem =
    itemIndex < portfolioItems.length - 1
      ? portfolioItems[itemIndex + 1]
      : null;

  useEffect(() => {
    if (!item) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.2 }
      );
    }

    if (textRef.current) {
      tl.fromTo(
        textRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        "-=0.6"
      );
    }

    if (navRef.current) {
      tl.fromTo(
        navRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      );
    }
  }, [item]);

  if (!item) {
    return (
      <section className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center">
        <p className="font-[family-name:var(--font-display)] text-[0.75rem] uppercase tracking-[0.3em] text-[var(--muted)] mb-8">
          Work not found
        </p>
        <Link
          href="/portfolio"
          className="text-[var(--accent)] text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-body)] hover:text-[var(--foreground)] transition-colors duration-500"
        >
          &larr; Back to Portfolio
        </Link>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-24 min-h-screen">
      {/* Back link */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-[var(--muted)] text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-body)] hover:text-[var(--accent)] transition-colors duration-500"
        >
          <span className="inline-block w-8 h-px bg-current" />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero image */}
      <div
        ref={imageRef}
        className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 mb-16 opacity-0"
      >
        <div className="relative w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Details */}
      <div
        ref={textRef}
        className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12"
      >
        <div className="max-w-2xl">
          <div className="divider-line mb-8" />

          <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.08em] font-normal text-[var(--foreground)] mb-4">
            {item.title}
          </h1>

          {item.venue && (
            <p className="font-[family-name:var(--font-body)] text-base text-[var(--muted)] font-light mb-3">
              {item.venue}
            </p>
          )}

          <p className="font-[family-name:var(--font-body)] text-sm text-[var(--accent)] tracking-[0.15em] font-medium mb-6">
            {item.year}
          </p>

          <span className="inline-block px-3 py-1.5 border border-[var(--foreground)]/8 text-[var(--muted)] text-[0.65rem] uppercase tracking-[0.2em] font-[family-name:var(--font-body)]">
            {item.category}
          </span>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div
        ref={navRef}
        className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 mt-24 opacity-0"
      >
        <div className="h-px w-full bg-[var(--foreground)]/8 mb-10" />
        <div className="flex justify-between items-center">
          {prevItem ? (
            <Link
              href={`/portfolio/${prevItem.slug}`}
              className="group flex flex-col gap-1"
            >
              <span className="text-[var(--muted)] text-[0.65rem] uppercase tracking-[0.2em] font-[family-name:var(--font-body)] group-hover:text-[var(--accent)] transition-colors duration-500">
                &larr; Previous
              </span>
              <span className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.06em] text-[var(--foreground)]/60 group-hover:text-[var(--foreground)] transition-colors duration-500">
                {prevItem.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextItem ? (
            <Link
              href={`/portfolio/${nextItem.slug}`}
              className="group flex flex-col gap-1 items-end text-right"
            >
              <span className="text-[var(--muted)] text-[0.65rem] uppercase tracking-[0.2em] font-[family-name:var(--font-body)] group-hover:text-[var(--accent)] transition-colors duration-500">
                Next &rarr;
              </span>
              <span className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.06em] text-[var(--foreground)]/60 group-hover:text-[var(--foreground)] transition-colors duration-500">
                {nextItem.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
