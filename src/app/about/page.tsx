"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { biography, portfolioItems } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Find a sculpture image to use as visual accent
  const sculptureItem =
    portfolioItems.find((p) => p.category === "Sculptures") ||
    portfolioItems[0];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".reveal");
      sections.forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".line-reveal").forEach((line) => {
        gsap.from(line, {
          scaleX: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });

      // Parallax on the accent image
      const img = document.querySelector(".about-accent-image");
      if (img) {
        gsap.to(img, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen pt-32 pb-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="reveal mb-8">
          <span className="section-number block mb-4">About</span>
          <h1 className="font-[family-name:var(--font-display)] text-[0.75rem] uppercase tracking-[0.3em] text-[var(--accent)] font-normal mb-4">
            Biography
          </h1>
          <div className="divider-line line-reveal origin-left" />
        </div>

        {/* Hero statement + accent image — 2-column */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_0.45fr] gap-12 lg:gap-20 mb-28 mt-16 items-end">
          <p className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.25] font-normal italic text-[var(--foreground)]">
            {biography.intro}
          </p>
          <div className="relative overflow-hidden hidden lg:block">
            <div className="about-accent-image aspect-[3/4] relative">
              <Image
                src={sculptureItem.image}
                alt="Sculpture"
                fill
                className="object-cover filter brightness-[0.9]"
                sizes="300px"
              />
            </div>
          </div>
        </div>

        {/* Education — 2-column label + content */}
        <section className="reveal mb-28">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
            <div className="flex items-start gap-3">
              <span className="section-number mt-0.5">01</span>
              <h2 className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] font-medium whitespace-nowrap">
                Education
              </h2>
            </div>
            <div className="space-y-6 border-l border-white/[0.04] pl-8">
              {biography.education.map((item, i) => (
                <p
                  key={i}
                  className="text-[var(--foreground)]/80 text-[0.95rem] leading-relaxed font-light"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Research — 2-column */}
        <section className="reveal mb-28">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
            <div className="flex items-start gap-3">
              <span className="section-number mt-0.5">02</span>
              <h2 className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] font-medium whitespace-nowrap">
                Research
              </h2>
            </div>
            <p className="text-[var(--foreground)]/80 text-lg leading-relaxed font-light">
              {biography.research}
            </p>
          </div>
        </section>

        {/* Artistic Practice — Full-width pull quote */}
        <section className="reveal mb-28">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
            <div className="flex items-start gap-3">
              <span className="section-number mt-0.5">03</span>
              <h2 className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] font-medium whitespace-nowrap">
                Practice
              </h2>
            </div>
            <div className="pull-quote py-2">
              <p className="font-[family-name:var(--font-display)] text-[clamp(1.15rem,2.2vw,1.6rem)] leading-[1.55] font-normal italic text-[var(--foreground)]">
                {biography.artisticPractice}
              </p>
            </div>
          </div>
        </section>

        {/* Social Impact — 2-column */}
        <section className="reveal mb-28">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
            <div className="flex items-start gap-3">
              <span className="section-number mt-0.5">04</span>
              <h2 className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] font-medium whitespace-nowrap">
                Impact
              </h2>
            </div>
            <p className="text-[var(--foreground)]/80 text-lg leading-relaxed font-light">
              {biography.socialImpact}
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="reveal mb-28">
          <div className="ornament">
            <span className="block w-1.5 h-1.5 border border-[var(--accent-soft)]/30 rotate-45" />
          </div>
        </div>

        {/* Notable Achievements — 2-column */}
        <section className="reveal mb-8">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
            <div className="flex items-start gap-3">
              <span className="section-number mt-0.5">05</span>
              <h2 className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] font-medium whitespace-nowrap">
                Achievements
              </h2>
            </div>
            <div className="space-y-7">
              {biography.achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <span className="mt-2.5 block w-px h-3.5 bg-[var(--accent-soft)]/30 shrink-0 transition-all duration-500 group-hover:h-6 group-hover:bg-[var(--accent)]" />
                  <p className="text-[var(--foreground)]/70 text-[0.95rem] leading-relaxed font-light transition-colors duration-500 group-hover:text-[var(--foreground)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
