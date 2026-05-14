"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-32 px-4 md:px-6 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14 md:mb-20">

          <p className="uppercase tracking-[0.35em] text-[#d6b37d] text-xs md:text-sm mb-4 md:mb-6">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
            Let’s Build Your <br /> Dream Space
          </h2>

          <p className="text-white/70 text-base md:text-xl max-w-3xl leading-relaxed">
            Whether you’re planning a luxury home, modern office, or premium
            renovation project — Avyanna Interiors is here to transform your
            vision into reality.
          </p>

        </div>

        {/* Contact Info + Form */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            {/* Phone */}
            <div>

              <p className="uppercase tracking-[0.3em] text-[#d6b37d] text-xs md:text-sm mb-3">
                Phone
              </p>

              <h3 className="text-2xl md:text-5xl font-bold leading-tight">
                +91 7694843520
              </h3>

            </div>

            {/* Email */}
            <div>

              <p className="uppercase tracking-[0.3em] text-[#d6b37d] text-xs md:text-sm mb-3">
                Email
              </p>

              <h3 className="text-2xl md:text-5xl font-bold leading-tight break-all">
                avyanna.interiors07@gmail.com
              </h3>

            </div>

            {/* Location */}
            <div>

              <p className="uppercase tracking-[0.3em] text-[#d6b37d] text-xs md:text-sm mb-3">
                Location
              </p>

              <h3 className="text-2xl md:text-5xl font-bold leading-tight">
                Indore, Madhya Pradesh
              </h3>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-[#111111] border border-white/10 rounded-[25px] md:rounded-[40px] p-6 md:p-10">

            <form className="space-y-6">

              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#d6b37d] transition duration-300"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#d6b37d] transition duration-300"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#d6b37d] transition duration-300"
              />

              {/* Project */}
              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#d6b37d] transition duration-300 resize-none"
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#d6b37d] text-black py-3 md:py-5 rounded-xl font-semibold text-lg hover:bg-[#e2c28f] transition duration-300"
              >
                Send Enquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}