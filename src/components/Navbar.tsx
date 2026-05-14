"use client";

import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md md:backdrop-blur-xl bg-black/40 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-[2rem] md:text-4xl font-bold text-[#d6b37d] leading-none"
        >
          Avyanna Interiors
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12 text-sm uppercase tracking-[0.25em]">

          <a
            href="#home"
            className="hover:text-[#d6b37d] transition duration-300"
          >
            Home
          </a>

          <a
            href="#founder"
            className="hover:text-[#d6b37d] transition duration-300"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-[#d6b37d] transition duration-300"
          >
            Services
          </a>

          <a
            href="#portfolio"
            className="hover:text-[#d6b37d] transition duration-300"
          >
            Portfolio
          </a>

          <a
            href="#contact"
            className="hover:text-[#d6b37d] transition duration-300"
          >
            Contact
          </a>

        </nav>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex bg-[#d6b37d] text-black px-10 py-4 rounded-md font-semibold text-lg hover:bg-[#e2c28f] transition duration-300 items-center justify-center"
        >
          Book Consultation
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl leading-none"
        >
          {menuOpen ? "×" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-8 flex flex-col gap-6 text-base uppercase tracking-[0.2em]">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#d6b37d] transition duration-300"
          >
            Home
          </a>

          <a
            href="#founder"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#d6b37d] transition duration-300"
          >
            About
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#d6b37d] transition duration-300"
          >
            Services
          </a>

          <a
            href="#portfolio"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#d6b37d] transition duration-300"
          >
            Portfolio
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#d6b37d] transition duration-300"
          >
            Contact
          </a>

          {/* Mobile Button */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#d6b37d] text-black px-6 py-4 rounded-md font-semibold text-center hover:bg-[#e2c28f] transition duration-300 mt-2"
          >
            Book Consultation
          </a>

        </div>

      )}

    </header>
  );
}