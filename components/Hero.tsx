"use client";

import { useEffect, useRef } from "react";

const rubricDimensions = [
  { label: "Authenticity & Voice", score: 9.2, width: 92 },
  { label: "Institutional Fit", score: 8.8, width: 88 },
  { label: "Narrative Structure", score: 8.5, width: 85 },
  { label: "Specificity & Detail", score: 8.1, width: 81 },
  { label: "Emotional Resonance", score: 9.0, width: 90 },
];

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const timeout = setTimeout(() => el.classList.add("is-visible"), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="bg-cream paper-texture relative overflow-hidden">
      {/* Faint background decorative text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-navy whitespace-nowrap select-none pointer-events-none"
        style={{ fontSize: "clamp(160px, 24vw, 440px)", opacity: 0.03, letterSpacing: "0.06em" }}
        aria-hidden="true"
      >
        ADMIT ONE
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-14 md:pt-32 md:pb-16">
        {/* Two-column layout on desktop: headline left, card right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <h1
              className="font-serif text-primary leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(48px, 7vw, 76px)" }}
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

          {/* Right column — Mock Score Card */}
          <div
            ref={cardRef}
            className="fade-in-section lg:mt-2"
          >
            <div className="border border-navy/12 bg-white/60 relative" style={{ boxShadow: "0 2px 12px rgba(27,45,79,0.06)" }}>
              {/* Card header */}
              <div className="px-6 pt-5 pb-4 border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gold text-[10px] font-sans font-medium uppercase tracking-[0.2em] mb-1">
                      Sample Report
                    </p>
                    <p className="font-serif text-primary text-sm tracking-tight">
                      Common App — Harvard
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-navy leading-none" style={{ fontSize: "48px" }}>
                      87
                    </p>
                    <p className="text-secondary text-[11px] tracking-wide">/100</p>
                  </div>
                </div>
              </div>

              {/* Rubric dimensions with bars */}
              <div className="px-6 py-4">
                {rubricDimensions.map((dim) => (
                  <div
                    key={dim.label}
                    className="py-2.5 border-b border-border/50 last:border-b-0"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-secondary text-[13px]">{dim.label}</span>
                      <span className="font-serif text-navy text-sm font-medium">{dim.score}</span>
                    </div>
                    <div className="h-1 bg-border/40 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-navy/20 rounded-full"
                        style={{ width: `${dim.width}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold rule at bottom of hero */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gold/25" />
      </div>
    </section>
  );
}
