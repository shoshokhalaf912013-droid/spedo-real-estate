export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Tell Us Your Budget",
      description:
        "Share your budget, preferred area and investment goals.",
    },
    {
      number: "02",
      title: "Receive Curated Options",
      description:
        "Our advisors shortlist the most suitable projects for you.",
    },
    {
      number: "03",
      title: "Virtual Property Tour",
      description:
        "Review projects remotely through videos, photos and consultations.",
    },
    {
      number: "04",
      title: "Reserve Your Unit",
      description:
        "Secure your preferred property with full advisor support.",
    },
    {
      number: "05",
      title: "Ownership & After-Sales",
      description:
        "Receive ongoing support through ownership and property management.",
    },
  ];

  return (
    <section className="bg-[#07111D] py-28">
      <div className="mx-auto max-w-[1400px] px-6">

        <div className="mb-16 text-center">

          <span className="mb-5 inline-block rounded-full border border-[#D4AF37]/30 px-5 py-2 text-sm text-[#D4AF37]">
            INVESTMENT PROCESS
          </span>

          <h2 className="mb-6 text-5xl font-bold text-white">
            Your Investment
            <span className="text-[#D4AF37]"> Journey </span>
            In 5 Simple Steps
          </h2>

          <p className="mx-auto max-w-3xl text-slate-400">
            From your first inquiry to property ownership, SPEDO guides
            you through every step of the process.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {steps.map((step) => (
            <div
              key={step.number}
              className="
                rounded-3xl
                border
                border-white/10
                bg-[#0B1A2A]
                p-8
                text-center
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#D4AF37]/40
              "
            >
              <div
                className="
                  mx-auto
                  mb-6
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-[#D4AF37]
                  text-2xl
                  font-bold
                  text-black
                "
              >
                {step.number}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {step.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}