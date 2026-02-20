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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <div className="reveal mb-8">
          <span className="section-number block mb-4">About</span>
          <h1 className="font-[family-name:var(--font-display)] text-[0.75rem] uppercase tracking-[0.3em] text-[var(--accent)] font-normal mb-4">Biography</h1>
          <div className="divider-line line-reveal origin-left" />
        </div>

        {/* Intro — large editorial statement */}
        <div className="reveal mb-28 mt-16">
          <p className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,4.5vw,3rem)] leading-[1.25] font-normal italic text-[var(--foreground)]">
            {biography.intro}
          </p>
        </div>

        {/* Education */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-number">01</span>
            <h2 className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] font-medium">
              Education & Background
            </h2>
          </div>
          <div className="space-y-5 pl-8 border-l border-white/[0.04]">
            {biography.education.map((item, i) => (
              <p
                key={i}
                className="text-[var(--foreground)]/60 text-[0.95rem] leading-relaxed font-light"
              >
                {item}
              </p>
            ))}
          </div>
        </section>

        {/* Research Focus */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-number">02</span>
            <h2 className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] font-medium">
              Research Focus
            </h2>
          </div>
          <p className="text-[var(--foreground)]/60 text-lg leading-relaxed font-light">
            {biography.research}
          </p>
        </section>

        {/* Artistic Practice — Pull Quote */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-number">03</span>
            <h2 className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] font-medium">
              Artistic Practice
            </h2>
          </div>
          <div className="pull-quote py-2">
            <p className="font-[family-name:var(--font-display)] text-[clamp(1.2rem,2.5vw,1.7rem)] leading-[1.5] font-normal italic text-[var(--foreground)]/85">
              {biography.artisticPractice}
            </p>
          </div>
        </section>

        {/* Social Impact */}
        <section className="reveal mb-24">
          <div className="flex items-center gap-4 mb-10">
            <span className="section-number">04</span>
            <h2 className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] font-medium">
              Social Impact
            </h2>
          </div>
          <p className="text-[var(--foreground)]/60 text-lg leading-relaxed font-light">
            {biography.socialImpact}
          </p>
        </section>

        {/* Divider */}
        <div className="reveal mb-24">
          <div className="ornament">
            <span className="block w-1.5 h-1.5 border border-[var(--accent-soft)]/30 rotate-45" />
          </div>
        </div>

        {/* Notable Achievements */}
        <section className="reveal mb-8">
          <div className="flex items-center gap-4 mb-12">
            <span className="section-number">05</span>
            <h2 className="font-[family-name:var(--font-body)] text-[0.65rem] uppercase tracking-[0.25em] text-[var(--accent)] font-medium">
              Notable Achievements
            </h2>
          </div>
          <div className="space-y-7">
            {biography.achievements.map((item, i) => (
              <div key={i} className="flex items-start gap-5 group">
                <span className="mt-2.5 block w-px h-3.5 bg-[var(--accent-soft)]/30 shrink-0 transition-all duration-500 group-hover:h-6 group-hover:bg-[var(--accent)]" />
                <p className="text-[var(--foreground)]/50 text-[0.95rem] leading-relaxed font-light transition-colors duration-500 group-hover:text-[var(--foreground)]/75">
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
