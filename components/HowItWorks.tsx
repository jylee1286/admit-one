"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Select Your School & Prompt",
    desc: "Choose from 20+ T20-specific rubrics or use our comprehensive standard rubric. Each one reflects what that school's readers actually look for.",
  },
  {
    num: "02",
    title: "Submit Your Essay",
    desc: "Paste your draft — any stage, any length. Our system analyzes it against the rubric dimensions that matter most to admissions readers.",
  },
  {
    num: "03",
    title: "Get Your Score",
    desc: "Receive a detailed breakdown across every rubric dimension, with specific guidance on what to strengthen before you submit.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll(".fade-in-section");
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="bg-cream">
      {/* Section divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      <div className="py-[80px] md:py-[120px]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in-section">
            <p className="text-gold text-[11px] font-sans font-medium uppercase tracking-[0.15em] mb-4">
              The Process
            </p>
            <h2
              className="font-serif text-primary tracking-tight mb-16 md:mb-20"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              Three steps to a stronger essay
            </h2>
          </div>

          {/* Steps with connecting gold line */}
          <div className="relative">
            {/* Horizontal gold connecting line (desktop) */}
            <div
              className="hidden md:block absolute left-0 right-0 h-px bg-gold/25"
              style={{ top: "40px" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {steps.map((step, i) => (
                <div key={step.num} className="fade-in-section relative">
                  {/* Vertical divider between columns (desktop) */}
                  {i > 0 && (
                    <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border" />
                  )}

                  {/* Mobile divider */}
                  {i > 0 && (
                    <div className="md:hidden h-px bg-border my-10" />
                  )}

                  <div className={`relative ${i > 0 ? "md:pl-10 lg:pl-12" : ""} ${i < steps.length - 1 ? "md:pr-10 lg:pr-12" : ""}`}>
                    {/* Large background number */}
                    <span
                      className="font-serif text-navy absolute -top-6 left-0 select-none pointer-events-none"
                      style={{
                        fontSize: "clamp(90px, 10vw, 120px)",
                        opacity: 0.07,
                        left: i > 0 ? "40px" : "0",
                      }}
                      aria-hidden="true"
                    >
                      {step.num}
                    </span>

                    <div className="relative pt-16 md:pt-20">
                      <h3
                        className="font-serif text-primary mb-3 tracking-tight"
                        style={{ fontSize: "clamp(20px, 2.2vw, 24px)" }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-secondary leading-relaxed max-w-xs" style={{ fontSize: "15px" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
