"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Select Your School & Prompt",
    desc: "Choose from 20+ T20-specific rubrics or use our comprehensive standard rubric. Each reflects what that school's readers actually look for.",
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
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(".fade-in-section");
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="bg-cream py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in-section">
          <p className="text-gold text-[11px] font-sans font-medium uppercase tracking-[0.15em] mb-4">
            The Process
          </p>
          <h2
            className="font-serif text-primary tracking-tight mb-12 md:mb-16"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            It&rsquo;s simpler than you think
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Horizontal gold connecting line (desktop only) */}
          <div
            className="hidden md:block absolute left-0 right-0 h-px bg-gold/30"
            style={{ top: "40px" }}
          />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`fade-in-section relative ${
                i > 0 ? "md:border-l md:border-border" : ""
              }`}
            >
              {/* Mobile divider */}
              {i > 0 && <div className="md:hidden h-px bg-border my-8" />}

              <div className={`relative ${i > 0 ? "md:pl-10" : ""} ${i < steps.length - 1 ? "md:pr-10" : ""}`}>
                {/* Large background number */}
                <div className="relative">
                  <span
                    className="font-serif text-navy block select-none pointer-events-none leading-none"
                    style={{
                      fontSize: "clamp(64px, 8vw, 100px)",
                      opacity: 0.07,
                    }}
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>
                </div>

                <div className="mt-3">
                  <h3
                    className="font-serif text-primary mb-3 tracking-tight"
                    style={{ fontSize: "22px" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-secondary leading-relaxed" style={{ fontSize: "16px", maxWidth: "280px" }}>
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
