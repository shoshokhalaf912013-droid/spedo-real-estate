import Link from "next/link";

export default function FloatingHeader() {

  return (

    <header className="fixed top-4 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2">

      <div
        className="
          flex
          items-center
          justify-between
          rounded-full
          border
          border-[#d4af37]/30
          bg-black/85
          px-6
          py-2
          backdrop-blur-md
        "
      >

        {/* LOGO */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <img
            src="/images/logo/spedo-logo.png"
            alt="SPEDO"
            className="h-12 w-auto"
          />

          <div>

            <div className="text-xl font-bold text-white">
              SPEDO
            </div>

            <div className="text-[11px] tracking-[3px] text-[#d4af37]">
              REAL ESTATE
            </div>

          </div>

        </Link>

        {/* NAVIGATION */}

        <nav
          className="
            hidden
            items-center
            gap-8
            text-white
            lg:flex
          "
        >

          <Link
            href="/"
            className="transition hover:text-[#F97316]"
          >
            Home
          </Link>

          <Link
            href="/residential"
            className="transition hover:text-[#D4AF37]"
          >
            Residential
          </Link>

          <Link
            href="/commercial"
            className="transition hover:text-[#D4AF37]"
          >
            Commercial
          </Link>

          <Link
            href="/projects"
            className="transition hover:text-[#F97316]"
          >
            Projects
          </Link>

          <Link
            href="/invest"
            className="transition hover:text-[#F97316]"
          >
            Invest
          </Link>

          <Link
            href="/areas"
            className="transition hover:text-[#F97316]"
          >
            Areas
          </Link>

          <Link
            href="/property-matcher"
            className="transition hover:text-[#F97316]"
          >
            AI Match
          </Link>

          <Link
            href="/faq"
            className="transition hover:text-[#F97316]"
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-[#F97316]"
          >
            Contact
          </Link>

        </nav>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-4">

          <select
            className="
              bg-transparent
              text-white
              outline-none
            "
          >
            <option value="en">
              EN
            </option>

            <option value="ar">
              AR
            </option>

            <option value="ru">
              RU
            </option>

            <option value="de">
              DE
            </option>

          </select>

          <button
            className="
              rounded-full
              bg-[#d4af37]
              px-7
              py-3
              font-semibold
              text-black
              transition
              hover:brightness-110
            "
          >
            WhatsApp
          </button>

        </div>

      </div>

    </header>

  );

}