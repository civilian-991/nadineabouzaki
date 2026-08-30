"use client";

import { use, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Gallery from "@/components/Gallery";
import { portfolioItems } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

function SectionLabel({
  children,
  muted = false,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <span
      className={`font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.25em] font-medium ${
        muted ? "text-[var(--muted)]" : "text-[var(--accent)]"
      }`}
    >
      {children}
    </span>
  );
}

function VideoLink({
  videoId,
  title,
  label,
}: {
  videoId: string;
  title: string;
  label: string;
}) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-2 block max-w-[420px]"
    >
      <div
        className="relative flex items-center justify-center overflow-hidden bg-[var(--surface)]"
        style={{ aspectRatio: "16/9" }}
      >
        <Image
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt={title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105 filter brightness-[0.85] group-hover:brightness-100"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-14 h-14 border border-white/15 bg-black/20 backdrop-blur-sm transition-all duration-500 group-hover:border-[var(--accent)]/40 group-hover:scale-110">
            <svg width="12" height="14" viewBox="0 0 14 16" fill="none">
              <path
                d="M14 8L0 16V0L14 8Z"
                fill="currentColor"
                className="text-white/80 transition-all duration-500 group-hover:text-[var(--accent)]"
              />
            </svg>
          </div>
        </div>
      </div>
      <span className="mt-3 inline-block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.2em] text-[var(--muted)] font-medium transition-colors duration-500 group-hover:text-[var(--accent)]">
        {label}
      </span>
    </a>
  );
}

export default function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const containerRef = useRef<HTMLDivElement>(null);
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
            className="relative overflow-hidden border border-white/10 bg-black/20 opacity-0"
            style={{ aspectRatio: "16 / 9" }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Details */}
          <div ref={textRef} className="lg:pt-4">
            <div className="divider-line mb-8" />

            <h1 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl lg:text-3xl uppercase tracking-[0.08em] font-normal text-[var(--foreground)] mb-4">
              {item.title}
            </h1>

            {item.subtitle && (
              <p className="font-[family-name:var(--font-body)] text-base italic text-[var(--muted)] font-light mb-4 max-w-lg">
                {item.subtitle}
              </p>
            )}

            <p className="font-[family-name:var(--font-body)] text-base text-[var(--muted)] font-light mb-6">
              {item.venue && (
                <>
                  {item.venue}
                  <span className="mx-3 text-[var(--accent-soft)]/50">
                    &middot;
                  </span>
                </>
              )}
              <span className="text-[var(--accent)] tracking-[0.15em] font-medium whitespace-nowrap">
                {item.year}
              </span>
            </p>

            <span className="inline-block px-3 py-1.5 border border-[var(--foreground)]/8 text-[var(--muted)] text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-body)] mb-8">
              {item.category}
            </span>

            {item.description && (
              <div className="space-y-5">
                {item.description.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-[family-name:var(--font-body)] text-base leading-[1.9] text-[var(--foreground)]/80 font-light"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {item.credits && item.credits.length > 0 && (
              <div className="mt-10">
                <SectionLabel>Credits</SectionLabel>
                <dl className="mt-4 space-y-1.5">
                  {item.credits.map((credit, i) => (
                    <div
                      key={i}
                      className="font-[family-name:var(--font-body)] text-base font-light leading-relaxed"
                    >
                      {credit.role ? (
                        <>
                          <dt className="inline text-[var(--muted)]">
                            {credit.role}:{" "}
                          </dt>
                          <dd className="inline text-[var(--foreground)]/85">
                            {credit.name}
                          </dd>
                        </>
                      ) : (
                        <dd className="text-[var(--foreground)]/85">
                          {credit.name}
                        </dd>
                      )}
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {item.editions && item.editions.length > 0 && (
              <div className="mt-10">
                <SectionLabel>Editions</SectionLabel>
                <ul className="mt-4 space-y-1.5">
                  {item.editions.map((edition, i) => (
                    <li
                      key={i}
                      className="font-[family-name:var(--font-body)] text-base text-[var(--foreground)]/85 font-light leading-relaxed"
                    >
                      {edition}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.editionImages && item.editionImages.length > 1 && (
              <div className="mt-8 grid grid-cols-2 gap-4">
                {item.editionImages.map((edition) => (
                  <figure key={edition.src}>
                    <div
                      className="relative overflow-hidden border border-white/10 bg-black/20"
                      style={{ aspectRatio: "16 / 9" }}
                    >
                      <Image
                        src={edition.src}
                        alt={edition.caption}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <figcaption className="mt-2 font-[family-name:var(--font-body)] text-xs text-[var(--muted)] font-light leading-relaxed">
                      {edition.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sections */}
      {item.sections?.map((section, i) => (
        <div
          key={i}
          className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 mt-20"
        >
          <div className="mb-8">
            <SectionLabel>{section.title}</SectionLabel>
            {section.description && (
              <p className="mt-5 max-w-3xl font-[family-name:var(--font-body)] text-base leading-[1.9] text-[var(--foreground)]/80 font-light">
                {section.description}
              </p>
            )}
          </div>

          {section.images && section.images.length > 0 && (
            <Gallery
              images={section.images}
              alt={`${item.title} — ${section.title}`}
              columns={section.images.length > 8 ? 3 : 2}
            />
          )}

          {section.videos && section.videos.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-8">
              {section.videos.map((v) => (
                <VideoLink
                  key={v.id}
                  videoId={v.id}
                  title={`${item.title} — ${v.label}`}
                  label={v.label}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Gallery */}
      {hasGallery && (
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 mt-20">
          <div className="mb-10">
            <SectionLabel>Gallery</SectionLabel>
          </div>
          <Gallery
            images={item.galleryImages!}
            alt={item.title}
            columns={item.galleryImages!.length > 8 ? 3 : 2}
          />
        </div>
      )}

      {/* Related work */}
      {item.relatedLink && (
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 mt-16">
          <Link
            href={item.relatedLink.href}
            className="group inline-flex items-center gap-4 font-[family-name:var(--font-body)] text-sm text-[var(--accent)] font-light transition-colors duration-500 hover:text-[var(--foreground)]"
          >
            {item.relatedLink.label}
            <span className="block w-8 h-px bg-[var(--accent)] transition-all duration-500 group-hover:w-14 group-hover:bg-[var(--foreground)]" />
          </Link>
        </div>
      )}

      {/* Archive */}
      {item.archiveImages && item.archiveImages.length > 0 && (
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 mt-20">
          <div className="mb-8">
            <SectionLabel muted>Archive</SectionLabel>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[760px]">
            {item.archiveImages.map((archive, i) => (
              <figure key={i}>
                <div
                  className="relative overflow-hidden border border-white/10 bg-black/20"
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Image
                    src={archive.src}
                    alt={archive.caption ?? `${item.title} — archive ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 380px"
                  />
                </div>
                {archive.caption && (
                  <figcaption className="mt-2.5 font-[family-name:var(--font-body)] text-xs text-[var(--muted)] font-light leading-relaxed">
                    {archive.caption}
                  </figcaption>
                )}
              </figure>
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
