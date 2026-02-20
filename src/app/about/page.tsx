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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <div className="reveal mb-16">
          <h1 className="section-title text-3xl">About</h1>
          <div
            className="w-16 h-px mt-4"
            style={{ background: "var(--accent)" }}
          />
        </div>

        {/* Intro */}
        <div className="reveal mb-16">
          <p
            className="text-2xl md:text-3xl leading-relaxed font-light"
            style={{ color: "var(--foreground)" }}
          >
            {biography.intro}
          </p>
        </div>

        {/* Education */}
        <section className="reveal mb-16">
          <h2
            className="text-sm uppercase tracking-[0.2em] mb-6"
            style={{
              fontFamily: "var(--font-ubuntu-condensed), sans-serif",
              color: "var(--accent)",
            }}
          >
            Education &amp; Academic Background
          </h2>
          <ul className="space-y-4">
            {biography.education.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-base leading-relaxed"
                style={{ color: "rgba(237, 237, 237, 0.85)" }}
              >
                <span
                  className="mt-2 block w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "var(--accent)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Research Focus */}
        <section className="reveal mb-16">
          <h2
            className="text-sm uppercase tracking-[0.2em] mb-6"
            style={{
              fontFamily: "var(--font-ubuntu-condensed), sans-serif",
              color: "var(--accent)",
            }}
          >
            Research Focus
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(237, 237, 237, 0.85)" }}
          >
            {biography.research}
          </p>
        </section>

        {/* Artistic Practice */}
        <section className="reveal mb-16">
          <div
            className="border-l-2 pl-8 py-4"
            style={{ borderColor: "var(--accent)" }}
          >
            <h2
              className="text-sm uppercase tracking-[0.2em] mb-6"
              style={{
                fontFamily: "var(--font-ubuntu-condensed), sans-serif",
                color: "var(--accent)",
              }}
            >
              Artistic Practice
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed font-light"
              style={{ color: "var(--foreground)" }}
            >
              {biography.artisticPractice}
            </p>
          </div>
        </section>

        {/* Social Impact */}
        <section className="reveal mb-16">
          <h2
            className="text-sm uppercase tracking-[0.2em] mb-6"
            style={{
              fontFamily: "var(--font-ubuntu-condensed), sans-serif",
              color: "var(--accent)",
            }}
          >
            Social Impact
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(237, 237, 237, 0.85)" }}
          >
            {biography.socialImpact}
          </p>
        </section>

        {/* Notable Achievements */}
        <section className="reveal mb-8">
          <h2
            className="text-sm uppercase tracking-[0.2em] mb-6"
            style={{
              fontFamily: "var(--font-ubuntu-condensed), sans-serif",
              color: "var(--accent)",
            }}
          >
            Notable Achievements
          </h2>
          <ul className="space-y-4">
            {biography.achievements.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-base leading-relaxed"
                style={{ color: "rgba(237, 237, 237, 0.85)" }}
              >
                <span
                  className="mt-2 block w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "var(--accent)" }}
                />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
