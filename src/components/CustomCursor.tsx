"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) {
      dot.style.display = "none";
      ring.style.display = "none";
      return;
    }

    const onMove = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.25, ease: "power2.out" });
    };

    const onEnter = () => {
      dot.classList.add("hovering");
      ring.classList.add("hovering");
    };

    const onLeave = () => {
      dot.classList.remove("hovering");
      ring.classList.remove("hovering");
    };

    window.addEventListener("mousemove", onMove);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [role='button'], .portfolio-item, .filter-btn, .social-icon, .video-card, .news-card").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
