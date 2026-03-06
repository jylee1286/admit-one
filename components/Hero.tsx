"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy flex items-center overflow-hidden pt-[60px]">
      {/* Giant background text */}
      <div
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

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 md:py-0">
        {/* Gold label */}
        <p
          className="text-gold font-sans font-semibold mb-6"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          FOR T20 APPLICANTS
        </p>

        {/* Headline */}
        <h1
          className="font-serif text-cream leading-[1.1] mb-6"
          style={{ fontSize: "clamp(40px, 5vw, 64px)", maxWidth: "600px" }}
        >
          Finally Know If Your Essay Is Actually Good
        </h1>

        {/* Subheadline */}
        <p
          className="text-cream/80 font-sans leading-relaxed mb-10"
          style={{ fontSize: "clamp(16px, 1.5vw, 18px)", maxWidth: "520px" }}
        >
          Rubrics built from real admissions officer interviews. Honest feedback.
          No guessing.
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
            className="text-cream font-medium text-sm px-6 py-3.5 inline-flex items-center gap-1 hover:text-gold transition-colors"
          >
            See How It Works <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="scroll-indicator w-px h-8 bg-gold/60 rounded-full" />
      </div>
    </section>
  );
}
