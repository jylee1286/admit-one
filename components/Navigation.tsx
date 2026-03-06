"use client";

import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream border-b border-border h-[60px] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif italic text-navy text-xl tracking-tight">
          Admit One
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="nav-link text-primary text-sm font-medium">
            How It Works
          </a>
          <a href="#stats" className="nav-link text-primary text-sm font-medium">
            Schools
          </a>
          <a href="#pricing" className="nav-link text-primary text-sm font-medium">
            Pricing
          </a>
          <a
            href="#pricing"
            className="btn-lift bg-navy text-cream text-sm font-semibold px-5 py-2.5 rounded-lg"
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
            className={`block w-5 h-0.5 bg-navy transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-navy transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-navy transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
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
