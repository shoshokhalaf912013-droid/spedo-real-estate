"use client";

const experiences = [

    {
        icon: "🌊",
        title: "Beach Lifestyle",

        description:
            "Wake up every morning with breathtaking sea views and enjoy premium beachfront living.",

        color: "bg-[#F97316]"
    },

    {
        icon: "👨‍👩‍👧",
        title: "Family Living",

        description:
            "Secure communities, international schools and family-friendly facilities across the Red Sea.",

        color: "bg-[#D4AF37]"
    },

    {
        icon: "💻",
        title: "Digital Nomads",

        description:
            "Work remotely from world-class destinations with modern infrastructure and fast internet.",

        color: "bg-[#F97316]"
    },

    {
        icon: "💎",
        title: "Luxury Living",

        description:
            "Exclusive villas, private pools and premium amenities for the ultimate lifestyle experience.",

        color: "bg-[#D4AF37]"
    },

    {
        icon: "🌴",
        title: "Holiday Homes",

        description:
            "Flexible short-term rentals perfect for vacations and unforgettable Red Sea adventures.",

        color: "bg-[#F97316]"
    },

    {
        icon: "📈",
        title: "Investment Rentals",

        description:
            "Generate attractive yields through verified rental opportunities and growing tourism demand.",

        color: "bg-[#D4AF37]"
    }

];

export default function RentalExperiences() {

    return (

        <section
            className="
                bg-[#08101E]
                py-32
            "
        >

            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-6
                "
            >

                {/* HEADER */}

                <div
                    className="
                        mb-20
                        text-center
                    "
                >

                    <span
                        className="
                            text-sm
                            font-bold
                            uppercase
                            tracking-[5px]
                            text-[#D4AF37]
                        "
                    >
                        RED SEA LIFESTYLES
                    </span>

                    <h2
                        className="
                            mt-6
                            text-5xl
                            font-black
                            text-[#F97316]
                        "
                    >
                        Choose Your
                        Perfect Experience
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-8
                            max-w-3xl
                            text-lg
                            leading-8
                            text-slate-300
                        "
                    >
                        The Red Sea offers a unique
                        lifestyle for families,
                        investors, digital nomads,
                        luxury seekers and holiday
                        residents alike.
                    </p>

                </div>

                {/* GRID */}

                <div
                    className="
                        grid
                        gap-8
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >

                    {experiences.map(
                        (item) => (

                            <div
                                key={item.title}
                                className={`
                                    ${item.color}
                                    rounded-[36px]
                                    p-10
                                    shadow-[0_20px_60px_rgba(249,115,22,0.2)]
                                    transition-all
                                    duration-500
                                    hover:-translate-y-3
                                `}
                            >

                                {/* ICON */}

                                <div
                                    className="
                                        mb-8
                                        text-6xl
                                    "
                                >
                                    {item.icon}
                                </div>

                                {/* TITLE */}

                                <h3
                                    className="
                                        text-3xl
                                        font-black
                                        text-[#08101E]
                                    "
                                >
                                    {item.title}
                                </h3>

                                {/* LINE */}

                                <div
                                    className="
                                        my-6
                                        h-1
                                        w-24
                                        rounded-full
                                        bg-[#08101E]
                                    "
                                />

                                {/* TEXT */}

                                <p
                                    className="
                                        leading-8
                                        text-[#111827]
                                    "
                                >
                                    {item.description}
                                </p>

                            </div>

                        )
                    )}

                </div>

            </div>

        </section>

    );

}