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
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-info", {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main ref={containerRef} className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="reveal mb-16">
          <h1 className="section-title text-3xl">Contact</h1>
          <div
            className="w-16 h-px mt-4"
            style={{ background: "var(--accent)" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <div className="contact-form">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "var(--accent)" }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0a0a0a"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  className="text-xl mb-2"
                  style={{
                    fontFamily: "var(--font-ubuntu-condensed), sans-serif",
                    color: "var(--foreground)",
                  }}
                >
                  Message Sent
                </h3>
                <p style={{ color: "var(--muted)" }}>
                  Thank you for reaching out. I will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm uppercase tracking-[0.15em] mb-2"
                    style={{
                      fontFamily: "var(--font-ubuntu-condensed), sans-serif",
                      color: "var(--muted)",
                    }}
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
                    className="block text-sm uppercase tracking-[0.15em] mb-2"
                    style={{
                      fontFamily: "var(--font-ubuntu-condensed), sans-serif",
                      color: "var(--muted)",
                    }}
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
                    className="block text-sm uppercase tracking-[0.15em] mb-2"
                    style={{
                      fontFamily: "var(--font-ubuntu-condensed), sans-serif",
                      color: "var(--muted)",
                    }}
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
                    className="block text-sm uppercase tracking-[0.15em] mb-2"
                    style={{
                      fontFamily: "var(--font-ubuntu-condensed), sans-serif",
                      color: "var(--muted)",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Your message"
                    required
                    className="contact-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-sm uppercase tracking-[0.2em] font-medium transition-opacity duration-300 hover:opacity-85 cursor-pointer"
                  style={{
                    background: "var(--accent)",
                    color: "#0a0a0a",
                    fontFamily: "var(--font-ubuntu-condensed), sans-serif",
                    border: "none",
                  }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Info */}
          <div className="contact-info">
            <div className="space-y-10">
              <div>
                <h3
                  className="text-sm uppercase tracking-[0.2em] mb-4"
                  style={{
                    fontFamily: "var(--font-ubuntu-condensed), sans-serif",
                    color: "var(--accent)",
                  }}
                >
                  Get in Touch
                </h3>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: "rgba(237, 237, 237, 0.85)" }}
                >
                  For inquiries about exhibitions, collaborations, commissions,
                  or any other matter, please feel free to reach out.
                </p>
              </div>

              <div>
                <h3
                  className="text-sm uppercase tracking-[0.2em] mb-4"
                  style={{
                    fontFamily: "var(--font-ubuntu-condensed), sans-serif",
                    color: "var(--accent)",
                  }}
                >
                  Email
                </h3>
                <a
                  href="mailto:info@nadineabouzaki.com"
                  className="text-base transition-colors duration-300"
                  style={{ color: "var(--foreground)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--foreground)")
                  }
                >
                  info@nadineabouzaki.com
                </a>
              </div>

              <div>
                <h3
                  className="text-sm uppercase tracking-[0.2em] mb-4"
                  style={{
                    fontFamily: "var(--font-ubuntu-condensed), sans-serif",
                    color: "var(--accent)",
                  }}
                >
                  Follow
                </h3>
                <SocialLinks links={socialLinks} size="md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
