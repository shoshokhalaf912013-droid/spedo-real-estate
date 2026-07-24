export default function RentAreas() {
    const areas = [
        "Hurghada",
        "El Gouna",
        "Makadi Bay",
        "Sahl Hasheesh",
        "Soma Bay",
    ];

    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">

                    <span
                        className="
                            text-[#D4AF37]
                            uppercase
                            tracking-[3px]
                            text-sm
                        "
                    >
                        Rental Areas
                    </span>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            font-bold
                        "
                    >
                        Discover The Red Sea
                    </h2>

                    <p
                        className="
                            mt-6
                            text-zinc-400
                            max-w-3xl
                            mx-auto
                        "
                    >
                        Explore verified rental opportunities
                        across the most attractive destinations
                        in the Red Sea region.
                    </p>

                </div>

                <div
                    className="
                        grid
                        md:grid-cols-2
                        lg:grid-cols-5
                        gap-6
                    "
                >
                    {areas.map((area) => (
                        <div
                            key={area}
                            className="
                                h-64
                                rounded-3xl
                                bg-zinc-900
                                border
                                border-white/10
                                flex
                                items-end
                                p-6
                                transition
                                hover:border-[#D4AF37]/40
                                hover:-translate-y-1
                            "
                        >
                            <h3
                                className="
                                    text-2xl
                                    font-semibold
                                "
                            >
                                {area}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}