"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { categories, portfolioItems, type Category } from "@/lib/data";

function PortfolioContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as Category) || "All";
  const [activeFilter, setActiveFilter] = useState<Category>(initialCategory);
  const gridRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    if (hasAnimated.current || !gridRef.current) return;
    hasAnimated.current = true;

    const items = gridRef.current.querySelectorAll(".portfolio-item");
    gsap.set(items, { opacity: 0, y: 30 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.04,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  const handleFilter = useCallback(
    (category: Category) => {
      if (category === activeFilter || !gridRef.current) return;

      const items = gridRef.current.querySelectorAll(".portfolio-item");
      gsap.to(items, {
        opacity: 0,
        y: 15,
        duration: 0.3,
        stagger: 0.02,
        ease: "power2.in",
        onComplete: () => setActiveFilter(category),
      });
    },
    [activeFilter]
  );

  useEffect(() => {
    if (!hasAnimated.current || !gridRef.current) return;

    requestAnimationFrame(() => {
      if (!gridRef.current) return;
      const items = gridRef.current.querySelectorAll(".portfolio-item");
      gsap.set(items, { opacity: 0, y: 20 });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.04,
        ease: "power3.out",
      });
    });
  }, [activeFilter]);

  return (
    <section className="pt-32 pb-24 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="mb-16">
          <span className="section-number block mb-4">Collection</span>
          <h1 className="font-[family-name:var(--font-display)] text-[0.75rem] uppercase tracking-[0.3em] text-[var(--accent)] font-normal mb-4">Portfolio</h1>
          <div className="divider-line" />
        </div>

        <div className="flex flex-wrap justify-start gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div ref={gridRef} className="portfolio-grid max-w-[1400px] mx-auto px-2 sm:px-4">
        {filteredItems.map((item) => (
          <Link key={item.id} href={`/portfolio/${item.slug}`} className="portfolio-item">
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
                <h3 className="font-[family-name:var(--font-display)] text-[0.95rem] tracking-[0.06em] text-white uppercase font-normal mb-1">
                  {item.title}
                </h3>
                {item.venue && (
                  <p className="text-white/35 text-sm font-[family-name:var(--font-body)] font-light">
                    {item.venue}
                  </p>
                )}
                <p className="text-[var(--accent)]/60 text-xs mt-2.5 font-[family-name:var(--font-body)] tracking-[0.15em] font-medium">
                  {item.year}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense
      fallback={
        <section className="pt-32 pb-24 min-h-screen">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
            <h1 className="section-title">Portfolio</h1>
            <div className="divider-line" />
          </div>
        </section>
      }
    >
      <PortfolioContent />
    </Suspense>
  );
}
