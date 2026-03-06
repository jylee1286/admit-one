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
    <section ref={sectionRef} className="py-20 md:py-24" style={{ backgroundColor: "#F5F1EA" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <p
          className="fade-up text-gold font-sans font-semibold mb-14 text-center"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          WHAT STUDENTS SAY
        </p>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i + 1} relative border-l-[3px] border-gold pl-6 md:pl-8`}
            >
              {/* Giant decorative quote mark */}
              <span
                className="absolute -top-8 left-2 font-serif select-none pointer-events-none leading-none"
                style={{ fontSize: "100px", color: "rgba(212, 168, 83, 0.15)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <p
                className="relative font-serif italic text-primary leading-relaxed mb-6"
                style={{ fontSize: "clamp(18px, 1.8vw, 21px)" }}
              >
                {t.quote}
              </p>

              {/* Attribution */}
              <p className="font-sans font-bold text-navy text-sm">{t.name}</p>
              <p className="font-sans text-gold text-sm mt-0.5">{t.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
