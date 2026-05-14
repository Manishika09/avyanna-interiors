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
    <section className="py-32 px-6 bg-[#111111] text-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-20 text-center">

          <p className="uppercase tracking-[0.35em] text-[#d6b37d] text-sm mb-6">
            Client Feedback
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            What Our Clients Say
          </h2>

        </div>

        {/* Feedback Form */}
        {!submitted ? (

          <form
            onSubmit={handleSubmit}
            className="bg-black border border-white/10 rounded-[35px] p-10 mb-20 max-w-3xl mx-auto space-y-6"
          >

            <h3 className="text-3xl font-bold mb-4 text-center">
              Share Your Experience
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#111111] border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-[#d6b37d]"
            />

            <textarea
              placeholder="Write your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
              rows={5}
              className="w-full bg-[#111111] border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-[#d6b37d] resize-none"
            />

            <button
              type="submit"
              className="w-full bg-[#d6b37d] text-black py-5 rounded-2xl text-xl font-bold hover:scale-[1.02] transition duration-300"
            >
              Submit Feedback
            </button>

          </form>

        ) : (

          <div className="bg-black border border-white/10 rounded-[35px] p-10 mb-20 max-w-3xl mx-auto text-center">

            <h3 className="text-4xl font-bold text-[#d6b37d] mb-6">
              Thank You For Your Feedback!
            </h3>

            <p className="text-white/70 text-lg leading-relaxed">
              Your feedback has been successfully added and is now visible on the website.
            </p>

          </div>

        )}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-black border border-white/10 rounded-[35px] p-10 hover:border-[#d6b37d]/40 transition duration-500"
            >

              <div className="text-[#d6b37d] text-5xl mb-6">
                “
              </div>

              <p className="text-white/70 leading-relaxed text-lg mb-10">
                {item.feedback}
              </p>

              <div>

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="text-[#d6b37d] text-sm mt-2 uppercase tracking-[0.25em]">
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
