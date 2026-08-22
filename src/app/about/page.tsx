"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { biography, siteConfig } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((section) => {
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

      // No parallax on the portrait: it now sits in a text well, so drifting it
      // out of the wrap would open a gap between the image and the copy.
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen pt-32 pb-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="reveal mb-8">
          <h1 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.3em] text-[var(--accent)] font-normal mb-4">
            About
          </h1>
          <div className="divider-line line-reveal origin-left" />
        </div>

        {/* Biography. The portrait floats so the opening paragraphs sit beside
            it and the rest of the text continues underneath as one column,
            rather than being split into two blocks of differing measure. */}
        <div className="max-w-3xl mt-16">
          <div className="reveal float-right ml-10 mb-6 w-[290px] hidden lg:block">
            <div className="about-accent-image relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/about/portrait.jpg"
                alt={siteConfig.name}
                fill
                className="object-cover object-top filter brightness-[0.9]"
                sizes="290px"
              />
            </div>
          </div>

          {biography.map((paragraph, i) => (
            <p
              key={i}
              className="reveal text-[var(--foreground)]/85 text-base leading-[1.9] font-light mb-5 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
