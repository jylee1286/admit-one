"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Paste Your Essay",
    desc: "Drop in your Common App, supplemental, or any college essay. We handle the rest.",
  },
  {
    num: "02",
    title: "Get Scored Instantly",
    desc: "Our rubric — built from 40+ admissions officer interviews — evaluates five key dimensions.",
  },
  {
    num: "03",
    title: "Know Where You Stand",
    desc: "See exactly what's working and what isn't. Rewrite with confidence, not guesswork.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const children = el.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="bg-navy py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <p
          className="fade-up text-gold font-sans font-semibold mb-4"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          THE PROCESS
        </p>

        {/* Headline */}
        <h2
          className="fade-up fade-up-delay-1 font-serif text-cream mb-16 md:mb-20"
          style={{ fontSize: "clamp(36px, 4vw, 48px)" }}
        >
          It&apos;s simpler than you think
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`fade-up fade-up-delay-${i + 1} relative px-0 md:px-10 ${
                i < steps.length - 1 ? "md:border-r md:border-cream/15" : ""
              } ${i === 0 ? "md:pl-0" : ""} ${i === steps.length - 1 ? "md:pr-0" : ""}`}
            >
              {/* Giant background number */}
              <span
                className="absolute top-0 left-0 md:left-4 font-serif select-none pointer-events-none leading-none"
                style={{
                  fontSize: "clamp(140px, 14vw, 180px)",
                  color: "rgba(250, 247, 242, 0.07)",
                }}
                aria-hidden="true"
              >
                {step.num}
              </span>

              {/* Content overlaid on number */}
              <div className="relative pt-12 md:pt-20 z-10">
                <h3 className="font-serif text-cream text-xl md:text-2xl mb-3">
                  {step.title}
                </h3>
                <p className="text-cream/70 font-sans text-[15px] leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
