import Link from "next/link";

const categories = [

    {
        title: "Apartments",
        slug: "apartments",
    },

    {
        title: "Studios",
        slug: "studios",
    },

    {
        title: "Chalets",
        slug: "chalets",
    },

    {
        title: "Villas",
        slug: "villas",
    },

    {
        title: "Townhouses",
        slug: "townhouses",
    },

    {
        title: "Twin Houses",
        slug: "twin-houses",
    },

    {
        title: "Duplex",
        slug: "duplex",
    },

    {
        title: "Penthouses",
        slug: "penthouses",
    },

    {
        title: "Buildings",
        slug: "buildings",
    },

    {
        title: "Residential Land",
        slug: "residential-land",
    },

];

export default function ResidentialCategories() {

    return (

        <section
            className="
                mx-auto
                max-w-7xl
                px-6
                py-24
            "
        >

            <h2
                className="
                    mb-14
                    text-4xl
                    font-bold
                    text-[#F97316]
                "
            >
                Residential Categories
            </h2>

            <div
                className="
                    grid
                    gap-8
                    md:grid-cols-2
                    lg:grid-cols-5
                "
            >

                {categories.map((category) => (

                    <Link
                        key={category.slug}
                        href={`/residential/sale/${category.slug}`}
                        className="
                            rounded-3xl
                            border
                            border-[#D4AF37]/20
                            bg-[#08101E]
                            p-8
                            text-center
                            text-xl
                            font-semibold
                            text-white
                            transition
                            hover:-translate-y-2
                            hover:border-[#D4AF37]
                        "
                    >
                        {category.title}
                    </Link>

                ))}

            </div>

        </section>

    );

}