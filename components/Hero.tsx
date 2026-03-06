export default function Hero() {
  return (
    <section className="bg-cream paper-texture relative overflow-hidden">
      {/* Faint background decorative text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-navy whitespace-nowrap select-none pointer-events-none"
        style={{ fontSize: "clamp(120px, 18vw, 280px)", opacity: 0.04 }}
        aria-hidden="true"
      >
        ADMIT ONE
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-2xl">
          <h1 className="font-serif text-primary leading-[1.1] tracking-tight mb-6"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            Your Essay, Scored by the T20&nbsp;Standard
          </h1>

          <p className="text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Rubrics built from real admissions officer interviews. Know exactly
            where you stand before you apply.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="bg-navy text-white px-7 py-3.5 text-sm tracking-wide hover:bg-navy-light transition-colors inline-block"
            >
              Score My Essay
            </a>
            <a
              href="#how-it-works"
              className="text-primary text-sm tracking-wide group inline-flex items-center gap-2 hover:text-navy transition-colors"
            >
              See How It Works
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>
        </div>

        {/* Thin decorative rule */}
        <div className="mt-20 md:mt-28">
          <div className="h-px bg-border w-full" />
        </div>
      </div>
    </section>
  );
}
