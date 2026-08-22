"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import BackToTop from "@/components/BackToTop";
import { homeItems, socialLinks, biography, siteConfig } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | HTMLDivElement | null)[]>([]);

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

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.5,
      });

      tl.fromTo(
        ".hero-tagline",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          ".hero-social",
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".scroll-indicator",
          { opacity: 0 },
          { opacity: 1, duration: 1.2 },
          "-=0.4"
        );

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
      gsap.fromTo(
        ".featured-image",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.4,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".featured-text > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".featured-text",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, featuredRef);

    return () => ctx.revert();
  }, []);

  // Portfolio section
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-header > *",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".portfolio-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      const items = itemsRef.current.filter(Boolean);
      if (items.length > 0) {
        gsap.fromTo(
          items,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.04,
            ease: "power3.out",
            scrollTrigger: {
              trigger: portfolioRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, portfolioRef);

    return () => ctx.revert();
  }, []);

  // About teaser
  useEffect(() => {
    if (!aboutRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-teaser > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-teaser",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ─── Hero ─── */}
      <section ref={heroRef} className="hero-section">
        <div
          ref={heroImageRef}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/images/hero/cover.jpg"
            alt={siteConfig.name}
            fill
            className="object-cover object-left md:object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-overlay-editorial" />

        <div className="hero-editorial">
          <div className="hero-editorial-inner">
            <p className="hero-tagline font-[family-name:var(--font-body)] text-sm text-white/85 tracking-[0.3em] uppercase font-medium">
              {siteConfig.tagline.replace(/,\s*/g, " \u2003\u00B7\u2003")}
            </p>
            <div className="hero-social mt-6">
              <SocialLinks links={socialLinks} size="md" />
            </div>
          </div>

          <div className="scroll-indicator absolute bottom-10 right-8 md:right-12 flex flex-col items-center gap-3">
            <span className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.35em] text-white/60 font-medium">
              Scroll
            </span>
            <div className="h-10 w-px bg-white/25 overflow-hidden">
              <div
                className="scroll-line h-full w-full bg-[var(--accent)]/60 origin-top"
                style={{ transform: "scaleY(0)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Opening statement ─── */}
      <section ref={featuredRef} className="featured-section py-32 md:py-40">
        <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div
              className="featured-image relative overflow-hidden"
              style={{ clipPath: "inset(0 0 0 0)" }}
            >
              <Image
                src="/images/portfolio/please-touch-agial.jpg"
                alt="Please Touch — Station Beirut, 2014"
                width={800}
                height={1000}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div className="featured-text flex flex-col justify-center">
              <div className="divider-line mb-10" />
              <h3 className="section-heading text-[clamp(2rem,4vw,3.5rem)] mb-8">
                {siteConfig.featuredHeading}
              </h3>
              <p className="text-[var(--muted)] text-base leading-relaxed font-light mb-10 max-w-md">
                {siteConfig.featuredDescription}
              </p>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-5 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.25em] font-medium text-[var(--accent)] transition-all duration-500 hover:text-[var(--foreground)]"
              >
                View Portfolio
                <span className="block w-8 h-px bg-[var(--accent)] transition-all duration-500 group-hover:w-14 group-hover:bg-[var(--foreground)]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Portfolio ─── */}
      <section
        ref={portfolioRef}
        className="portfolio-section py-24 md:py-32 bg-[var(--surface)]"
      >
        <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="portfolio-header flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h2 className="section-title mb-0">Selected Works</h2>
            </div>
            <div className="divider-line mt-6 md:mt-0 md:mb-1" />
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {homeItems.map((item, i) => (
              <Link
                key={item.id}
                href={`/portfolio/${item.slug}`}
                ref={(el) => {
                  itemsRef.current[i] = el;
                }}
                data-category={item.category}
                className="portfolio-item"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={440}
                  height={360}
                  className="w-full h-auto"
                />
                <div className="overlay">
                  <div>
                    <div className="overlay-line" />
                    <h3 className="text-white font-[family-name:var(--font-display)] text-[0.95rem] tracking-[0.06em] uppercase leading-tight font-normal">
                      {item.title}
                    </h3>
                    {item.venue && (
                      <p className="text-white/80 text-base mt-1.5 font-[family-name:var(--font-body)] font-light">
                        {item.venue}
                      </p>
                    )}
                    <p className="text-[var(--accent)] text-sm mt-2.5 font-[family-name:var(--font-body)] tracking-[0.15em] font-medium">
                      {item.year}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center pt-16">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-5 border border-[var(--foreground)]/15 px-9 py-4 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.25em] font-medium text-[var(--accent)] transition-all duration-500 hover:border-[var(--accent)] hover:text-[var(--foreground)]"
            >
              View Full Portfolio
              <span className="block w-8 h-px bg-[var(--accent)] transition-all duration-500 group-hover:w-14 group-hover:bg-[var(--foreground)]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── About Teaser ─── */}
      <section ref={aboutRef} className="py-32 md:py-40 relative overflow-hidden">
        {/* Subtle background accent */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />
        <div className="about-teaser relative mx-auto max-w-[900px] px-6 sm:px-8 text-center">
          <h2 className="section-title">About the Artist</h2>
          <div className="divider-line mx-auto mb-12" />
          <p className="section-heading text-[clamp(1.6rem,3.5vw,2.8rem)] mb-10 leading-[1.3]">
            {biography[0].split(".").slice(0, 1).join(".")}.
          </p>
          <p className="text-[var(--muted)] text-base leading-relaxed font-light max-w-2xl mx-auto mb-12">
            {biography[2]}
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-5 font-[family-name:var(--font-body)] text-sm uppercase tracking-[0.25em] font-medium text-[var(--accent)] transition-all duration-500 hover:text-[var(--foreground)]"
          >
            Read Full Biography
            <span className="block w-8 h-px bg-[var(--accent)] transition-all duration-500 group-hover:w-14 group-hover:bg-[var(--foreground)]" />
          </Link>
        </div>
      </section>

      <BackToTop />
    </>
  );
}
