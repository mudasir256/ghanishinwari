"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_ORDER_URL } from "@/lib/contact";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/outlets", label: "Outlets" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#1a1a1a]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Brand: logo + name + tagline */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-[#4a1a1a] shrink-0">
              <Image
                src="/LOGO.jpg"
                alt="Ghani Shinwari"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold text-[#1a1a1a] leading-tight">
                Ghani Shinwari
              </p>
              <p className="text-xs md:text-sm text-[#6b7280] uppercase tracking-widest">
                Authentic Cuisine
              </p>
            </div>
          </Link>

          {/* Nav links as separate buttons + Order Now CTA */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="rounded-full border border-[#1a1a1a]/25 px-4 py-2.5 text-[#374151] hover:text-[#1a1a1a] hover:bg-[#f3f4f6] hover:border-[#1a1a1a]/4 font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#b3002d] px-5 py-2.5 text-white text-sm font-semibold hover:bg-[#8f0024] transition-colors"
            >
              Order Now
            </a>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-[#374151]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-[#1a1a1a]/10 bg-white px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="rounded-full border border-[#1a1a1a]/25 px-4 py-3 text-[#374151] font-medium text-center hover:bg-[#f3f4f6]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#b3002d] px-5 py-3 text-white font-semibold text-center mt-2"
              onClick={() => setOpen(false)}
            >
              Order Now
            </a>
          </div>
        )}
      </header>
    </>
  );
}
