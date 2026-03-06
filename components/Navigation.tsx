"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-cream border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`font-serif italic text-xl tracking-tight transition-colors duration-300 ${
            scrolled ? "text-navy" : "text-cream"
          }`}
        >
          Admit One
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className={`nav-link text-sm font-medium transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-cream/80 hover:text-cream"
            }`}
          >
            How It Works
          </a>
          <a
            href="#stats"
            className={`nav-link text-sm font-medium transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-cream/80 hover:text-cream"
            }`}
          >
            Schools
          </a>
          <a
            href="#pricing"
            className={`nav-link text-sm font-medium transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-cream/80 hover:text-cream"
            }`}
          >
            Pricing
          </a>
          <a
            href="#pricing"
            className={`btn-lift text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-300 ${
              scrolled ? "bg-navy text-cream" : "bg-cream/10 text-cream border border-cream/30 hover:bg-cream/20"
            }`}
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-navy" : "bg-cream"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-navy" : "bg-cream"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-navy" : "bg-cream"
            } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[60px] left-0 right-0 bg-cream border-b border-border py-4 px-6 flex flex-col gap-4">
          <a href="#how-it-works" className="text-primary text-sm font-medium" onClick={() => setMenuOpen(false)}>
            How It Works
          </a>
          <a href="#stats" className="text-primary text-sm font-medium" onClick={() => setMenuOpen(false)}>
            Schools
          </a>
          <a href="#pricing" className="text-primary text-sm font-medium" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <a
            href="#pricing"
            className="btn-lift bg-navy text-cream text-sm font-semibold px-5 py-2.5 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
