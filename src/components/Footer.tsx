"use client";

import Link from "next/link";
import { socialLinks, siteConfig } from "@/lib/data";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[var(--background)]">
      {/* Decorative gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px"
        style={{
          width: "240px",
          background: "linear-gradient(90deg, transparent, var(--accent), var(--rose), transparent)",
        }}
      />

      <div className="mx-auto max-w-[1200px] px-8 sm:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-display)] text-[0.9rem] tracking-[0.08em] text-[var(--foreground)] uppercase font-normal mb-4">
              {siteConfig.name}
            </p>
            <p className="text-[var(--muted)] text-base font-light leading-relaxed">
              {siteConfig.description}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-block mt-4 text-[var(--accent)] text-sm font-light tracking-wide transition-colors duration-500 hover:text-[var(--foreground)]"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-medium mb-6">
              Navigate
            </h4>
            <div className="grid grid-cols-2 gap-y-3">
              {[
                { href: "/portfolio", label: "Portfolio" },
                { href: "/videos", label: "Videos" },
                { href: "/news", label: "News" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--foreground)]/80 text-sm font-light transition-colors duration-400 hover:text-[var(--foreground)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.25em] text-[var(--accent)] font-medium mb-6">
              Follow
            </h4>
            <SocialLinks links={socialLinks} size="sm" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 border-t border-white/10">
          <p className="font-[family-name:var(--font-body)] text-xs tracking-[0.15em] text-[var(--foreground)]/60 uppercase font-medium">
            &copy; {new Date().getFullYear()} {siteConfig.domain}
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 inline-flex items-center gap-3 font-[family-name:var(--font-body)] text-xs tracking-[0.2em] text-[var(--foreground)]/60 uppercase font-medium transition-colors duration-500 hover:text-[var(--accent)]"
          >
            Back to top
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
