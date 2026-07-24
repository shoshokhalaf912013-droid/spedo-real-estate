import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[900px] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-luxury.jpg"
          alt="Luxury Red Sea Property"
          fill
          priority
          quality={70}
          className="
            object-cover
            object-center
            brightness-125
            contrast-110
            saturate-115
          "
        />
      </div>

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#020B16]/45
          via-[#020B16]/25
          to-[#020B16]/10
        "
      />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-8">

        <div className="grid w-full gap-12 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">

            <span
              className="
                mb-6
                w-fit
                rounded-full
                border
                border-[#FF5A1F]/50
                bg-[#FF5A1F]/10
                px-5
                py-2
                text-sm
                font-medium
                text-[#FF5A1F]
                backdrop-blur-md
              "
            >
              SPEDO Real Estate & Investment
            </span>

	<h1
 	  className="
  	  mb-8
  	  text-6xl
  	  font-bold
  	  leading-[0.9]
  	  !text-[#FFF8F0]
 	   xl:text-[5.5rem]
 	 "
 	 style={{
  	  WebkitTextStroke: "0.8px rgba(2,11,22,0.30)",
 	   textShadow: `
   	   0 2px 4px rgba(0,0,0,0.08),
  	    0 6px 15px rgba(0,0,0,0.10)
 	   `
	  }}
	>
 	 Invest In The
 	 <br />
 	 Red Sea
 	 <br />
 	 Like Never
 	 <br />
	  Before
	</h1>
		<p
		  className="
  		  mb-10
  		  max-w-xl
  		  text-xl
  		  leading-relaxed
  		  text-slate-200
 		 "
		>
		  Discover premium beachfront properties,
		  luxury resorts and carefully selected
 		  investment opportunities across Hurghada,
 		  El Gouna, Makadi Bay, Sahl Hasheesh and
		  Soma Bay with expert local guidance.
		</p>


            <div className="flex flex-wrap gap-4">

              <button
                className="
                  rounded-xl
                  bg-[#FF5A1F]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:scale-105
                  hover:bg-[#FF6B2C]
                  shadow-[0_0_25px_rgba(255,90,31,0.35)]
                "
              >
                Explore Properties
              </button>

              <button
                className="
                  rounded-xl
                  border
                  border-white/20
                  bg-white/5
                  px-8
                  py-4
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition
                  hover:bg-white/10
                "
              >
                Contact Advisor
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="hidden items-center justify-end lg:flex">

            <div
              className="
                w-full
                max-w-lg
                rounded-3xl
                border
                border-[#FF5A1F]/30
                bg-[#07111D]/80
                p-8
                backdrop-blur-xl
                shadow-2xl
              "
            >
		<h3 className="mb-6 text-2xl font-semibold text-[#FF5A1F]">
 		 Request Investment Consultation
		</h3>

		<div className="space-y-3">

		  <input
		    placeholder="Full Name"
 		   className="w-full rounded-xl bg-white/10 p-4 text-white outline-none"
 		 />

 		 <input
  		  placeholder="WhatsApp Number"
  		  className="w-full rounded-xl bg-white/10 p-4 text-white outline-none"
 		 />

		  <select className="w-full rounded-xl bg-white/10 p-4 text-white">
  		  <option>Preferred Area</option>
  		  <option>Hurghada</option>
   		 <option>El Gouna</option>
   		 <option>Sahl Hasheesh</option>
  		  <option>Makadi Bay</option>
  		  <option>Soma Bay</option>
 		 </select>

 		 <select className="w-full rounded-xl bg-white/10 p-4 text-white">
 		   <option>Property Type</option>
  		  <option>Apartment</option>
  		  <option>Studio</option>
  		  <option>Villa</option>
  		  <option>Penthouse</option>
  		  <option>Chalet</option>
 		 </select>

  		<select className="w-full rounded-xl bg-white/10 p-4 text-white">
 		   <option>Budget Range</option>
  		  <option>Under €50,000</option>
  		  <option>€50,000 - €100,000</option>
  		  <option>€100,000 - €200,000</option>
  		  <option>€200,000+</option>
 		 </select>

 		 <select className="w-full rounded-xl bg-white/10 p-4 text-white">
		    <option>Buying Purpose</option>
 		   <option>Investment</option>
  		  <option>Holiday Home</option>
  		  <option>Rental Income</option>
  		  <option>Permanent Living</option>
 		 </select>

 		 <button
 		   className="
  		    w-full
    		  rounded-xl
   		   bg-[#FF5A1F]
   		   py-4
   		   font-semibold
   		   text-white
   		   transition
   		   hover:bg-[#FF6B2C]
   		   shadow-[0_0_20px_rgba(255,90,31,0.30)]
   		 "
 		 >
 		   WhatsApp Consultation
 		 </button>

		  </div>

	       </div>

	    </div>

	</div>

      </div>

		{/* Bottom Stats */}
		<div
		  className="
 		   absolute
  		  bottom-2
  		  left-1/2
   		  z-30
   		  hidden
                  w-[92%]
 		  max-w-6xl
   		 -translate-x-1/2
   		 rounded-3xl
  		  border
  		  border-[#FF5A1F]/20
  		  bg-black/35
  		  backdrop-blur-xl
  		  lg:block
 		 "
		>
		  <div className="grid grid-cols-5 py-6 text-center">

  		  <div>
  		    <div className="text-4xl font-bold text-[#FF5A1F]">500+</div>
   		   <div className="text-white">Properties</div>
   		 </div>

  		  <div>
    		  <div className="text-4xl font-bold text-[#FF5A1F]">5</div>
   		   <div className="text-white">Premium Areas</div>
  		  </div>

  		  <div>
   		   <div className="text-4xl font-bold text-[#FF5A1F]">10+</div>
    		  <div className="text-white">Developers</div>
   		 </div>

  		  <div>
   		 <div className="text-4xl font-bold text-[#FF5A1F]">15+</div>
    	  <div className="text-white">Years Experience</div>
   	 </div>

   	 <div>
   	   <div className="text-4xl font-bold text-[#FF5A1F]">24/7</div>
   	   <div className="text-white">Support</div>
   	 </div>

	  </div>
	
	</div>

	</section>
      );
    }

