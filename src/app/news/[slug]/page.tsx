"use client";

import { use, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/lib/data";
import gsap from "gsap";

export default function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentIndex = newsItems.findIndex((item) => item.slug === slug);
  const item = currentIndex !== -1 ? newsItems[currentIndex] : null;
  const prevItem = currentIndex > 0 ? newsItems[currentIndex - 1] : null;
  const nextItem =
    currentIndex < newsItems.length - 1 ? newsItems[currentIndex + 1] : null;

  useEffect(() => {
    if (!item) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.02 },
        { opacity: 1, scale: 1, duration: 1 }
      );
    }

    if (contentRef.current) {
      tl.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
        "-=0.5"
      );
    }
  }, [item]);

  if (!item) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.2em] text-[var(--foreground)] mb-4">
            Not Found
          </h1>
          <p className="font-[family-name:var(--font-body)] text-base text-[var(--muted)] mb-8">
            This news item could not be found.
          </p>
          <Link
            href="/news"
            className="font-[family-name:var(--font-body)] text-sm tracking-[0.2em] uppercase text-[var(--accent)] hover:text-[var(--foreground)] transition-colors duration-300"
          >
            &larr; Back to News
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-8 lg:px-12">
      <div className="max-w-[900px] mx-auto">
        {/* Back link */}
        <Link
          href="/news"
          className="inline-block font-[family-name:var(--font-body)] text-sm tracking-[0.25em] uppercase text-[var(--accent)] hover:text-[var(--foreground)] transition-colors duration-300 mb-12"
        >
          &larr; Back to News
        </Link>

        {/* Hero image */}
        <div
          ref={imageRef}
          className="relative w-full overflow-hidden mb-12"
          style={{ opacity: 0 }}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Content */}
        <div ref={contentRef}>
          {/* Date */}
          <span className="block font-[family-name:var(--font-body)] text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-medium mb-6">
            {item.date}
          </span>

          {/* Title */}
          <h1 className="font-[family-name:var(--font-display)] text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.06em] text-[var(--foreground)] font-normal leading-tight mb-10">
            {item.title}
          </h1>

          {/* Divider */}
          <div className="divider-line mb-10" />

          {/* Description */}
          <p className="font-[family-name:var(--font-body)] text-base md:text-lg leading-[1.9] text-[var(--muted)] font-light max-w-[750px]">
            {item.description}
          </p>
        </div>

        {/* Prev / Next navigation */}
        <div className="mt-24 pt-10 border-t border-[var(--foreground)]/10">
          <div className="flex justify-between items-start gap-8">
            {prevItem ? (
              <Link
                href={`/news/${prevItem.slug}`}
                className="group flex-1 min-w-0"
              >
                <span className="block font-[family-name:var(--font-body)] text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-2">
                  Previous
                </span>
                <span className="block font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.04em] text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors duration-300 leading-snug truncate">
                  {prevItem.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextItem ? (
              <Link
                href={`/news/${nextItem.slug}`}
                className="group flex-1 min-w-0 text-right"
              >
                <span className="block font-[family-name:var(--font-body)] text-xs tracking-[0.25em] uppercase text-[var(--accent)] mb-2">
                  Next
                </span>
                <span className="block font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.04em] text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors duration-300 leading-snug truncate">
                  {nextItem.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
