export type SpedoLanguage =

    | "ar"
    | "en"
    | "ru"
    | "de"
    | "it"
    | "fr"
    | "tr";

export class LanguageDetector {

    detect(
        text: string
    ): SpedoLanguage {

        // =====================
        // Arabic
        // =====================

        if (

            /[\u0600-\u06FF]/.test(
                text
            )

        ) {

            return "ar";

        }

        // =====================
        // Russian
        // =====================

        if (

            /[\u0400-\u04FF]/.test(
                text
            )

        ) {

            return "ru";

        }

        // =====================
        // Turkish
        // =====================

        if (

            text.match(

                /[çğıöşüÇĞİÖŞÜ]/

            )

        ) {

            return "tr";

        }

        // =====================
        // German
        // =====================

        if (

            text.match(

                /[äöüßÄÖÜ]/

            )

        ) {

            return "de";

        }

        // =====================
        // Italian
        // =====================

        if (

            text.includes("voglio")

            ||

            text.includes("appartamento")

        ) {

            return "it";

        }

        // =====================
        // French
        // =====================

        if (

            text.includes("bonjour")

            ||

            text.includes("je veux")

        ) {

            return "fr";

        }

        return "en";

    }

}

export const languageDetector =
    new LanguageDetector();

export default languageDetector;