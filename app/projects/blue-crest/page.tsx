import Image from "next/image";
import Link from "next/link";
import FloatingHeader from "@/components/header/FloatingHeader";

export default function BlueCrestPage() {

  const excludedImages = [
    6,
    9,
    10,
    11,
    15,
    21,
    22,
    23,
    24,
    25,
    26,
  ];

  return (
    <>

      <main className="bg-[#05070D] text-white">

	{/* HERO */}

<section className="relative h-[90vh] overflow-hidden">

 	<Image
 	 src="/projects/blue-crest/gallery-36.jpg"
 	 alt="Blue Crest"
	  width={2000}
 	 height={1200}
 	 className="h-[700px] w-full object-cover"
	/>
	<div className="absolute inset-0 bg-black/10" />

	<div
	  className="
 	 absolute
 	 inset-0
 	 bg-gradient-to-r
 	 from-black/35
 	 via-black/10
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
        FEATURED DEVELOPMENT
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
        Blue Crest
      </h1>

      <p
        className="
        mt-8
        max-w-2xl
        text-xl
        text-slate-200
      "
      >
        Luxury resort living, crystal lagoons,
        premium amenities and contemporary architecture
        in one of Hurghada's most desirable locations.
      </p>

      <p
        className="
        mt-6
        max-w-2xl
        leading-8
        text-slate-300
      "
      >
        Blue Crest delivers a unique lifestyle experience
        combining elegant design, landscaped surroundings,
        leisure facilities and premium residential living
        in the heart of Hurghada.
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
                "
                >
                  A New Landmark In Hurghada
                </h2>

                <p className="mt-8 text-slate-400 leading-8">
                  Blue Crest combines modern architecture,
                  resort-style living, landscaped spaces,
                  premium facilities and attractive investment
                  opportunities in one destination.
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
                    Resort
                  </div>
                  <p className="mt-3 text-slate-400">
                    Lifestyle Living
                  </p>
                </div>

                <div className="rounded-3xl border border-orange-500/20 bg-[#0B1523] p-8">
                  <div className="text-4xl font-bold text-orange-400">
                    Lagoon
                  </div>
                  <p className="mt-3 text-slate-400">
                    Premium Views
                  </p>
                </div>

                <div className="rounded-3xl border border-orange-500/20 bg-[#0B1523] p-8">
                  <div className="text-4xl font-bold text-orange-400">
                    Pools
                  </div>
                  <p className="mt-3 text-slate-400">
                    Leisure Facilities
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
        Explore Blue Crest From Above
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-slate-400">
        Aerial footage showcasing Blue Crest, its crystal lagoons and premium lifestyle.
      </p>

    </div>

    <div className="overflow-hidden rounded-[32px] border border-orange-500/20">

      <video
        controls
        playsInline
        className="w-full"
        poster="/projects/blue-crest/hero.jpg"
      >
        <source
          src="/projects/blue-crest/video.mp4"
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
                Why Investors Choose Blue Crest
              </h2>

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-3xl border border-orange-500/10 bg-[#0B1523] p-8">
                <div className="mb-4 text-5xl">🌊</div>
                <h3 className="mb-4 text-2xl font-semibold">
                  Crystal Lagoon Living
                </h3>
                <p className="text-slate-400">
                  Experience resort-style living with stunning lagoon views.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/10 bg-[#0B1523] p-8">
                <div className="mb-4 text-5xl">🏖️</div>
                <h3 className="mb-4 text-2xl font-semibold">
                  Luxury Resort Lifestyle
                </h3>
                <p className="text-slate-400">
                  Premium pools, gardens and modern leisure facilities.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/10 bg-[#0B1523] p-8">
                <div className="mb-4 text-5xl">📍</div>
                <h3 className="mb-4 text-2xl font-semibold">
                  Prime Hurghada Location
                </h3>
                <p className="text-slate-400">
                  Easy access to beaches, services and attractions.
                </p>
              </div>

              <div className="rounded-3xl border border-orange-500/10 bg-[#0B1523] p-8">
                <div className="mb-4 text-5xl">📈</div>
                <h3 className="mb-4 text-2xl font-semibold">
                  Strong Investment Value
                </h3>
                <p className="text-slate-400">
                  Attractive rental demand and long-term growth potential.
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
 		 Explore Blue Crest Lifestyle
		</h2>
		

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

		{Array.from({ length: 47 }, (_, i) => i + 1)
		  .filter(img => !excludedImages.includes(img))
		  .map((img) => (
 		   <Image
  		    key={img}
   		   src={`/projects/blue-crest/gallery-${img}.jpg`}
   		   alt={`Blue Crest ${img}`}
   		   width={1200}
   		   height={800}
   		   className="h-[350px] w-full rounded-[32px] object-cover transition-all duration-500 hover:scale-[1.02]"
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

      <h2 className="mt-6 font-playfair text-5xl">
        Resort Living Every Day
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-slate-400">
        Blue Crest combines elegant architecture,
        landscaped courtyards, swimming pools,
        wellness facilities and premium services
        designed for comfortable everyday living.
      </p>

    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-[32px] bg-[#0B1523] p-8">

        <h3 className="mb-3 text-2xl">
          Swimming Pools
        </h3>

        <p className="text-slate-400">
          Resort-style pools and relaxation areas.
        </p>

      </div>

      <div className="rounded-[32px] bg-[#0B1523] p-8">

        <h3 className="mb-3 text-2xl">
          Spa & Wellness
        </h3>

        <p className="text-slate-400">
          Wellness facilities and peaceful spaces.
        </p>

      </div>

      <div className="rounded-[32px] bg-[#0B1523] p-8">

        <h3 className="mb-3 text-2xl">
          Concierge Services
        </h3>

        <p className="text-slate-400">
          Reception and property management support.
        </p>

      </div>

      <div className="rounded-[32px] bg-[#0B1523] p-8">

        <h3 className="mb-3 text-2xl">
          Landscaped Areas
        </h3>

        <p className="text-slate-400">
          Green spaces and elegant outdoor design.
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
        Why Blue Crest?
      </h2>

    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-[32px] bg-[#0B1523] p-8">

        <h3 className="mb-3 text-2xl">
          Crystal Lagoon
        </h3>

        <p className="text-slate-400">
          Stunning lagoon views and premium waterfront atmosphere.
        </p>

      </div>

      <div className="rounded-[32px] bg-[#0B1523] p-8">

        <h3 className="mb-3 text-2xl">
          Resort Facilities
        </h3>

        <p className="text-slate-400">
          Pools, wellness areas and leisure amenities.
        </p>

      </div>

      <div className="rounded-[32px] bg-[#0B1523] p-8">

        <h3 className="mb-3 text-2xl">
          Prime Location
        </h3>

        <p className="text-slate-400">
          Strategic position close to beaches, services and attractions.
        </p>

      </div>

      <div className="rounded-[32px] bg-[#0B1523] p-8">

        <h3 className="mb-3 text-2xl">
          Investment Value
        </h3>

        <p className="text-slate-400">
          Attractive rental demand and long-term capital appreciation potential.
        </p>

      </div>

    </div>

  </div>

</section>

{/* FINAL CTA */}

<section className="py-24">

  <div className="mx-auto max-w-5xl px-6 text-center">

    <h2 className="font-playfair text-6xl">
      Discover Blue Crest Investment Opportunities
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-slate-400">
	Speak with a SPEDO investment advisor and receive
	the latest availability, floor plans, payment options
	and investment insights for Blue Crest..
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
        href="https://wa.me/201158070998?text=Hello%20SPEDO%2C%20I%20would%20like%20to%20receive%20the%20Blue%20Crest%20brochure."
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

