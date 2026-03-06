"use client";

import { useEffect, useRef, useState } from "react";

const dimensions = [
  { name: "Narrative Voice", score: 19, max: 20 },
  { name: "Specificity", score: 17, max: 20 },
  { name: "Hook Strength", score: 18, max: 20 },
  { name: "Structure", score: 15, max: 20 },
  { name: "Authenticity", score: 18, max: 20 },
];

function ScoreRing({ score, animated }: { score: number; animated: boolean }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const progress = animated ? score / 100 : 0;
  const offset = circumference - progress * circumference;

  return (
    <div className="relative inline-flex items-center justify-center mb-6">
      <svg width="140" height="140" viewBox="0 0 140 140" className="-rotate-90">
        {/* Background track */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#EAE5DC"
          strokeWidth="6"
        />
        {/* Progress arc */}
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="#D4A853"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </svg>
      {/* Score in center */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-navy leading-none" style={{ fontSize: "48px" }}>
          {score}
        </span>
        <span className="font-serif text-secondary text-sm mt-1">/100</span>
      </div>
    </div>
  );
}

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
      { threshold: 0 }
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
        className="text-navy font-sans font-bold uppercase mb-4"
        style={{ fontSize: "11px", letterSpacing: "0.15em" }}
      >
        COMMON APP ESSAY — HARVARD
      </p>

      {/* Score ring */}
      <div className="flex justify-center">
        <ScoreRing score={87} animated={animated} />
      </div>

      {/* Dimensions */}
      <div className="space-y-0">
        {dimensions.map((d, i) => (
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
                  transitionDelay: `${0.3 + i * 0.1}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
