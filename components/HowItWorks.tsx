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
    <section id="how-it-works" ref={sectionRef} className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in-section">
          <p className="text-gold text-xs font-sans font-medium uppercase tracking-[0.2em] mb-4">
            The Process
          </p>
          <h2 className="font-serif text-primary text-3xl md:text-4xl lg:text-5xl tracking-tight mb-16 md:mb-20">
            Three steps to a stronger essay
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="fade-in-section relative">
              {/* Connecting line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-full h-px bg-border -z-0" />
              )}

              {/* Mobile divider */}
              {i > 0 && (
                <div className="md:hidden h-px bg-border my-10" />
              )}

              <div className="relative pr-8 md:pr-12">
                {/* Large background number */}
                <span
                  className="font-serif text-navy absolute -top-4 left-0 select-none pointer-events-none"
                  style={{ fontSize: "clamp(72px, 8vw, 100px)", opacity: 0.06 }}
                  aria-hidden="true"
                >
                  {step.num}
                </span>

                <div className="relative pt-12 md:pt-16">
                  <h3 className="font-serif text-primary text-xl md:text-2xl mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
