export default function Footer() {
  return (
    <footer className="bg-navy py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top divider */}
        <div className="h-px bg-white/10 mb-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="font-serif text-white text-lg tracking-wide hover:text-gold/80 transition-colors">
              Admit One
            </a>
            <p className="text-white/30 text-xs">
              Built by a Harvard student, for students who want honest feedback.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-8">
            <a
              href="#how-it-works"
              className="nav-link text-white/50 hover:text-white text-sm transition-colors"
            >
              How It Works
            </a>
            <a
              href="#schools"
              className="nav-link text-white/50 hover:text-white text-sm transition-colors"
            >
              Schools
            </a>
            <a
              href="#pricing"
              className="nav-link text-white/50 hover:text-white text-sm transition-colors"
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
