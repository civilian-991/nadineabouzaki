"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { biography } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".reveal");
      sections.forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Animate decorative lines
      gsap.utils.toArray<HTMLElement>(".line-reveal").forEach((line) => {
        gsap.from(line, {
          scaleX: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <div className="reveal mb-20">
          <h1 className="section-title">About</h1>
          <div className="divider-line line-reveal origin-left" />
        </div>

        {/* Intro */}
        <div className="reveal mb-24">
          <p className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.4] font-light text-[var(--foreground)]">
            {biography.intro}
          </p>
        </div>

        {/* Education */}
        <section className="reveal mb-20">
          <h2 className="font-[family-name:var(--font-display)] text-[0.7rem] uppercase tracking-[0.25em] mb-8 text-[var(--accent)] font-normal">
            Education & Academic Background
          </h2>
          <div className="space-y-5 pl-6 border-l border-white/[0.06]">
            {biography.education.map((item, i) => (
              <p
                key={i}
                className="text-[var(--foreground)]/70 text-[0.95rem] leading-relaxed font-light"
              >
                {item}
              </p>
            ))}
          </div>
        </section>

        {/* Research Focus */}
        <section className="reveal mb-20">
          <h2 className="font-[family-name:var(--font-display)] text-[0.7rem] uppercase tracking-[0.25em] mb-8 text-[var(--accent)] font-normal">
            Research Focus
          </h2>
          <p className="text-[var(--foreground)]/70 text-lg leading-relaxed font-light">
            {biography.research}
          </p>
        </section>

        {/* Artistic Practice - Featured pull quote */}
        <section className="reveal mb-20">
          <div className="relative py-10 px-8 md:px-12 border-l border-[var(--accent)]/30">
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/20 to-transparent" />
            <h2 className="font-[family-name:var(--font-display)] text-[0.7rem] uppercase tracking-[0.25em] mb-8 text-[var(--accent)] font-normal">
              Artistic Practice
            </h2>
            <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl leading-relaxed font-light text-[var(--foreground)]/90 italic">
              {biography.artisticPractice}
            </p>
          </div>
        </section>

        {/* Social Impact */}
        <section className="reveal mb-20">
          <h2 className="font-[family-name:var(--font-display)] text-[0.7rem] uppercase tracking-[0.25em] mb-8 text-[var(--accent)] font-normal">
            Social Impact
          </h2>
          <p className="text-[var(--foreground)]/70 text-lg leading-relaxed font-light">
            {biography.socialImpact}
          </p>
        </section>

        {/* Divider */}
        <div className="reveal mb-20">
          <div className="ornament">
            <span className="block w-1.5 h-1.5 border border-[var(--accent)]/30 rotate-45" />
          </div>
        </div>

        {/* Notable Achievements */}
        <section className="reveal mb-8">
          <h2 className="font-[family-name:var(--font-display)] text-[0.7rem] uppercase tracking-[0.25em] mb-10 text-[var(--accent)] font-normal">
            Notable Achievements
          </h2>
          <div className="space-y-6">
            {biography.achievements.map((item, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <span className="mt-2.5 block w-px h-3 bg-[var(--accent)]/40 shrink-0 transition-all duration-300 group-hover:h-5 group-hover:bg-[var(--accent)]" />
                <p className="text-[var(--foreground)]/60 text-[0.95rem] leading-relaxed font-light transition-colors duration-300 group-hover:text-[var(--foreground)]/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
