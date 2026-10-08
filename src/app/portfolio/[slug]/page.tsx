"use client";

import { use, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Gallery from "@/components/Gallery";
import PlaceholderImage from "@/components/PlaceholderImage";
import VideoEmbed from "@/components/VideoEmbed";
import { portfolioItems, type PosterImage } from "@/lib/data";

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

/** A poster at a readable medium size: whole image, never cropped. */
function Poster({ poster, alt }: { poster: PosterImage; alt: string }) {
  return (
    <figure className="inline-block max-w-full">
      <Image
        src={poster.src}
        alt={poster.caption ?? alt}
        width={980}
        height={980}
        className="block h-auto w-auto max-w-full max-h-[560px] border border-white/20"
        sizes="(max-width: 768px) 100vw, 640px"
      />
      {poster.caption && (
        <figcaption className="mt-2.5 font-[family-name:var(--font-body)] text-xs text-[var(--muted)] font-light leading-relaxed">
          {poster.caption}
        </figcaption>
      )}
    </figure>
  );
}

const block = "max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12";

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
  // Tabs only where a page holds several distinct bodies of work.
  const anchored = (item.sections ?? []).filter((section) => section.id);
  const sectionTabs = anchored.length >= 3 ? anchored : [];

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
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <PlaceholderImage
                title={item.title}
                aspectRatio="16 / 9"
                className="absolute inset-0"
              />
            )}
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

            {item.note && (
              <p className="mt-5 font-[family-name:var(--font-body)] text-sm text-[var(--muted)] font-light">
                {item.note}
              </p>
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

      {/* Poster: after the introduction, before any sections */}
      {item.poster && (
        <div className={`${block} mt-20`}>
          <div className="mb-8">
            <SectionLabel muted>
              {sectionTabs.length > 0 ? "Archive / Poster" : "Poster"}
            </SectionLabel>
          </div>
          <Poster poster={item.poster} alt={`${item.title} — poster`} />
        </div>
      )}

      {/* Primary video: large, before the photographs */}
      {item.video && (
        <div className={`${block} mt-20`}>
          <div className="mb-8">
            <SectionLabel>Video</SectionLabel>
          </div>
          <VideoEmbed videoId={item.video.id} title={item.video.label} />
        </div>
      )}

      {/* Section tabs */}
      {sectionTabs.length > 0 && (
        <nav
          aria-label="Sections"
          className={`${block} mt-20 flex flex-wrap gap-3`}
        >
          {sectionTabs.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="filter-btn"
            >
              {section.title}
            </a>
          ))}
        </nav>
      )}

      {/* Sections */}
      {item.sections?.map((section, i) => (
        <div
          key={i}
          id={section.id}
          className={`${block} mt-20 scroll-mt-28`}
        >
          <div
            className={`mb-10 ${
              section.poster && section.description
                ? "grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-start"
                : ""
            }`}
          >
            <div>
              <SectionLabel>{section.title}</SectionLabel>
              {section.description && (
                <p className="mt-5 max-w-3xl font-[family-name:var(--font-body)] text-base leading-[1.9] text-[var(--foreground)]/80 font-light">
                  {section.description}
                </p>
              )}
            </div>
            {section.poster && (
              <div
                className={
                  section.description ? "md:max-w-[360px]" : "mt-6 max-w-[360px]"
                }
              >
                <Poster
                  poster={section.poster}
                  alt={`${item.title} — ${section.title} poster`}
                />
              </div>
            )}
          </div>

          {section.videos?.map((v) => (
            <div key={v.id} className="mb-12">
              <VideoEmbed videoId={v.id} title={v.label} />
            </div>
          ))}

          {section.images && section.images.length > 0 && (
            <Gallery
              images={section.images}
              captions={section.captions}
              alt={`${item.title} — ${section.title}`}
              columns={section.images.length > 8 ? 3 : 2}
            />
          )}
        </div>
      ))}

      {/* Gallery */}
      {hasGallery && (
        <div className={`${block} ${item.video ? "mt-16" : "mt-20"}`}>
          <div className="mb-8">
            <SectionLabel>Gallery</SectionLabel>
          </div>
          {item.galleryLayout === "prints" ? (
            <Gallery
              images={item.galleryImages!}
              alt={item.title}
              columns={2}
              ratio="4 / 5"
              padded
            />
          ) : (
            <Gallery
              images={item.galleryImages!}
              alt={item.title}
              columns={item.galleryImages!.length > 8 ? 3 : 2}
            />
          )}
        </div>
      )}

      {/* Secondary video, kept apart from the main one */}
      {item.secondaryVideo && (
        <div className={`${block} mt-20`}>
          <div className="mb-8">
            <SectionLabel muted>Trailer</SectionLabel>
          </div>
          <VideoEmbed
            videoId={item.secondaryVideo.id}
            title={item.secondaryVideo.label}
            size="small"
          />
        </div>
      )}

      {/* Related work */}
      {item.relatedLink && (
        <div className={`${block} mt-16`}>
          <Link
            href={item.relatedLink.href}
            className="group inline-flex items-center gap-4 font-[family-name:var(--font-body)] text-sm text-[var(--accent)] font-light transition-colors duration-500 hover:text-[var(--foreground)]"
          >
            {item.relatedLink.label}
            <span className="block w-8 h-px bg-[var(--accent)] transition-all duration-500 group-hover:w-14 group-hover:bg-[var(--foreground)]" />
          </Link>
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
