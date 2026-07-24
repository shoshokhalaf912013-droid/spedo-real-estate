export default function WhyInvestRedSea() {
  const stats = [
    {
      value: "12M+",
      title: "Annual Tourists",
      description:
        "Strong tourism demand drives short-term rental performance.",
    },
    {
      value: "10-12%",
      title: "Rental Yield",
      description:
        "Premium Red Sea destinations continue to attract investors.",
    },
    {
      value: "€5B+",
      title: "Infrastructure Investment",
      description:
        "Major investments in airports, marinas and tourism projects.",
    },
    {
      value: "365",
      title: "Days Tourism Season",
      description:
        "Year-round sunshine supports occupancy and rental income.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#05070D] py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07111D] via-[#05070D] to-[#07111D]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span
            className="
              inline-block
              rounded-full
              border
              border-[#D4AF37]/30
              px-5
              py-2
              text-sm
              text-[#D4AF37]
            "
          >
            WHY INVEST IN RED SEA
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              text-white
              md:text-6xl
            "
          >
            The Numbers Behind The
            <span className="text-[#D4AF37]"> Opportunity</span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              text-slate-400
            "
          >
            Discover why international investors continue to choose
            Egypt's Red Sea destinations for long-term growth,
            rental income and capital appreciation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                rounded-[30px]
                border
                border-[#D4AF37]/15
                bg-[#0B1A2A]
                p-8
                text-center
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#D4AF37]/40
                hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)]
              "
            >
              <div
                className="
                  text-5xl
                  font-bold
                  text-[#D4AF37]
                "
              >
                {item.value}
              </div>

              <h3
                className="
                  mt-5
                  text-xl
                  font-semibold
                  text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  leading-relaxed
                  text-slate-400
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}