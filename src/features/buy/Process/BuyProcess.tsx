import SpedoSection from "@/components/spedo/layout/SpedoSection";
import SpedoContainer from "@/components/spedo/layout/SpedoContainer";
import SectionHeader from "@/components/spedo/display/SectionHeader";
import SpedoFeatureCard from "@/components/spedo/cards/SpedoFeatureCard";

import { process } from "@/data/process";

export default function BuyProcess() {
    return (
        <SpedoSection variant="process">

            <SpedoContainer>

                <SectionHeader
                    badge="How It Works"
                    title="Buy Your Property In Four Simple Steps"
                    description="Our streamlined process ensures a secure, transparent, and hassle-free investment journey from property selection to ownership."
                />

                <div
                    className="
                        grid
                        gap-8
                        md:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {process.map((step) => {

                        const Icon = step.icon;

                        return (
                            <SpedoFeatureCard
                                key={step.number}
                                number={step.number}
                                icon={
                                    <Icon className="h-7 w-7 text-[#D4AF37]" />
                                }
                                title={step.title}
                                description={step.description}
                                variant="light"
                            />
                        );

                    })}
                </div>

            </SpedoContainer>

        </SpedoSection>
    );
}