"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-4xl font-bold text-[#d6b37d]"
        >
          Avyanna Interiors
        </a>

        {/* Navigation */}
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

        {/* Consultation Button */}
        <a
          href="#contact"
          className="bg-[#d6b37d] text-black px-10 py-4 rounded-md font-semibold text-lg hover:bg-[#e2c28f] transition duration-300 inline-flex items-center justify-center"
        >
          Book Consultation
        </a>

      </div>

    </header>
  );
}