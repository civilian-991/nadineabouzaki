"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { gsap } from "gsap";
import { socialLinks, siteConfig } from "@/lib/data";
import SocialLinks from "@/components/SocialLinks";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-form > *", {
        x: -30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".contact-info > *", {
        x: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section ref={containerRef} className="min-h-screen pt-32 pb-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-24">
          <span className="section-number block mb-4">Get in Touch</span>
          <h1 className="font-[family-name:var(--font-display)] text-sm uppercase tracking-[0.3em] text-[var(--accent)] font-normal mb-4">
            Contact
          </h1>
          <div className="divider-line" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-24">
          {/* Left: Contact Form */}
          <div className="contact-form">
            {submitted ? (
              <div className="flex flex-col items-start py-16">
                <div className="divider-line mb-10" />
                <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.2rem)] font-normal italic mb-4 text-[var(--foreground)]">
                  Message Sent
                </h3>
                <p className="text-[var(--muted)] font-light text-base">
                  Thank you for reaching out. I will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.25em] mb-3 text-[var(--muted)] font-medium"
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
                    className="block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.25em] mb-3 text-[var(--muted)] font-medium"
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
                    className="block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.25em] mb-3 text-[var(--muted)] font-medium"
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
                    className="block font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.25em] mb-3 text-[var(--muted)] font-medium"
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
                  className="group inline-flex items-center gap-5 py-4 font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.25em] font-medium text-[var(--accent)] transition-all duration-500 hover:text-[var(--foreground)]"
                >
                  Send Message
                  <span className="block w-6 h-px bg-[var(--accent)] transition-all duration-500 group-hover:w-10 group-hover:bg-[var(--foreground)]" />
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Info */}
          <div className="contact-info lg:pt-4">
            <div className="space-y-16">
              <div>
                <h3 className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.25em] mb-6 text-[var(--accent)] font-medium">
                  Inquiries
                </h3>
                <p className="text-[var(--foreground)]/50 text-base leading-relaxed font-light">
                  For inquiries about exhibitions, collaborations, commissions,
                  or any other matter, please feel free to reach out.
                </p>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.25em] mb-6 text-[var(--accent)] font-medium">
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[var(--foreground)]/60 text-base font-light transition-colors duration-500 hover:text-[var(--accent)] tracking-wide"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <h3 className="font-[family-name:var(--font-body)] text-xs uppercase tracking-[0.25em] mb-6 text-[var(--accent)] font-medium">
                  Follow
                </h3>
                <SocialLinks links={socialLinks} size="sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
