import SpedoSection from "@/components/spedo/layout/SpedoSection";
import SpedoContainer from "@/components/spedo/layout/SpedoContainer";
import SectionHeader from "@/components/spedo/display/SectionHeader";
import Accordion from "@/components/spedo/display/Accordion";

import { faq } from "@/data/faq";

export default function BuyFAQ() {
    return (
        <SpedoSection variant="dark">

            <SpedoContainer>

                <SectionHeader
                    badge="FAQ"
                    title="Frequently Asked Questions"
                    description="Everything you need to know before investing in property through SPEDO."
                />

                <div className="mx-auto mt-16 max-w-4xl">

                    <Accordion items={faq} />

                </div>

            </SpedoContainer>

        </SpedoSection>
    );
}