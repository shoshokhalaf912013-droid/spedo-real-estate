"use client";

const terms = [

    {
        id: "01",
        title: "Green Contract",
        text: "One of the strongest forms of official property registration in Egypt, providing additional legal protection and recognized ownership rights."
    },

    {
        id: "02",
        title: "Sahih Tawqia",
        text: "A court procedure that validates signatures on contracts and adds an extra layer of legal security for property transactions."
    },

    {
        id: "03",
        title: "Taukil (Power Of Attorney)",
        text: "A notarized authorization that allows trusted legal representatives to complete procedures on behalf of international buyers."
    },

    {
        id: "04",
        title: "Property Registration",
        text: "The official process that protects long-term ownership rights and strengthens legal security for investors."
    },

    {
        id: "05",
        title: "Foreign Ownership Rights",
        text: "Egyptian regulations allow foreign nationals to own residential properties subject to applicable legal requirements."
    },

    {
        id: "06",
        title: "Inheritance Rights",
        text: "Proper legal planning helps ensure smooth inheritance procedures and protects future ownership transfers to family members."
    }

];

export default function FAQLegalTerms() {

    return (

        <section
            className="
            relative
            overflow-hidden
            bg-[#020202]
            py-32
            "
        >

            <div
                className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.04),transparent_35%)]
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
                    mb-20
                    grid
                    items-center
                    gap-16
                    lg:grid-cols-2
                    "
                >

                    <div>

                        <span
                            className="
                            text-xs
                            uppercase
                            tracking-[4px]
                            text-[#d4af37]
                            "
                        >
                            Legal Knowledge Hub
                        </span>

                        <h2
                            className="
                            mt-6
                            text-5xl
                            font-light
                            leading-[0.92]
                            tracking-[-0.04em]
                            text-[#ff8c1a]
                            md:text-6xl
                            "
                        >
                            Legal Terms Every
                            International Buyer
                            Should Understand
                        </h2>

                        <div
                            className="
                            mt-8
                            h-px
                            w-32
                            bg-gradient-to-r
                            from-[#d4af37]
                            to-transparent
                            "
                        />

                    </div>

                    <p
                        className="
                        max-w-xl
                        text-lg
                        leading-8
                        text-gray-400
                        "
                    >
                        Understanding legal concepts
                        such as Green Contracts,
                        Taukil procedures, inheritance
                        rights and ownership
                        registration helps investors
                        make safer and more informed
                        decisions.
                    </p>

                </div>

                <div
                    className="
                    grid
                    gap-8
                    md:grid-cols-2
                    xl:grid-cols-3
                    "
                >

                    {

                        terms.map(

                            term => (

                                <div
                                    key={term.id}
                                    className="
                                    group
                                    rounded-[36px]
                                    border
                                    border-[#d4af37]/10
                                    bg-[#111111]
                                    p-9
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:border-[#d4af37]/25
                                    hover:bg-[#171717]
                                    hover:shadow-[0_20px_60px_rgba(212,175,55,.10)]
                                    "
                                >

                                    <div
                                        className="
                                        mb-8
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#d4af37]
                                        text-lg
                                        font-bold
                                        text-black
                                        "
                                    >
                                        {term.id}
                                    </div>

                                    <h3
                                        className="
                                        text-3xl
                                        font-light
                                        leading-tight
                                        text-white
                                        transition
                                        duration-300
                                        group-hover:text-[#ffcc66]
                                        "
                                    >
                                        {term.title}
                                    </h3>

                                    <p
                                        className="
                                        mt-6
                                        leading-8
                                        text-gray-400
                                        transition
                                        duration-300
                                        group-hover:text-gray-300
                                        "
                                    >
                                        {term.text}
                                    </p>

                                </div>

                            )

                        )

                    }

                </div>

            </div>

        </section>

    );

}
