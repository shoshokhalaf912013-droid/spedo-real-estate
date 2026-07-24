import Link from "next/link";

export default function RentListingsPage() {

    return (

        <main
            className="
                min-h-screen
                bg-[#08101E]
                pt-32
                pb-24
            "
        >

            <section
                className="
                    mx-auto
                    max-w-7xl
                    px-6
                    text-center
                "
            >

                <span
                    className="
                        inline-block
                        rounded-full
                        bg-[#D4AF37]/20
                        px-8
                        py-3
                        text-sm
                        font-bold
                        tracking-[5px]
                        text-[#D4AF37]
                    "
                >
                    RENT PROPERTIES
                </span>

                <h1
                    className="
                        mt-8
                        text-7xl
                        font-black
                        text-[#D4AF37]
                    "
                >
                    Find Your Perfect Rental
                </h1>

                <p
                    className="
                        mx-auto
                        mt-8
                        max-w-4xl
                        text-2xl
                        text-slate-300
                    "
                >
                    Browse long-term, short-term,
                    furnished, unfurnished and
                    commercial rentals across the
                    Red Sea.
                </p>

            </section>

            {/* RESIDENTIAL RENTALS */}

            <section
                className="
                    mx-auto
                    mt-24
                    max-w-7xl
                    px-6
                "
            >

                <h2
                    className="
                        mb-10
                        text-5xl
                        font-black
                        text-[#F97316]
                    "
                >
                    Residential Rentals
                </h2>

                <div
                    className="
                        grid
                        gap-8
                        md:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    <CategoryCard
                        title="Apartments"
                        href="/listings/rent/apartments"
                    />

                    <CategoryCard
                        title="Villas"
                        href="/listings/rent/villas"
                    />

                    <CategoryCard
                        title="Chalets"
                        href="/listings/rent/chalets"
                    />

                    <CategoryCard
                        title="Studios"
                        href="/listings/rent/studios"
                    />

                    <CategoryCard
                        title="Penthouses"
                        href="/listings/rent/penthouses"
                    />

                    <CategoryCard
                        title="Duplex"
                        href="/listings/rent/duplex"
                    />

                </div>

            </section>

            {/* COMMERCIAL RENTALS */}

            <section
                className="
                    mx-auto
                    mt-24
                    max-w-7xl
                    px-6
                "
            >

                <h2
                    className="
                        mb-10
                        text-5xl
                        font-black
                        text-[#D4AF37]
                    "
                >
                    Commercial Rentals
                </h2>

                <div
                    className="
                        grid
                        gap-8
                        md:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    <CategoryCard
                        title="Offices"
                        href="/listings/rent/offices"
                    />

                    <CategoryCard
                        title="Shops"
                        href="/listings/rent/shops"
                    />

                    <CategoryCard
                        title="Clinics"
                        href="/listings/rent/clinics"
                    />

                    <CategoryCard
                        title="Cafes"
                        href="/listings/rent/cafes"
                    />

                    <CategoryCard
                        title="Restaurants"
                        href="/listings/rent/restaurants"
                    />

                    <CategoryCard
                        title="Hotels"
                        href="/listings/rent/hotels"
                    />

                    <CategoryCard
                        title="Warehouses"
                        href="/listings/rent/warehouses"
                    />

                </div>

            </section>

        </main>

    );

}

interface CategoryCardProps {

    title: string;

    href: string;

}

function CategoryCard({
    title,
    href,
}: CategoryCardProps) {

    return (

        <Link
            href={href}
            className="
                rounded-[32px]
                bg-[#111827]
                p-10
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:bg-[#D4AF37]
                hover:text-black
            "
        >

            <h3
                className="
                    text-3xl
                    font-black
                "
            >
                {title}
            </h3>

        </Link>

    );

}