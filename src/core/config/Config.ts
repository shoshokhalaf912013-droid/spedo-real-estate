export interface SPEDOConfig {

    app: {

        name: string;

        version: string;

        environment: "development" | "production";

    };

    search: {

        maxResults: number;

        defaultSort: "price" | "area";

    };

    projects: {

        autoLoad: boolean;

    };

    localization: {

        defaultLanguage: string;

        defaultCurrency: string;

    };

}