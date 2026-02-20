"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import BackToTop from "@/components/BackToTop";
import { portfolioItems, socialLinks, categories, biography } from "@/lib/data";
import type { Category } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

function SplitText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span key={i} className="hero-title-char inline-block" style={{ willChange: "transform, opacity" }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Hero animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          y: "25%",
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      const chars = gsap.utils.toArray<HTMLElement>(".hero-title-char");
      gsap.set(chars, { opacity: 0, y: 60, rotateX: -60 });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.3 });

      tl.to(chars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.4,
        stagger: 0.025,
      })
        .from(".hero-line-left, .hero-line-right", {
          scaleX: 0,
          duration: 1,
          ease: "power2.inOut",
        }, "-=0.6")
        .from(".hero-subtitle", {
          y: 30,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        }, "-=0.5")
        .from(".hero-social", {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        }, "-=0.6")
        .from(".scroll-indicator", {
          opacity: 0,
          duration: 1.2,
        }, "-=0.4");

      gsap.to(".scroll-line", {
        scaleY: 1,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Featured section
  useEffect(() => {
    if (!featuredRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".featured-image", {
        scrollTrigger: {
          trigger: ".featured-section",
          start: "top 75%",
          toggleActions: "play none none none",
        },
        clipPath: "inset(0 100% 0 0)",
        duration: 1.4,
        ease: "power3.inOut",
      });

      gsap.from(".featured-text > *", {
        scrollTrigger: {
          trigger: ".featured-text",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, featuredRef);

    return () => ctx.revert();
  }, []);

  // Portfolio section
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-header > *", {
        scrollTrigger: {
          trigger: ".portfolio-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 25,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".filter-bar", {
        scrollTrigger: {
          trigger: ".filter-bar",
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      const items = itemsRef.current.filter(Boolean);
      if (items.length > 0) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: ".portfolio-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.04,
          ease: "power3.out",
        });
      }
    }, portfolioRef);

    return () => ctx.revert();
  }, []);

  // About teaser
  useEffect(() => {
    if (!aboutRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".about-teaser > *", {
        scrollTrigger: {
          trigger: ".about-teaser",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const handleFilter = useCallback((category: Category) => {
    if (category === activeFilter) return;
    setActiveFilter(category);

    const items = itemsRef.current.filter(Boolean);
    items.forEach((item) => {
      if (!item) return;
      const itemCategory = item.dataset.category;
      const matches = category === "All" || itemCategory === category;

      if (matches) {
        gsap.to(item, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          onStart: () => { item.style.display = ""; },
        });
      } else {
        gsap.to(item, {
          opacity: 0,
          scale: 0.97,
          duration: 0.35,
          ease: "power2.in",
          onComplete: () => { item.style.display = "none"; },
        });
      }
    });
  }, [activeFilter]);

  // Featured item - use first sculpture portfolio item
  const featuredItem = portfolioItems.find(p => p.category === "Sculptures") || portfolioItems[0];

  return (
    <>
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="hero-section">
        <div ref={heroImageRef} className="absolute inset-0 will-change-transform" style={{ top: "-10%", height: "120%" }}>
          <Image
            src="/images/hero/cover.jpg"
            alt="Nadine Abou Zaki"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-overlay" />

        <div className="hero-content px-6">
          <h1 className="mb-8 font-[family-name:var(--font-display)] text-[clamp(2.8rem,9vw,8rem)] font-normal tracking-[0.06em] uppercase text-white leading-[0.95]">
            <SplitText text="Nadine" />
            <br />
            <SplitText text="Abou Zaki" />
          </h1>

          {/* Decorative lines flanking subtitle */}
          <div className="flex items-center gap-6 mb-10">
            <div className="hero-line-left h-px w-16 bg-[var(--accent)]/40 origin-right" />
            <p className="hero-subtitle font-[family-name:var(--font-body)] text-[clamp(0.65rem,1.2vw,0.8rem)] text-white/40 tracking-[0.35em] uppercase font-medium">
              Sculptor &ensp;&middot;&ensp; Writer &ensp;&middot;&ensp; Director
            </p>
            <div className="hero-line-right h-px w-16 bg-[var(--accent)]/40 origin-left" />
          </div>

          <div className="hero-social">
            <SocialLinks links={socialLinks} size="md" />
          </div>

          <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="font-[family-name:var(--font-body)] text-[0.6rem] uppercase tracking-[0.35em] text-white/15 font-medium">
              Scroll
            </span>
            <div className="h-10 w-px bg-white/[0.06] overflow-hidden">
              <div className="scroll-line h-full w-full bg-[var(--accent)]/30 origin-top" style={{ transform: "scaleY(0)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Work ─── */}
      <section ref={featuredRef} className="featured-section py-32 md:py-40">
        <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="featured-image relative overflow-hidden" style={{ clipPath: "inset(0 0 0 0)" }}>
              <div className="aspect-[4/5] relative">
                <Image
                  src={featuredItem.image}
                  alt={featuredItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text */}
            <div className="featured-text flex flex-col justify-center">
              <span className="section-number mb-6">01</span>
              <h2 className="section-title">Featured Work</h2>
              <div className="divider-line mb-10" />
              <h3 className="section-heading text-[clamp(2rem,4vw,3.5rem)] mb-8">
                Exploring the boundaries between touch and perception
              </h3>
              <p className="text-[var(--muted)] text-base leading-relaxed font-light mb-10 max-w-md">
                {biography.artisticPractice.slice(0, 200)}...
              </p>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-4 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.25em] font-medium text-[var(--accent)] transition-all duration-500 hover:text-[var(--foreground)]"
              >
                View Portfolio
                <svg className="w-5 h-px bg-[var(--accent)] transition-all duration-500 group-hover:w-8 group-hover:bg-[var(--foreground)]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Portfolio ─── */}
      <section ref={portfolioRef} className="portfolio-section py-24 md:py-32 bg-[var(--surface)]">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="portfolio-header flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="section-number block mb-4">02</span>
              <h2 className="section-title mb-0">Selected Works</h2>
            </div>
            <div className="divider-line mt-6 md:mt-0 md:mb-1" />
          </div>

          <div className="filter-bar flex flex-wrap justify-start gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => handleFilter(cat)}
              >
                {cat === "All" ? "Show All" : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-2 sm:px-4">
          <div className="portfolio-grid">
            {portfolioItems.map((item, i) => (
              <div
                key={item.id}
                ref={(el) => { itemsRef.current[i] = el; }}
                data-category={item.category}
                className="portfolio-item"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={440}
                  height={360}
                  className="w-full h-full object-cover"
                />
                <div className="overlay">
                  <div>
                    <div className="overlay-line" />
                    <h3 className="text-white font-[family-name:var(--font-display)] text-[0.95rem] tracking-[0.06em] uppercase leading-tight font-normal">
                      {item.title}
                    </h3>
                    {item.venue && (
                      <p className="text-white/35 text-sm mt-1.5 font-[family-name:var(--font-body)] font-light">
                        {item.venue}
                      </p>
                    )}
                    <p className="text-[var(--accent)]/60 text-xs mt-2.5 font-[family-name:var(--font-body)] tracking-[0.15em] font-medium">
                      {item.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About Teaser ─── */}
      <section ref={aboutRef} className="py-32 md:py-40">
        <div className="about-teaser mx-auto max-w-[900px] px-6 sm:px-8 text-center">
          <span className="section-number block mb-6">03</span>
          <h2 className="section-title">About the Artist</h2>
          <div className="divider-line mx-auto mb-12" />
          <p className="section-heading text-[clamp(1.6rem,3.5vw,2.8rem)] mb-10 leading-[1.3]">
            {biography.intro}
          </p>
          <p className="text-[var(--muted)] text-base leading-relaxed font-light max-w-2xl mx-auto mb-12">
            {biography.artisticPractice}
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-4 font-[family-name:var(--font-body)] text-[0.7rem] uppercase tracking-[0.25em] font-medium text-[var(--accent)] transition-all duration-500 hover:text-[var(--foreground)]"
          >
            Read Full Biography
            <svg className="w-5 h-px bg-[var(--accent)] transition-all duration-500 group-hover:w-8 group-hover:bg-[var(--foreground)]" />
          </Link>
        </div>
      </section>

      <BackToTop />
    </>
  );
}
