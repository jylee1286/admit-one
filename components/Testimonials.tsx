"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "I rewrote my Common App essay three times based on the rubric feedback. The final version was unrecognizable from the first — and it worked.",
    name: "Sarah M.",
    school: "Admitted to Columbia",
    align: "left" as const,
  },
  {
    quote:
      "My counselor gave me vague advice. Admit One gave me a score and told me exactly which paragraphs needed work. That specificity changed everything.",
    name: "James K.",
    school: "Admitted to Stanford",
    align: "right" as const,
  },
  {
    quote:
      "I didn't realize how much my 'Why Us' essay missed the mark until I saw the rubric breakdown. I scored a 4/10 on institutional fit. That was the wake-up call I needed.",
    name: "Priya L.",
    school: "Admitted to Yale",
    align: "left" as const,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll(".fade-in-section");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream">
      {/* Section divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      <div className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="fade-in-section mb-12 md:mb-16">
            <p className="text-gold text-[11px] font-sans font-medium uppercase tracking-[0.15em] mb-4">
              Results
            </p>
            <h2
              className="font-serif text-primary tracking-tight"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              What students are saying
            </h2>
          </div>

          <div className="space-y-0">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`fade-in-section ${
                  t.align === "right" ? "md:ml-auto md:text-right" : ""
                } max-w-2xl ${i > 0 ? "pt-10 md:pt-14" : ""} ${i < testimonials.length - 1 ? "pb-10 md:pb-14 border-b border-border" : ""}`}
              >
                <div className="testimonial-card">
                  {/* Decorative quotation mark */}
                  <div className={`relative ${t.align === "right" ? "md:flex md:justify-end" : ""}`}>
                    <span
                      className="font-serif text-navy block leading-none select-none"
                      style={{ fontSize: "120px", opacity: 0.06, marginBottom: "-50px", lineHeight: "0.8" }}
                      aria-hidden="true"
                    >
                      &ldquo;
                    </span>
                  </div>

                  <blockquote
                    className="font-serif text-primary leading-relaxed tracking-tight relative"
                    style={{ fontSize: "clamp(20px, 2.5vw, 24px)" }}
                  >
                    {t.quote}
                  </blockquote>

                  <div className="mt-5">
                    <p className="text-navy text-sm font-medium">{t.name}</p>
                    <p className="text-gold text-sm">{t.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
