"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import gsap from "gsap";
import { categories, portfolioItems, type Category } from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";

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

  // Initial stagger animation on mount
  useEffect(() => {
    if (hasAnimated.current || !gridRef.current) return;
    hasAnimated.current = true;

    const items = gridRef.current.querySelectorAll(".portfolio-item");
    gsap.set(items, { opacity: 0, y: 40 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  // Filter change animation
  const handleFilter = useCallback(
    (category: Category) => {
      if (category === activeFilter || !gridRef.current) return;

      const items = gridRef.current.querySelectorAll(".portfolio-item");
      gsap.to(items, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        stagger: 0.03,
        ease: "power2.in",
        onComplete: () => {
          setActiveFilter(category);
        },
      });
    },
    [activeFilter]
  );

  // Animate new items in after filter state updates
  useEffect(() => {
    if (!hasAnimated.current || !gridRef.current) return;

    // Wait for DOM to update with new filtered items
    requestAnimationFrame(() => {
      if (!gridRef.current) return;
      const items = gridRef.current.querySelectorAll(".portfolio-item");
      gsap.set(items, { opacity: 0, y: 30 });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: "power3.out",
      });
    });
  }, [activeFilter]);

  return (
    <section className="pt-24 pb-20 px-6 md:px-12 lg:px-20 min-h-screen">
      {/* Page header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="section-title text-center text-3xl md:text-4xl mb-4">
          Portfolio
        </h1>
        <div className="w-16 h-px bg-accent mx-auto mb-10" />

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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

      {/* Portfolio grid */}
      <div ref={gridRef} className="portfolio-grid max-w-7xl mx-auto">
        {filteredItems.map((item) => (
          <div key={item.id} className="portfolio-item rounded-sm">
            <PlaceholderImage
              title={item.title}
              className="w-full h-full"
              aspectRatio="440/360"
            />
            <div className="overlay">
              <div>
                <h3 className="font-[family-name:var(--font-ubuntu-condensed)] text-base tracking-wide text-white mb-1">
                  {item.title}
                </h3>
                {item.venue && (
                  <p className="text-white/60 text-sm">{item.venue}</p>
                )}
                <p className="text-accent text-sm mt-1">{item.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PortfolioPage() {
  return (
    <Suspense
      fallback={
        <section className="pt-24 pb-20 px-6 md:px-12 lg:px-20 min-h-screen">
          <div className="max-w-7xl mx-auto mb-12">
            <h1 className="section-title text-center text-3xl md:text-4xl mb-4">
              Portfolio
            </h1>
            <div className="w-16 h-px bg-accent mx-auto" />
          </div>
        </section>
      }
    >
      <PortfolioContent />
    </Suspense>
  );
}
