export interface ResidentialType {

    id: string;

    title: string;

    subtitle: string;

    description: string;

    video: string;

    gallery: string[];

    specifications: {

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

    };

    features: string[];

    advantages: string[];

    suitableFor: string[];

    faq: {

        question: string;

        answer: string;

    }[];

}