"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/portfolio",
    label: "Portfolio",
    children: [
      { href: "/portfolio", label: "All" },
      { href: "/portfolio?category=Theater+%26+Dance", label: "Theater & Dance" },
      { href: "/portfolio?category=Tactile+Art+Performances", label: "Tactile Art" },
      { href: "/portfolio?category=Sculptures", label: "Sculptures" },
      { href: "/portfolio?category=Lino+prints", label: "Lino Prints" },
      { href: "/portfolio?category=Authored+Books", label: "Books" },
    ],
  },
  { href: "/videos", label: "Videos" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const linkClass = (href: string) =>
    `font-[family-name:var(--font-body)] text-[0.65rem] tracking-[0.22em] uppercase font-medium transition-all duration-500 ${
      pathname === href
        ? "text-[var(--accent)]"
        : "text-[var(--foreground)]/40 hover:text-[var(--foreground)]"
    }`;

  return (
    <nav className={`navbar ${scrolled || pathname !== "/" ? "scrolled" : ""}`}>
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-[0.85rem] tracking-[0.12em] text-[var(--foreground)] uppercase font-normal"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link href={link.href} className={linkClass(link.href)}>
                    {link.label}
                    <span className="ml-1 text-[0.45rem] opacity-30">&#9662;</span>
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-3 min-w-[220px]">
                      <div className="border border-white/10 bg-[var(--background)]/95 py-3 shadow-2xl backdrop-blur-2xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 font-[family-name:var(--font-body)] text-[0.6rem] tracking-[0.18em] text-[var(--foreground)]/60 uppercase font-medium transition-all duration-300 hover:text-[var(--accent)] hover:pl-7"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className={`nav-toggle md:hidden ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-white/10 py-8 md:hidden">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 font-[family-name:var(--font-body)] text-[0.7rem] tracking-[0.2em] uppercase font-medium ${
                    pathname === link.href ? "text-[var(--accent)]" : "text-[var(--foreground)]/60"
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 border-l border-white/10 pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 font-[family-name:var(--font-body)] text-[0.6rem] tracking-[0.15em] text-[var(--foreground)]/50 uppercase font-medium hover:text-[var(--accent)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
