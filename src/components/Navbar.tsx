"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/portfolio",
    label: "Portfolio",
    children: [
      { href: "/portfolio", label: "All" },
      { href: "/portfolio?category=Theater+%26+Dance", label: "Theater & Dance" },
      { href: "/portfolio?category=Tactile+Art+Performances", label: "Tactile Art Performances" },
      { href: "/portfolio?category=Sculptures", label: "Sculptures" },
      { href: "/portfolio?category=Lino+prints", label: "Lino prints" },
      { href: "/portfolio?category=Authored+Books", label: "Authored Books" },
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <nav className={`navbar ${scrolled || pathname !== "/" ? "scrolled" : ""}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-[family-name:var(--font-ubuntu-condensed)] text-lg tracking-widest text-white uppercase">
            Nadine Abou Zaki
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`font-[family-name:var(--font-ubuntu-condensed)] text-sm tracking-wider uppercase transition-colors hover:text-[var(--accent)] ${
                      pathname === link.href ? "text-[var(--accent)]" : "text-white/80"
                    }`}
                  >
                    {link.label} <span className="ml-1 text-xs">&#9662;</span>
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 min-w-[220px] bg-[#111] py-2 shadow-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white/70 transition-colors hover:bg-[var(--accent)] hover:text-black"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-[family-name:var(--font-ubuntu-condensed)] text-sm tracking-wider uppercase transition-colors hover:text-[var(--accent)] ${
                    pathname === link.href ? "text-[var(--accent)]" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="nav-toggle md:hidden"
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
          <div className="border-t border-white/10 py-4 md:hidden">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-2 font-[family-name:var(--font-ubuntu-condensed)] text-sm tracking-wider uppercase ${
                    pathname === link.href ? "text-[var(--accent)]" : "text-white/80"
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-xs text-white/60 hover:text-[var(--accent)]"
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
