const faqs = [
    {
        question: "Can foreigners rent properties in the Red Sea?",
        answer:
            "Yes, international clients can rent verified apartments and villas across Hurghada, El Gouna, Makadi Bay, and other Red Sea destinations.",
    },

    {
        question: "Are Airbnb-friendly properties available?",
        answer:
            "Yes, many of our verified units are suitable for Airbnb and short-term rental investments.",
    },

    {
        question: "Do you provide long-term rentals?",
        answer:
            "Absolutely. We offer both short-term holiday rentals and long-term residential solutions.",
    },

    {
        question: "Can SPEDO help me choose the right rental investment?",
        answer:
            "Our advisors help investors identify the best rental opportunities based on ROI, location, and market demand.",
    },
];

export default function RentFAQ() {
    return (
        <section className="py-24 px-6">

            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-16">

                    <span
                        className="
                            text-[#D4AF37]
                            uppercase
                            tracking-[3px]
                            text-sm
                        "
                    >
                        Frequently Asked Questions
                    </span>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            font-bold
                        "
                    >
                        Rental Questions Answered
                    </h2>

                </div>

                <div className="space-y-6">

                    {faqs.map((faq) => (
                        <div
                            key={faq.question}
                            className="
                                p-8
                                rounded-3xl
                                bg-white/[0.03]
                                border
                                border-white/10
                            "
                        >
                            <h3
                                className="
                                    text-xl
                                    font-semibold
                                    text-[#D4AF37]
                                "
                            >
                                {faq.question}
                            </h3>

                            <p
                                className="
                                    mt-4
                                    text-zinc-400
                                    leading-8
                                "
                            >
                                {faq.answer}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}