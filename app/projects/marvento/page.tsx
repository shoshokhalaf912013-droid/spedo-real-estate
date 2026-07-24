import Image from "next/image";
import Link from "next/link";
import FloatingHeader from "@/components/header/FloatingHeader";

export default function MarventoPage() {

    const images = [1,2,3,4,5,6,7,8,9];

    return (

        <>

    <main className="bg-[#05070D] text-white">

      {/* HERO */}

      <section className="relative h-[90vh] overflow-hidden">

	 <Image
            src="/projects/marvento/hero.jpeg"
            alt="Marvento Hurghada"
            fill
            priority
            className="object-cover"
       />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

        <div className="relative z-10 flex h-full items-center">

          <div className="mx-auto max-w-1600px-6">

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
              NEW PROJECT
            </span>

            <h1
              className="
              mt-8
              max-w-4xl
              font-playfair
              text-6xl
              md:text-8xl
            "
            >
              Marvento
            </h1>

            <p
              className="
              mt-8
              max-w-2xl
              text-xl
              text-slate-200
            "
            >
              Modern architecture, commercial promenade,
              premium facilities and flexible payment plans
              in the heart of Hurghada.
            </p>

            <p
              className="
              mt-6
              max-w-2xl
              leading-8
              text-slate-300
            "
            >
              Located in one of Hurghada's fastest-growing
              districts, Marvento offers hotel apartments,
              retail spaces, premium amenities and attractive
              payment plans for both investors and end users.
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
                href="/projects"
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
              "
              >
                A New Landmark In Hurghada
              </h2>

              <p className="mt-8 text-slate-400 leading-8">
                Marvento combines modern design,
                commercial activity, hospitality,
                investment opportunities and
                flexible ownership solutions in one
                destination.
              </p>

            </div>

            <div
              className="
              grid
              grid-cols-2
              gap-6
            "
            >

              <div className="rounded-3xl border border-orange-500/20 bg-[#0B1523] p-8">
                <div className="text-4xl font-bold text-orange-400">
                  €51K+
                </div>
                <p className="mt-3 text-slate-400">
                  Starting Price
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/20 bg-[#0B1523] p-8">
                <div className="text-4xl font-bold text-orange-400">
                  10%
                </div>
                <p className="mt-3 text-slate-400">
                  Down Payment
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/20 bg-[#0B1523] p-8">
                <div className="text-4xl font-bold text-orange-400">
                  2027
                </div>
                <p className="mt-3 text-slate-400">
                  Delivery
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/20 bg-[#0B1523] p-8">
                <div className="text-4xl font-bold text-orange-400">
                  ROI
                </div>
                <p className="mt-3 text-slate-400">
                  Investment Potential
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

{/* PROJECT VIDEO */}

<section className="bg-[#07111D] py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">

      <span className="uppercase tracking-[4px] text-orange-400">
        Project Video
      </span>

      <h2 className="mt-6 font-playfair text-5xl">
        Explore Marvento From Above
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-slate-400">
        Discover Marvento through aerial footage and premium lifestyle highlights.
      </p>

    </div>

    <div className="overflow-hidden rounded-[32px] border border-orange-500/20">

      <video
        controls
        playsInline
        preload="metadata"
        className="w-full"
        poster="/projects/marvento/hero.jpeg"
      >
        <source
          src="/projects/marvento/video.mp4"
          type="video/mp4"
        />
      </video>

    </div>

  </div>

</section>
	
      {/* PROJECT HIGHLIGHTS */}

      <section className="bg-[#07111D] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <span className="tracking-[4px] uppercase text-orange-400">
              Project Highlights
            </span>

            <h2 className="mt-6 font-playfair text-5xl">
              Why Investors Choose Marvento
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-orange-500/10 bg-[#0B1523] p-8">
              <div className="mb-4 text-5xl">🏙️</div>
              <h3 className="mb-4 text-2xl font-semibold">
                Mixed Use Concept
              </h3>
              <p className="text-slate-400">
                Residential, retail and hospitality in one destination.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-500/10 bg-[#0B1523] p-8">
              <div className="mb-4 text-5xl">💰</div>
              <h3 className="mb-4 text-2xl font-semibold">
                Investment Potential
              </h3>
              <p className="text-slate-400">
                Attractive rental demand and capital appreciation.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-500/10 bg-[#0B1523] p-8">
              <div className="mb-4 text-5xl">🏖️</div>
              <h3 className="mb-4 text-2xl font-semibold">
                Prime Location
              </h3>
              <p className="text-slate-400">
                Located in one of Hurghada's fastest growing districts.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-500/10 bg-[#0B1523] p-8">
              <div className="mb-4 text-5xl">📈</div>
              <h3 className="mb-4 text-2xl font-semibold">
                Flexible Plans
              </h3>
              <p className="text-slate-400">
                Low down payment with extended installment options.
              </p>
            </div>

          </div>

        </div>

      </section>

{/* GALLERY */}

<section className="pb-24">

  <div className="mx-auto max-w-7xl px-6">


<div className="mb-12 text-center">

  <span className="uppercase tracking-[4px] text-orange-400">
    Project Gallery
  </span>

  <h2 className="mt-6 font-playfair text-5xl">
    Explore Marvento Lifestyle
  </h2>

</div>

<div className="grid gap-6 md:grid-cols-2">

<Image
    src="/projects/marvento/1.jpeg"
    alt="Marvento"
    width={1600}
    height={900}
    className="col-span-2 h-[650px] w-full rounded-[32px] object-cover"
/>

{images.map((img) => (

    <Image
        key={img}
        src={`/projects/marvento/${img}.jpeg`}
        alt={`Marvento ${img}`}
        width={1200}
        height={800}
        className="h-[300px] w-full rounded-[30px] object-cover"
    />

))}

</div>


  </div>

</section>

{/* AVAILABLE UNITS */}

<section className="py-24">

  <div className="mx-auto max-w-7xl px-6">


<div className="mb-16 text-center">

  <span className="uppercase tracking-[4px] text-orange-400">
    Available Units
  </span>

  <h2 className="mt-6 font-playfair text-5xl">
    Investment Opportunities
  </h2>

</div>

<div className="overflow-hidden rounded-[32px] border border-orange-500/10">

  <table className="w-full">

    <thead className="bg-[#0B1523]">

      <tr>

        <th className="p-6 text-left">
          Unit Type
        </th>

        <th className="p-6 text-left">
          Area
        </th>

        <th className="p-6 text-left">
          Starting Price
        </th>

      </tr>

    </thead>

    <tbody>

      <tr className="border-t border-white/10">

        <td className="p-6">Studio</td>

        <td className="p-6">42 m²</td>

        <td className="p-6">€51,000</td>

      </tr>

      <tr className="border-t border-white/10">

        <td className="p-6">1 Bedroom</td>

        <td className="p-6">68 m²</td>

        <td className="p-6">€72,000</td>

      </tr>

      <tr className="border-t border-white/10">

        <td className="p-6">2 Bedrooms</td>

        <td className="p-6">110 m²</td>

        <td className="p-6">€110,000</td>

      </tr>

    </tbody>

  </table>

</div>


  </div>

</section>

{/* PAYMENT PLAN */}

<section className="bg-[#07111D] py-24">

  <div className="mx-auto max-w-7xl px-6">


<div className="mb-16 text-center">

  <span className="uppercase tracking-[4px] text-orange-400">
    Payment Plan
  </span>

  <h2 className="mt-6 font-playfair text-5xl">
    Flexible Ownership
  </h2>

</div>

<div className="grid gap-8 md:grid-cols-3">

  <div className="rounded-[32px] bg-[#0B1523] p-10 text-center">

    <div className="text-6xl font-bold text-orange-400">
      10%
    </div>

    <p className="mt-4">
      Down Payment
    </p>

  </div>

  <div className="rounded-[32px] bg-[#0B1523] p-10 text-center">

    <div className="text-6xl font-bold text-orange-400">
      7Y
    </div>

    <p className="mt-4">
      Installments
    </p>

  </div>

  <div className="rounded-[32px] bg-[#0B1523] p-10 text-center">

    <div className="text-6xl font-bold text-orange-400">
      2027
    </div>

    <p className="mt-4">
      Delivery
    </p>

  </div>

</div>


  </div>

</section>

{/* FEATURES */}

<section className="py-24">

  <div className="mx-auto max-w-7xl px-6">


<div className="mb-16 text-center">

  <span className="uppercase tracking-[4px] text-orange-400">
    Project Features
  </span>

  <h2 className="mt-6 font-playfair text-5xl">
    Why Marvento?
  </h2>

</div>

<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

  <div className="rounded-[32px] bg-[#0B1523] p-8">
    <h3 className="mb-3 text-2xl">
      Prime Location
    </h3>
    <p className="text-slate-400">
      Strategic location in the heart of Hurghada.
    </p>
  </div>

  <div className="rounded-[32px] bg-[#0B1523] p-8">
    <h3 className="mb-3 text-2xl">
      Commercial Zone
    </h3>
    <p className="text-slate-400">
      Shops, cafes and entertainment facilities.
    </p>
  </div>

  <div className="rounded-[32px] bg-[#0B1523] p-8">
    <h3 className="mb-3 text-2xl">
      Flexible Installments
    </h3>
    <p className="text-slate-400">
      Attractive payment plans for investors.
    </p>
  </div>

  <div className="rounded-[32px] bg-[#0B1523] p-8">
    <h3 className="mb-3 text-2xl">
      High ROI
    </h3>
    <p className="text-slate-400">
      Strong rental and resale potential.
    </p>
  </div>

</div>


  </div>

</section>

{/* FINAL CTA */}

<section className="py-24">

  <div className="mx-auto max-w-5xl px-6 text-center">


<h2 className="font-playfair text-6xl">
  Interested In Marvento?
</h2>

<p className="mx-auto mt-6 max-w-3xl text-slate-400">
  Contact a SPEDO advisor and receive the latest prices,
  payment plans, floor plans and available units.
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
  href="https://wa.me/201158070998?text=Hello%20SPEDO%2C%20I%20would%20like%20to%20receive%20the%20Marvento%20brochure."
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