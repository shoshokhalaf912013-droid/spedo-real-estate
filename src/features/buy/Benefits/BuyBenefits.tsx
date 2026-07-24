import SpedoSection from "@/components/spedo/layout/SpedoSection";
import SpedoContainer from "@/components/spedo/layout/SpedoContainer";
import SectionHeader from "@/components/spedo/display/SectionHeader";
import SpedoFeatureCard from "@/components/spedo/cards/SpedoFeatureCard";

import { benefits } from "@/data/benefits";

export default function BuyBenefits() {
    return (
        <SpedoSection variant="dark">

            <SpedoContainer>

                {/* Header */}

                <SectionHeader
                    badge="Why Invest With SPEDO"
                    title={
                        <>
                            More Than A{" "}
                            <span className="text-[#F97316]">
                                Property Platform
                            </span>
                        </>
                    }
                    description="SPEDO is built to help investors make confident decisions through verified data, trusted developers, and deep knowledge of the Red Sea market."
                />

                {/* Grid */}

                <div
                    className="
                        grid
                        gap-8
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {benefits.map((item) => {
                        const Icon = item.icon;

                        return (
                            <SpedoFeatureCard
                                key={item.title}
                                icon={
                                    Icon ? (
                                        <Icon className="h-7 w-7 text-[#D4AF37]" />
                                    ) : null
                                }
                                title={item.title}
                                description={item.description}
                            />
                        );
                    })}
                </div>

            </SpedoContainer>

        </SpedoSection>
    );
}