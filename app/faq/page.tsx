import FloatingHeader from "@/components/header/FloatingHeader";

import PropertyMatcher
from "@/components/ai/PropertyMatcher";

import {

    FAQHero,

    FAQJourney,

    FAQKnowledgeCenter,

    FAQAIAssistant,

    FAQLeadCapture,

    SmartRecommendedProjects,

    FAQLegalTerms,

    FAQWhySpedo,

    FAQContact,

    FAQCTA,

} from "@/components/faq";

export default function FAQPage() {

    return (

        <main>

            <FAQHero />

            <FAQJourney />

            <FAQKnowledgeCenter />

            <FAQAIAssistant />

            <FAQLeadCapture />

            <PropertyMatcher />

            <SmartRecommendedProjects
                category="investment"
            />

            <FAQLegalTerms />

            <FAQWhySpedo />

            <FAQContact />

            <FAQCTA />

        </main>

    );

}