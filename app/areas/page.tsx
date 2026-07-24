import Image from "next/image";
import Link from "next/link";

import FloatingHeader from "@/components/header/FloatingHeader";

const areas = [
  {
    name: "Hurghada",
    image: "/areas/hurghada-marina.webp",
    href: "/areas/hurghada",
    description:
      "The tourism capital of the Red Sea with strong rental demand and year-round occupancy.",
  },
  {
    name: "El Gouna",
    image: "/areas/el-gouna-lagoon.webp",
    href: "/areas/el-gouna",
    description:
      "Luxury waterfront lifestyle with marina living and premium communities.",
  },
  {
    name: "Sahl Hasheesh",
    image: "/areas/sahl-hasheesh-beachfront.webp",
    href: "/areas/sahl-hasheesh",
    description:
      "Exclusive beachfront destination with luxury developments.",
  },
  {
    name: "Makadi Bay",
    image: "/areas/makadi-bay-resort.webp",
    href: "/areas/makadi-bay",
    description:
      "Fast-growing destination with attractive investment projects.",
  },
  {
    name: "Soma Bay",
    image: "/areas/soma-bay-golf-marina.webp",
    href: "/areas/soma-bay",
    description:
      "Premium golf, wellness and beachfront investment opportunities.",
  },
];

export default function AreasPage() {
  return (
    <>
      <main className="min-h-screen bg-[#05070D] text-white">

        {/* HERO */}

        <section className="pt-56 pb-20">
          <div className="mx-auto max-w-7xl px-6 text-center">

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
              SPEDO Areas Guide
            </span>

            <h1
              className="
              mt-8
              text-5xl
              md:text-7xl
              font-playfair
              text-[#F97316]
              "
            >
              Explore Red Sea Destinations
            </h1>

            <p
              className="
              mt-6
              max-w-3xl
              mx-auto
              text-slate-300
              text-lg
              "
            >
              Discover the most important investment destinations
              across Hurghada, El Gouna, Sahl Hasheesh,
              Makadi Bay and Soma Bay.
            </p>

          </div>
        </section>

        {/* AREAS GRID */}

        <section className="pb-32">
          <div className="mx-auto max-w-7xl px-6">

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              {areas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  h-[500px]
                  "
                >
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                    "
                  />

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/40
                    to-transparent
                    "
                  />

                  <div
                    className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-8
                    "
                  >
                    <h2
                      className="
                      text-4xl
                      font-playfair
                      text-[#F97316]
                      "
                    >
                      {area.name}
                    </h2>

                    <p
                      className="
                      mt-3
                      text-slate-300
                      text-sm
                      "
                    >
                      {area.description}
                    </p>

                    <div
                      className="
                      mt-6
                      inline-flex
                      items-center
                      text-[#D4AF37]
                      font-semibold
                      "
                    >
                      Explore Area →
                    </div>
                  </div>
                </Link>
              ))}

            </div>

          </div>
        </section>

      </main>
    </>
  );
}