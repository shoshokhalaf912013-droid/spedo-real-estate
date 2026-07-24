import {
  MapPinned,
  Globe,
  Building2,
  BadgeDollarSign,
  Handshake,
  Rocket,
} from "lucide-react";

export default function WhySpedo() {
  const features = [
    {
      icon: MapPinned,
      title: "Local Market Knowledge",
      description:
        "We understand every Red Sea area, developer reputation, pricing trends and future growth potential.",
    },
    {
      icon: Globe,
      title: "International Buyer Support",
      description:
        "Guidance for Egyptian, Russian, German and European buyers from inquiry to ownership.",
    },
    {
      icon: Building2,
      title: "Red Sea Area Specialists",
      description:
        "Hurghada, El Gouna, Makadi, Sahl Hasheesh and Soma Bay expertise.",
    },
    {
      icon: BadgeDollarSign,
      title: "Compare & Save Time",
      description:
        "Compare projects, locations, payment plans and prices without visiting dozens of websites.",
    },
    {
      icon: Handshake,
      title: "Trusted Developer Network",
      description:
        "Direct access to reputable developers, exclusive offers and updated availability.",
    },
    {
      icon: Rocket,
      title: "Faster Property Selection",
      description:
        "Receive a curated shortlist based on your budget and goals instead of endless searching.",
    },
  ];

  return (
    <section
      className="
      py-28
      bg-gradient-to-b
      from-[#070B14]
      via-[#141B33]
      to-[#241C4D]
    "
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">

          <span
            className="
            mb-6
            inline-block
            rounded-full
            border
            border-[#F97316]/30
            bg-black/20
            px-6
            py-2
            text-sm
            tracking-[3px]
            text-[#F97316]
            backdrop-blur-md
          "
          >
            WHY SPEDO
          </span>

          <h2
            className="
            mb-6
            text-5xl
            font-bold
            text-[#F8F4EA]
            md:text-6xl
          "
          >
            Why Investors Choose
            <span className="text-[#D4AF37]"> SPEDO</span>
          </h2>

          <p
            className="
            mx-auto
            max-w-3xl
            text-xl
            leading-relaxed
            text-[#B9C2D0]
          "
          >
            Local expertise, international support and direct access
            to premium Red Sea investment opportunities.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#D4AF37]/15
                bg-[#05070D]
                p-8
                transition-all
                duration-500
                hover:-translate-y-4
                hover:border-[#D4AF37]/50
                hover:shadow-[0_0_70px_rgba(212,175,55,0.22)]
              "
              >

                <div
                  className="
                  absolute
                  inset-0
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                  bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_45%)]
                "
                />

                <div
                  className="
                  relative
                  z-10
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#D4AF37]/20
                  bg-[#0D1420]
                "
                >
                  <Icon
                    size={30}
                    className="
                    text-[#D4AF37]
                    transition-all
                    duration-500
                    group-hover:scale-110
                  "
                  />
                </div>

                <h3
                  className="
                  mb-4
                  text-2xl
                  font-bold
                  text-[#F5E6B8]
                "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  leading-8
                  text-[#AEB7C7]
                "
                >
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

        <div
          className="
          mt-16
          rounded-[28px]
          border
          border-[#D4AF37]/15
          bg-[#05070D]
          p-7
        "
        >
          <div
            className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-8
            text-center
            text-[#F5E6B8]
            font-medium
          "
          >
            <span>✔ Local Team in Hurghada</span>
            <span>✔ Verified Developers</span>
            <span>✔ Russian & European Support</span>
            <span>✔ WhatsApp First Communication</span>
          </div>
        </div>

      </div>
    </section>
  );
}