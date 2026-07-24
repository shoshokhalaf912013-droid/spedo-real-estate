import Link from "next/link";

export default function RenovationPage() {
  return (
    <main className="min-h-screen bg-[#05070D] px-6 py-32 text-white">
      <div className="mx-auto max-w-7xl">
        <span className="inline-block rounded-full border border-[#D4AF37]/30 px-5 py-2 text-[#D4AF37]">
          SPEDO RENOVATION
        </span>

        <h1 className="mt-8 max-w-4xl text-5xl font-bold text-[#F97316] md:text-7xl">
          Renovation And Property Transformation
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Transform residential and commercial properties with professional
          renovation planning and execution.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8">
            <h2 className="text-2xl font-semibold text-[#D4AF37]">
              Interior Design
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Modern interior concepts tailored to the property and its
              purpose.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8">
            <h2 className="text-2xl font-semibold text-[#D4AF37]">
              Full Renovation
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Complete renovation management from planning to final delivery.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8">
            <h2 className="text-2xl font-semibold text-[#D4AF37]">
              Property Upgrade
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Strategic upgrades designed to increase property value and
              appeal.
            </p>
          </div>
        </div>

        <Link
          href="https://wa.me/201158070998"
          className="mt-12 inline-block rounded-2xl bg-[#D4AF37] px-10 py-4 font-bold text-black"
        >
          Request A Consultation
        </Link>
      </div>
    </main>
  );
}