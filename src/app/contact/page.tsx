"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { socialLinks } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-form", {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".contact-info", {
        x: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main ref={containerRef} className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-20">
          <h1 className="section-title">Contact</h1>
          <div className="divider-line" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-20">
          {/* Left: Contact Form */}
          <div className="contact-form">
            {submitted ? (
              <div className="flex flex-col items-start py-16">
                <div className="divider-line mb-8" />
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-light mb-3 text-[var(--foreground)]">
                  Message Sent
                </h3>
                <p className="text-[var(--muted)] font-light text-base">
                  Thank you for reaching out. I will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-[family-name:var(--font-display)] text-[0.65rem] uppercase tracking-[0.25em] mb-3 text-[var(--muted)]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="contact-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-[family-name:var(--font-display)] text-[0.65rem] uppercase tracking-[0.25em] mb-3 text-[var(--muted)]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="contact-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block font-[family-name:var(--font-display)] text-[0.65rem] uppercase tracking-[0.25em] mb-3 text-[var(--muted)]"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    required
                    className="contact-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-[family-name:var(--font-display)] text-[0.65rem] uppercase tracking-[0.25em] mb-3 text-[var(--muted)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message"
                    required
                    className="contact-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-4 py-4 font-[family-name:var(--font-display)] text-[0.7rem] uppercase tracking-[0.25em] text-[var(--accent)] transition-all duration-500 hover:text-[var(--foreground)] border-b border-[var(--accent)]/30 hover:border-[var(--accent)] bg-transparent"
                  style={{ border: "none", borderBottom: "1px solid rgba(184, 149, 106, 0.3)" }}
                >
                  Send Message
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Info */}
          <div className="contact-info lg:pt-4">
            <div className="space-y-12">
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[0.65rem] uppercase tracking-[0.25em] mb-5 text-[var(--accent)]">
                  Get in Touch
                </h3>
                <p className="text-[var(--foreground)]/60 text-base leading-relaxed font-light">
                  For inquiries about exhibitions, collaborations, commissions,
                  or any other matter, please feel free to reach out.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[0.65rem] uppercase tracking-[0.25em] mb-5 text-[var(--accent)]">
                  Email
                </h3>
                <a
                  href="mailto:info@nadineabouzaki.com"
                  className="text-[var(--foreground)]/70 text-base font-light transition-colors duration-400 hover:text-[var(--accent)] tracking-wide"
                >
                  info@nadineabouzaki.com
                </a>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-display)] text-[0.65rem] uppercase tracking-[0.25em] mb-5 text-[var(--accent)]">
                  Follow
                </h3>
                <SocialLinks links={socialLinks} size="sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
