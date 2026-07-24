export default function RedSeaDestinations() {
  const destinations = [
    {
      title: "Hurghada",
      image: "/images/destinations/hurghada.jpg",
      description:
        "The tourism capital of the Red Sea with strong rental demand and year-round occupancy.",
      large: true,
    },
    {
      title: "El Gouna",
      image: "/images/destinations/elgouna.jpg",
      description:
        "Luxury waterfront lifestyle with marina living and premium communities.",
    },
    {
      title: "Sahl Hasheesh",
      image: "/images/destinations/sahlhasheesh.jpg",
      description:
        "Exclusive beachfront destination with luxury developments.",
    },
    {
      title: "Makadi Bay",
      image: "/images/destinations/makadi.jpg",
      description:
        "Fast-growing family destination with attractive investment prices.",
    },
    {
      title: "Soma Bay",
      image: "/images/destinations/somabay.jpg",
      description:
        "Premium golf, wellness and beachfront investment opportunities.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#05070D] py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070D] via-[#08111F] to-[#05070D]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="mb-16 text-center">
          <span
            className="
            inline-block
            rounded-full
            border
            border-[#F97316]/30
            px-5
            py-2
            text-sm
	    bg-[#F97316]/10
            text-[#F97316]
          "
          >
            RED SEA DESTINATIONS
          </span>

          <h2
            className="
            mt-6
            text-4xl
            font-bold
            text-white
            md:text-6xl
          "
          >
            Explore The
            <span className="text-[#F97316]">
              {" "}
              Red Sea{" "}
            </span>
            Investment Map
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Discover the most promising locations before choosing
            the perfect project for your investment goals.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Large Card */}

          <div
            className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            lg:row-span-2
            min-h-[650px]
          "
          >
            <img
              src={destinations[0].image}
              alt={destinations[0].title}
              className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition
              duration-700
              group-hover:scale-110
            "
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-0 p-8">
              <h3 className="text-5xl font-bold text-white">
                Hurghada
              </h3>

              <p className="mt-4 text-slate-300">
                The tourism capital of the Red Sea with strong
                rental demand and year-round occupancy.
              </p>

              <div className="mt-6 flex gap-2 flex-wrap">
                <span className="rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-semibold text-black">
                  High Demand
                </span>

                <span className="rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-semibold text-black">
                  Tourism Hub
                </span>
              </div>
            </div>
          </div>

          {/* Small Cards */}

          {destinations.slice(1).map((item) => (
            <div
              key={item.title}
              className="
              group
              relative
              overflow-hidden
              rounded-[28px]
              min-h-[310px]
            "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition
                duration-700
                group-hover:scale-110
              "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-0 p-6">
                <h3 className="text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-300">
                  {item.description}
                </p>

                <div className="mt-4">
                  <span className="text-[#F97316] font-semibold">
                    Explore Area →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}