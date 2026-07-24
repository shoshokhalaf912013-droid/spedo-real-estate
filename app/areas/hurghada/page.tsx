import Image from "next/image";
import Link from "next/link";

import FloatingHeader from "@/components/header/FloatingHeader";
import { featuredProjects } from "@/data/featuredProjects";

export default function HurghadaPage() {
  return (
    <>

      <main className="bg-[#05070D] text-white">

        {/* HERO */}

        <section className="relative min-h-screen overflow-hidden">

          <Image
            src="/areas/hurghada-marina.webp"
            alt="Hurghada Marina"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 pt-56 pb-32">

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
              RED SEA DESTINATION
            </span>

            <h1
              className="
              mt-8
              text-6xl
              md:text-8xl
              font-playfair
              text-[#F97316]
              "
            >
              Hurghada
            </h1>

            <p
              className="
              mt-8
              max-w-3xl
              text-xl
              text-slate-200
              leading-9
              "
            >
              The capital of Red Sea tourism and one of
              Egypt's strongest property investment markets,
              offering year-round tourism, international
              connectivity and excellent rental demand.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/properties"
                className="
                rounded-2xl
                bg-[#F97316]
                px-8
                py-4
                font-bold
                "
              >
                Explore Properties
              </Link>

              <Link
                href="/contact"
                className="
                rounded-2xl
                border
                border-white/20
                px-8
                py-4
                "
              >
                Speak With Advisor
              </Link>

            </div>

          </div>

        </section>

        {/* STATS */}

        <section className="py-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {[
                ["500K+", "Residents"],
                ["12 Months", "Tourism Activity"],
                ["International", "Airport"],
                ["High", "Rental Demand"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-[#07111D]
                  p-8
                  text-center
                  "
                >
                  <div className="text-6xl font-bold text-[#F97316]">
                    {number}
                  </div>

                  <div className="mt-3 text-slate-400">
                    {label}
                  </div>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* WHY HURGHADA */}

        <section className="pb-24">

          <div className="mx-auto max-w-7xl px-6">

            <h2
              className="
              text-center
              text-5xl
              font-playfair
              text-[#F97316]
              "
            >
              Why Invest In Hurghada
            </h2>

            <div className="mt-16 grid gap-6 md:grid-cols-2">

              <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8">
                <h3 className="text-2xl text-[#D4AF37]">
                  Tourism Growth
                </h3>

                <p className="mt-4 text-slate-300">
                  Hurghada remains one of the most visited
                  destinations on the Red Sea.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8">
                <h3 className="text-2xl text-[#D4AF37]">
                  Rental Income
                </h3>

                <p className="mt-4 text-slate-300">
                  Strong demand from tourists creates
                  attractive rental opportunities.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8">
                <h3 className="text-2xl text-[#D4AF37]">
                  International Access
                </h3>

                <p className="mt-4 text-slate-300">
                  Direct flights connect Hurghada with
                  Europe and the Middle East.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#07111D] p-8">
                <h3 className="text-2xl text-[#D4AF37]">
                  Affordable Entry Prices
                </h3>

                <p className="mt-4 text-slate-300">
                  Property prices remain competitive
                  compared to many coastal markets.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* LIFESTYLE */}

        <section className="pb-24">

          <div className="mx-auto max-w-7xl px-6">

            <div
              className="
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              "
            >
              <div className="relative h-[500px]">

                <Image
                  src="/areas/hurghada-marina.webp"
                  alt="Hurghada Lifestyle"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute bottom-0 left-0 p-10">

                  <h2
                    className="
                    text-5xl
                    font-playfair
                    text-[#F97316]
                    "
                  >
                    Marina Lifestyle
                  </h2>

                  <p
                    className="
                    mt-4
                    max-w-2xl
                    text-slate-200
                    "
                  >
                    Beaches, restaurants, marinas,
                    nightlife and year-round sunshine
                    make Hurghada one of the most
                    attractive lifestyle destinations
                    on the Red Sea.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>
	{/* FEATURED PROJECTS */}

<section className="pb-24">

  <div className="mx-auto max-w-7xl px-6">

    <h2
      className="
      text-center
      text-5xl
      font-playfair
      text-[#F97316]
      "
    >
      Featured Projects In Hurghada
    </h2>

    <p
      className="
      mx-auto
      mt-6
      max-w-3xl
      text-center
      text-slate-400
      "
    >
      Discover selected developments offering
      strong rental demand, flexible payment plans
      and long-term investment potential.
    </p>

    <div className="mt-16">

      {featuredProjects
        .filter(project => project.area === "hurghada")
        .map(project => (

	    <div
 	      key={project.id}
              className="
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-[#07111D]
              max-w-5xl
              mx-auto
              "
            >

            <Image
              src={project.image}
              alt={project.name}
              width={1200}
              height={800}
              className="
              h-[500px]
              w-full
              object-cover
              "
            />

            <div className="p-12">

              <h3
                className="
                text-4xl
                font-playfair
                text-[#F97316]
                "
              >
                {project.name}
              </h3>

              <p className="mt-4 text-slate-300">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="rounded-full bg-[#D4AF37]/10 px-4 py-2 text-[#D4AF37]">
                  {project.startingPrice}
                </span>

                <span className="rounded-full bg-white/5 px-4 py-2 text-white">
                  {project.paymentPlan}
                </span>

                <span className="rounded-full bg-white/5 px-4 py-2 text-white">
                  Delivery {project.delivery}
                </span>

              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="
                mt-8
                inline-block
                rounded-2xl
                bg-[#F97316]
                px-8
                py-4
                font-bold
                text-white
                "
              >
                Explore Project
              </Link>

            </div>

          </div>

      ))}

    </div>

  </div>

</section>

        {/* CTA */}

        <section className="pb-32">

          <div className="mx-auto max-w-6xl px-6">

            <div
              className="
              rounded-[36px]
              border
              border-[#D4AF37]/20
              bg-[#07111D]
              p-12
              text-center
              "
            >
              <h2
                className="
                text-5xl
                font-playfair
                text-[#F97316]
                "
              >
                Speak With A Hurghada Advisor
              </h2>

              <p className="mt-6 text-slate-300">
                Get project recommendations,
                payment plans and investment advice.
              </p>

              <button
                className="
                mt-8
                rounded-2xl
                bg-[#D4AF37]
                px-10
                py-4
                font-bold
                text-black
                "
              >
                WhatsApp Consultation
              </button>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}