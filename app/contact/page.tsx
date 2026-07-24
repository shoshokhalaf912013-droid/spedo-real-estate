export default function ContactPage() {
return ( <main className="bg-[#05070D] text-white">

  {/* Hero Section */}

  <section className="relative py-32">

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
        CONTACT SPEDO
      </span>

      <h1 className="mt-8 text-5xl font-bold md:text-7xl">
        Let's Discuss Your
        <span className="text-[#D4AF37]">
          {" "}Investment Goals
        </span>
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400">
        Our advisors are available to help you discover
        the best investment opportunities across Egypt's
        Red Sea coast.
      </p>

    </div>

  </section>

  {/* Contact Methods */}

  <section className="pb-24">

    <div className="mx-auto max-w-7xl px-6">

      <div className="grid gap-8 lg:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-[#0B1A2A] p-8">

          <h3 className="mb-6 text-2xl font-bold text-[#D4AF37]">
            WhatsApp & Phone
          </h3>

          <div className="space-y-4 text-slate-300">

            <a
              href="https://wa.me/201158070998"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-[#D4AF37]"
            >
              +20 115 580 7098
            </a>

            <p>+20 150 590 6559</p>

            <p>+20 159 990 9283</p>

            <p>+421 949 519 800</p>

            <p>+49 162 833 3610</p>

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0B1A2A] p-8">

          <h3 className="mb-6 text-2xl font-bold text-[#D4AF37]">
            Social Media
          </h3>

          <div className="space-y-4 text-slate-300">

            <a
              href="https://www.facebook.com/share/192ggywwVe/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-[#D4AF37]"
            >
              Facebook Page
            </a>

            <a
              href="https://t.me/SpedoHurghada"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-[#D4AF37]"
            >
              Telegram Channel
            </a>

            <a
              href="https://youtube.com/@spedorealestate"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-[#D4AF37]"
            >
              YouTube Channel
            </a>

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0B1A2A] p-8">

          <h3 className="mb-6 text-2xl font-bold text-[#D4AF37]">
            Email
          </h3>

          <p className="text-slate-300">
            info@spedorealestate.com
          </p>

          <div className="mt-8">

            <a
              href="https://wa.me/201158070998"
              target="_blank"
              rel="noreferrer"
              className="
              inline-block
              rounded-xl
              bg-[#D4AF37]
              px-6
              py-3
              font-semibold
              text-black
            "
            >
              Contact Advisor
            </a>

          </div>

        </div>

      </div>

    </div>

  </section>

  {/* Offices */}

  <section className="bg-[#07111D] py-24">

    <div className="mx-auto max-w-7xl px-6">

      <div className="mb-16 text-center">

        <h2 className="text-5xl font-bold">
          Our Offices
        </h2>

        <p className="mt-6 text-slate-400">
          Serving investors across Egypt and Europe.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-[#0B1A2A] p-8">

          <h3 className="mb-5 text-2xl font-bold text-[#D4AF37]">
            Egypt Office
          </h3>

          <p className="leading-8 text-slate-400">
            Old Kawsar
            <br />
            Behind Tourist Police
            <br />
            Near Ahmed Nageh Pharmacy
            <br />
            Hurghada
            <br />
            Egypt
          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0B1A2A] p-8">

          <h3 className="mb-5 text-2xl font-bold text-[#D4AF37]">
            Germany Office
          </h3>

          <p className="leading-8 text-slate-400">
            Günzburger Straße 18
            <br />
            89347 Bubesheim
            <br />
            Bavaria
            <br />
            Germany
          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0B1A2A] p-8">

          <h3 className="mb-5 text-2xl font-bold text-[#D4AF37]">
            Slovakia Office
          </h3>

          <p className="leading-8 text-slate-400">
            Travel Agency L-Tomi
            <br />
            Baštová 4
            <br />
            04001 Košice
            <br />
            Slovakia
          </p>

        </div>

      </div>

    </div>

  </section>

  {/* Final CTA */}

  <section className="py-24">

    <div className="mx-auto max-w-5xl px-6 text-center">

      <h2 className="text-5xl font-bold">
        Ready To Invest?
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-slate-400">
        Connect directly with a SPEDO advisor and receive
        carefully selected investment opportunities.
      </p>

      <a
        href="https://wa.me/201158070998"
        target="_blank"
        rel="noreferrer"
        className="
        mt-10
        inline-block
        rounded-2xl
        bg-[#D4AF37]
        px-10
        py-5
        font-bold
        text-black
        transition-all
        duration-300
        hover:scale-105
        "
      >
        Chat On WhatsApp
      </a>

    </div>

  </section>

</main>

);
}
