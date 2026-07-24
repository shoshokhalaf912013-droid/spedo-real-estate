"use client";

interface Props {

    advantages: string[];

}

export default function ResidentialAdvantages({

    advantages,

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

                    Why Choose This Property Type

                </h2>

                <p
                    className="
                        mt-3
                        max-w-3xl
                        text-slate-400
                    "
                >

                    Discover the key investment,
                    lifestyle and ownership
                    advantages that make this
                    residential property type one
                    of the best choices in the
                    Red Sea market.

                </p>

            </div>

            <div
                className="
                    grid
                    gap-5
                    md:grid-cols-2
                "
            >

                {

                    advantages.map(

                        advantage => (

                            <article

                                key={advantage}

                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-[#020817]
                                    p-6
                                    transition-colors
                                    hover:border-[#F97316]
                                "
                            >

                                <div
                                    className="
                                        mb-4
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-[#F97316]
                                        text-xl
                                        font-black
                                        text-black
                                        shrink-0
                                    "
                                >

                                    ★

                                </div>

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        text-white
                                    "
                                >

                                    {advantage}

                                </h3>

                            </article>

                        )

                    )

                }

            </div>

        </section>

    );

}