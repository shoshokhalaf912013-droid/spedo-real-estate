import type { ResidentialType } from "./types";

const apartments: ResidentialType = {

    id: "apartments",

    title: "Apartments",

    subtitle:
        "Luxury Residential Apartments",

    description:
        "Modern apartments designed for permanent living, investment and holiday homes across the Red Sea coastline.",

    video:
        "/videos/residential/apartments.mp4",

    gallery: [

        "/images/residential/apartments/1.jpg",

        "/images/residential/apartments/2.jpg",

        "/images/residential/apartments/3.jpg",

        "/images/residential/apartments/4.jpg",

        "/images/residential/apartments/5.jpg"

    ],

    specifications: {

        floors: [

            "Ground",

            "1",

            "2",

            "3",

            "4",

            "5"

        ],

        views: [

            "Sea",

            "Pool",

            "Garden"

        ],

        finishing: [

            "Fully Finished",

            "Semi Finished",

            "Core & Shell"

        ],

        furnishing: [

            "Furnished",

            "Unfurnished"

        ],

        parking: [

            "Yes",

            "No"

        ],

        balcony: [

            "Yes",

            "No"

        ],

        garden: [

            "Yes",

            "No"

        ],

        roof: [

            "Yes",

            "No"

        ],

        smartHome: [

            "Yes",

            "No"

        ],

        elevators: [

            "1",

            "2",

            "3"

        ]

    },

    features: [

        "Swimming Pool",

        "Club House",

        "Gym",

        "Kids Area",

        "24/7 Security",

        "Smart Access"

    ],

    advantages: [

        "High rental demand",

        "Easy resale",

        "Perfect for families",

        "Ideal for investors"

    ],

    suitableFor: [

        "Living",

        "Investment",

        "Holiday Home"

    ],

    faq: [

        {

            question:
                "Who are apartments suitable for?",

            answer:
                "Families, professionals and investors."

        },

        {

            question:
                "Can apartments generate rental income?",

            answer:
                "Yes. Apartments are among the highest-demand rental property types."

        }

    ]

};

export default apartments;