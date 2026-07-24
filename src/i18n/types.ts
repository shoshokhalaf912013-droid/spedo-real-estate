export type Locale =

    | "en"
    | "ar"
    | "de"
    | "ru"
    | "it"
    | "es"
    | "fr"
    | "pl"
    | "tr"
    | "sk"
    | "nl";

export interface TranslationDictionary {

    navigation: {

        home: string;

        listings: string;

        projects: string;

        rent: string;

        sell: string;

        invest: string;

        areas: string;

        faq: string;

        blog: string;

        contact: string;

    };

    listings: {

        sale: string;

        rent: string;

        residential: string;

        commercial: string;

        investment: string;

    };

}