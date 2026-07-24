import { SPEDOConfig } from "./Config";

export const defaultConfig: SPEDOConfig = {

    app: {

        name: "SPEDO",

        version: "1.0.0",

        environment: "development"

    },

    search: {

        maxResults: 100,

        defaultSort: "price"

    },

    projects: {

        autoLoad: true

    },

    localization: {

        defaultLanguage: "en",

        defaultCurrency: "EGP"

    }

};