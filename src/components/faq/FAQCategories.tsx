"use client";

const categories = [

    "Investment",

    "European Buyers",

    "Ownership",

    "Legal",

    "Payments",

    "Residency",

    "Rental",

    "After Sales",

    "Safety",

    "Viewings"

];

export default function FAQCategories() {

    return (

        <section
            className="
            bg-[#f4efe6]
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
                    grid
                    lg:grid-cols-2
                    gap-12
                    "
                >

                    <h2
                        className="
                        text-6xl
                        font-light
                        leading-none
                        "
                    >
                        Find Answers
                        By Buyer
                        Stage
                    </h2>

                    <p
                        className="
                        self-center
                        text-gray-600
                        "
                    >
                        Browse investment,
                        ownership, legal and
                        European buyer topics.
                    </p>

                </div>

                <div
                    className="
                    grid
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-6
                    "
                >

                    {

                        categories.map(

                            (

                                category,

                                index

                            ) => (

                                <div
                                    key={category}
                                    className="
                                    rounded-[32px]
                                    bg-white
                                    p-8
                                    shadow-sm
                                    "
                                >

                                    <div
                                        className="
                                        mb-6
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#d4af37]
                                        font-bold
                                        "
                                    >
                                        {

                                            String(

                                                index + 1

                                            ).padStart(
                                                2,
                                                "0"
                                            )

                                        }
                                    </div>

                                    <h3
                                        className="
                                        text-3xl
                                        font-light
                                        "
                                    >
                                        {category}
                                    </h3>

                                </div>

                            )

                        )

                    }

                </div>

            </div>

        </section>

    );

}