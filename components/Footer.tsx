export default function Footer() {
  return (
    <footer className="bg-navy py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-serif text-white text-lg tracking-wide">
            Admit One
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            <a
              href="#how-it-works"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              How It Works
            </a>
            <a
              href="#schools"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Schools
            </a>
            <a
              href="#pricing"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Pricing
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-sm">
            &copy; 2026 Admit One
          </p>
        </div>
      </div>
    </footer>
  );
}
