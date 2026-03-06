"use client";

import { useEffect, useRef, useState } from "react";

const dimensions = [
  { name: "Narrative Voice", score: 19, total: 20 },
  { name: "Specificity", score: 17, total: 20 },
  { name: "Hook Strength", score: 18, total: 20 },
  { name: "Structure", score: 15, total: 20 },
  { name: "Authenticity", score: 18, total: 20 },
];

export default function ScoreReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const sectionHeight = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / sectionHeight));
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scoreValue = progress < 0.3 ? Math.round((progress / 0.3) * 87) : 87;
  const scoreIsSmall = progress > 0.3;
  const dimensionProgress = progress > 0.3 ? Math.min((progress - 0.3) / 0.3, 1) : 0;
  const showCTA = progress > 0.65;
  const ctaOpacity = progress > 0.65 ? Math.min((progress - 0.65) / 0.15, 1) : 0;

  return (
    <section ref={sectionRef} style={{ height: "300vh" }} className="relative">
      <div className="sticky top-0 h-screen bg-navy flex items-center justify-center overflow-hidden">
        {/* Grain texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
          {/* Score number */}
          <div
            className="flex flex-col items-center"
            style={{
              transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              transform: scoreIsSmall
                ? "translate(-35vw, -30vh) scale(0.3)"
                : "translate(0, 0) scale(1)",
              transformOrigin: "center center",
              position: scoreIsSmall ? "absolute" : "relative",
              top: scoreIsSmall ? "50%" : "auto",
              left: scoreIsSmall ? "50%" : "auto",
            }}
          >
            {/* Label */}
            <p
              className="font-sans font-semibold mb-4"
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                color: scoreIsSmall ? "rgba(250,247,242,0.4)" : "rgba(250,247,242,0.6)",
                transition: "color 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              YOUR ESSAY SCORE
            </p>

            {/* Number */}
            <span
              className="font-serif leading-none"
              style={{
                fontSize: "clamp(100px, 20vw, 200px)",
                color: scoreIsSmall ? "#FAF7F2" : "#D4A853",
                transition: "color 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {scoreValue}
            </span>

            {/* /100 */}
            <span
              className="font-serif mt-2"
              style={{
                fontSize: "clamp(24px, 3vw, 36px)",
                color: "rgba(250,247,242,0.4)",
              }}
            >
              /100
            </span>
          </div>

          {/* Dimension rows — Stage 2 */}
          <div
            className="mt-8"
            style={{
              opacity: dimensionProgress,
              transition: "opacity 0.4s ease",
            }}
          >
            <div className="space-y-5 max-w-xl mx-auto">
              {dimensions.map((dim, i) => {
                const rowDelay = i * 0.08;
                const rowProgress = Math.max(
                  0,
                  Math.min(1, (dimensionProgress - rowDelay) / (1 - rowDelay * dimensions.length / dimensions.length))
                );
                const barWidth = (dim.score / dim.total) * 100;

                return (
                  <div
                    key={dim.name}
                    style={{
                      opacity: rowProgress,
                      transform: `translateY(${(1 - rowProgress) * 20}px)`,
                      transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className="font-sans text-sm"
                        style={{ color: "rgba(250,247,242,0.8)" }}
                      >
                        {dim.name}
                      </span>
                      <span
                        className="font-sans text-sm font-semibold"
                        style={{ color: "#D4A853" }}
                      >
                        {dim.score}/{dim.total}
                      </span>
                    </div>
                    <div
                      className="w-full h-1.5 rounded-full"
                      style={{ backgroundColor: "rgba(250,247,242,0.1)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: dimensionProgress > 0.2 ? `${barWidth}%` : "0%",
                          backgroundColor: "#D4A853",
                          transition: `width 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA — Stage 3 */}
          {showCTA && (
            <div
              className="mt-16 text-center"
              style={{
                opacity: ctaOpacity,
                transform: `translateY(${(1 - ctaOpacity) * 20}px)`,
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              <h3
                className="font-serif italic text-cream mb-4"
                style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
              >
                Ready for T20?
              </h3>
              <p
                className="font-sans mb-8"
                style={{ color: "rgba(250,247,242,0.6)", fontSize: "16px" }}
              >
                Get your real score.
              </p>
              <a
                href="#pricing"
                className="btn-lift bg-gold text-navy font-semibold text-sm px-8 py-3.5 rounded-lg inline-block"
              >
                Score My Essay
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
