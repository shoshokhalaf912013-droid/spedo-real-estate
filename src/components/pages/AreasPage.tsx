import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    name: "Hurghada",
    image: "/destinations/hurghada.jpg",
    description:
      "The vibrant heart of the Red Sea with strong rental demand and year-round tourism.",
  },
  {
    name: "El Gouna",
    image: "/destinations/el-gouna.jpg",
    description:
      "Luxury marina lifestyle with premium communities and high-end properties.",
  },
  {
    name: "Sahl Hasheesh",
    image: "/destinations/sahl-hasheesh.jpg",
    description:
      "Beachfront luxury destination with strong appreciation potential.",
  },
  {
    name: "Makadi Bay",
    image: "/destinations/makadi.jpg",
    description:
      "Family-friendly resorts and affordable investment opportunities.",
  },
  {
    name: "Soma Bay",
    image: "/destinations/soma-bay.jpg",
    description:
      "Exclusive luxury destination with golf, marina and premium resorts.",
  },
];

export default function AreasPage() {
  return (
    <main className="bg-[#05070D] text-white">

      {/* HERO */}

      <section className="relative py-32 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-[#07111D] to-[#05070D]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">

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
            RED SEA DESTINATIONS
          </span>

          <h1
            className="
            mt-8
            font-playfair
            text-[#F97316]
            text-5xl
            md:text-7xl
            "
          >
            Explore Egypt's
            Red Sea Destinations
          </h1>

          <p
            className="
            mx-auto
            mt-8
            max-w-3xl
            text-xl
            text-slate-300
            leading-9
            "
          >
            Discover the most attractive areas for
            investment, holiday homes and permanent living
            along Egypt's stunning Red Sea coast.
          </p>

        </div>

      </section>

      {/* DESTINATIONS */}

      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 lg:grid-cols-3">

            {destinations.map((destination) => (
              <div
                key={destination.name}
                className="
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-[#0B1523]
                transition
                hover:-translate-y-2
                "
              >
                <Image
                  src={destination.image}
                  alt={destination.name}
                  width={1200}
                  height={800}
                  className="
                  h-[260px]
                  w-full
                  object-cover
                  "
                />

                <div className="p-8">

                  <h2 className="text-3xl font-bold text-[#D4AF37]">
                    {destination.name}
                  </h2>

                  <p className="mt-4 text-slate-400 leading-8">
                    {destination.description}
                  </p>

                  <button
                    className="
                    mt-6
                    rounded-2xl
                    bg-[#F97316]
                    px-6
                    py-3
                    font-semibold
                    "
                  >
                    Explore Area
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* COMPARISON */}

      <section className="py-24 bg-[#07111D]">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center mb-16">

            <span className="text-[#D4AF37] uppercase tracking-[4px]">
              Area Comparison
            </span>

            <h2 className="mt-6 text-5xl font-playfair">
              Compare Destinations
            </h2>

          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10">

            <table className="w-full">

              <thead className="bg-[#0B1523]">

                <tr>

                  <th className="p-6 text-left">Area</th>
                  <th className="p-6 text-left">Investment</th>
                  <th className="p-6 text-left">Lifestyle</th>
                  <th className="p-6 text-left">Rental Demand</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t border-white/10">
                  <td className="p-6">Hurghada</td>
                  <td className="p-6">★★★★☆</td>
                  <td className="p-6">★★★★☆</td>
                  <td className="p-6">★★★★★</td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-6">El Gouna</td>
                  <td className="p-6">★★★★★</td>
                  <td className="p-6">★★★★★</td>
                  <td className="p-6">★★★★☆</td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-6">Sahl Hasheesh</td>
                  <td className="p-6">★★★★★</td>
                  <td className="p-6">★★★★★</td>
                  <td className="p-6">★★★★☆</td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-6">Makadi Bay</td>
                  <td className="p-6">★★★★☆</td>
                  <td className="p-6">★★★★☆</td>
                  <td className="p-6">★★★★☆</td>
                </tr>

                <tr className="border-t border-white/10">
                  <td className="p-6">Soma Bay</td>
                  <td className="p-6">★★★★★</td>
                  <td className="p-6">★★★★★</td>
                  <td className="p-6">★★★☆☆</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>

    </main>
  );
}