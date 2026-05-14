export default function About() {
  return (
    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <div>

          <p className="uppercase tracking-[0.35em] text-[#d6b37d] text-sm mb-6">
            About Avyanna
          </p>

          <h2 className="text-5xl md:text-7xl leading-tight font-bold mb-10">
            Crafting Timeless Luxury Interiors
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            At Avyanna Interiors, we believe exceptional spaces are created
            through thoughtful design, elegant aesthetics, and a deep
            understanding of our clients’ lifestyles.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            From luxury residences to premium commercial environments, our
            mission is to transform interiors into timeless experiences that
            blend comfort, functionality, and sophistication.
          </p>

          <button className="bg-[#d6b37d] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
            Learn More
          </button>

        </div>

        {/* Right Image */}
        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop"
            alt="Luxury Interior"
            className="rounded-[40px] h-[700px] w-full object-cover"
          />

          {/* Floating Card */}
          <div className="absolute bottom-8 left-8 backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl p-6 max-w-xs">

            <h3 className="text-3xl font-bold text-[#d6b37d] mb-2">
              10+
            </h3>

            <p className="text-gray-300">
              Years creating premium luxury interior experiences.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}