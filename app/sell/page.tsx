import {
    ListingsHero,
    ListingsFilters,
    ListingsGrid,
} from "@/features/listings";

export default function SellPage() {

    return (

        <main
            className="
                min-h-screen
                bg-[#08101E]
            "
        >

            <ListingsHero
                title="
                Sell Your Property
                "

                subtitle="
                Discover apartments, villas,
                chalets, penthouses, commercial
                units and investment opportunities
                available for cash and installment
                plans across the Red Sea.
                "
            />

            <ListingsFilters
                defaultCategory="sale"
            />

            <ListingsGrid
                category="sale"
            />

        </main>

    );

}