export default function RentCategories() {

    const categories = [

        {

            title:
                "Holiday Rentals",

            description:
                "Luxury apartments and resort units for short-term stays and vacation experiences.",

            icon:
                "🏖️"

        },

        {

            title:
                "Long-Term Living",

            description:
                "Family homes and residential communities designed for comfortable year-round living.",

            icon:
                "🏡"

        },

        {

            title:
                "Commercial Rentals",

            description:
                "Retail spaces, offices and commercial opportunities in prime Red Sea destinations.",

            icon:
                "🏢"

        }

    ];

    return (

        <section
            className="
            bg-[#05070D]
            py-24
            "
        >

            <div
                className="
                mx-auto
                max-w-7xl
                px-6
                "
            >

                <div
                    className="
                    mb-16
                    text-center
                    "
                >

                    <span
                        className="
                        uppercase
                        tracking-[4px]
                        text-[#F97316]
                        "
                    >
                        Rental Categories
                    </span>

                    <h2
                        className="
                        mt-6
                        font-playfair
                        text-5xl
                        text-white
                        "
                    >
                        Choose Your
                        Perfect Rental
                    </h2>

                </div>

                <div
                    className="
                    grid
                    gap-8
                    md:grid-cols-3
                    "
                >

                    {

                        categories.map(

                            category => (

                                <div
                                    key={category.title}
                                    className="
                                    rounded-[32px]
                                    border
                                    border-white/10
                                    bg-[#09111C]
                                    p-10
                                    transition
                                    hover:border-[#F97316]/40
                                    hover:-translate-y-2
                                    "
                                >

                                    <div
                                        className="
                                        text-6xl
                                        "
                                    >
                                        {category.icon}
                                    </div>

                                    <h3
                                        className="
                                        mt-8
                                        text-3xl
                                        font-bold
                                        text-[#F97316]
                                        "
                                    >
                                        {category.title}
                                    </h3>

                                    <p
                                        className="
                                        mt-6
                                        leading-8
                                        text-slate-300
                                        "
                                    >
                                        {category.description}
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