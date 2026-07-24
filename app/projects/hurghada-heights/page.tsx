import Image from "next/image";
import Link from "next/link";

export default function HurghadaHeightsPage() {
  const gallery = [
    ...Array.from(
      { length: 36 },
      (_, i) => `H_H_${i + 1} - Photo.jpg`
    ),

    "n3.jpg",
    "n8.jpg",

    ...Array.from(
      { length: 8 },
      (_, i) => `n${i + 10}.jpg`
    ),

    ...Array.from(
      { length: 11 },
      (_, i) => `x${i + 1}.jpg`
    ),

    "RES.jpg",
    "ENDX.jpg",
  ];

	return (
        <main className="bg-[#05070D] text-white">


    {/* HERO */}

      <section className="relative h-[85vh] overflow-hidden">

        <Image
          src="/projects/hurghada-heights/cover.jpg"
          alt="Hurghada Heights"
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 flex h-full items-center">

          <div className="mx-auto max-w-7xl px-6">

            <span
              className="
              rounded-full
              border
              border-[#F97316]/40
              bg-[#F97316]/10
              px-5
              py-2
              text-[#F97316]
              uppercase
              tracking-[3px]
              "
            >
              Luxury Development
            </span>

            <h1
              className="
              mt-8
              max-w-4xl
              font-playfair
              text-6xl
              md:text-8xl
              text-[#F97316]
              "
            >
              Hurghada Heights
            </h1>

            <p
              className="
              mt-8
              max-w-2xl
              text-xl
              leading-9
              text-slate-200
              "
            >
              Premium residential and commercial destination
              combining luxury residences, retail experiences,
              investment opportunities and modern lifestyle
              facilities in one of Hurghada's fastest-growing
              locations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="rounded-2xl bg-[#F97316] px-6 py-4 font-bold">
                Prime Location
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4">
                Flexible Installments
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4">
                Luxury Lifestyle
              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="https://wa.me/201158070998"
                className="
                rounded-2xl
                bg-white
                px-10
                py-5
                font-bold
                text-black
                "
              >
                WhatsApp Advisor
              </Link>

            </div>

          </div>

        </div>

      </section>

	{/* PROJECT OVERVIEW */}

<section className="py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-16 lg:grid-cols-2">

      <div>

        <span
          className="
          uppercase
          tracking-[4px]
          text-[#F97316]
          "
        >
          Project Overview
        </span>

        <h2
          className="
          mt-6
          text-5xl
          font-playfair
          text-[#F97316]
          "
        >
          Modern Living In The Heart Of Hurghada
        </h2>

      </div>

      <div>

        <p
          className="
          text-lg
          leading-9
          text-slate-300
          "
        >
          Hurghada Heights offers a unique combination
          of residential apartments, commercial spaces,
          retail opportunities and long-term investment
          value in one of Hurghada's fastest-growing areas.
        </p>

      </div>

    </div>

  </div>

</section>
	
	{/* INVESTMENT HIGHLIGHTS */}

<section className="pb-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-6 md:grid-cols-4">

      <div className="rounded-[30px] bg-[#09111C] p-8">

        <h3 className="text-4xl font-bold text-[#F97316]">
          8%+
        </h3>

        <p className="mt-4 text-slate-400">
          Annual Rental Yield
        </p>

      </div>

      <div className="rounded-[30px] bg-[#09111C] p-8">

        <h3 className="text-4xl font-bold text-[#F97316]">
          Prime
        </h3>

        <p className="mt-4 text-slate-400">
          Commercial Opportunities
        </p>

      </div>

      <div className="rounded-[30px] bg-[#09111C] p-8">

        <h3 className="text-4xl font-bold text-[#F97316]">
          Flexible
        </h3>

        <p className="mt-4 text-slate-400">
          Payment Plans
        </p>

      </div>

      <div className="rounded-[30px] bg-[#09111C] p-8">

        <h3 className="text-4xl font-bold text-[#F97316]">
          High
        </h3>

        <p className="mt-4 text-slate-400">
          Capital Appreciation
        </p>

      </div>

    </div>

  </div>

</section>


      {/* STATS */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-[30px] border border-white/10 bg-[#09111C] p-8 text-center">
              <div className="text-4xl font-bold text-[#F97316]">
                Premium
              </div>
              <div className="mt-3 text-slate-400">
                Residential Units
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#09111C] p-8 text-center">
              <div className="text-4xl font-bold text-[#F97316]">
                Retail
              </div>
              <div className="mt-3 text-slate-400">
                Commercial Zone
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-[#09111C] p-8 text-center">
              <div className="text-4xl font-bold text-[#F97316]">
                High ROI
              </div>
              <div className="mt-3 text-slate-400">
                Investment Potential
              </div>
            </div>

          </div>

        </div>

      </section>

{/* PROJECT VIDEO */}

<section className="pb-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">

      <span
        className="
        uppercase
        tracking-[4px]
        text-[#F97316]
        "
      >
        Project Video
      </span>

      <h2
        className="
        mt-6
        text-5xl
        font-playfair
        text-[#F97316]
        "
      >
        Explore Hurghada Heights From Above
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-slate-400">
        Discover Hurghada Heights through cinematic aerial footage,
        luxury residences and premium lifestyle experiences.
      </p>

    </div>

    <div
      className="
      overflow-hidden
      rounded-[32px]
      border
      border-[#F97316]/20
      "
    >

      <video
        controls
        playsInline
        preload="metadata"
        poster="/projects/hurghada-heights/cover.jpg"
        className="w-full"
      >
        <source
          src="/projects/hurghada-heights/video.mp4"
          type="video/mp4"
        />
      </video>

    </div>

  </div>

</section>


      {/* GALLERY */}

      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2
            className="
            mb-16
            text-center
            text-5xl
            font-playfair
            text-[#F97316]
            "
          >
            Project Gallery
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {gallery.slice(0, 8).map((image) => (

              <div
                key={image}
                className="
                group
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                "
              >

                <Image
                  src={`/projects/hurghada-heights/${image}`}
                  alt={image}
                  width={1600}
                  height={1000}
                  className="
                  h-[320px]
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  "
                />

              </div>

            ))}

          </div>

        </div>

      </section>

	{/* LIFESTYLE & AMENITIES */}

<section className="pb-24">

  <div className="mx-auto max-w-7xl px-6">

    <h2
      className="
      mb-16
      text-center
      text-5xl
      font-playfair
      text-[#F97316]
      "
    >
      Lifestyle & Amenities
    </h2>

    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-[30px] bg-[#09111C] p-8">
        Swimming Pools
      </div>

      <div className="rounded-[30px] bg-[#09111C] p-8">
        Retail Area
      </div>

      <div className="rounded-[30px] bg-[#09111C] p-8">
        Restaurants & Cafes
      </div>

      <div className="rounded-[30px] bg-[#09111C] p-8">
        Security 24/7
      </div>

      <div className="rounded-[30px] bg-[#09111C] p-8">
        Parking Areas
      </div>

      <div className="rounded-[30px] bg-[#09111C] p-8">
        Family Entertainment
      </div>

    </div>

  </div>

</section>

	{/* PAYMENT PLANS */}

<section className="pb-24">

  <div className="mx-auto max-w-7xl px-6">

    <h2
      className="
      mb-16
      text-center
      text-5xl
      font-playfair
      text-[#F97316]
      "
    >
      Flexible Payment Plans
    </h2>

    <div className="grid gap-6 md:grid-cols-3">

      <div className="rounded-[30px] bg-[#09111C] p-8">

        <h3 className="text-3xl font-bold text-[#F97316]">
          10%
        </h3>

        <p className="mt-4 text-slate-400">
          Down Payment
        </p>

      </div>

      <div className="rounded-[30px] bg-[#09111C] p-8">

        <h3 className="text-3xl font-bold text-[#F97316]">
          7 Years
        </h3>

        <p className="mt-4 text-slate-400">
          Installments
        </p>

      </div>

      <div className="rounded-[30px] bg-[#09111C] p-8">

        <h3 className="text-3xl font-bold text-[#F97316]">
          0%
        </h3>

        <p className="mt-4 text-slate-400">
          Interest Rate
        </p>

      </div>

    </div>

  </div>

</section>


      {/* CTA */}

      <section className="pb-32">

        <div className="mx-auto max-w-5xl px-6">

          <div
            className="
            rounded-[40px]
            border
            border-[#F97316]/20
            bg-[#09111C]
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
              Interested In Hurghada Heights?
            </h2>

            <p className="mt-6 text-slate-300">
              Speak directly with a SPEDO Real Estate advisor
              and receive the latest prices, availability
              and payment plans.
            </p>

            <Link
              href="https://wa.me/201158070998"
              className="
              mt-8
              inline-block
              rounded-2xl
              bg-[#F97316]
              px-10
              py-5
              font-bold
              text-white
              "
            >
              Contact Advisor
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}