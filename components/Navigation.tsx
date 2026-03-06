"use client";

import { useState } from "react";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-navy sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-white text-xl tracking-wide">
          Admit One
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-white/80 hover:text-white text-sm tracking-wide transition-colors"
          >
            How It Works
          </a>
          <a
            href="#schools"
            className="text-white/80 hover:text-white text-sm tracking-wide transition-colors"
          >
            Schools
          </a>
          <a
            href="#pricing"
            className="text-white/80 hover:text-white text-sm tracking-wide transition-colors"
          >
            Pricing
          </a>
          <a
            href="#pricing"
            className="border border-gold text-white text-sm px-5 py-2 hover:bg-gold/10 transition-colors tracking-wide"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 px-6 pb-6 pt-4 flex flex-col gap-4">
          <a
            href="#how-it-works"
            className="text-white/80 hover:text-white text-sm tracking-wide"
            onClick={() => setMobileOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#schools"
            className="text-white/80 hover:text-white text-sm tracking-wide"
            onClick={() => setMobileOpen(false)}
          >
            Schools
          </a>
          <a
            href="#pricing"
            className="text-white/80 hover:text-white text-sm tracking-wide"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#pricing"
            className="border border-gold text-white text-sm px-5 py-2 text-center hover:bg-gold/10 transition-colors tracking-wide mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
