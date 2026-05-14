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
      className="py-32 px-6 bg-[#0d0d0d]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.35em] text-[#d6b37d] text-sm mb-6">
            Our Expertise
          </p>

          <h2 className="text-5xl md:text-7xl font-bold">
            Premium Interior Services
          </h2>

        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-[30px] overflow-hidden bg-white/5 border border-white/10 hover:border-[#d6b37d] transition duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-5">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
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