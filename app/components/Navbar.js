"use client";
import { useState } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "Home",            href: "/" },
  { label: "About Us",        href: "/about" },
  { label: "Practices",       href: "/practices" },
  { label: "Industries",      href: "/industries" },
  { label: "IP Prosecution",  href: "/ip-prosecution" },
  { label: "IP Litigation",   href: "/ip-litigation" },
  { label: "News & Insights", href: "/news" },
  { label: "Careers",         href: "/careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <a href="/" className="shrink-0">
          <Logo />
        </a>

        {/* Desktop links */}
        <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-2.5 py-2 text-[13px] font-medium text-slate-600 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="/contact"
            className="hidden sm:inline-flex btn-shimmer text-white text-[13px] font-semibold px-4 py-2.5 rounded-xl gap-2 whitespace-nowrap"
          >
            Contact Us
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t border-slate-100 bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center px-4 py-2.5 text-sm font-medium text-slate-700 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition-all"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center px-4 py-3 text-sm font-bold text-white rounded-xl btn-shimmer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
