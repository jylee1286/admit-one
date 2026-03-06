"use client";

import { useEffect, useRef } from "react";

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll(".fade-in-section");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={sectionRef} className="bg-cream">
      {/* Section divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      <div className="py-[80px] md:py-[120px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in-section">
            <p className="text-gold text-[11px] font-sans font-medium uppercase tracking-[0.15em] mb-4">
              Pricing
            </p>
            <h2
              className="font-serif text-primary tracking-tight mb-16 md:mb-20"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              Simple, transparent pricing
            </h2>
          </div>

          <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Free tier */}
            <div className="pb-10 md:pb-0 md:pr-12 lg:pr-16">
              <p className="text-secondary text-[11px] uppercase tracking-[0.15em] mb-6">
                Free Tier
              </p>
              <h3 className="font-serif text-primary tracking-tight mb-1" style={{ fontSize: "28px" }}>
                Interview Prep
              </h3>
              <p className="font-serif text-secondary mb-2" style={{ fontSize: "36px" }}>
                Free
              </p>
              <p className="text-secondary mb-8" style={{ fontSize: "15px" }}>
                Get started with our foundational tools.
              </p>

              <ul className="space-y-4 text-primary leading-relaxed" style={{ fontSize: "15px" }}>
                <li className="flex gap-3">
                  <span className="text-secondary shrink-0">&mdash;</span>
                  Standard rubric essay scoring (1 free evaluation)
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary shrink-0">&mdash;</span>
                  General feedback across core dimensions
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary shrink-0">&mdash;</span>
                  School-specific prompt database access
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary shrink-0">&mdash;</span>
                  Interview preparation question bank
                </li>
              </ul>
            </div>

            {/* Full Season */}
            <div className="border-t md:border-t-0 md:border-l border-border pt-10 md:pt-0 md:pl-12 lg:pl-16 relative">
              {/* Gold border accent */}
              <div className="absolute inset-0 hidden md:block border border-gold/20 -m-4 pointer-events-none" style={{ borderRadius: "2px" }} />

              {/* Recommended label */}
              <p className="text-gold text-[11px] uppercase tracking-[0.15em] font-medium mb-6">
                Recommended
              </p>

              <h3 className="font-serif text-primary tracking-tight mb-1" style={{ fontSize: "28px" }}>
                Full Season
              </h3>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-serif text-navy" style={{ fontSize: "clamp(48px, 5vw, 64px)" }}>
                  $200
                </span>
                <span className="text-secondary text-sm">/application season</span>
              </div>

              <p className="text-secondary mb-8" style={{ fontSize: "15px" }}>
                Everything you need for a competitive application.
              </p>

              <ul className="space-y-4 text-primary leading-relaxed mb-10" style={{ fontSize: "15px" }}>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">&mdash;</span>
                  Unlimited T20-specific rubric evaluations
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">&mdash;</span>
                  Detailed dimension-by-dimension scoring
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">&mdash;</span>
                  Revision tracking across essay drafts
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">&mdash;</span>
                  Priority access to new rubrics and features
                </li>
                <li className="flex gap-3">
                  <span className="text-gold shrink-0">&mdash;</span>
                  All 20+ school-specific rubrics included
                </li>
              </ul>

              <a
                href="#"
                className="inline-block bg-navy text-white px-8 py-4 text-sm tracking-wide hover:bg-navy-light transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
