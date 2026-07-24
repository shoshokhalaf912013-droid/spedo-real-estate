import Link from "next/link";

export default function SaleListingsPage() {

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
                        bg-[#F97316]/20
                        px-8
                        py-3
                        text-sm
                        font-bold
                        tracking-[5px]
                        text-[#F97316]
                    "
                >
                    SALE PROPERTIES
                </span>

                <h1
                    className="
                        mt-8
                        text-7xl
                        font-black
                        text-[#F97316]
                    "
                >
                    Buy Your Dream Property
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
                    Browse residential and commercial
                    properties available for cash and
                    installment plans.
                </p>

            </section>

            {/* RESIDENTIAL */}

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
                    Residential Properties
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
                        href="/listings/sale/apartments"
                    />

                    <CategoryCard
                        title="Villas"
                        href="/listings/sale/villas"
                    />

                    <CategoryCard
                        title="Chalets"
                        href="/listings/sale/chalets"
                    />

                    <CategoryCard
                        title="Studios"
                        href="/listings/sale/studios"
                    />

                    <CategoryCard
                        title="Penthouses"
                        href="/listings/sale/penthouses"
                    />

                    <CategoryCard
                        title="Duplex"
                        href="/listings/sale/duplex"
                    />

                    <CategoryCard
                        title="Townhouses"
                        href="/listings/sale/townhouses"
                    />

                    <CategoryCard
                        title="Twin Houses"
                        href="/listings/sale/twinhouses"
                    />

                </div>

            </section>

            {/* COMMERCIAL */}

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
                    Commercial Properties
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
                        title="Shops"
                        href="/listings/sale/shops"
                    />

                    <CategoryCard
                        title="Offices"
                        href="/listings/sale/offices"
                    />

                    <CategoryCard
                        title="Clinics"
                        href="/listings/sale/clinics"
                    />

                    <CategoryCard
                        title="Cafes"
                        href="/listings/sale/cafes"
                    />

                    <CategoryCard
                        title="Restaurants"
                        href="/listings/sale/restaurants"
                    />

                    <CategoryCard
                        title="Hotels"
                        href="/listings/sale/hotels"
                    />

                    <CategoryCard
                        title="Warehouses"
                        href="/listings/sale/warehouses"
                    />

                    <CategoryCard
                        title="Land"
                        href="/listings/sale/land"
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
                hover:bg-[#F97316]
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