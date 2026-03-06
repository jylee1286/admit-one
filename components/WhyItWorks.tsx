"use client";

import { useEffect, useRef } from "react";

const points = [
  "T20-specific rubrics, not generic advice",
  "Built from real admissions officer interviews",
  "Updated every application season",
];

export default function WhyItWorks() {
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
    <section ref={sectionRef} className="bg-navy py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — pull quote */}
          <div className="fade-in-section">
            <blockquote className="font-serif text-white text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight">
              &ldquo;We read thousands of essays. We know what works&nbsp;&mdash; and what doesn&rsquo;t.&rdquo;
            </blockquote>
            <p className="text-white/50 text-sm mt-6 tracking-wide">
              &mdash; Insights from 40+ admissions readers
            </p>
          </div>

          {/* Right — bullet points */}
          <div className="fade-in-section lg:pt-4">
            <ul className="space-y-6">
              {points.map((point) => (
                <li key={point} className="flex gap-4 text-white/85 text-base md:text-lg leading-relaxed">
                  <span className="text-gold shrink-0 mt-0.5">&mdash;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
