export interface Developer {

    id: string;

    slug: string;

    name: string;

    shortName: string;

    logo: string;

    coverImage: string;

    established: number;

    headquarters: string;

    website: string;

    experienceYears: number;

    completedProjects: number;

    activeProjects: number;

    deliveryRecord: "Excellent" | "Very Good" | "Good";

    investmentRating: number;

    verified: boolean;

    description: string;

    specialties: string[];

    projectIds: string[];
}

export const developers: Developer[] = [

    {
        id: "kyn-development",

        slug: "kyn-development",

        name: "KYN Development",

        shortName: "KYN",

        logo: "/developers/kyn/logo.webp",

        coverImage: "/developers/kyn/cover.webp",

        established: 2010,

        headquarters: "Hurghada",

        website: "",

        experienceYears: 15,

        completedProjects: 6,

        activeProjects: 2,

        deliveryRecord: "Excellent",

        investmentRating: 95,

        verified: true,

        description:
            "KYN Development is one of the emerging real estate developers in the Red Sea region, focusing on modern residential communities with strong investment potential.",

        specialties: [
            "Residential",
            "Investment",
            "Mixed Use",
        ],

        projectIds: [
            "blue-crest",
        ],
    },

    {
        id: "marvento-development",

        slug: "marvento-development",

        name: "Marvento Development",

        shortName: "Marvento",

        logo: "/developers/marvento/logo.webp",

        coverImage: "/developers/marvento/cover.webp",

        established: 2015,

        headquarters: "Sahl Hasheesh",

        website: "",

        experienceYears: 10,

        completedProjects: 3,

        activeProjects: 1,

        deliveryRecord: "Excellent",

        investmentRating: 92,

        verified: true,

        description:
            "Developer of luxury beachfront communities designed for premium living and international investors.",

        specialties: [
            "Beachfront",
            "Luxury",
            "Hospitality",
        ],

        projectIds: [
            "marvento",
        ],
    },

    {
        id: "hurghada-heights-development",

        slug: "hurghada-heights-development",

        name: "Hurghada Heights Development",

        shortName: "Hurghada Heights",

        logo: "/developers/hurghada-heights/logo.webp",

        coverImage: "/developers/hurghada-heights/cover.webp",

        established: 2012,

        headquarters: "Hurghada",

        website: "",

        experienceYears: 13,

        completedProjects: 5,

        activeProjects: 1,

        deliveryRecord: "Excellent",

        investmentRating: 91,

        verified: true,

        description:
            "Developer focused on residential projects that combine affordability with long-term investment value.",

        specialties: [
            "Residential",
            "Family Housing",
        ],

        projectIds: [
            "hurghada-heights",
        ],
    },

    {
        id: "mark-development",

        slug: "mark-development",

        name: "Mark Development",

        shortName: "Mark",

        logo: "/developers/mark/logo.webp",

        coverImage: "/developers/mark/cover.webp",

        established: 2016,

        headquarters: "Makadi Bay",

        website: "",

        experienceYears: 9,

        completedProjects: 2,

        activeProjects: 1,

        deliveryRecord: "Very Good",

        investmentRating: 90,

        verified: true,

        description:
            "Developer specialized in luxury resort-style communities with premium amenities and attractive rental opportunities.",

        specialties: [
            "Resorts",
            "Luxury",
            "Beachfront",
        ],

        projectIds: [
            "mark-resort",
        ],
    },

];