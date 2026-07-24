import Image from "next/image";
import Link from "next/link";

export default function FeaturedMarkResort() {
  return (
    <section className="bg-[#05070D] py-32">

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
            Mark Resort
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-slate-400">
            Contemporary resort-style living on Hurghada Airport Road,
            combining modern architecture, premium amenities and
            exceptional investment opportunities.
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
            src="/projects/mark-resort/hero.png"
            alt="Mark Resort"
            width={2000}
            height={1200}
            className="
            h-[700px]
            w-full
            object-cover
            brightness-110
            contrast-105
            saturate-110
            "
          />

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/45
            via-black/15
            to-transparent
            "
          />

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
                New Development
              </span>

              <h3
                className="
                mt-8
                text-5xl
                md:text-7xl
                font-bold
                text-[#F97316]
                "
              >
                Mark Resort
              </h3>

              <p className="mt-8 max-w-xl text-xl leading-9 text-slate-200">
                A contemporary residential and investment destination
                located on Hurghada Airport Road, offering resort
                facilities, modern design, high-quality finishes and
                attractive investment potential.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <div className="rounded-2xl bg-orange-500 px-6 py-4 font-bold text-white">
                  Airport Road
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white">
                  Resort Facilities
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white">
                  Investment Opportunity
                </div>

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/projects/mark-resort"
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

         {/* PROJECT VIDEO */}

<div className="mt-16">

  <div className="mb-10 text-center">

    <h3 className="text-4xl font-bold text-white">
      Project Video Tour
    </h3>

    <p className="mt-4 text-slate-400">
      Discover Mark Resort through exclusive aerial footage and project highlights.
    </p>

  </div>

  <div
    className="
    overflow-hidden
    rounded-[30px]
    border
    border-orange-500/20
    "
  >

    <video
      className="w-full"
      controls
      preload="metadata"
      poster="/projects/mark-resort/hero.png"
    >
      <source
        src="/projects/mark-resort/video.mp4"
        type="video/mp4"
      />
    </video>

  </div>

</div>

             {/* PROJECT PREVIEW */}

       <div className="mt-16">

       <div className="mb-10 text-center">

       <h3 className="text-4xl font-bold text-white">
         Project Preview
        </h3>

        <p className="mt-4 text-slate-400">
         Explore selected highlights from Mark Resort.
        </p>

      </div>

	<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

 	 {[1,2,3,4,5,6,7,8].map((img) => (
   	 <Link
   	   key={img}
   	   href="/projects/mark-resort"
   	   className="
    	  group
    	  overflow-hidden
    	  rounded-[30px]
     	 "
   	 >
    	  <Image
     	   src={`/projects/mark-resort/gallery-${img}.png`}
     	   alt={`Mark Resort ${img}`}
     	   width={1200}
      	  height={800}
      	  className="
      	  h-[300px]
       	 w-full
       	 object-cover
       	 transition-all
       	 duration-700
      	  group-hover:scale-110
      	  "
    	  />
   	 </Link>
 	 ))}

     </div>

          <div className="mt-10 text-center">

            <Link
              href="/projects/mark-resort"
              className="
              inline-flex
              items-center
              rounded-2xl
              bg-orange-500
              px-8
              py-4
              font-bold
              text-white
              transition
              hover:bg-orange-600
              "
            >
              View Full Gallery
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}