"use client";

interface FAQ {

    question: string;

    answer: string;

}

interface Props {

    faq: FAQ[];

}

export default function ResidentialFAQ({

    faq,

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
                    mb-10
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

                    Frequently Asked Questions

                </h2>

                <p
                    className="
                        mt-3
                        text-slate-400
                    "
                >

                    Everything investors and buyers
                    usually ask before purchasing this
                    residential property type.

                </p>

            </div>

            <div
                className="
                    space-y-5
                "
            >

                {

                    faq.map(

                        item => (

                            <article

                                key={item.question}

                                className="
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-[#020817]
                                    p-6
                                "
                            >

                                <h3
                                    className="
                                        text-lg
                                        font-bold
                                        text-white
                                    "
                                >

                                    {item.question}

                                </h3>

                                <p
                                    className="
                                        mt-3
                                        leading-8
                                        text-slate-400
                                    "
                                >

                                    {item.answer}

                                </p>

                            </article>

                        )

                    )

                }

            </div>

        </section>

    );

}