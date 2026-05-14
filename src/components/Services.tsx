const services = [
  {
    title: "Modular Kitchens",
    description:
      "Elegant modular kitchen solutions crafted with premium finishes and smart functionality.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Residential Interiors",
    description:
      "Luxury home interiors designed to reflect comfort, personality, and sophistication.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Commercial Spaces",
    description:
      "Modern commercial environments designed for productivity and premium experiences.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "UPVC Furniture",

    description:
      "Premium UPVC furniture solutions crafted with durability, elegant aesthetics, and modern functionality for contemporary interiors.",

    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Services() {

  return (
    <section
      id="services"
      className="py-16 md:py-32 px-4 md:px-6 bg-[#0d0d0d]"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-20">

          <p className="uppercase tracking-[0.35em] text-[#d6b37d] text-xs md:text-sm mb-4 md:mb-6">
            Our Expertise
          </p>

          <h2 className="text-4xl md:text-7xl font-bold leading-tight">
            Premium Interior Services
          </h2>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="group rounded-[24px] md:rounded-[30px] overflow-hidden bg-white/5 border border-white/10 hover:border-[#d6b37d] transition duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[260px] md:h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-6 md:p-8">

                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}