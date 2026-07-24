"use client";

interface Props {

    features: string[];

}

export default function ResidentialFeatures({

    features,

}: Props) {

    return (

        <section
            className="
                mt-8
                rounded-3xl
                border
                border-white/10
                bg-[#08101E]
                p-6
                lg:p-8
            "
        >

            <div
                className="
                    mb-8
                "
            >

                <h2
                    className="
                        text-2xl
                        font-black
                        text-white
                        lg:text-3xl
                    "
                >

                    Property Features

                </h2>

                <p
                    className="
                        mt-2
                        text-slate-400
                    "
                >

                    Discover the key amenities
                    and lifestyle advantages
                    offered by this residential
                    property type.

                </p>

            </div>

            <div
                className="
                    grid
                    gap-4
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >

                {

                    features.map(

                        feature => (

                            <article

                                key={feature}

                                className="
                                    flex
                                    items-center
                                    gap-4
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-[#020817]
                                    p-5
                                    transition-colors
                                    hover:border-[#F97316]
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-[#F97316]
                                        text-xl
                                        font-bold
                                        text-black
                                    "
                                >

                                    ✓

                                </div>

                                <h3
                                    className="
                                        font-bold
                                        text-white
                                    "
                                >

                                    {feature}

                                </h3>

                            </article>

                        )

                    )

                }

            </div>

        </section>

    );

}