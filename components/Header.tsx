"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Mis trabajos", href: "#trabajos" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-[#F8F3E8] transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex flex-col leading-tight">
          <span
            className="text-2xl font-bold text-[#2D1A0E]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Irantzu
          </span>
          <span className="flex items-center gap-2">
            <span className="h-px w-full bg-[#C9A96E]" />
            <span
              className="text-[10px] tracking-widest uppercase text-[#6B4226] whitespace-nowrap"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              RESTAURACIÓN
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#6B4226] hover:text-[#2D1A0E] transition-colors"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/34626407048"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#2A5C1B] hover:bg-[#1E4414] text-[#F8F3E8] text-sm font-medium px-4 py-2 rounded transition-colors"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          <WhatsAppIcon />
          626 407 048
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`block w-6 h-0.5 bg-[#2D1A0E] transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#2D1A0E] transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#2D1A0E] transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F8F3E8] border-t border-[#D4C5A9] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-[#6B4226] hover:text-[#2D1A0E] transition-colors"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/34626407048"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#2A5C1B] hover:bg-[#1E4414] text-[#F8F3E8] text-sm font-medium px-4 py-3 rounded transition-colors w-fit"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            <WhatsAppIcon />
            WhatsApp · 626 407 048
          </a>
        </div>
      )}
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}
