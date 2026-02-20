"use client";

import { socialLinks } from "@/lib/data";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.03] bg-[var(--background)] py-20">
      {/* Decorative top gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px"
        style={{
          width: "200px",
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 text-center">
        <button
          onClick={scrollToTop}
          className="mb-8 inline-flex items-center justify-center w-10 h-10 border border-white/[0.08] transition-all duration-500 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>

        <p className="mb-6 font-[family-name:var(--font-display)] text-[0.7rem] tracking-[0.3em] text-[var(--foreground)]/30 uppercase">
          Nadine Abou Zaki
        </p>

        <div className="mb-8 flex justify-center">
          <SocialLinks links={socialLinks} size="sm" />
        </div>

        <p className="font-[family-name:var(--font-display)] text-[0.6rem] tracking-[0.2em] text-[var(--foreground)]/15 uppercase">
          &copy; 2014 nadineabouzaki.com
        </p>
      </div>
    </footer>
  );
}
