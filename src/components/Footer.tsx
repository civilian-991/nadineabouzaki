"use client";

import { socialLinks } from "@/lib/data";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <button onClick={scrollToTop} className="mb-6 inline-block transition-colors hover:text-[var(--accent)]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>

        <h4 className="mb-4 font-[family-name:var(--font-ubuntu-condensed)] text-lg tracking-widest text-[var(--accent)] uppercase">
          Nadine Abou Zaki
        </h4>

        <div className="mb-6 flex justify-center">
          <SocialLinks links={socialLinks} />
        </div>

        <p className="text-xs text-[var(--muted)]">&copy;2014 nadineabouzaki.com</p>
      </div>
    </footer>
  );
}
