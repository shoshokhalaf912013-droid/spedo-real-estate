import Image from "next/image";
import {
    MapPin,
    Building2,
    TrendingUp,
    ArrowRight,
} from "lucide-react";

import {
    SPEDO_BUTTON,
    SPEDO_SECTION,
    SPEDO_TITLE,
    SPEDO_TEXT,
    SPACING,
} from "@/design";

const featuredProject = {
    title: "Blue Crest",

    developer: "KYN Development",

    location: "Hurghada",

    roi: "11.2%",

    startingFrom: "€55,000",

    image: "/projects/blue-crest/hero.jpg",
};

export default function BuyHero() {
    return (
        <section
            className={`
                relative
                overflow-hidden
                ${SPACING.section}
                px-6
                lg:px-12
                ${SPEDO_SECTION.hero}
            `}
        >
            {/* Background Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-[900px]
                    w-[900px]
                    -translate-x-1/2
                    bg-[#D4AF37]/5
                    blur-[180px]
                "
            />

            <div className={SPACING.container}>

                <div
                    className="
                        grid
                        items-center
                        gap-20
                        lg:grid-cols-2
                    "
                >
                    {/* LEFT CONTENT */}

                    <div>

                        <span
                            className="
                                mb-8
                                inline-flex
                                items-center
                                rounded-full
                                border
                                border-[#D4AF37]/20
                                bg-[#D4AF37]/10
                                px-5
                                py-2
                                text-sm
                                font-medium
                                text-[#D4AF37]
                            "
                        >
                            VERIFIED RED SEA INVESTMENTS
                        </span>

                        <h1 className={SPEDO_TITLE.hero}>

                            Buy Property In

                            <span className="block text-[#D4AF37]">
                                The Red Sea
                            </span>

                        </h1>

                        <p
                            className={`
                                ${SPEDO_TEXT.body}
                                mt-8
                                max-w-2xl
                                lg:text-xl
                            `}
                        >
                            Discover verified investment
                            opportunities in Hurghada,
                            El Gouna, Makadi Bay,
                            Sahl Hasheesh, and Soma Bay
                            with trusted developers and
                            transparent pricing.
                        </p>

                        {/* TRUST BADGES */}

                        <div
                            className="
                                mt-10
                                flex
                                flex-wrap
                                gap-4
                            "
                        >
                            <Badge text="Verified Developers" />
                            <Badge text="Transparent Pricing" />
                            <Badge text="Flexible Payment Plans" />
                            <Badge text="Investment Ready" />
                        </div>

                        {/* CTA */}

                        <div
                            className="
                                mt-12
                                flex
                                flex-wrap
                                gap-4
                            "
                        >
                            <button className={SPEDO_BUTTON.gold}>
                                Explore Properties
                            </button>

                            <button className={SPEDO_BUTTON.outline}>
                                Talk To Advisor
                            </button>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}

                    <div
                        className="
                            group
                            relative
                            h-[600px]
                            overflow-hidden
                            rounded-[40px]
                            border
                            border-[#D4AF37]/20
                        "
                    >

                        <Image
                            src={featuredProject.image}
                            alt={featuredProject.title}
                            fill
                            priority
                            className="
                                object-cover
                                brightness-100
                                contrast-100
                                transition-transform
                                duration-700
                                group-hover:scale-105
                            "
                        />

                        {/* Project Info Card */}

                        <div
                            className="
                                absolute
                                left-8
                                right-8
                                top-8

                                rounded-3xl
                                border
                                border-white/10

                                bg-black/40

                                p-6

                                backdrop-blur-xl
                            "
                        >

                            <h2
                                className="
                                    text-3xl
                                    font-bold
                                    text-white
                                "
                            >
                                {featuredProject.title}
                            </h2>

                            <div
                                className="
                                    mt-5
                                    flex
                                    flex-col
                                    gap-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        text-zinc-200
                                    "
                                >
                                    <Building2
                                        className="
                                            h-5
                                            w-5
                                            text-[#D4AF37]
                                        "
                                    />

                                    {featuredProject.developer}

                                </div>

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        text-zinc-200
                                    "
                                >
                                    <MapPin
                                        className="
                                            h-5
                                            w-5
                                            text-[#D4AF37]
                                        "
                                    />

                                    {featuredProject.location}

                                </div>

                            </div>
	
			                          </div>

                        {/* Bottom Stats */}

                        <div
                            className="
                                absolute
                                bottom-8
                                left-8
                                right-8

                                rounded-3xl
                                border
                                border-white/10

                                bg-black/40

                                p-6

                                backdrop-blur-xl
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            text-zinc-300
                                        "
                                    >
                                        Starting From
                                    </p>

                                    <h3
                                        className="
                                            mt-2
                                            text-3xl
                                            font-bold
                                            text-[#D4AF37]
                                        "
                                    >
                                        {featuredProject.startingFrom}
                                    </h3>

                                </div>

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            text-zinc-300
                                        "
                                    >
                                        Expected ROI
                                    </p>

                                    <div
                                        className="
                                            mt-2
                                            flex
                                            items-center
                                            gap-2
                                        "
                                    >

                                        <TrendingUp
                                            className="
                                                h-5
                                                w-5
                                                text-green-400
                                            "
                                        />

                                        <h3
                                            className="
                                                text-3xl
                                                font-bold
                                                text-[#D4AF37]
                                            "
                                        >
                                            {featuredProject.roi}
                                        </h3>

                                    </div>

                                </div>

                            </div>

                            <button
                                className="
                                    mt-6

                                    flex
                                    w-full

                                    items-center
                                    justify-center
                                    gap-2

                                    rounded-2xl

                                    bg-[#D4AF37]

                                    py-4

                                    font-semibold
                                    text-black

                                    transition-all
                                    duration-300

                                    hover:gap-3
                                    hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]
                                "
                            >
                                Explore Project

                                <ArrowRight
                                    className="
                                        h-4
                                        w-4
                                    "
                                />

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

function Badge({
    text,
}: {
    text: string;
}) {
    return (
        <div
            className="
                rounded-full

                border
                border-white/10

                bg-white/5

                px-4
                py-2

                text-sm
                text-zinc-300

                transition-all
                duration-300

                hover:border-[#D4AF37]/30
                hover:bg-[#D4AF37]/5
            "
        >
            ✓ {text}
        </div>
    );
}