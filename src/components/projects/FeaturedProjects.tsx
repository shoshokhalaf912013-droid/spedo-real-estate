import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjects() {
return ( <section className="bg-[#07111D] py-32">


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
        Featured Development
      </span>

      <h2 className="mt-8 text-5xl font-bold md:text-7xl text-white">
        Discover Hurghada's
        <span className="text-orange-400">
          {" "}Newest Landmark
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-slate-400">
        Premium investment opportunities with modern architecture,
        hospitality services, commercial areas and flexible payment plans.
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
        src="/marvento/hero.jpeg"
        alt="Marvento"
        width={2000}
        height={1200}
        className="
        h-[700px]
        w-full
        object-cover
        "
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-3xl px-12">

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
            Featured Development
          </span>

          <h3
            className="
            mt-8
            text-5xl
            md:text-7xl
            font-extrabold
            bg-gradient-to-r
            from-orange-700
            via-orange-500
            to-amber-300
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_40px_rgba(249,115,22,0.45)]
            "
          >
            Marvento
          </h3>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-200">
            One of Hurghada's most anticipated mixed-use developments
            featuring modern residences, commercial spaces,
            hospitality services and flexible investment opportunities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <div className="rounded-2xl bg-orange-500 px-6 py-4 font-bold text-white">
              Starting From €51,000
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white">
              10% Down Payment
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white">
              Delivery 2027
            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/Projects/marvento"
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

  </div>

</section>


);
}
