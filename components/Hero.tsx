"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const bgTextRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (bgTextRef.current) {
        bgTextRef.current.style.transform = `translateY(${y * 0.3}px)`;
        bgTextRef.current.style.opacity = `${Math.max(0.06 - y * 0.00008, 0)}`;
      }
      if (contentRef.current) {
        const opacity = Math.max(1 - y * 0.0006, 0);
        contentRef.current.style.opacity = `${opacity}`;
        contentRef.current.style.transform = `translateY(${y * 0.04}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-navy flex overflow-hidden pt-[60px]">
      {/* Left content panel */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-16 lg:px-24 py-20 md:py-0 md:max-w-[60%]">
        {/* Giant background text with parallax — stays on left side */}
        <div
          ref={bgTextRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="text-cream whitespace-nowrap hidden md:block"
            style={{
              fontSize: "clamp(120px, 18vw, 260px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              opacity: 0.06,
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            ADMIT ONE
          </span>
          <span
            className="text-cream whitespace-nowrap block md:hidden"
            style={{
              fontSize: "80px",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              opacity: 0.04,
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            ADMIT ONE
          </span>
        </div>

        {/* Subtle grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "256px 256px",
          }}
        />

        {/* Content with scroll fade */}
        <div ref={contentRef} className="relative z-10 w-full">
          {/* Gold label */}
          <p
            className="text-gold font-sans font-semibold mb-6"
            style={{ fontSize: "11px", letterSpacing: "0.2em" }}
          >
            FOR T20 APPLICANTS
          </p>

          {/* Headline with gold accent */}
          <h1
            className="font-serif text-cream leading-[1.1] mb-6"
            style={{ fontSize: "clamp(52px, 6vw, 80px)", maxWidth: "820px" }}
          >
            Built Only From T20 Admits Essays{" "}
            <span className="relative inline-block">
              And Interviews
              <span
                className="absolute -bottom-1 left-0 w-full h-[3px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #D4A853 0%, #D4A853 70%, transparent 100%)",
                }}
              />
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-cream/70 font-sans leading-relaxed mb-10"
            style={{ fontSize: "clamp(16px, 1.5vw, 18px)", maxWidth: "520px" }}
          >
            Rubrics built from real admissions officer interviews. Honest
            feedback. No guessing.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="btn-lift bg-gold text-navy font-semibold text-sm px-7 py-3.5 rounded-lg inline-block"
            >
              Score My Essay
            </a>
            <a
              href="#how-it-works"
              className="text-cream/80 font-medium text-sm px-6 py-3.5 inline-flex items-center gap-1 hover:text-gold transition-colors"
            >
              See How It Works <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right image panel — desktop only */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-[45%]">
        <img
          src="/hero-ink.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Left-edge blend gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #1E3A5F 0%, rgba(30,58,95,0.5) 30%, transparent 60%)",
          }}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="scroll-indicator w-px h-8 bg-gold/60 rounded-full" />
      </div>
    </section>
  );
}
