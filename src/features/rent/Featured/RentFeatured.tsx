export default function RentFeatured() {
    return (
        <section className="py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">

                    <span
                        className="
                            text-[#D4AF37]
                            text-sm
                            font-medium
                            uppercase
                            tracking-[3px]
                        "
                    >
                        Featured Rentals
                    </span>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            lg:text-5xl
                            font-bold
                        "
                    >
                        Premium Rental Opportunities
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-3xl
                            mx-auto
                            text-zinc-400
                            text-lg
                        "
                    >
                        Explore verified apartments and villas
                        across the most attractive destinations
                        in the Red Sea region.
                    </p>

                </div>

                <div
                    className="
                        grid
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-8
                    "
                >
                    <PropertyCard
                        title="Luxury Marina Apartment"
                        area="Hurghada"
                    />

                    <PropertyCard
                        title="Beachfront Villa"
                        area="Sahl Hasheesh"
                    />

                    <PropertyCard
                        title="Modern Residence"
                        area="El Gouna"
                    />

                </div>

            </div>
        </section>
    );
}

function PropertyCard({
    title,
    area,
}: {
    title: string;
    area: string;
}) {
    return (
        <div
            className="
                p-8
                rounded-3xl
                bg-white/[0.03]
                border
                border-white/5
                transition
                hover:border-[#D4AF37]/30
                hover:-translate-y-1
            "
        >
            <div
                className="
                    h-56
                    rounded-2xl
                    bg-zinc-900
                    mb-6
                    flex
                    items-center
                    justify-center
                    text-zinc-500
                "
            >
                Property Image
            </div>

            <p className="text-[#D4AF37] text-sm">
                {area}
            </p>

            <h3
                className="
                    mt-2
                    text-2xl
                    font-semibold
                "
            >
                {title}
            </h3>

            <button
                className="
                    mt-6
                    text-[#D4AF37]
                    font-medium
                "
            >
                View Details →
            </button>
        </div>
    );
}