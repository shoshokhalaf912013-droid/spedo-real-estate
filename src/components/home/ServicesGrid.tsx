export default function ServicesGrid() {
  const services = [
    {
      number: "01",
      title: "Property Advisory",
      description:
        "Receive expert guidance tailored to your investment goals and budget.",
    },
    {
      number: "02",
      title: "Area Comparison",
      description:
        "Compare Hurghada, El Gouna, Sahl Hasheesh, Makadi Bay and Soma Bay.",
    },
    {
      number: "03",
      title: "Developer Access",
      description:
        "Direct access to trusted developers and exclusive opportunities.",
    },
    {
      number: "04",
      title: "ROI Analysis",
      description:
        "Evaluate rental yields, appreciation potential and investment returns.",
    },
    {
      number: "05",
      title: "International Support",
      description:
        "Dedicated assistance for investors purchasing from abroad.",
    },
    {
      number: "06",
      title: "After-Sales Service",
      description:
        "Continued support after purchase including property assistance.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#07111D] py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07111D] via-[#08131F] to-[#07111D]" />

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
            OUR SERVICES
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
            How
            <span className="text-[#D4AF37]">
              {" "}SPEDO
            </span>
            {" "}Supports Investors
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
            More than property listings. We help investors
            identify, evaluate and secure the right opportunities
            across Egypt's Red Sea coast.
          </p>
        </div>

        {/* Services */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="
              group
              rounded-[30px]
              border
              border-[#D4AF37]/15
              bg-[#0B1A2A]
              p-8
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[#D4AF37]/40
              hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)]
            "
            >
              <div
                className="
                mb-6
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-[#D4AF37]
                text-lg
                font-bold
                text-black
              "
              >
                {service.number}
              </div>

              <h3
                className="
                text-2xl
                font-semibold
                text-white
              "
              >
                {service.title}
              </h3>

              <p
                className="
                mt-4
                leading-relaxed
                text-slate-400
              "
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}