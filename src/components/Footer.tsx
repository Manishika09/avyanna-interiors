export default function Footer() {

  return (
    <footer className="bg-black border-t border-white/10 pt-16 md:pt-20">

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-16 pb-12 md:pb-16">

        {/* Logo */}
        <div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#d6b37d] mb-4 md:mb-6 leading-tight">
            Avyanna Interiors
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Crafting luxury interiors with timeless elegance,
            modern sophistication, and premium experiences.
          </p>

        </div>

        {/* Navigation */}
        <div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Navigation
          </h3>

          <div className="flex flex-col gap-3 md:gap-4 text-gray-400 text-sm md:text-base">

            <a
              href="#home"
              className="hover:text-white transition"
            >
              Home
            </a>

            <a
              href="#founder"
              className="hover:text-white transition"
            >
              About
            </a>

            <a
              href="#services"
              className="hover:text-white transition"
            >
              Services
            </a>

            <a
              href="#portfolio"
              className="hover:text-white transition"
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Services */}
        <div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Services
          </h3>

          <div className="flex flex-col gap-3 md:gap-4 text-gray-400 text-sm md:text-base">

            <p>Luxury Interiors</p>
            <p>Modular Kitchens</p>
            <p>Commercial Spaces</p>
            <p>Renovation</p>
            <p>Consultation</p>

          </div>

        </div>

        {/* Connect */}
        <div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Connect
          </h3>

          <div className="flex flex-col gap-3 md:gap-4 text-gray-400 text-sm md:text-base">

            <a
              href="https://www.instagram.com/avyannainteriors/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/917694843520"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              WhatsApp
            </a>

            <a
              href="https://www.youtube.com/@Avyannainterior"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              YouTube
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-5 md:py-6 px-4 md:px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-gray-500 text-xs md:text-sm text-center md:text-left">

          <p>
            © 2026 Avyanna Interiors. All rights reserved.
          </p>

          <p>
            Designed with luxury & elegance.
          </p>

        </div>

      </div>

    </footer>
  );
}