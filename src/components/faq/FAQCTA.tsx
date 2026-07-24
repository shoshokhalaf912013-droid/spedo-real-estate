"use client";

const features = [

    {
        icon: "✓",
        title: "Verified Developers",
        description: "We partner with trusted developers"
    },

    {
        icon: "⚖️",
        title: "Legal Guidance",
        description: "Full legal support for foreign investors"
    },

    {
        icon: "🏠",
        title: "Property Management",
        description: "End-to-end management for your property"
    },

    {
        icon: "🌍",
        title: "International Buyer Support",
        description: "Multilingual team ready to assist you"
    }

];

export default function FAQCTA() {

    return (

        <section
            className="
            relative
            overflow-hidden
            bg-[#f4efe6]
            py-16
            "
        >

            <div
                className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_50%)]
                "
            />

            <div
                className="
                relative
                mx-auto
                max-w-7xl
                px-6
                "
            >

                <div
                    className="
                    overflow-hidden
                    rounded-[48px]
                    border
                    border-[#d4af37]/10
                    bg-[#111111]
                    p-16
                    shadow-[0_20px_100px_rgba(0,0,0,.5)]
                    "
                >

                    <div className="text-center">

                        <span
                            className="
                            text-xs
                            uppercase
                            tracking-[4px]
                            text-[#d4af37]
                            "
                        >
                            Start Your Journey
                        </span>

                        <h2
                            className="
                            mx-auto
                            mt-8
                            max-w-5xl
                            text-5xl
                            font-light
                            leading-[0.92]
                            tracking-[-0.04em]
                            text-[#ff8c1a]
                            md:text-7xl
                            "
                        >
                            Ready To Invest In The Red Sea?
                        </h2>

                        <p
                            className="
                            mx-auto
                            mt-8
                            max-w-3xl
                            text-lg
                            leading-8
                            text-gray-400
                            "
                        >
                            Discover premium opportunities across
                            Hurghada, El Gouna, Sahl Hasheesh,
                            Makadi Bay and the entire Red Sea
                            coastline with professional support
                            at every stage.
                        </p>

                    </div>

                    <div
                        className="
                        mt-16
                        grid
                        gap-6
                        md:grid-cols-2
                        lg:grid-cols-4
                        "
                    >

                        {

                            features.map(

                                item => (

                                    <div
                                        key={item.title}
                                        className="
                                        flex
                                        h-[250px]
                                        flex-col
                                        items-center
                                        justify-center
                                        rounded-[32px]
                                        bg-[#f97316]
                                        p-8
                                        text-center
                                        shadow-[0_20px_50px_rgba(249,115,22,.20)]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-2
                                        hover:shadow-[0_20px_60px_rgba(249,115,22,.35)]
                                        "
                                    >

                                        <div
                                            className="
                                            mb-5
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-black/10
                                            text-3xl
                                            text-black
                                            "
                                        >
                                            {item.icon}
                                        </div>

 				        
                                      	<h3
  					      style={{
  					      color: "#000000",
  					      fontWeight: 700
 					     }}
  					      className="
  					      mb-4
                                              text-xl
                                              leading-tight
                                               "
                                        >
                                              {item.title}
                                        </h3>

                                         <p
   					     style={{
   					     color: "#111111"
   					     }}
 					     className="
                                             max-w-[220px]
                                             text-sm
                                             font-medium
                                             leading-7
    "
                                            >
                                             {item.description}
                                         </p>

                                    </div>

                                )

                            )

                        }

                    </div>

                    <div
                        className="
                        mt-16
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-6
                        md:flex-row
                        "
                    >

                        <button
                            className="
                            rounded-full
                            bg-[#d4af37]
                            px-10
                            py-5
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[2px]
                            text-black
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-[0_0_40px_rgba(212,175,55,.30)]
                            "
                        >
                            Book Free Consultation
                        </button>

                        <button
                            className="
                            rounded-full
                            border
                            border-[#d4af37]/20
                            bg-transparent
                            px-10
                            py-5
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[2px]
                            text-white
                            transition-all
                            duration-300
                            hover:border-[#d4af37]/40
                            hover:bg-[#171717]
                            "
                        >
                            Explore Projects
                        </button>

                    </div>

                    <div
                        className="
                        mt-16
                        flex
                        flex-wrap
                        items-center
                        justify-center
                        gap-8
                        text-sm
                        text-gray-500
                        "
                    >

                        <span>Germany</span>
                        <span>Poland</span>
                        <span>United Kingdom</span>
                        <span>Italy</span>
                        <span>Russia</span>
                        <span>Turkey</span>

                    </div>

                </div>

            </div>

        </section>

    );

}