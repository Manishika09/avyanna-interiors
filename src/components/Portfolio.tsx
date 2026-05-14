"use client";

import Link from "next/link";

const projects = [
  {
    title: "Modular Kitchen",
    category: "Luxury Kitchen Design",
    image: "/projects/kitchen.jpg",
    slug: "kitchen",
  },

  {
    title: "Luxury Bedroom",
    category: "Premium Bedroom Interior",
    image: "/projects/bedroom.jpg",
    slug: "bedroom",
  },

  {
    title: "Modern Wardrobe",
    category: "Wardrobe Design",
    image: "/projects/wardrobe.jpg",
    slug: "wardrobe",
  },

  {
    title: "Luxury TV Unit",
    category: "Entertainment Interior",
    image: "/projects/tv-unit.jpg",
    slug: "tv-unit",
  },
  {
    title: "Living Room",
    category: "Luxury Living Space",
    image: "/projects/living-room.jpg",
    slug: "living-room",
  },

 {
  title: "Commercial Spaces",
  category: "Premium Office & Commercial Interiors",
  image: "/projects/commercial-spaces.jpg",
  slug: "commercial-spaces",
},


];

export default function Portfolio() {

  return (
    <section
      id="portfolio"
      className="py-32 px-6 bg-[#111111]"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">

          <div>

            <p className="uppercase tracking-[0.35em] text-[#d6b37d] text-sm mb-6">
              Our Portfolio
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              Spaces That <br /> Define Luxury
            </h2>

          </div>

          <a
            href="https://www.instagram.com/avyannainteriors/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300 w-fit"
          >
            View Instagram
          </a>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <Link
              key={index}
              href={`/portfolio/${project.slug}`}
              className="group relative overflow-hidden rounded-[40px]"
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-8 left-8">

                <p className="uppercase tracking-[0.3em] text-[#d6b37d] text-sm mb-3">
                  {project.category}
                </p>

                <h3 className="text-3xl font-bold leading-tight mb-4">
                  {project.title}
                </h3>

                <div className="inline-block border border-white/20 px-5 py-2 rounded-full text-sm group-hover:bg-[#d6b37d] group-hover:text-black transition duration-300">
                  View Project
                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}