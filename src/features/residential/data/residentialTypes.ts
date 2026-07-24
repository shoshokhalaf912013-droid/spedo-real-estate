export interface ResidentialType {

    id: string;

    title: string;

    description: string;

    video: string;

    gallery: string[];

    floors: string[];

    views: string[];

    finishing: string[];

    furnishing: string[];

    parking: string[];

    balcony: string[];

    garden: string[];

    roof: string[];

    smartHome: string[];

    elevators: string[];

    features: string[];

    suitableFor: string[];

}

export const residentialTypes: ResidentialType[] = [

    {

        id: "apartments",

        title: "Apartments",

        description:
            "Luxury apartments designed for living, investment and holiday homes across the Red Sea.",

        video: "/videos/residential/apartments.mp4",

        gallery: [

            "/images/residential/apartments/1.jpg",
            "/images/residential/apartments/2.jpg",
            "/images/residential/apartments/3.jpg",
            "/images/residential/apartments/4.jpg",
            "/images/residential/apartments/5.jpg"

        ],

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

        ],

        features: [

            "Swimming Pool",
            "Gym",
            "Club House",
            "Kids Area",
            "Security 24/7",
            "Smart Access"

        ],

        suitableFor: [

            "Living",
            "Investment",
            "Vacation Home"

        ]

    }

];