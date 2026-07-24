import type { Listing }
from "../types";

export const commercialListings: Listing[] = [

    {

        id: "cafe-001",

        slug: "sea-view-cafe-hurghada",

        title:
            "Sea View Cafe In Hurghada Marina",

        description:
            "Fully equipped cafe with premium sea view location.",

        sector: "commercial",

        category: "sale",

        saleType: "cash",

        propertyType: "cafe",

        city: "Hurghada",

        district: "Marina",

        area: 180,

        price: 8500000,

        currency: "EGP",

        featured: true,

        available: true,

        media: {

            cover:
                "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200",

            gallery: [

                "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200",

                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",

                "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1200",

            ],

            videos: [],

        },

        createdAt: "2026-07-04",

    },

];