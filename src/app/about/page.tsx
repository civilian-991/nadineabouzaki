"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { biography, portfolioItems } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const sculptureItem =
    portfolioItems.find((p) => p.category === "Sculptures") ||
    portfolioItems[0];

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
          <h1 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.3em] text-[var(--accent)] font-normal mb-4">
            About
          </h1>
          <div className="divider-line line-reveal origin-left" />
        </div>

        {/* Image + first paragraph */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-[1fr_0.45fr] gap-12 lg:gap-20 mb-16 mt-16 items-start">
          <p className="text-[var(--foreground)]/85 text-lg leading-[1.9] font-light">
            {biography[0]}
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

        {/* Remaining paragraphs */}
        <div className="max-w-3xl">
          {biography.slice(1).map((paragraph, i) => (
            <p
              key={i}
              className="reveal text-[var(--foreground)]/85 text-lg leading-[1.9] font-light mb-10"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
