"use client";

import { useEffect, useRef } from "react";

const rubricDimensions = [
  { label: "Authenticity & Voice", score: 9.2 },
  { label: "Institutional Fit", score: 8.8 },
  { label: "Narrative Structure", score: 8.5 },
  { label: "Specificity & Detail", score: 8.1 },
  { label: "Emotional Resonance", score: 9.0 },
];

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const timeout = setTimeout(() => el.classList.add("is-visible"), 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="bg-cream paper-texture relative overflow-hidden">
      {/* Faint background decorative text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-navy whitespace-nowrap select-none pointer-events-none"
        style={{ fontSize: "clamp(160px, 22vw, 400px)", opacity: 0.035, letterSpacing: "0.05em" }}
        aria-hidden="true"
      >
        ADMIT ONE
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-2xl">
          <h1
            className="font-serif text-primary leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(48px, 7vw, 80px)" }}
          >
            Your Essay, Scored by the T20&nbsp;Standard
          </h1>

          <p className="text-secondary leading-relaxed mb-10 max-w-xl" style={{ fontSize: "17px" }}>
            Rubrics built from real admissions officer interviews. Know exactly
            where you stand before you apply.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="bg-navy text-white px-8 py-4 text-sm tracking-wide hover:bg-navy-light transition-colors inline-block"
            >
              Score My Essay
            </a>
            <a
              href="#how-it-works"
              className="text-primary text-sm tracking-wide group inline-flex items-center gap-2 hover:text-navy transition-colors"
            >
              See How It Works
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>
        </div>

        {/* Gold horizontal rule */}
        <div className="mt-14 md:mt-16 mb-12 md:mb-14">
          <div className="h-px bg-gold/30 w-full" />
        </div>

        {/* Mock Score Card */}
        <div
          ref={cardRef}
          className="fade-in-section max-w-md"
        >
          <div className="border border-navy/15 bg-cream relative" style={{ boxShadow: "0 1px 3px rgba(27,45,79,0.04)" }}>
            {/* Card header */}
            <div className="px-6 pt-5 pb-4 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gold text-[10px] font-sans font-medium uppercase tracking-[0.2em] mb-1">
                    Sample Report
                  </p>
                  <p className="font-serif text-primary text-sm tracking-tight">
                    Common App Essay — Harvard
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-navy leading-none" style={{ fontSize: "42px" }}>
                    87
                  </p>
                  <p className="text-secondary text-[11px] tracking-wide">/100</p>
                </div>
              </div>
            </div>

            {/* Rubric dimensions */}
            <div className="px-6 py-4">
              {rubricDimensions.map((dim) => (
                <div
                  key={dim.label}
                  className="flex items-center justify-between py-2 border-b border-border/60 last:border-b-0"
                >
                  <span className="text-secondary text-[13px]">{dim.label}</span>
                  <span className="font-serif text-navy text-sm font-medium">{dim.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
