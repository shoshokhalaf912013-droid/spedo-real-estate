import FloatingHeader from "@/components/header/FloatingHeader";

import BuyHero from "@/features/buy/Hero/BuyHero";
import BuyBenefits from "@/features/buy/Benefits/BuyBenefits";
import BuyProjects from "@/features/buy/Projects/BuyProjects";
import BuyProcess from "@/features/buy/Process/BuyProcess";
import BuyFAQ from "@/features/buy/FAQ/BuyFAQ";
import BuyCTA from "@/features/buy/CTA/BuyCTA";
import BuyStats from "@/features/buy/Stats/BuyStats";
import WhyRedSea from "@/features/buy/WhyRedSea/WhyRedSea";

export default function BuyPage() {
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
		<BuyHero />

		<BuyStats />

		<WhyRedSea />

		<BuyBenefits />

		<BuyProjects />

		<BuyProcess />

		<BuyFAQ />

		<BuyCTA />    
       </main>
        </>
    );
}