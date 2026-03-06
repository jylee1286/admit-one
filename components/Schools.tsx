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
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll(".fade-in-section");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="schools" ref={sectionRef} className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="fade-in-section">
          <p className="text-gold text-xs font-sans font-medium uppercase tracking-[0.2em] mb-4">
            Coverage
          </p>
          <h2 className="font-serif text-primary text-3xl md:text-4xl lg:text-5xl tracking-tight mb-14 md:mb-16">
            Premium Rubrics Available For
          </h2>
        </div>

        <div className="fade-in-section grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4">
          {schools.map((school) => (
            <p key={school} className="text-primary text-base leading-loose">
              {school}
            </p>
          ))}
        </div>

        <div className="fade-in-section mt-12">
          <div className="h-px bg-border mb-6" />
          <p className="text-secondary text-sm">
            Don&rsquo;t see your school? Our standard rubric covers all other institutions.
          </p>
        </div>
      </div>
    </section>
  );
}
