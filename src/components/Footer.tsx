export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 pb-16">

        {/* Logo */}
        <div>

          <h2 className="text-5xl font-bold text-[#d6b37d] mb-6">
            Avyanna Interiors
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Crafting luxury interiors with timeless elegance,
            modern sophistication, and premium experiences.
          </p>

        </div>

        {/* Navigation */}
        <div>

          <h3 className="text-3xl font-bold mb-6">
            Navigation
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">

            <a href="#home" className="hover:text-white transition">
              Home
            </a>

            <a href="#founder" className="hover:text-white transition">
              About
            </a>

            <a href="#services" className="hover:text-white transition">
              Services
            </a>

            <a href="#portfolio" className="hover:text-white transition">
              Portfolio
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>

          </div>

        </div>

        {/* Services */}
        <div>

          <h3 className="text-3xl font-bold mb-6">
            Services
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">

            <p>Luxury Interiors</p>
            <p>Modular Kitchens</p>
            <p>Commercial Spaces</p>
            <p>Renovation</p>
            <p>Consultation</p>

          </div>

        </div>

        {/* Connect */}
        <div>

          <h3 className="text-3xl font-bold mb-6">
            Connect
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">

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
      <div className="border-t border-white/10 py-6 px-6">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500">

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