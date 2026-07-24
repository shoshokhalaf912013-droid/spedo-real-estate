export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#05070D] py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A2A] via-[#07111D] to-[#0B1A2A]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
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
          READY TO INVEST?
        </span>

        <h2
          className="
          mt-6
          text-5xl
          font-bold
          leading-tight
          text-white
          md:text-7xl
        "
        >
          Start Your
          <span className="text-[#D4AF37]">
            {" "}Red Sea Investment
          </span>
          <br />
          Journey Today
        </h2>

        <p
          className="
          mx-auto
          mt-8
          max-w-3xl
          text-lg
          text-slate-400
        "
        >
          Connect with a SPEDO advisor and receive a curated
          shortlist of opportunities tailored to your goals.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <a
            href="https://wa.me/201158070998"
            target="_blank"
            className="
            rounded-2xl
            bg-[#D4AF37]
            px-10
            py-5
            font-bold
            text-black
            transition-all
            duration-300
            hover:scale-105
          "
          >
            WhatsApp Advisor
          </a>

          <button
            className="
            rounded-2xl
            border
            border-white/15
            bg-white/5
            px-10
            py-5
            font-bold
            text-white
          "
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}