"use client";

import { useEffect, useRef } from "react";

const schools = [
  "Harvard",
  "Yale",
  "Princeton",
  "MIT",
  "Stanford",
  "Columbia",
  "UPenn",
  "Brown",
  "Dartmouth",
  "Cornell",
  "Duke",
  "Northwestern",
  "Johns Hopkins",
  "Vanderbilt",
  "Rice",
  "Notre Dame",
  "Georgetown",
  "Emory",
  "Tufts",
  "Carnegie Mellon",
];

export default function Schools() {
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
    <section id="schools" ref={sectionRef} className="bg-sage py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in-section">
          <p className="text-gold text-[11px] font-sans font-medium uppercase tracking-[0.15em] mb-4">
            Schools
          </p>
          <h2
            className="font-serif text-primary tracking-tight mb-12 md:mb-14"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            Premium Rubrics Available For
          </h2>
        </div>

        <div className="fade-in-section grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-0">
          {schools.map((school) => (
            <div
              key={school}
              className="school-item group flex items-center gap-3 py-3 cursor-default"
            >
              <span className="w-0.5 h-4 bg-gold/40 shrink-0 transition-all duration-300 group-hover:h-5 group-hover:bg-gold" />
              <p className="text-primary leading-relaxed transition-colors group-hover:text-navy" style={{ fontSize: "15px" }}>
                {school}
              </p>
            </div>
          ))}
        </div>

        <div className="fade-in-section mt-12">
          <div className="h-px bg-border mb-6" />
          <p className="text-secondary" style={{ fontSize: "14px" }}>
            Don&rsquo;t see your school? Our standard rubric covers all other institutions.
          </p>
        </div>
      </div>
    </section>
  );
}
