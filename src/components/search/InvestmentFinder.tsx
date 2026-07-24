"use client";

import { useState } from "react";

export default function InvestmentFinder() {

const [area, setArea] = useState("");

const [propertyType, setPropertyType] = useState("");

const [budget, setBudget] = useState("");

const whatsappNumber = "201158070998";

const handleSearch = () => {


const message = `Hello SPEDO Team,


I'm interested in investing in the Red Sea.

Area: ${area || "Not Selected"}
Property Type: ${propertyType || "Not Selected"}
Budget: ${budget || "Not Selected"}

Please send suitable opportunities.`;


window.open(
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
  "_blank"
);

};

return (

<section
  className="
  relative
  overflow-hidden
  bg-[#05070D]
  py-32
  border-y
  border-[#D4AF37]/10
"
>

  {/* GOLD GLOW */}
  <div
    className="
    absolute
    left-[-180px]
    top-[50px]
    h-[550px]
    w-[550px]
    rounded-full
    bg-[#D4AF37]/10
    blur-[180px]
  "
  />

  {/* BLUE GLOW */}
  <div
    className="
    absolute
    right-[-180px]
    bottom-0
    h-[550px]
    w-[550px]
    rounded-full
    bg-blue-500/10
    blur-[180px]
  "
  />

  <div className="relative z-10 mx-auto max-w-[1400px] px-6">

    <div
      className="
      grid
      items-center
      gap-20
      lg:grid-cols-[1.25fr_0.85fr]
    "
    >

      {/* LEFT */}

      <div>

        <span
          className="
          inline-flex
          items-center
          rounded-full
          border
          border-[#D4AF37]/30
          bg-[#D4AF37]/5
          px-5
          py-2
          text-sm
          font-medium
          tracking-wide
          text-[#D4AF37]
        "
        >
          INVESTMENT FINDER
        </span>

        <h2
          className="
          mt-6
          text-5xl
          font-bold
          leading-tight
          text-white
          xl:text-7xl
        "
        >
          Find The Right Property
          <br />
          For Your
          <br />
          <span className="text-[#D4AF37]">
            Investment Goals
          </span>
        </h2>

        <p
          className="
          mt-8
          max-w-2xl
          text-lg
          leading-relaxed
          text-slate-300
        "
        >
          Tell us your investment preferences and our advisors
          will guide you directly to the most suitable
          opportunities across Hurghada, El Gouna,
          Sahl Hasheesh, Makadi Bay and Soma Bay.
        </p>

        <div className="mt-12 space-y-5 text-lg text-slate-300">

          <div className="flex items-center gap-3">
            <span className="text-[#D4AF37] text-xl">✓</span>
            <span>
              Direct access to verified Red Sea developers.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#D4AF37] text-xl">✓</span>
            <span>
              Personalized property shortlist based on your budget.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#D4AF37] text-xl">✓</span>
            <span>
              ROI analysis and investment guidance.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#D4AF37] text-xl">✓</span>
            <span>
              Dedicated advisors in Egypt, Germany and Slovakia.
            </span>
          </div>

        </div>

      </div>

      {/* RIGHT FORM */}

      <div
        className="
        rounded-[36px]
        border
        border-[#D4AF37]/15
        bg-gradient-to-b
        from-[#101827]
        to-[#0A101A]
        p-8
        shadow-[0_25px_80px_rgba(0,0,0,0.45)]
      "
      >

        <div className="mb-8">

          <h3 className="text-3xl font-bold text-white">
            Get Personalized Matches
          </h3>

          <p className="mt-3 text-slate-400">
            Complete the form and receive tailored investment
            opportunities directly on WhatsApp.
          </p>

        </div>

        <div className="space-y-5">

          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="
            w-full
            rounded-2xl
            border
            border-[#D4AF37]/15
            bg-[#121A26]
            p-4
            text-white
            outline-none
          "
          >
            <option value="">Select Area</option>
            <option>Hurghada</option>
            <option>El Gouna</option>
            <option>Sahl Hasheesh</option>
            <option>Makadi Bay</option>
            <option>Soma Bay</option>
          </select>

          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="
            w-full
            rounded-2xl
            border
            border-[#D4AF37]/15
            bg-[#121A26]
            p-4
            text-white
            outline-none
          "
          >
            <option value="">Property Type</option>
            <option>Apartment</option>
            <option>Studio</option>
            <option>Villa</option>
            <option>Penthouse</option>
            <option>Chalet</option>
          </select>

          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="
            w-full
            rounded-2xl
            border
            border-[#D4AF37]/15
            bg-[#121A26]
            p-4
            text-white
            outline-none
          "
          >
            <option value="">Budget Range</option>
            <option>€50,000+</option>
            <option>€100,000+</option>
            <option>€200,000+</option>
            <option>€500,000+</option>
          </select>

          <button
            onClick={handleSearch}
            className="
            w-full
            rounded-2xl
            bg-gradient-to-r
            from-[#D4AF37]
            to-[#E8C86A]
            py-4
            font-bold
            text-black
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]
          "
          >
            Get My Matches
          </button>

          <p className="text-center text-sm text-slate-500">
            No spam. Only relevant investment opportunities.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


);

}
