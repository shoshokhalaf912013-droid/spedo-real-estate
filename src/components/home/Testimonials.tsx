export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael R.",
      country: "Germany",
      text: "SPEDO helped me find the right property in El Gouna. The process was transparent and professional from start to finish.",
    },
    {
      name: "Ahmed K.",
      country: "UAE",
      text: "Excellent market knowledge and fast communication. I secured a beachfront investment with strong ROI potential.",
    },
    {
      name: "Natalia S.",
      country: "Poland",
      text: "Their team guided me through every step. I felt confident investing remotely in the Red Sea market.",
    },
  ];

  return (
    <section className="bg-[#050D18] py-40">
      <div className="mx-auto max-w-[1400px] px-6">

        <div className="mb-20 text-center">

          <span
            className="
            inline-block
            rounded-full
            border
            border-[#D4AF37]/30
            px-6
            py-2
            text-sm
            tracking-widest
            text-[#D4AF37]
          "
          >
            CLIENT TESTIMONIALS
          </span>

          <h2
            className="
            mt-8
            text-5xl
            font-bold
            text-white
            md:text-7xl
          "
          >
            Trusted By
            <span className="text-[#D4AF37]">
              {" "}International Investors
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Investors from Europe and the Middle East trust SPEDO
            to identify premium opportunities across the Red Sea.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-[#D4AF37]/30
              bg-black
              p-10
              shadow-[0_0_25px_rgba(212,175,55,0.08)]
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-[#D4AF37]/70
              hover:shadow-[0_0_45px_rgba(212,175,55,0.18)]
            "
            >

              {/* Quote Background */}
              <div
                className="
                absolute
                right-6
                top-4
                text-[90px]
                font-bold
                leading-none
                text-[#D4AF37]/20
                select-none
                pointer-events-none
              "
              >
                ❝
              </div>

              <div className="relative z-10">

                <div
                  className="
                  mb-8
                  text-6xl
                  leading-none
                  text-[#D4AF37]
                "
                >
                  ❝
                </div>

                <p
                  className="
                  min-h-[150px]
                  text-lg
                  leading-9
                  text-slate-300
                "
                >
                  {item.text}
                </p>

                <div
                  className="
                  mt-10
                  border-t
                  border-[#D4AF37]/15
                  pt-6
                "
                >

                  <h4
                    className="
                    text-3xl
                    font-bold
                    text-white
                  "
                  >
                    {item.name}
                  </h4>

                  <p
                    className="
                    mt-2
                    text-lg
                    font-medium
                    tracking-wider
                    text-[#D4AF37]
                  "
                  >
                    {item.country}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}