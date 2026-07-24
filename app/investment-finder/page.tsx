import Link from "next/link";
import Image from "next/image";

export default function InvestmentFinderPage() {
  return (
    <main className="bg-[#05070D] text-white">

      {/* HERO */}

      <section className="relative overflow-hidden py-32">

        <Image
          src="/images/investment-finder-hero.jpg"
          alt="Investment Finder"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2 items-center">

            {/* LEFT */}

            <div>

              <span
                className="
                inline-block
                rounded-full
                border
                border-[#D4AF37]/30
                px-5
                py-2
                text-[#D4AF37]
                "
              >
                SPEDO Investment Finder
              </span>

              <h1
                className="
                mt-8
                font-playfair
                text-[#F97316]
                text-5xl
                md:text-7xl
                leading-tight
                "
              >
                Find The Best Property In Hurghada
              </h1>

              <p
                className="
                mt-8
                max-w-2xl
                text-xl
                text-slate-300
                leading-9
                "
              >
                Tell us your budget, preferred area and
                investment goals. Our advisors will shortlist
                the most suitable opportunities across
                Hurghada, El Gouna, Makadi Bay,
                Sahl Hasheesh and Soma Bay.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="#finder-form"
                  className="
                  rounded-2xl
                  bg-[#F97316]
                  px-8
                  py-4
                  font-bold
                  text-white
                  "
                >
                  Start Matching
                </Link>

                <Link
                  href="/Projects"
                  className="
                  rounded-2xl
                  border
                  border-white/20
                  px-8
                  py-4
                  "
                >
                  Browse Projects
                </Link>

              </div>

            </div>

            {/* FORM */}

            <div
              id="finder-form"
              className="
              rounded-[32px]
              border
              border-[#D4AF37]/20
              bg-[#07111D]
              p-8
              "
            >

              <h2 className="mb-8 text-3xl text-[#D4AF37]">
                Investment Matching Form
              </h2>

              <div className="grid gap-4">

                <input
                  placeholder="Full Name"
                  className="rounded-xl bg-[#0B1523] p-4"
                />

                <input
                  placeholder="WhatsApp Number"
                  className="rounded-xl bg-[#0B1523] p-4"
                />

                <select className="rounded-xl bg-[#0B1523] p-4">
                  <option>Preferred Area</option>
                  <option>Hurghada</option>
                  <option>El Gouna</option>
                  <option>Sahl Hasheesh</option>
                  <option>Makadi Bay</option>
                  <option>Soma Bay</option>
                </select>

                <select className="rounded-xl bg-[#0B1523] p-4">
                  <option>Property Type</option>
                  <option>Studio</option>
                  <option>1 Bedroom</option>
                  <option>2 Bedrooms</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                </select>

                <select className="rounded-xl bg-[#0B1523] p-4">
                  <option>Budget Range</option>
                  <option>Under €50,000</option>
                  <option>€50,000 - €100,000</option>
                  <option>€100,000 - €200,000</option>
                  <option>€200,000+</option>
                </select>

                <select className="rounded-xl bg-[#0B1523] p-4">
                  <option>Buying Purpose</option>
                  <option>Investment</option>
                  <option>Residence</option>
                  <option>Holiday Home</option>
                </select>

                <textarea
                  rows={4}
                  placeholder="Additional Requirements"
                  className="rounded-xl bg-[#0B1523] p-4"
                />

                <button
                  className="
                  mt-4
                  rounded-2xl
                  bg-[#F97316]
                  py-4
                  font-bold
                  "
                >
                  Get My Recommendations
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}