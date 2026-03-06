"use client";

import { useEffect, useRef, useState } from "react";

const dimensions = [
  { name: "Narrative Voice", score: 19, max: 20 },
  { name: "Specificity", score: 17, max: 20 },
  { name: "Hook Strength", score: 18, max: 20 },
  { name: "Structure", score: 15, max: 20 },
  { name: "Authenticity", score: 18, max: 20 },
];

export default function ScoreCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-white p-6 md:p-8 w-full max-w-sm border-t-[3px] border-t-gold"
      style={{
        borderRadius: "16px",
        boxShadow: "0 8px 40px rgba(30, 58, 95, 0.12)",
      }}
    >
      {/* Header */}
      <p
        className="text-navy font-sans font-bold uppercase mb-6"
        style={{ fontSize: "11px", letterSpacing: "0.15em" }}
      >
        COMMON APP ESSAY — HARVARD
      </p>

      {/* Big score */}
      <div className="flex items-baseline gap-1 mb-8">
        <span className="font-serif text-navy leading-none" style={{ fontSize: "96px" }}>
          87
        </span>
        <span className="font-serif text-secondary text-2xl">/100</span>
      </div>

      {/* Dimensions */}
      <div className="space-y-0">
        {dimensions.map((d) => (
          <div key={d.name} className="py-3 border-b border-border last:border-b-0">
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-sans text-sm text-primary">{d.name}</span>
              <span className="font-sans text-sm font-semibold text-navy">
                {d.score}/{d.max}
              </span>
            </div>
            <div className="h-1.5 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-gold rounded-full progress-bar"
                style={{
                  width: animated ? `${(d.score / d.max) * 100}%` : "0%",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
