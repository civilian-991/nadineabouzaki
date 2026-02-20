"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import BackToTop from "@/components/BackToTop";
import { portfolioItems, socialLinks, categories } from "@/lib/data";
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
  const portfolioRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Hero parallax + text animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on hero image
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          y: "20%",
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Split text reveal
      const chars = gsap.utils.toArray<HTMLElement>(".hero-title-char");
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(chars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.03,
      })
        .from(
          ".hero-ornament",
          { scaleX: 0, duration: 0.8, ease: "power2.inOut" },
          "-=0.5"
        )
        .from(
          ".hero-subtitle",
          { y: 20, opacity: 0, duration: 1, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          ".hero-social",
          { y: 15, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          ".scroll-indicator",
          { opacity: 0, duration: 1 },
          "-=0.3"
        );

      // Scroll indicator subtle animation
      gsap.to(".scroll-line", {
        scaleY: 1,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      });

      // Set initial state for chars
      gsap.set(chars, { opacity: 0, y: 40, rotateX: -40 });
      tl.play();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Portfolio scroll-in animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".portfolio-section .section-title", {
        scrollTrigger: {
          trigger: ".portfolio-section .section-title",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".portfolio-section .divider-line", {
        scrollTrigger: {
          trigger: ".portfolio-section .divider-line",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        scaleX: 0,
        duration: 0.6,
        ease: "power2.out",
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
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
        });
      }
    }, portfolioRef);

    return () => ctx.revert();
  }, []);

  // Filter animation
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

  return (
    <>
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="hero-section">
        <div ref={heroImageRef} className="absolute inset-0 will-change-transform" style={{ top: "-10%" , height: "120%" }}>
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
          <h1 className="mb-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,7rem)] font-light tracking-[0.15em] uppercase text-white leading-none">
            <SplitText text="Nadine Abou Zaki" />
          </h1>

          {/* Decorative ornament */}
          <div className="hero-ornament mb-6 h-px w-24 bg-[var(--accent)] origin-center" />

          <p className="hero-subtitle font-[family-name:var(--font-body)] text-[clamp(0.9rem,2vw,1.25rem)] text-white/50 tracking-[0.3em] uppercase font-extralight mb-12">
            Sculptor &ensp;&middot;&ensp; Writer &ensp;&middot;&ensp; Director
          </p>

          <div className="hero-social mb-20">
            <SocialLinks links={socialLinks} size="md" />
          </div>

          {/* Scroll indicator - minimal line */}
          <div className="scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <span className="font-[family-name:var(--font-display)] text-[0.55rem] uppercase tracking-[0.4em] text-white/20">
              Scroll
            </span>
            <div className="h-8 w-px bg-white/10 overflow-hidden">
              <div className="scroll-line h-full w-full bg-[var(--accent)]/40 origin-top" style={{ transform: "scaleY(0)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Portfolio ─── */}
      <section ref={portfolioRef} className="portfolio-section py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="section-title">Selected Works</h2>
            <div className="divider-line mx-auto" />
          </div>

          <div className="filter-bar flex flex-wrap justify-center gap-3 mb-16">
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
                    <h3 className="text-white font-[family-name:var(--font-display)] text-base tracking-[0.1em] uppercase leading-tight font-light">
                      {item.title}
                    </h3>
                    {item.venue && (
                      <p className="text-white/40 text-sm mt-1.5 font-[family-name:var(--font-body)] font-light italic">
                        {item.venue}
                      </p>
                    )}
                    <p className="text-[var(--accent)]/70 text-xs mt-2 font-[family-name:var(--font-display)] tracking-[0.2em]">
                      {item.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BackToTop />
    </>
  );
}
