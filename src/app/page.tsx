"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import BackToTop from "@/components/BackToTop";
import { portfolioItems, socialLinks, categories } from "@/lib/data";
import type { Category } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const heroRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Hero animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-title", {
        y: 60,
        opacity: 0,
        duration: 1.2,
      })
        .from(
          ".hero-subtitle",
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          "-=0.6"
        )
        .from(
          ".hero-social",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".scroll-indicator",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        );

      // Scroll indicator pulse
      gsap.to(".scroll-indicator-arrow", {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "power1.inOut",
      });
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
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".filter-bar", {
        scrollTrigger: {
          trigger: ".filter-bar",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 30,
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
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        });
      }
    }, portfolioRef);

    return () => ctx.revert();
  }, []);

  // Filter animation
  const handleFilter = (category: Category) => {
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
          duration: 0.4,
          ease: "power2.out",
          onStart: () => {
            item.style.display = "";
          },
        });
      } else {
        gsap.to(item, {
          opacity: 0,
          scale: 0.95,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            item.style.display = "none";
          },
        });
      }
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <Image
          src="/images/hero/cover.jpg"
          alt="Nadine Abou Zaki"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay" />

        <div className="hero-content px-4">
          <h1 className="hero-title font-[family-name:var(--font-ubuntu-condensed)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.2em] uppercase text-white mb-4">
            Nadine Abou Zaki
          </h1>
          <p className="hero-subtitle font-[family-name:var(--font-lora)] text-lg sm:text-xl md:text-2xl text-white/70 tracking-widest mb-10 italic">
            Sculptor, Writer, Director
          </p>
          <div className="hero-social mb-16">
            <SocialLinks links={socialLinks} size="lg" />
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-[family-name:var(--font-ubuntu-condensed)]">
              Scroll
            </span>
            <svg
              className="scroll-indicator-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        ref={portfolioRef}
        className="portfolio-section py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <h2 className="section-title text-center">My Work</h2>

        <div className="filter-bar flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
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

        <div className="portfolio-grid">
          {portfolioItems.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              data-category={item.category}
              className="portfolio-item rounded-sm"
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
                  <h3 className="text-white font-[family-name:var(--font-ubuntu-condensed)] text-lg uppercase tracking-wide leading-tight">
                    {item.title}
                  </h3>
                  {item.venue && (
                    <p className="text-white/60 text-sm mt-1">{item.venue}</p>
                  )}
                  <p className="text-[var(--accent)] text-sm mt-1 font-[family-name:var(--font-ubuntu-condensed)] tracking-wider">
                    {item.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BackToTop />
    </>
  );
}
