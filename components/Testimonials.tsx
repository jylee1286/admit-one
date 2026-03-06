"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "I rewrote my Common App essay three times before using Admit One. The specificity score showed me exactly why my earlier drafts felt flat.",
    name: "Sarah K.",
    school: "Admitted to Yale",
  },
  {
    quote:
      "My counselor said my essay was 'great.' Admit One told me my hook was weak and my structure needed work. That honest feedback made the difference.",
    name: "Marcus T.",
    school: "Admitted to Stanford",
  },
  {
    quote:
      "The rubric felt like having an admissions officer review my essay without the $300 consultant fee. Worth every penny.",
    name: "Priya R.",
    school: "Admitted to Columbia",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const children = el.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream-dark py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <p
          className="fade-up text-gold font-sans font-semibold mb-16 text-center"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          WHAT STUDENTS SAY
        </p>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {testimonials.map((t, i) => (
            <div key={i} className={`fade-up fade-up-delay-${i + 1} relative`}>
              {/* Giant quote mark */}
              <span
                className="absolute -top-6 -left-2 font-serif text-gold/20 select-none pointer-events-none leading-none"
                style={{ fontSize: "120px" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <p className="relative font-serif italic text-primary text-lg md:text-xl leading-relaxed mb-6">
                {t.quote}
              </p>

              {/* Attribution */}
              <p className="font-sans font-bold text-navy text-sm">{t.name}</p>
              <p className="font-sans text-gold text-sm">{t.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
