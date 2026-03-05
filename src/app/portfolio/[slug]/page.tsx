"use client";

import { use, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioItems } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
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

    const ctx = gsap.context(() => {
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

      // Gallery images animate on scroll
      if (galleryRef.current) {
        const galleryItems =
          galleryRef.current.querySelectorAll(".gallery-item");
        gsap.fromTo(
          galleryItems,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (navRef.current) {
        gsap.fromTo(
          navRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: navRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [item]);

  if (!item) {
    return (
      <section className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center">
        <p className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.3em] text-[var(--muted)] mb-8">
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

  const hasGallery = item.galleryImages && item.galleryImages.length > 0;

  return (
    <section ref={containerRef} className="pt-28 pb-24 min-h-screen">
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

      {/* Hero: image + details side by side */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image */}
          <div
            ref={imageRef}
            className="relative overflow-hidden opacity-0"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div ref={textRef} className="lg:pt-4">
            <div className="divider-line mb-8" />

            <h1 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl uppercase tracking-[0.08em] font-normal text-[var(--foreground)] mb-4">
              {item.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              {item.venue && (
                <p className="font-[family-name:var(--font-body)] text-base text-[var(--muted)] font-light">
                  {item.venue}
                </p>
              )}
              {item.venue && (
                <span className="w-1 h-1 rounded-full bg-[var(--accent-soft)]/40" />
              )}
              <p className="font-[family-name:var(--font-body)] text-base text-[var(--accent)] tracking-[0.15em] font-medium">
                {item.year}
              </p>
            </div>

            <span className="inline-block px-3 py-1.5 border border-[var(--foreground)]/8 text-[var(--muted)] text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-body)] mb-8">
              {item.category}
            </span>

            {item.description && (
              <p className="font-[family-name:var(--font-body)] text-base leading-[1.9] text-[var(--foreground)]/80 font-light">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Gallery */}
      {hasGallery && (
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 mt-20">
          <div className="mb-10">
            <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-medium">
              Gallery
            </span>
          </div>
          <div
            ref={galleryRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2"
          >
            {item.galleryImages!.map((img, i) => (
              <div
                key={i}
                className="gallery-item relative overflow-hidden group"
                style={{ opacity: 0 }}
              >
                <Image
                  src={img}
                  alt={`${item.title} — ${i + 1}`}
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      )}

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
              <span className="text-[var(--muted)] text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-body)] group-hover:text-[var(--accent)] transition-colors duration-500">
                &larr; Previous
              </span>
              <span className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.06em] text-[var(--foreground)]/80 group-hover:text-[var(--foreground)] transition-colors duration-500">
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
              <span className="text-[var(--muted)] text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-body)] group-hover:text-[var(--accent)] transition-colors duration-500">
                Next &rarr;
              </span>
              <span className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.06em] text-[var(--foreground)]/80 group-hover:text-[var(--foreground)] transition-colors duration-500">
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
