export default function Footer() {
  return (
    <footer className="bg-cream border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <a href="#" className="font-serif italic text-navy text-lg">
            Admit One
          </a>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            <a href="#how-it-works" className="text-secondary font-sans text-sm hover:text-navy transition-colors">
              How It Works
            </a>
            <a href="#stats" className="text-secondary font-sans text-sm hover:text-navy transition-colors">
              Schools
            </a>
            <a href="#pricing" className="text-secondary font-sans text-sm hover:text-navy transition-colors">
              Pricing
            </a>
            <a href="#" className="text-secondary font-sans text-sm hover:text-navy transition-colors">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-secondary font-sans text-sm">
            © 2026 Admit One
          </p>
        </div>

        {/* Tagline */}
        <p className="text-center font-sans italic text-secondary/70" style={{ fontSize: "13px" }}>
          Built by a Harvard student, for students who want honest feedback.
        </p>
      </div>
    </footer>
  );
}
