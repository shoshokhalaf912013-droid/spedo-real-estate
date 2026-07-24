import ResidentialHero
from "@/features/residential/Hero/ResidentialHero";

import ResidentialMegaMenu
from "@/features/residential/MegaMenu/ResidentialMegaMenu";

import {
    ResidentialProvider,
}
from "@/features/residential/store/ResidentialContext";

export default function ResidentialPage() {

    return (

        <ResidentialProvider>

            <main
                className="
                    min-h-screen
                    bg-[#020817]
                "
            >

                <ResidentialHero />

                <ResidentialMegaMenu />

            </main>

        </ResidentialProvider>

    );

}