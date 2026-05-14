"use client";

import { motion } from "framer-motion";

export default function Founder() {

  return (
    <section
      id="founder"
      className="py-16 md:py-32 px-4 md:px-6 bg-[#111111]"
    >

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[0.35em] text-[#d6b37d] text-xs md:text-sm mb-4 md:mb-6">
            Meet The Founder
          </p>

          <h2 className="text-4xl md:text-7xl leading-tight font-bold mb-6 md:mb-10">
            Redefining Luxury Interior Experiences
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            Founded by{" "}
            <span className="text-white font-semibold">
              Abhishek Singh
            </span>,
            Avyanna Interiors was built with a vision to transform
            ordinary spaces into timeless luxury experiences.
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
            Specializing in UPVC modular interiors, premium residential
            spaces, and modern commercial environments, Avyanna Interiors
            combines elegance, comfort, and functionality into every design.
          </p>

          <button className="bg-[#d6b37d] text-black px-7 md:px-12 py-4 md:py-5 rounded-md font-semibold text-base md:text-lg hover:bg-[#e2c28f] transition duration-300 inline-flex items-center justify-center">
            Request Consultation
          </button>

        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >

          <img
            src="/images/founder.jpg"
            alt="Abhishek Singh"
            className="rounded-[25px] md:rounded-[40px] h-[450px] md:h-[750px] w-full object-cover"
          />

          {/* Floating Founder Tag */}
          <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 backdrop-blur-md bg-black/40 border border-white/10 rounded-lg px-4 md:px-6 py-3 md:py-4">

            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] md:tracking-[0.3em] text-[#d6b37d] mb-1 md:mb-2">
              Founder
            </p>

            <h3 className="text-base md:text-xl font-semibold text-white tracking-wide">
              Abhishek Singh
            </h3>

          </div>

        </motion.div>

      </div>

    </section>
  );
}