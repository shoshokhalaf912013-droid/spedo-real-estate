export interface Area {
    id: string;

    slug: string;

    name: string;

    heroTitle: string;

    heroDescription: string;

    heroImage: string;

    gallery: string[];

    investmentScore: number;

    rentalDemand: number;

    tourismGrowth: number;

    appreciation: number;

    liquidity: number;

    risk: "Low" | "Medium" | "High";

    averageROI: string;

    startingPrice: string;

    currency: "EUR";

    delivery: string;

    airportDistance: string;

    beachDistance: string;

    foreignOwnership: boolean;

    highlights: string[];

    projectIds: string[];

    developerIds: string[];
}

export const areas: Area[] = [
    {
        id: "hurghada",

        slug: "hurghada",

        name: "Hurghada",

        heroTitle: "The Capital Of Red Sea Investment",

        heroDescription:
            "Hurghada is the largest investment and tourism destination on Egypt's Red Sea coast, offering year-round tourism, strong rental demand, modern infrastructure and excellent long-term capital appreciation.",

        heroImage: "/areas/hurghada-marina.webp",

        gallery: [
            "/areas/hurghada/1.webp",
            "/areas/hurghada/2.webp",
            "/areas/hurghada/3.webp",
        ],

        investmentScore: 94,

        rentalDemand: 95,

        tourismGrowth: 96,

        appreciation: 91,

        liquidity: 92,

        risk: "Low",

        averageROI: "10% - 12%",

        startingPrice: "€45,000",

        currency: "EUR",

        delivery: "Ready & Off Plan",

        airportDistance: "10 Minutes",

        beachDistance: "5 Minutes",

        foreignOwnership: true,

        highlights: [
            "International Airport",
            "Year-Round Tourism",
            "Strong Rental Demand",
            "Affordable Entry Prices",
        ],

        projectIds: [
            "blue-crest",
            "hurghada-heights",
        ],

        developerIds: [
            "kyn-development",
        ],
    },

    {
        id: "el-gouna",

        slug: "el-gouna",

        name: "El Gouna",

        heroTitle: "Luxury Lagoon Lifestyle",

        heroDescription:
            "An internationally recognised luxury destination with private marinas, premium resorts and one of the strongest lifestyle communities in the Red Sea.",

        heroImage: "/areas/el-gouna-lagoon.webp",

        gallery: [
            "/areas/el-gouna/1.webp",
            "/areas/el-gouna/2.webp",
            "/areas/el-gouna/3.webp",
        ],

        investmentScore: 91,

        rentalDemand: 88,

        tourismGrowth: 90,

        appreciation: 93,

        liquidity: 90,

        risk: "Low",

        averageROI: "8% - 10%",

        startingPrice: "€120,000",

        currency: "EUR",

        delivery: "Ready & Off Plan",

        airportDistance: "35 Minutes",

        beachDistance: "1 Minute",

        foreignOwnership: true,

        highlights: [
            "Luxury Marina",
            "Golf Courses",
            "Premium Lifestyle",
            "International Community",
        ],

        projectIds: [],

        developerIds: [],
    },

    {
        id: "sahl-hasheesh",

        slug: "sahl-hasheesh",

        name: "Sahl Hasheesh",

        heroTitle: "Beachfront Luxury Destination",

        heroDescription:
            "A premium beachfront community with luxury developments, private beaches and high-end tourism infrastructure.",

        heroImage: "/areas/sahl-hasheesh-beachfront.webp",

        gallery: [
            "/areas/sahl-hasheesh/1.webp",
            "/areas/sahl-hasheesh/2.webp",
            "/areas/sahl-hasheesh/3.webp",
        ],

        investmentScore: 92,

        rentalDemand: 91,

        tourismGrowth: 92,

        appreciation: 90,

        liquidity: 89,

        risk: "Low",

        averageROI: "9% - 11%",

        startingPrice: "€80,000",

        currency: "EUR",

        delivery: "Ready & Off Plan",

        airportDistance: "20 Minutes",

        beachDistance: "1 Minute",

        foreignOwnership: true,

        highlights: [
            "Private Beaches",
            "Luxury Resorts",
            "Beachfront Living",
            "Premium Developments",
        ],

        projectIds: [
            "marvento",
        ],

        developerIds: [],
    },

    {
        id: "makadi-bay",

        slug: "makadi-bay",

        name: "Makadi Bay",

        heroTitle: "Growing Resort Investment Hub",

        heroDescription:
            "A rapidly growing destination combining beachfront developments, family tourism and excellent long-term value.",

        heroImage: "/areas/makadi-bay-resort.webp",

        gallery: [
            "/areas/makadi-bay/1.webp",
            "/areas/makadi-bay/2.webp",
            "/areas/makadi-bay/3.webp",
        ],

        investmentScore: 90,

        rentalDemand: 89,

        tourismGrowth: 90,

        appreciation: 89,

        liquidity: 88,

        risk: "Low",

        averageROI: "9% - 12%",

        startingPrice: "€55,000",

        currency: "EUR",

        delivery: "Ready & Off Plan",

        airportDistance: "30 Minutes",

        beachDistance: "2 Minutes",

        foreignOwnership: true,

        highlights: [
            "Beachfront Projects",
            "Family Destination",
            "Growing Tourism",
            "Excellent Value",
        ],

        projectIds: [
            "mark-resort",
        ],

        developerIds: [],
    },

    {
        id: "soma-bay",

        slug: "soma-bay",

        name: "Soma Bay",

        heroTitle: "Ultra Luxury Resort Destination",

        heroDescription:
            "One of the Red Sea's most exclusive golf, marina and wellness destinations, offering premium luxury investment opportunities.",
heroImage: "/areas/soma-bay-golf-marina.webp",

        gallery: [
            "/areas/soma-bay/1.webp",
            "/areas/soma-bay/2.webp",
            "/areas/soma-bay/3.webp",
        ],

        investmentScore: 93,

        rentalDemand: 87,

        tourismGrowth: 89,

        appreciation: 94,

        liquidity: 86,

        risk: "Low",

        averageROI: "8% - 10%",

        startingPrice: "€150,000",

        currency: "EUR",

        delivery: "Luxury Developments",

        airportDistance: "40 Minutes",

        beachDistance: "1 Minute",

        foreignOwnership: true,

        highlights: [
            "Golf Courses",
            "Luxury Resorts",
            "Private Marina",
            "Wellness Lifestyle",
        ],

        projectIds: [],

        developerIds: [],
    },
];