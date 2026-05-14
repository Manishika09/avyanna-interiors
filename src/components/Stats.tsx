export default function Stats() {
  const stats = [
    {
      number: "15K+",
      label: "Instagram Followers",
    },

    {
      number: "10M+",
      label: "Instagram Views",
    },

    {
      number: "5M+",
      label: "YouTube Views",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-[#111111] border border-white/10 rounded-[35px] p-10 text-center hover:border-[#d6b37d]/40 transition duration-500"
          >

            <h2 className="text-5xl md:text-6xl font-bold text-[#d6b37d] mb-4">
              {item.number}
            </h2>

            <p className="text-white/70 text-lg">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}