"use client";

import { useEffect, useRef } from "react";
import ScoreCard from "./ScoreCard";

export default function ScorePreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const children = el.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Left text */}
          <div className="flex-1">
            <p
              className="fade-up text-gold font-sans font-semibold mb-4"
              style={{ fontSize: "11px", letterSpacing: "0.2em" }}
            >
              WHAT YOU GET
            </p>
            <h2
              className="fade-up fade-up-delay-1 font-serif text-navy mb-6"
              style={{ fontSize: "clamp(32px, 3.5vw, 44px)", lineHeight: 1.15 }}
            >
              A breakdown that actually tells you something.
            </h2>
            <p className="fade-up fade-up-delay-2 text-secondary font-sans text-base leading-relaxed mb-8 max-w-md">
              Not a vague &quot;good job.&quot; You get dimensional scores across the five
              criteria that admissions officers actually care about — with specific
              feedback on every one.
            </p>
            <a
              href="#pricing"
              className="fade-up fade-up-delay-3 inline-flex items-center gap-1 text-navy font-semibold text-sm group"
            >
              <span className="border-b-2 border-gold pb-0.5 group-hover:border-navy transition-colors">
                Start Scoring Essays
              </span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Right score card */}
          <div className="fade-up fade-up-delay-2 flex-shrink-0">
            <ScoreCard />
          </div>
        </div>
      </div>
    </section>
  );
}
