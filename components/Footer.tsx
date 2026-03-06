export default function Footer() {
  return (
    <footer className="bg-navy py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top divider */}
        <div className="h-px bg-white/10 mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-serif text-white text-lg tracking-wide hover:text-gold/80 transition-colors">
            Admit One
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              How It Works
            </a>
            <a
              href="#schools"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Schools
            </a>
            <a
              href="#pricing"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              Pricing
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-sm">
            &copy; 2026 Admit One
          </p>
        </div>
      </div>
    </footer>
  );
}
