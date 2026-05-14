"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "New Enquiry from Avyanna Interiors Website"
    );

    const body = encodeURIComponent(`
Name: ${name}

Phone: ${phone}

Email: ${email}

Project Details:
${message}
    `);

    window.location.href = `mailto:avyanna.interiors07@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

        {/* Left Content */}
        <div>

          <p className="uppercase tracking-[0.35em] text-[#d6b37d] text-sm mb-6">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Let’s Design Your Dream Space
          </h2>

          <p className="text-white/70 text-xl leading-relaxed mb-12">
            Whether you’re planning a luxury home, modern office,
            or premium renovation project — Avyanna Interiors is
            here to transform your vision into reality.
          </p>

          <div className="space-y-8">

            <div>
              <p className="uppercase tracking-[0.3em] text-[#d6b37d] text-sm mb-3">
                Phone
              </p>

              <a
                href="tel:+917694843520"
                className="text-5xl font-bold hover:text-[#d6b37d] transition"
              >
                +91 7694843520
              </a>
            </div>

            <div>
              <p className="uppercase tracking-[0.3em] text-[#d6b37d] text-sm mb-3">
                Email
              </p>

              <a
                href="mailto:avyanna.interiors07@gmail.com"
                className="text-4xl font-bold hover:text-[#d6b37d] transition break-all"
              >
                avyanna.interiors07@gmail.com
              </a>
            </div>

            <div>
              <p className="uppercase tracking-[0.3em] text-[#d6b37d] text-sm mb-3">
                Location
              </p>

              <p className="text-4xl font-bold">
                Indore, Madhya Pradesh
              </p>
            </div>

          </div>

        </div>

        {/* Contact Form */}
        <div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#111111] border border-white/10 rounded-[40px] p-10 space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-[#d6b37d]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-[#d6b37d]"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-[#d6b37d]"
            />

            <textarea
              placeholder="Tell us about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={6}
              className="w-full bg-black border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-[#d6b37d] resize-none"
            />

            <button
              type="submit"
              className="w-full bg-[#d6b37d] text-black py-5 rounded-2xl text-xl font-bold hover:scale-[1.02] transition duration-300"
            >
              Send Enquiry
            </button>

          </form>

          {/* Map */}
          <div className="mt-10 rounded-[30px] overflow-hidden border border-white/10">

            <iframe
              src="https://www.google.com/maps?q=Vijay+Nagar+Indore&output=embed"
              width="100%"
              height="350"
              loading="lazy"
              className="w-full"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}