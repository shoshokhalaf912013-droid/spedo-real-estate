import {
    Sun,
    Building2,
    TrendingUp,
    Globe,
} from "lucide-react";

import SpedoSection from "@/components/spedo/layout/SpedoSection";
import SpedoContainer from "@/components/spedo/layout/SpedoContainer";
import SectionHeader from "@/components/spedo/display/SectionHeader";
import SpedoFeatureCard from "@/components/spedo/cards/SpedoFeatureCard";

const reasons = [
    {
        icon: Sun,
        number: "01",
        title: "365 Days Of Sunshine",
        description:
            "The Red Sea offers year-round tourism demand and strong seasonal stability.",
    },

    {
        icon: Building2,
        number: "02",
        title: "Growing Infrastructure",
        description:
            "New roads, airports, marinas and international developments continue to increase property value.",
    },

    {
        icon: TrendingUp,
        number: "03",
        title: "High Rental Demand",
        description:
            "Holiday rentals and long-term stays create exceptional investment opportunities.",
    },

    {
        icon: Globe,
        number: "04",
        title: "International Market",
        description:
            "The region attracts investors and buyers from Germany, the UK, Eastern Europe and the GCC.",
    },
];

export default function WhyRedSea() {
    return (
        <SpedoSection variant="redSea">

            {/* Background Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[900px]
                    w-[900px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#D4AF37]/5
                    blur-[220px]
                "
            />

            <SpedoContainer>

                <SectionHeader
                    badge="WHY THE RED SEA"
                    title="One Of Egypt's Strongest"
                    highlight="Investment Destinations"
                    description="
Tourism growth, international demand, modern infrastructure and attractive rental yields make the Red Sea one of the strongest real estate investment destinations in Egypt."
                    light
                />

                <div
                    className="
                        grid
                        gap-8
                        md:grid-cols-2
                        xl:grid-cols-4
                    "
                >
                    {reasons.map((reason) => {

                        const Icon = reason.icon;

                        return (

                            <SpedoFeatureCard
                                key={reason.title}
                                icon={
                                    <Icon
                                        className="
                                            h-8
                                            w-8
                                        "
                                    />
                                }
                                number={reason.number}
                                title={reason.title}
                                description={reason.description}
                                variant="dark"
                            />

                        );

                    })}
                </div>

            </SpedoContainer>

        </SpedoSection>
    );
}