"use client";

import { useState } from "react";

export default function Testimonials() {

  const [testimonials, setTestimonials] = useState([
    {
      name: "Rahul Sharma",
      feedback:
        "Absolutely loved the interior transformation. The team delivered beyond expectations with premium finishing and elegant aesthetics.",
    },

    {
      name: "Priya Mehta",
      feedback:
        "Professional execution, modern designs, and timely delivery. Highly recommended for luxury interiors.",
    },

    {
      name: "Aman Verma",
      feedback:
        "The modular kitchen and living room design completely transformed our home. Beautiful work by the team.",
    },
  ]);

  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if (!name || !feedback) return;

    const newFeedback = {
      name,
      feedback,
    };

    setTestimonials([newFeedback, ...testimonials]);

    setName("");
    setFeedback("");
    setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-32 px-4 md:px-6 bg-[#111111] text-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-14 md:mb-20 text-center">

          <p className="uppercase tracking-[0.35em] text-[#d6b37d] text-xs md:text-sm mb-4 md:mb-6">
            Client Feedback
          </p>

          <h2 className="text-4xl md:text-7xl font-bold leading-tight">
            What Our Clients Say
          </h2>

        </div>

        {/* Feedback Form */}
        {!submitted ? (

          <form
            onSubmit={handleSubmit}
            className="bg-black border border-white/10 rounded-[25px] md:rounded-[35px] p-6 md:p-10 mb-14 md:mb-20 max-w-3xl mx-auto space-y-5 md:space-y-6"
          >

            <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-center">
              Share Your Experience
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#111111] border border-white/10 rounded-2xl px-5 md:px-6 py-4 md:py-5 text-white outline-none focus:border-[#d6b37d] text-sm md:text-base"
            />

            <textarea
              placeholder="Write your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              rows={5}
              className="w-full bg-[#111111] border border-white/10 rounded-2xl px-5 md:px-6 py-4 md:py-5 text-white outline-none focus:border-[#d6b37d] resize-none text-sm md:text-base"
            />

            <button
              type="submit"
              className="w-full bg-[#d6b37d] text-black py-4 md:py-5 rounded-2xl text-lg md:text-xl font-bold hover:scale-[1.02] transition duration-300"
            >
              Submit Feedback
            </button>

          </form>

        ) : (

          <div className="bg-black border border-white/10 rounded-[25px] md:rounded-[35px] p-6 md:p-10 mb-14 md:mb-20 max-w-3xl mx-auto text-center">

            <h3 className="text-3xl md:text-4xl font-bold text-[#d6b37d] mb-4 md:mb-6">
              Thank You For Your Feedback!
            </h3>

            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Your feedback has been successfully added and is now visible on the website.
            </p>

          </div>

        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-black border border-white/10 rounded-[25px] md:rounded-[35px] p-6 md:p-10 hover:border-[#d6b37d]/40 transition duration-500"
            >

              <div className="text-[#d6b37d] text-4xl md:text-5xl mb-4 md:mb-6">
                “
              </div>

              <p className="text-white/70 leading-relaxed text-base md:text-lg mb-8 md:mb-10">
                {item.feedback}
              </p>

              <div>

                <h3 className="text-xl md:text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="text-[#d6b37d] text-xs md:text-sm mt-2 uppercase tracking-[0.25em]">
                  Verified Client
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
