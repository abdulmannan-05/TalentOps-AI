"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const SWE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSedoqrbgG4F5kNuwKSn3PzVWIPOvfj2QUrBl7cuMNksLmu7zw/viewform?usp=publish-editor";
const BDM_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdiPKzR5Tyur_JSPdje4OkeQhOWjMd0SZ9nGgftv8P9JIMncw/viewform?usp=publish-editor";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Decision Engine", href: "#decision-engine" },
  { label: "Technology", href: "#technology" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md bg-white/80 transition-all duration-300 ${
        scrolled ? "border-b border-slate-200 shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="text-white"
              >
                <path
                  d="M9 2L2 6.5V11.5L9 16L16 11.5V6.5L9 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="currentColor"
                  fillOpacity="0.2"
                />
                <circle cx="9" cy="9" r="2.5" fill="currentColor" />
              </svg>
            </div>
            <span className="font-semibold text-slate-900">
              TalentOps<span className="text-blue-600"> AI</span>
            </span>
          </a>

          {/* Center nav links – desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right buttons – desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SWE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-50 transition-all duration-200 hover:scale-105"
            >
              Apply — SWE
            </a>
            <a
              href={BDM_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105"
            >
              Apply — BDM
            </a>
          </div>

          {/* Hamburger – mobile */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block text-sm text-slate-600 hover:text-slate-900 font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-slate-100">
              <a
                href={SWE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="border border-blue-600 text-blue-600 rounded-full px-4 py-2 text-sm font-medium text-center hover:bg-blue-50 transition-all"
              >
                Apply — SWE
              </a>
              <a
                href={BDM_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-medium text-center hover:bg-blue-700 transition-all"
              >
                Apply — BDM
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
