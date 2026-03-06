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
    <section id="pricing" ref={sectionRef} className="bg-navy py-20 md:py-24 relative overflow-hidden">
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Label */}
        <p
          className="fade-up text-gold font-sans font-semibold mb-4 text-center"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          PRICING
        </p>
        <h2
          className="fade-up fade-up-delay-1 font-serif text-cream text-center mb-14 md:mb-20"
          style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
        >
          One price. All season.
        </h2>

        {/* Pricing columns */}
        <div className="fade-up fade-up-delay-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          {/* Free */}
          <div className="md:border-r md:border-cream/15 md:pr-12 lg:pr-16">
            <p className="text-cream/50 font-sans text-sm uppercase tracking-wider mb-4">
              Free Forever
            </p>
            <p className="font-sans font-bold text-cream text-4xl mb-8">Free</p>

            <ul className="space-y-3">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="text-cream/30 mt-0.5">—</span>
                  <span className="text-cream/60 font-sans text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Season */}
          <div className="md:pl-12 lg:pl-16 border border-gold/30 md:border-0 rounded-xl md:rounded-none p-8 md:p-0 md:pt-0 relative">
            {/* Recommended badge */}
            <div className="absolute -top-3 left-8 md:left-12 bg-gold text-navy font-sans font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
              Recommended
            </div>

            <p className="text-gold font-sans text-sm uppercase tracking-wider mb-4 mt-2 md:mt-0">
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
            <p className="text-cream/40 font-sans text-sm mb-8">
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
              className="btn-lift block text-center bg-gold text-navy font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-[#DEB463] transition-colors"
            >
              Start Scoring Essays
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
