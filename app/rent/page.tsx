import FloatingHeader from "@/components/header/FloatingHeader";

import RentHero from "@/features/rent/Hero/RentHero";
import RentFeatured from "@/features/rent/Featured/RentFeatured";
import RentAreas from "@/features/rent/Areas/RentAreas";
import RentCalculator from "@/features/rent/Calculator/RentCalculator";
import RentFAQ from "@/features/rent/FAQ/RentFAQ";
import RentCTA from "@/features/rent/CTA/RentCTA";

export default function RentPage() {
    return (
        <>
            <FloatingHeader />

            <main
                className="
                    min-h-screen
                    bg-[#05070D]
                    text-white
                    pt-24
                "
            >
                <RentHero />

                <RentFeatured />

                <RentAreas />

                <RentCalculator />

                <RentFAQ />

                <RentCTA />

            </main>
        </>
    );
}