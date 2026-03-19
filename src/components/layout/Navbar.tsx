"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/nuestra-app", label: "Nuestra App" },
    { href: "/legal", label: "Legal" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_2px_20px_rgba(101,154,229,0.1)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/assets/images/appicon.png"
              alt="Zulia Dog"
              fill
              className="object-contain rounded-xl"
            />
          </div>
          <span className="text-xl font-bold text-[var(--zd-text-dark)] tracking-tight">
            Zulia <span className="text-[var(--zd-blue)]">Dog</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[var(--zd-text-gray)] hover:text-[var(--zd-blue)] transition-colors duration-300 rounded-full hover:bg-[var(--zd-blue-pale)]/50"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Play Store Badge */}
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block rounded-full border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          <Image
            src="/assets/images/google-play-badge.png"
            alt="Disponible en Google Play"
            width={150}
            height={45}
            className="h-[38px] w-auto"
          />
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--zd-text-dark)] transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--zd-text-dark)] transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--zd-text-dark)] transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-[var(--zd-blue-pale)] px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-[var(--zd-text-gray)] hover:text-[var(--zd-blue)] hover:bg-[var(--zd-blue-pale)]/30 rounded-xl transition-all duration-300"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block pt-3"
          >
            <div className="rounded-full border border-gray-200 overflow-hidden inline-block">
              <Image
                src="/assets/images/google-play-badge.png"
                alt="Disponible en Google Play"
                width={150}
                height={45}
                className="h-[38px] w-auto"
              />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
