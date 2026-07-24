import Link from "next/link";

const rentals = [

    {

        name: "Blue Crest",

        image:
            "/projects/blue-crest/gallery-4.jpg",

        location:
            "Al Ahyaa • Hurghada",

        type:
            "Short-Term & Long-Term Rentals",

        href:
            "/projects/blue-crest"

    },

    {

        name: "Mark Resort",

        image:
            "/projects/mark-resort/hero.png",

        location:
            "Airport Road • Hurghada",

        type:
            "Holiday Rentals & Airbnb",

        href:
            "/projects/mark-resort"

    },

    {

        name: "Hurghada Heights",

        image:
            "/projects/hurghada-heights/cover.jpg",

        location:
            "Hurghada",

        type:
            "Family Residential Living",

        href:
            "/projects/hurghada-heights"

    }

];

export default function RentFeatured() {

    return (

        <section
            className="
            bg-[#05070D]
            pb-24
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
                        Featured Rentals
                    </span>

                    <h2
                        className="
                        mt-6
                        font-playfair
                        text-5xl
                        text-white
                        "
                    >
                        Popular Rental
                        Opportunities
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

                        rentals.map(

                            rental => (

                                <div
                                    key={rental.name}
                                    className="
                                    overflow-hidden
                                    rounded-[32px]
                                    border
                                    border-white/10
                                    bg-[#09111C]
                                    transition
                                    hover:border-[#F97316]/40
                                    hover:-translate-y-2
                                    "
                                >

                                    <img
                                        src={rental.image}
                                        alt={rental.name}
                                        className="
                                        h-[280px]
                                        w-full
                                        object-cover
                                        "
                                    />

                                    <div
                                        className="
                                        p-8
                                        "
                                    >

                                        <h3
                                            className="
                                            text-3xl
                                            font-bold
                                            text-[#F97316]
                                            "
                                        >
                                            {rental.name}
                                        </h3>

                                        <p
                                            className="
                                            mt-4
                                            text-slate-400
                                            "
                                        >
                                            {rental.location}
                                        </p>

                                        <p
                                            className="
                                            mt-6
                                            leading-8
                                            text-slate-300
                                            "
                                        >
                                            {rental.type}
                                        </p>

                                        <Link
                                            href={rental.href}
                                            className="
                                            mt-8
                                            inline-block
                                            rounded-2xl
                                            bg-[#F97316]
                                            px-8
                                            py-4
                                            font-bold
                                            text-white
                                            transition
                                            hover:brightness-110
                                            "
                                        >
                                            View Rental Options
                                        </Link>

                                    </div>

                                </div>

                            )

                        )

                    }

                </div>

            </div>

        </section>

    );

}