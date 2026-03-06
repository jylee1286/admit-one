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
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll(".fade-in-section");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in-section mb-16">
          <p className="text-gold text-xs font-sans font-medium uppercase tracking-[0.2em] mb-4">
            Results
          </p>
          <h2 className="font-serif text-primary text-3xl md:text-4xl lg:text-5xl tracking-tight">
            What students are saying
          </h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`fade-in-section ${
                t.align === "right" ? "md:ml-auto md:text-right" : ""
              } max-w-2xl`}
            >
              {/* Decorative quotation mark */}
              <span
                className="font-serif text-navy block leading-none select-none mb-2"
                style={{ fontSize: "72px", opacity: 0.08 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="font-serif text-primary text-xl md:text-2xl leading-relaxed tracking-tight -mt-10">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6">
                <p className="text-primary text-sm font-medium">{t.name}</p>
                <p className="text-secondary text-sm">{t.school}</p>
              </div>

              {/* Divider */}
              {i < testimonials.length - 1 && (
                <div className="h-px bg-border mt-16 md:mt-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
