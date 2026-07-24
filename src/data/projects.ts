import { Project } from "@/core/project/Project";

export const projects: Project[] = [

    {
        metadata: {
            id: "blue-crest",

            slug: "blue-crest",

            name: "Blue Crest",

            shortName: "Blue Crest",

            developer: "KYN Development",

            country: "Egypt",

            city: "Hurghada",

            district: "Al Ahyaa",

            currency: "EUR",

            status: "Available",

            propertyType: "Residential",

            category: "Resort",

            version: "1.0.0",
        },

        identity: {
            platformCode: "SPEDO",

            developerCode: "KYN",

            projectCode: "BC",
        },

        manifest: {
            ready: true,

            searchable: true,

            published: true,

            importer: "manual",

            schema: "1.0.0",
        },

        assets: {
            gallery: [
                "/projects/blue-crest/gallery/01.webp",
                "/projects/blue-crest/gallery/02.webp",
                "/projects/blue-crest/gallery/03.webp",
            ],

            documents: [],

            masterplan: "/projects/blue-crest/masterplan.webp",

            location: {
                lat: 27.2579,

                lng: 33.8116,
            },

            paymentPlans: [
                {
                    title: "5 Years",

                    downPayment: "10%",

                    installments: "60 Months",
                },

                {
                    title: "7 Years",

                    downPayment: "15%",

                    installments: "84 Months",
                },
            ],

            prices: {
                startingFrom: 55000,

                currency: "EUR",
            },

            statistics: {
                roi: "11%",

                delivery: "2028",

                units: 420,
            },
        },

        units: [],
    },

	    {
        metadata: {
            id: "marvento",

            slug: "marvento",

            name: "Marvento",

            shortName: "Marvento",

            developer: "Marvento Development",

            country: "Egypt",

            city: "Sahl Hasheesh",

            district: "Sahl Hasheesh",

            currency: "EUR",

            status: "Available",

            propertyType: "Residential",

            category: "Resort",

            version: "1.0.0",
        },

        identity: {
            platformCode: "SPEDO",

            developerCode: "MAR",

            projectCode: "MV",
        },

        manifest: {
            ready: true,

            searchable: true,

            published: true,

            importer: "manual",

            schema: "1.0.0",
        },

        assets: {
            gallery: [
                "/projects/marvento/gallery/01.webp",
                "/projects/marvento/gallery/02.webp",
            ],

            documents: [],

            masterplan: "/projects/marvento/masterplan.webp",

            location: {
                lat: 27.034,

                lng: 33.89,
            },

            paymentPlans: [],

            prices: {
                startingFrom: 78000,

                currency: "EUR",
            },

            statistics: {
                roi: "10.8%",

                delivery: "2028",

                units: 310,
            },
        },

        units: [],
    },

    {
        metadata: {
            id: "hurghada-heights",

            slug: "hurghada-heights",

            name: "Hurghada Heights",

            shortName: "Hurghada Heights",

            developer: "Hurghada Heights Development",

            country: "Egypt",

            city: "Hurghada",

            district: "Al Ahyaa",

            currency: "EUR",

            status: "Available",

            propertyType: "Residential",

            category: "Compound",

            version: "1.0.0",
        },

        identity: {
            platformCode: "SPEDO",

            developerCode: "HH",

            projectCode: "HH",
        },

        manifest: {
            ready: true,

            searchable: true,

            published: true,

            importer: "manual",

            schema: "1.0.0",
        },

        assets: {
            gallery: [
                "/projects/hurghada-heights/gallery/01.webp",
            ],

            documents: [],

            masterplan: "/projects/hurghada-heights/masterplan.webp",

            location: {
                lat: 27.29,

                lng: 33.79,
            },

            paymentPlans: [],

            prices: {
                startingFrom: 46000,

                currency: "EUR",
            },

            statistics: {
                roi: "12.1%",

                delivery: "2027",

                units: 520,
            },
        },

        units: [],
    },

    {
        metadata: {
            id: "mark-resort",

            slug: "mark-resort",

            name: "Mark Resort",

            shortName: "Mark Resort",

            developer: "Mark Development",

            country: "Egypt",

            city: "Makadi Bay",

            district: "Makadi Bay",

            currency: "EUR",

            status: "Available",

            propertyType: "Residential",

            category: "Resort",

            version: "1.0.0",
        },

        identity: {
            platformCode: "SPEDO",

            developerCode: "MARK",

            projectCode: "MR",
        },

        manifest: {
            ready: true,

            searchable: true,

            published: true,

            importer: "manual",

            schema: "1.0.0",
        },

        assets: {
            gallery: [
                "/projects/mark-resort/gallery/01.webp",
            ],

            documents: [],

            masterplan: "/projects/mark-resort/masterplan.webp",

            location: {
                lat: 26.99,

                lng: 33.89,
            },

            paymentPlans: [],

            prices: {
                startingFrom: 69000,

                currency: "EUR",
            },

            statistics: {
                roi: "11.5%",

                delivery: "2029",

                units: 280,
            },
        },

        units: [],
    },

];