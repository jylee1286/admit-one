"use client";

import { useEffect, useRef } from "react";

const freeFeatures = [
  "1 essay score per month",
  "Overall score out of 100",
  "Basic dimension breakdown",
];

const fullFeatures = [
  "Unlimited essay scores",
  "All 5 rubric dimensions",
  "Detailed written feedback",
  "School-specific rubrics",
  "Revision comparison tracking",
  "Supplemental essay support",
  "Priority processing",
  "Early access to new features",
];

export default function Pricing() {
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
      { threshold: 0.1 }
    );
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="bg-navy py-24 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <p
          className="fade-up text-gold font-sans font-semibold mb-4 text-center"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          PRICING
        </p>
        <h2
          className="fade-up fade-up-delay-1 font-serif text-cream text-center mb-16 md:mb-24"
          style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
        >
          One price. All season.
        </h2>

        {/* Pricing columns */}
        <div className="fade-up fade-up-delay-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          {/* Free */}
          <div className="md:border-r md:border-cream/20 md:pr-12 lg:pr-16">
            <p className="text-cream/60 font-sans text-sm uppercase tracking-wider mb-4">
              Free Forever
            </p>
            <p className="font-sans font-bold text-cream text-4xl mb-8">Free</p>

            <ul className="space-y-3">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="text-cream/40 mt-0.5">—</span>
                  <span className="text-cream/70 font-sans text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Season */}
          <div className="md:pl-12 lg:pl-16 border border-gold/40 md:border-0 md:border-l md:border-gold/30 rounded-xl md:rounded-none p-8 md:p-0 md:pt-0">
            <p className="text-gold font-sans text-sm uppercase tracking-wider mb-4">
              Full Season
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <span
                className="font-serif text-cream leading-none"
                style={{ fontSize: "clamp(56px, 6vw, 72px)" }}
              >
                $200
              </span>
            </div>
            <p className="text-cream/50 font-sans text-sm mb-8">
              /application season
            </p>

            <ul className="space-y-3 mb-10">
              {fullFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">✓</span>
                  <span className="text-cream/80 font-sans text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="btn-lift block text-center bg-gold text-navy font-semibold text-sm px-7 py-3.5 rounded-lg"
            >
              Start Scoring Essays
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
