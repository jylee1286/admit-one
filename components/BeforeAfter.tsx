"use client";

import { useEffect, useRef } from "react";

export default function BeforeAfter() {
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
    <section ref={sectionRef} className="bg-cream py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="fade-up text-gold font-sans font-semibold mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.2em" }}
          >
            THE DIFFERENCE
          </p>
          <h2
            className="fade-up fade-up-delay-1 font-serif text-navy mb-4"
            style={{ fontSize: "clamp(32px, 3.5vw, 44px)" }}
          >
            See what changes.
          </h2>
          <p className="fade-up fade-up-delay-2 text-secondary font-sans text-base max-w-lg mx-auto">
            Same essay. Two versions. One score that told the story.
          </p>
        </div>

        {/* Improvement pill */}
        <div className="fade-up fade-up-delay-2 flex justify-center mb-10">
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-sans font-semibold text-sm"
            style={{
              backgroundColor: "rgba(212,168,83,0.12)",
              color: "#D4A853",
            }}
          >
            +33 points
          </span>
        </div>

        {/* Panels */}
        <div className="fade-up fade-up-delay-3 flex flex-col md:flex-row items-stretch gap-6 md:gap-0 relative">
          {/* Before Panel */}
          <div
            className="flex-1 bg-white rounded-xl p-7 md:p-8"
            style={{
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              borderLeft: "3px solid #FECACA",
            }}
          >
            {/* Badge */}
            <span
              className="inline-block text-xs font-semibold font-sans px-3 py-1 rounded-full mb-5"
              style={{
                backgroundColor: "#FEF2F2",
                color: "#DC2626",
                border: "1px solid #FECACA",
                letterSpacing: "0.08em",
              }}
            >
              BEFORE
            </span>

            {/* Score */}
            <p
              className="font-serif mb-5"
              style={{ fontSize: "clamp(36px, 4vw, 48px)", color: "#C0392B" }}
            >
              58<span className="text-secondary/40" style={{ fontSize: "0.5em" }}>/100</span>
            </p>

            {/* Essay excerpt */}
            <blockquote
              className="font-serif italic text-primary/80 leading-relaxed mb-6"
              style={{ fontSize: "15px" }}
            >
              &ldquo;Ever since I was a little kid, I have always been passionate
              about{" "}
              <mark className="bg-red-100 text-red-800 px-0.5 rounded-sm not-italic">
                making a difference in the world
              </mark>
              . My experiences have{" "}
              <mark className="bg-red-100 text-red-800 px-0.5 rounded-sm not-italic">
                taught me valuable lessons
              </mark>{" "}
              that have shaped who I am today. I believe that{" "}
              <mark className="bg-red-100 text-red-800 px-0.5 rounded-sm not-italic">
                hard work and dedication
              </mark>{" "}
              are the keys to success.&rdquo;
            </blockquote>

            {/* Feedback tags */}
            <div className="flex flex-wrap gap-2">
              {["Generic hook", "Vague language", "No specific story"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-sans text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "#FEF2F2",
                      color: "#DC2626",
                      border: "1px solid #FECACA",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* VS divider */}
          <div className="hidden md:flex items-center justify-center px-5 relative z-10">
            <span
              className="font-sans font-bold text-sm text-secondary"
              style={{ fontSize: "14px" }}
            >
              VS
            </span>
          </div>
          {/* Mobile VS */}
          <div className="flex md:hidden items-center justify-center">
            <span className="font-sans font-bold text-sm text-secondary">
              VS
            </span>
          </div>

          {/* After Panel */}
          <div
            className="flex-1 bg-white rounded-xl p-7 md:p-8"
            style={{
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              borderLeft: "3px solid #D4A853",
            }}
          >
            {/* Badge */}
            <span
              className="inline-block text-xs font-semibold font-sans px-3 py-1 rounded-full mb-5"
              style={{
                backgroundColor: "#FFFBEB",
                color: "#B45309",
                border: "1px solid #FDE68A",
                letterSpacing: "0.08em",
              }}
            >
              AFTER
            </span>

            {/* Score */}
            <p
              className="font-serif mb-5"
              style={{ fontSize: "clamp(36px, 4vw, 48px)", color: "#D4A853" }}
            >
              91<span className="text-secondary/40" style={{ fontSize: "0.5em" }}>/100</span>
            </p>

            {/* Essay excerpt */}
            <blockquote
              className="font-serif italic text-primary/80 leading-relaxed mb-6"
              style={{ fontSize: "15px" }}
            >
              &ldquo;The acceptance letter sat unopened on my desk for six
              minutes.{" "}
              <mark className="bg-amber-50 text-amber-800 px-0.5 rounded-sm not-italic">
                I counted.
              </mark>{" "}
              My hands wouldn&apos;t stop shaking — not from fear, but from
              three years of 5 AM practices,{" "}
              <mark className="bg-amber-50 text-amber-800 px-0.5 rounded-sm not-italic">
                the Tuesday I cried in Coach Rivera&apos;s office
              </mark>
              , and a promise I made to my grandmother the winter she forgot my
              name.&rdquo;
            </blockquote>

            {/* Feedback tags */}
            <div className="flex flex-wrap gap-2">
              {[
                "Specific opening moment",
                "Emotional specificity",
                "Shows don't tell",
              ].map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs px-2.5 py-1 rounded-full"
                  style={{
                    backgroundColor: "#FFFBEB",
                    color: "#B45309",
                    border: "1px solid #FDE68A",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
