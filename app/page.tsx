import FloatingHeader from "@/components/header/FloatingHeader";

import HeroSection from "@/components/hero/HeroSection";

import FeaturedProjectsGrid from "@/components/home/FeaturedProjectsGrid";

import ProjectSearch from "@/components/search/ProjectSearch";

import FeaturedMarvento from "@/components/home/FeaturedMarvento";

import FeaturedMarkResort from "@/components/home/FeaturedMarkResort";

import FeaturedBlueCrest from "@/components/home/FeaturedBlueCrest";

import FeaturedHurghadaHeights from "@/components/home/FeaturedHurghadaHeights";

import ServicesHub from "@/components/home/ServicesHub";

import InvestmentFinder from "@/components/search/InvestmentFinder";

import WhySpedo from "@/components/home/WhySpedo";

import WhyInvestRedSea from "@/components/home/WhyInvestRedSea";

import ProcessTimeline from "@/components/home/ProcessTimeline";

import Testimonials from "@/components/home/Testimonials";

import FinalCTA from "@/components/home/FinalCTA";

import RedSeaDestinations from "@/components/destinations/RedSeaDestinations";


import WhatsappButton from "@/components/whatsapp/WhatsappButton";

export default function Home() {

    return (

        <>


            <main>

                <HeroSection />

                <FeaturedMarvento />

                <FeaturedMarkResort />

                <FeaturedBlueCrest />

                <FeaturedHurghadaHeights />

                <InvestmentFinder />

                <FeaturedProjectsGrid />

                <ServicesHub />

                <WhySpedo />

                <WhyInvestRedSea />

                <ProcessTimeline />

                <Testimonials />

                <FinalCTA />
              

              <RedSeaDestinations />

	      
             <ProjectSearch />


            </main>
	     

            <WhatsappButton />

        </>

    );

}