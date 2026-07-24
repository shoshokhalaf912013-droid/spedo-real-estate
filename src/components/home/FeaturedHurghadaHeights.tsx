import Image from "next/image";
import Link from "next/link";

export default function FeaturedHurghadaHeights() {
  return (
    <section className="bg-[#05070D] py-32">

      <div className="mx-auto max-w-[1400px] px-6">

        <div className="mb-16 text-center">

          <span
            className="
            inline-block
            rounded-full
            border
            border-orange-500/30
            bg-orange-500/10
            px-5
            py-2
            text-orange-400
            tracking-[4px]
            uppercase
            "
          >
            New Development
          </span>

          <h2 className="mt-8 text-5xl font-bold md:text-7xl text-white">
            Hurghada Heights
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-slate-400">
            Luxury residential and commercial destination in the heart of
            Hurghada featuring premium architecture, retail experiences,
            modern amenities and outstanding investment opportunities.
          </p>

        </div>

        <div
          className="
          relative
          overflow-hidden
          rounded-[40px]
          border
          border-orange-500/20
          "
        >

          <Image
            src="/projects/hurghada-heights/cover.jpg"
            alt="Hurghada Heights"
            width={2000}
            height={1200}
            className="
            h-[700px]
            w-full
            object-cover
            "
          />

          <div className="absolute inset-0 bg-white/5" />

          <div className="absolute inset-0 flex items-start justify-center pt-16">

            <div className="max-w-4xl text-center">

              <span
                className="
                rounded-full
                border
                border-orange-500/40
                bg-orange-500/10
                px-5
                py-2
                text-orange-300
                tracking-[3px]
                uppercase
                "
              >
                Luxury Community
              </span>

		<h3
		  className="
		  mt-6
 		 text-6xl
 		 md:text-8xl
		  font-bold
		  text-white
		  drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
		  "
		>
                Hurghada Heights
              </h3>

              <p className="mt-8 max-w-xl text-xl leading-9 text-slate-200">
                A premium destination combining luxury residences,
                commercial zones, retail experiences and modern lifestyle
                facilities in one of Hurghada's fastest-growing areas.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <div className="rounded-2xl bg-orange-500 px-6 py-4 font-bold text-white">
                  Prime Location
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white">
                  Flexible Installments
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white">
                  Luxury Lifestyle
                </div>

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/projects/hurghada-heights"
                  className="
                  rounded-2xl
                  bg-white
                  px-10
                  py-5
                  font-bold
                  text-black
                  transition
                  hover:scale-105
                  "
                >
                  Explore Project
                </Link>

                <Link
                  href="https://wa.me/201158070998"
                  className="
                  rounded-2xl
                  border
                  border-white/30
                  bg-white/10
                  backdrop-blur-md
                  px-10
                  py-5
                  font-semibold
                  text-white
                  transition
                  hover:bg-white/20
                  "
                >
                  WhatsApp Advisor
                </Link>

              </div>

            </div>

          </div>

        </div>
	
	{/* PROJECT VIDEO */}

<div className="mt-16">

  <div className="mb-10 text-center">

    <h3 className="text-4xl font-bold text-white">
      Project Video Tour
    </h3>

    <p className="mt-4 text-slate-400">
      Discover Hurghada Heights from above through exclusive aerial footage.
    </p>

  </div>

  <div
    className="
    overflow-hidden
    rounded-[30px]
    border
    border-orange-500/20
    "
  >

    <video
      className="w-full"
      controls
      preload="metadata"
      poster="/projects/hurghada-heights/cover.jpg"
    >
      <source
        src="/projects/hurghada-heights/video.mp4"
        type="video/mp4"
      />
    </video>

  </div>

</div>
	
        {/* PROJECT PREVIEW */}

        <div className="mt-16">

          <div className="mb-10 text-center">

            <h3 className="text-4xl font-bold text-white">
              Project Preview
            </h3>

            <p className="mt-4 text-slate-400">
              Explore selected highlights from Hurghada Heights.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

  {[
    "H_H_1 - Photo",
    "H_H_2 - Photo",
    "H_H_3 - Photo",
    "H_H_4 - Photo",
    "H_H_5 - Photo",
    "H_H_30 - Photo",
    "H_H_7 - Photo",
    "H_H_8 - Photo",
  ].map((img) => (

    <Link
      key={img}
      href="/projects/hurghada-heights"
      className="
      group
      overflow-hidden
      rounded-[30px]
      border
      border-white/10
      "
    >

      <Image
        src={`/projects/hurghada-heights/${img}.jpg`}
        alt={img}
        width={1200}
        height={800}
        className="
        h-[300px]
        w-full
        object-cover
        brightness-110
        contrast-105
        saturate-125
        transition-all
        duration-700
        group-hover:scale-110
        "
      />

    </Link>

  ))}

</div>

<div className="mt-10 text-center">

  <Link
    href="/projects/hurghada-heights"
    className="
    inline-flex
    items-center
    rounded-2xl
    bg-orange-500
    px-8
    py-4
    font-bold
    text-white
    transition
    hover:bg-orange-600
    "
  >
    View Full Gallery
  </Link>

</div>

      </div>

    </div>

  </section>
);
}