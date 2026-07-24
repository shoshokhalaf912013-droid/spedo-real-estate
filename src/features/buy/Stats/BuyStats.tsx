const stats = [
    {
        value: "11%",
        label: "Average ROI",
    },

    {
        value: "50+",
        label: "Verified Projects",
    },

    {
        value: "1200+",
        label: "International Investors",
    },

    {
        value: "€48K",
        label: "Starting Investment",
    },
];

export default function BuyStats() {
    return (
        <section
            className="
                py-20
                bg-gradient-to-b
                from-[#05070D]
                via-[#08111C]
                to-[#0A1220]
            "
        >
            <div className="mx-auto max-w-7xl px-6">

                <div
                    className="
                        grid
                        gap-8
                        md:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    {stats.map((item) => (

                        <div
                            key={item.label}
                            className="
                                rounded-[32px]
                                border
                                border-white/10
                                bg-white/[0.03]
                                p-10
                                text-center
                                transition
                                hover:border-[#D4AF37]/40
                                hover:-translate-y-1
                            "
                        >

                            <h3
                                className="
                                    text-5xl
                                    font-black
                                    text-[#D4AF37]
                                "
                            >
                                {item.value}
                            </h3>

                            <p
                                className="
                                    mt-4
                                    text-zinc-400
                                    text-lg
                                "
                            >
                                {item.label}
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}