"use client";

import { useEffect, useRef, useState } from "react";

const rubricDimensions = [
  { label: "Authenticity & Voice", score: 9.2, width: 92 },
  { label: "Institutional Fit", score: 8.8, width: 88 },
  { label: "Narrative Structure", score: 8.5, width: 85 },
  { label: "Specificity & Detail", score: 8.1, width: 81 },
  { label: "Emotional Resonance", score: 9.0, width: 90 },
];

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const t1 = setTimeout(() => el.classList.add("is-visible"), 300);
    const t2 = setTimeout(() => setBarsVisible(true), 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
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

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-12">
        {/* Two-column layout on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div>
            <h1
              className="font-serif text-primary leading-[1.08] tracking-tight mb-6"
              style={{ fontSize: "clamp(44px, 6.5vw, 72px)" }}
            >
              Finally Know If Your Essay Is Actually&nbsp;Good
            </h1>

            <p className="text-secondary leading-relaxed mb-10 max-w-xl" style={{ fontSize: "18px" }}>
              We built rubrics from real conversations with admissions officers.
              No more guessing&nbsp;&mdash; just honest feedback on where you stand.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="bg-navy text-white px-8 py-4 text-sm font-medium rounded-lg btn-lift inline-block"
              >
                Score My Essay
              </a>
              <a
                href="#how-it-works"
                className="text-primary text-sm font-medium group inline-flex items-center gap-2 hover:text-navy transition-colors"
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
            <div
              className="border border-navy/10 bg-white/70 relative rounded-xl transition-shadow duration-500 hover:shadow-xl overflow-hidden"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
            >
              {/* Gold top accent line */}
              <div className="h-1 bg-gold/50" />

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

              {/* Rubric dimensions with animated bars */}
              <div className="px-6 py-4">
                {rubricDimensions.map((dim, i) => (
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
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: barsVisible ? `${dim.width}%` : "0%",
                          transitionDelay: `${i * 120}ms`,
                          background: dim.score >= 9.0
                            ? "rgba(212,168,83,0.55)"
                            : "rgba(30,58,95,0.2)",
                        }}
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
