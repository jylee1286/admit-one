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
      { threshold: 0 }
    );
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-24" style={{ backgroundColor: "#F5F1EA" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <p
          className="fade-up text-gold font-sans font-semibold mb-3 text-center"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          WHAT STUDENTS SAY
        </p>

        <h2
          className="fade-up fade-up-delay-1 font-serif text-navy text-center mb-14"
          style={{ fontSize: "clamp(32px, 3.5vw, 44px)" }}
        >
          Real results, real students.
        </h2>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i + 1} relative bg-white rounded-xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 group`}
              style={{
                boxShadow: "0 2px 20px rgba(30, 58, 95, 0.06)",
                borderLeft: "3px solid #D4A853",
              }}
            >
              {/* Giant decorative quote mark */}
              <span
                className="absolute top-3 right-5 font-serif select-none pointer-events-none leading-none transition-opacity duration-300 group-hover:opacity-[0.2]"
                style={{ fontSize: "80px", color: "rgba(212, 168, 83, 0.12)" }}
                aria-hidden="true"
              >
                &rdquo;
              </span>

              {/* Quote */}
              <p
                className="relative font-serif italic text-primary leading-relaxed mb-6"
                style={{ fontSize: "clamp(16px, 1.6vw, 19px)" }}
              >
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-9 h-9 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-sans font-bold text-navy text-xs">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans font-bold text-navy text-sm">{t.name}</p>
                  <p className="font-sans text-gold text-xs mt-0.5">{t.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
