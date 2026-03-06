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
    <section id="pricing" ref={sectionRef} className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in-section">
          <p className="text-gold text-xs font-sans font-medium uppercase tracking-[0.2em] mb-4">
            Pricing
          </p>
          <h2 className="font-serif text-primary text-3xl md:text-4xl lg:text-5xl tracking-tight mb-16 md:mb-20">
            Simple, transparent pricing
          </h2>
        </div>

        <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Free tier */}
          <div className="pb-10 md:pb-0 md:pr-12 lg:pr-16">
            <p className="text-secondary text-xs uppercase tracking-[0.15em] mb-6">
              Free
            </p>
            <h3 className="font-serif text-primary text-2xl md:text-3xl tracking-tight mb-2">
              Interview Prep
            </h3>
            <p className="text-secondary text-sm mb-8">
              Get started with our foundational tools.
            </p>

            <ul className="space-y-3 text-primary text-sm leading-relaxed">
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

          {/* Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" style={{ display: "none" }} />
          <div className="border-t md:border-t-0 md:border-l border-border pt-10 md:pt-0 md:pl-12 lg:pl-16">
            {/* Gold accent line */}
            <div className="w-12 h-0.5 bg-gold mb-6" />

            <p className="text-gold text-xs uppercase tracking-[0.15em] mb-6">
              Recommended
            </p>
            <div className="flex items-baseline gap-2 mb-2">
              <h3 className="font-serif text-primary text-4xl md:text-5xl tracking-tight">
                $200
              </h3>
              <span className="text-secondary text-sm">/application season</span>
            </div>
            <h4 className="font-serif text-primary text-2xl tracking-tight mb-2">
              Full Season
            </h4>
            <p className="text-secondary text-sm mb-8">
              Everything you need for a competitive application.
            </p>

            <ul className="space-y-3 text-primary text-sm leading-relaxed mb-10">
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
              className="inline-block bg-navy text-white px-7 py-3.5 text-sm tracking-wide hover:bg-navy-light transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
