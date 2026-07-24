import Image from "next/image";
import Link from "next/link";
import FloatingHeader from "@/components/header/FloatingHeader";

export default function MarkResortPage() {
  return (
    <>

      <main className="bg-[#05070D] text-white">

        {/* HERO */}

        <section className="relative h-[90vh] overflow-hidden">

	   <Image
 	      src="/projects/mark-resort/hero.png"
              alt="Mark Resort"
              fill
              priority
              className="
              object-cover
              brightness-110
              contrast-105
              saturate-110
               "
             />

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#020B16]/30
              via-[#020B16]/10
              to-transparent
            "
          />
          <div className="relative z-10 flex h-full items-center">

            <div className="mx-auto max-w-7xl px-6">

              <span
                className="
                rounded-full
                border
                border-orange-400/40
                bg-orange-500/10
                px-5
                py-2
                text-orange-300
                "
              >
                PRIME AIRPORT ROAD INVESTMENT OPPORTUNITY
              </span>

              <h1
                className="
                mt-8
                max-w-5xl
                font-playfair
                text-7xl
                md:text-[110px]
                !text-white
                "
              >
                Mark Resort
              </h1>

              <p
                className="
                mt-6
                max-w-2xl
                text-xl
                text-white
		font-medium
                "
              >
                Luxury Living & Smart Investment In Hurghada
              </p>

              <p
                className="
                mt-6
                max-w-2xl
                leading-8
                text-slate-300
                "
              >
                Strategically located on Hurghada Airport Road,
                Mark Resort combines contemporary architecture,
                premium amenities and strong investment potential,
                making it an attractive destination for both
                homeowners and international investors.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="https://wa.me/201158070998"
                  className="
                  rounded-2xl
                  bg-orange-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-orange-600
                  "
                >
                  WhatsApp Advisor
                </Link>

                <Link
                  href="/Projects"
                  className="
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/5
                  px-8
                  py-4
                  transition
                  hover:bg-white/10
                  "
                >
                  Back To Projects
                </Link>

              </div>

            </div>

          </div>

        </section>

{/* OVERVIEW */}

<section className="py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-16 lg:grid-cols-2">

      <div>

        <span className="text-orange-400">
          PROJECT OVERVIEW
        </span>

        <h2
          className="
          mt-4
          font-playfair
          text-5xl
          text-white
          "
        >
          A Strategic Investment Destination
        </h2>

        <p className="mt-8 leading-8 text-slate-400">
          Located on Hurghada Airport Road,
          Mark Resort offers exceptional connectivity
          to the airport, beaches, city services and
          major attractions while delivering a modern
          resort-style residential environment.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="rounded-3xl border border-orange-500/20 bg-[#0B1523] p-8">
          <div className="text-4xl font-bold text-orange-400">
            Airport
          </div>

          <p className="mt-3 text-slate-400">
            Minutes From The Airport
          </p>
        </div>

        <div className="rounded-3xl border border-orange-500/20 bg-[#0B1523] p-8">
          <div className="text-4xl font-bold text-orange-400">
            Investment
          </div>

          <p className="mt-3 text-slate-400">
            Strong Growth Potential
          </p>
        </div>

        <div className="rounded-3xl border border-orange-500/20 bg-[#0B1523] p-8">
          <div className="text-4xl font-bold text-orange-400">
            Global
          </div>

          <p className="mt-3 text-slate-400">
            Foreign Buyer Friendly
          </p>
        </div>

        <div className="rounded-3xl border border-orange-500/20 bg-[#0B1523] p-8">
          <div className="text-4xl font-bold text-orange-400">
            Location
          </div>

          <p className="mt-3 text-slate-400">
            Airport Road Hurghada
          </p>
        </div>

      </div>

    </div>

  </div>

</section>
		{/* PROJECT VIDEO */}

<section className="bg-[#07111D] py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-12 text-center">

      <span className="text-orange-400">
        PROJECT VIDEO
      </span>

      <h2
        className="
        mt-4
        font-playfair
        text-5xl
        text-white
        "
      >
        Explore Mark Resort From Above
      </h2>

      <p className="mt-6 text-slate-400">
        Aerial footage showcasing the project's location,
        surrounding infrastructure and investment potential.
      </p>

    </div>

    <div
      className="
      overflow-hidden
      rounded-[32px]
      border
      border-orange-500/20
      "
    >

      <video
        className="w-full"
        controls
        preload="metadata"
        poster="/projects/mark-resort/hero.png"
      >
        <source
          src="/projects/mark-resort/video.mp4"
          type="video/mp4"
        />
      </video>

    </div>

  </div>

</section>
	        {/* INVESTMENT ADVANTAGES */}

        <section className="bg-[#07111D] py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-16 text-center">

              <span className="uppercase tracking-[4px] text-orange-400">
                Investment Advantages
              </span>

              <h2 className="mt-6 font-playfair text-5xl text-white">
                Why Investors Choose Mark Resort
              </h2>

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-3xl border border-orange-500/10 bg-[#0B1523] p-8">

                <div className="mb-4 text-5xl">✈️</div>

                <h3 className="mb-4 text-2xl font-semibold">
                  Airport Road Location
                </h3>

                <p className="text-slate-400">
                  Direct access to Hurghada Airport,
                  major roads and essential services.
                </p>

              </div>

              <div className="rounded-3xl border border-orange-500/10 bg-[#0B1523] p-8">

                <div className="mb-4 text-5xl">📈</div>

                <h3 className="mb-4 text-2xl font-semibold">
                  Strong Investment Potential
                </h3>

                <p className="text-slate-400">
                  Growing demand from local and
                  international property buyers.
                </p>

              </div>

              <div className="rounded-3xl border border-orange-500/10 bg-[#0B1523] p-8">

                <div className="mb-4 text-5xl">🌍</div>

                <h3 className="mb-4 text-2xl font-semibold">
                  International Appeal
                </h3>

                <p className="text-slate-400">
                  Ideal for foreign investors seeking
                  Red Sea property opportunities.
                </p>

              </div>

              <div className="rounded-3xl border border-orange-500/10 bg-[#0B1523] p-8">

                <div className="mb-4 text-5xl">🏡</div>

                <h3 className="mb-4 text-2xl font-semibold">
                  Modern Resort Living
                </h3>

                <p className="text-slate-400">
                  Contemporary design, quality finishes
                  and comfortable living spaces.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* GALLERY */}

        <section className="pb-24 pt-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-12 text-center">

              <span className="uppercase tracking-[4px] text-orange-400">
                Project Gallery
              </span>

              <h2 className="mt-6 font-playfair text-5xl text-white">
                Explore Mark Resort
              </h2>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {Array.from({ length: 23 }, (_, i) => i + 1).map((img) => (
                <Image
                  key={img}
                  src={`/projects/mark-resort/gallery-${img}.png`}
                  alt={`Mark Resort ${img}`}
                  width={1200}
                  height={800}
                  className="
                  h-[350px]
                  w-full
                  rounded-[32px]
                  object-cover
                  transition-all
                  duration-500
                  hover:scale-[1.02]
                  "
                />
              ))}

            </div>

          </div>

        </section>

        {/* LIFESTYLE & AMENITIES */}

        <section className="bg-[#07111D] py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-16 text-center">

              <span className="uppercase tracking-[4px] text-orange-400">
                Lifestyle & Amenities
              </span>

              <h2 className="mt-6 font-playfair text-5xl text-white">
                Comfortable Living Every Day
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-slate-400">
                Mark Resort is designed to provide
                convenience, comfort and a modern
                residential lifestyle in one of
                Hurghada's fastest-growing areas.
              </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-[32px] bg-[#0B1523] p-8">

                <h3 className="mb-3 text-2xl">
                  Swimming Pools
                </h3>

                <p className="text-slate-400">
                  Resort-style leisure and relaxation areas.
                </p>

              </div>

              <div className="rounded-[32px] bg-[#0B1523] p-8">

                <h3 className="mb-3 text-2xl">
                  Landscaped Areas
                </h3>

                <p className="text-slate-400">
                  Green spaces and attractive outdoor environments.
                </p>

              </div>

              <div className="rounded-[32px] bg-[#0B1523] p-8">

                <h3 className="mb-3 text-2xl">
                  Commercial Services
                </h3>

                <p className="text-slate-400">
                  Daily convenience and nearby essential services.
                </p>

              </div>

              <div className="rounded-[32px] bg-[#0B1523] p-8">

                <h3 className="mb-3 text-2xl">
                  Security & Management
                </h3>

                <p className="text-slate-400">
                  Professional management and secure environment.
                </p>

              </div>

            </div>

          </div>

        </section>
	        {/* WHY MARK RESORT */}

        <section className="py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-16 text-center">

              <span className="uppercase tracking-[4px] text-orange-400">
                Project Features
              </span>

              <h2 className="mt-6 font-playfair text-5xl text-white">
                Why Mark Resort?
              </h2>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-[32px] bg-[#0B1523] p-8">

                <h3 className="mb-3 text-2xl">
                  Strategic Location
                </h3>

                <p className="text-slate-400">
                  Prime Airport Road accessibility with excellent connectivity.
                </p>

              </div>

              <div className="rounded-[32px] bg-[#0B1523] p-8">

                <h3 className="mb-3 text-2xl">
                  Contemporary Design
                </h3>

                <p className="text-slate-400">
                  Modern architecture and carefully planned living spaces.
                </p>

              </div>

              <div className="rounded-[32px] bg-[#0B1523] p-8">

                <h3 className="mb-3 text-2xl">
                  Resort Environment
                </h3>

                <p className="text-slate-400">
                  Lifestyle-focused development with premium facilities.
                </p>

              </div>

              <div className="rounded-[32px] bg-[#0B1523] p-8">

                <h3 className="mb-3 text-2xl">
                  Investment Opportunity
                </h3>

                <p className="text-slate-400">
                  Strong long-term growth and rental demand potential.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* LOCATION ADVANTAGES */}

        <section className="bg-[#07111D] py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="mb-16 text-center">

              <span className="uppercase tracking-[4px] text-orange-400">
                Location Advantages
              </span>

              <h2 className="mt-6 font-playfair text-5xl text-white">
                Connected To Everything
              </h2>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-[32px] bg-[#0B1523] p-8 text-center">

                <div className="mb-4 text-5xl">✈️</div>

                <h3 className="mb-3 text-2xl">
                  Airport Access
                </h3>

                <p className="text-slate-400">
                  Minutes away from Hurghada International Airport.
                </p>

              </div>

              <div className="rounded-[32px] bg-[#0B1523] p-8 text-center">

                <div className="mb-4 text-5xl">🏖️</div>

                <h3 className="mb-3 text-2xl">
                  Beaches Nearby
                </h3>

                <p className="text-slate-400">
                  Easy access to Hurghada's most popular beaches.
                </p>

              </div>

              <div className="rounded-[32px] bg-[#0B1523] p-8 text-center">

                <div className="mb-4 text-5xl">🏙️</div>

                <h3 className="mb-3 text-2xl">
                  City Services
                </h3>

                <p className="text-slate-400">
                  Close to shopping, dining and daily conveniences.
                </p>

              </div>

              <div className="rounded-[32px] bg-[#0B1523] p-8 text-center">

                <div className="mb-4 text-5xl">📈</div>

                <h3 className="mb-3 text-2xl">
                  Growth Zone
                </h3>

                <p className="text-slate-400">
                  Located in one of Hurghada's expanding investment areas.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* FINAL CTA */}

        <section className="py-24">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <h2 className="font-playfair text-6xl text-white">
              Discover Mark Resort Investment Opportunities
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-slate-400">
              Speak with a SPEDO investment advisor and receive
              the latest availability, pricing, payment plans
              and investment insights for Mark Resort.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <a
                href="https://wa.me/201158070998"
                target="_blank"
                className="
                rounded-2xl
                bg-orange-500
                px-10
                py-5
                font-bold
                text-white
                transition
                hover:bg-orange-600
                "
              >
                WhatsApp Advisor
              </a>

              <a
                href="https://wa.me/201158070998?text=Hello%20SPEDO%2C%20I%20would%20like%20to%20receive%20the%20Mark%20Resort%20brochure."
                target="_blank"
                className="
                rounded-2xl
                border
                border-orange-500/30
                px-10
                py-5
                transition
                hover:bg-orange-500/10
                "
              >
                Request Brochure
              </a>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}