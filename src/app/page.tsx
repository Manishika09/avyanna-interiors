import Navbar from "../components/Navbar";
import Founder from "../components/Founder";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] text-white overflow-hidden">

      {/* Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full py-28 md:py-0">

          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">

            {/* LEFT CONTENT */}
            <div>

              <p className="uppercase tracking-[0.35em] text-[#d6b37d] text-xs md:text-sm mb-4 md:mb-6">
                Premium Interior Design Studio
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-8xl leading-none font-bold mb-8 md:mb-12">
                Redefine <br />
                Your Living Space
              </h1>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 md:mb-10">

                <a
                  href="#contact"
                  className="bg-[#d6b37d] text-black px-7 md:px-12 py-4 md:py-5 rounded-md font-semibold text-base md:text-lg hover:bg-[#e2c28f] transition duration-300 inline-flex items-center justify-center"
                >
                  Request Consultation
                </a>

                <a
                  href="#portfolio"
                  className="border border-white/20 px-7 md:px-12 py-4 md:py-5 rounded-md hover:bg-white hover:text-black transition duration-300 inline-flex items-center justify-center text-base md:text-lg"
                >
                  View Portfolio
                </a>

              </div>

              <p className="text-gray-300 text-base md:text-lg">
                Loved by homeowners across India
              </p>

            </div>

            {/* RIGHT SIDE STATS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[24px] md:rounded-[30px] p-6 md:p-10 hover:border-[#d6b37d] transition duration-300">

                <h2 className="text-3xl md:text-5xl font-bold text-[#d6b37d] mb-3 md:mb-4">
                  100+
                </h2>

                <p className="text-lg md:text-2xl font-semibold mb-2">
                  Completed Projects
                </p>

                <p className="text-gray-400 text-sm md:text-base">
                  Successfully delivered premium luxury interior spaces.
                </p>

              </div>

              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[24px] md:rounded-[30px] p-6 md:p-10 hover:border-[#d6b37d] transition duration-300">

                <h2 className="text-3xl md:text-5xl font-bold text-[#d6b37d] mb-3 md:mb-4">
                  15K+
                </h2>

                <p className="text-lg md:text-2xl font-semibold mb-2">
                  Instagram Followers
                </p>

                <p className="text-gray-400 text-sm md:text-base">
                  Growing luxury interior design community online.
                </p>

              </div>

              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[24px] md:rounded-[30px] p-6 md:p-10 hover:border-[#d6b37d] transition duration-300">

                <h2 className="text-3xl md:text-5xl font-bold text-[#d6b37d] mb-3 md:mb-4">
                  10M+
                </h2>

                <p className="text-lg md:text-2xl font-semibold mb-2">
                  Instagram Views
                </p>

                <p className="text-gray-400 text-sm md:text-base">
                  Viral reels showcasing premium interior transformations.
                </p>

              </div>

              {/* Card 4 */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[24px] md:rounded-[30px] p-6 md:p-10 hover:border-[#d6b37d] transition duration-300">

                <h2 className="text-3xl md:text-5xl font-bold text-[#d6b37d] mb-3 md:mb-4">
                  5M+
                </h2>

                <p className="text-lg md:text-2xl font-semibold mb-2">
                  YouTube Views
                </p>

                <p className="text-gray-400 text-sm md:text-base">
                  Millions of luxury design views across video content.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Founder */}
      <Founder />

      {/* Services */}
      <Services />

      {/* Portfolio */}
      <Portfolio />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* WhatsApp */}
      <WhatsAppButton />

    </main>
  );
}