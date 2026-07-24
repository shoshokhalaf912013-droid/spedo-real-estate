import Link from "next/link";

const dashboardSections = [
    {
        title: "Residential Properties",
        description:
            "Add and manage individual residential properties displayed separately from SPEDO projects.",
        actions: [
            {
                label: "Add Residential Property",
                href: "/dashboard/property/new",
                primary: true,
            },
            {
                label: "Residential Sale",
                href: "/dashboard/residential/sale",
                primary: false,
            },
            {
                label: "Residential Rent",
                href: "/dashboard/residential/rent",
                primary: false,
            },
        ],
    },
    {
        title: "Commercial Properties",
        description:
            "Manage commercial properties using their dedicated terminology and forms.",
        actions: [
            {
                label: "Commercial Sale",
                href: "/dashboard/commercial/sale",
                primary: true,
            },
            {
                label: "Commercial Rent",
                href: "/dashboard/commercial/rent",
                primary: false,
            },
        ],
    },
    {
        title: "Projects",
        description:
            "Manage the major real-estate developments displayed in the Projects section.",
        actions: [
            {
                label: "Manage Projects",
                href: "/dashboard/projects",
                primary: true,
            },
        ],
    },
    {
        title: "Media",
        description:
            "Access and manage property images, videos, floor plans, and other media files.",
        actions: [
            {
                label: "Manage Media",
                href: "/dashboard/media",
                primary: true,
            },
        ],
    },
];

export default function DashboardPage() {
    return (
        <main
            className="
                min-h-screen
                bg-[#020817]
                px-6
                pb-20
                pt-32
            "
        >
            <div
                className="
                    mx-auto
                    max-w-7xl
                "
            >
                <section
                    className="
                        mb-10
                        rounded-3xl
                        border
                        border-white/10
                        bg-[#0F172A]
                        p-8
                    "
                >
                    <p
                        className="
                            text-sm
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            text-[#D4AF37]
                        "
                    >
                        SPEDO Management
                    </p>

                    <h1
                        className="
                            mt-3
                            text-4xl
                            font-black
                            text-[#F97316]
                            md:text-5xl
                        "
                    >
                        Administration Dashboard
                    </h1>

                    <p
                        className="
                            mt-4
                            max-w-3xl
                            text-base
                            leading-8
                            text-slate-300
                        "
                    >
                        Add and manage residential properties,
                        commercial properties, projects, images,
                        videos, floor plans, and publishing data.
                    </p>
                </section>

                <section
                    className="
                        grid
                        gap-6
                        md:grid-cols-2
                    "
                >
                    {dashboardSections.map((section) => (
                        <article
                            key={section.title}
                            className="
                                flex
                                min-h-[310px]
                                flex-col
                                rounded-3xl
                                border
                                border-white/10
                                bg-[#0F172A]
                                p-7
                                shadow-xl
                                shadow-black/20
                            "
                        >
                            <h2
                                className="
                                    text-2xl
                                    font-black
                                    text-[#F97316]
                                "
                            >
                                {section.title}
                            </h2>

                            <p
                                className="
                                    mt-4
                                    flex-1
                                    leading-7
                                    text-slate-300
                                "
                            >
                                {section.description}
                            </p>

                            <div
                                className="
                                    mt-7
                                    flex
                                    flex-wrap
                                    gap-3
                                "
                            >
                                {section.actions.map((action) => (
                                    <Link
                                        key={action.href}
                                        href={action.href}
                                        className={
                                            action.primary
                                                ? `
                                                    inline-flex
                                                    min-h-12
                                                    items-center
                                                    justify-center
                                                    rounded-xl
                                                    bg-[#F97316]
                                                    px-5
                                                    py-3
                                                    font-black
                                                    text-black
                                                    transition
                                                    hover:bg-[#FB923C]
                                                `
                                                : `
                                                    inline-flex
                                                    min-h-12
                                                    items-center
                                                    justify-center
                                                    rounded-xl
                                                    border
                                                    border-[#F97316]/40
                                                    px-5
                                                    py-3
                                                    font-bold
                                                    text-[#F97316]
                                                    transition
                                                    hover:border-[#F97316]
                                                    hover:bg-[#F97316]
                                                    hover:text-black
                                                `
                                        }
                                    >
                                        {action.label}
                                    </Link>
                                ))}
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
}