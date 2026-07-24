import type { AIQuery }
from "./types";

export class SearchInterpreter {

    interpret(
        text: string
    ): AIQuery {

        const q =
            text.toLowerCase();

        const result: AIQuery = {

            intent:
                "search"

        };

        // =====================
        // GREETING
        // =====================

        if (

            q.includes("السلام عليكم")

            ||

            q.includes("مرحبا")

            ||

            q.includes("اهلا")

            ||

            q.includes("hello")

            ||

            q.includes("hi")

        ) {

            result.intent =
                "greeting";

            return result;

        }

        // =====================
        // HELP
        // =====================

        if (

            q.includes("من انت")

            ||

            q.includes("ماذا تستطيع")

            ||

            q.includes("ماذا يمكنك")

            ||

            q.includes("ساعدني")

            ||

            q.includes("help")

        ) {

            result.intent =
                "help";

            return result;

        }

        // =====================
        // PROJECT LIST
        // =====================

        if (

            q.includes("ما اسماء المشاريع")

            ||

            q.includes("ما هي المشاريع")

            ||

            q.includes("المشاريع التي لديك")

            ||

            q.includes("انت تقول 4 مشاريع")

            ||

            q.includes("what projects")

        ) {

            result.intent =
                "projects";

            return result;

        }

        // =====================
        // INVESTMENT
        // =====================

        if (

            q.includes("استثمار")

            ||

            q.includes("investment")

            ||

            q.includes("roi")

        ) {

            result.intent =
                "investment";

        }

        // =====================
        // PRICE UNDERSTANDING
        // =====================

        const millionMatch =

            q.match(
                /(\d+(?:\.\d+)?)\s*مليون/
            );

        if (

            millionMatch

        ) {

            result.intent =
                "budget";

            result.maxPrice =

                Number(
                    millionMatch[1]
                ) * 1000000;

        }

        // =====================
        // PROJECTS
        // =====================

        if (

            q.includes("mark")

            ||

            q.includes("مارك")

        ) {

            result.project =
                "Mark Resort";

        }

        if (

            q.includes("marvento")

            ||

            q.includes("مارفينتو")

        ) {

            result.project =
                "Marvento Resort";

        }

        if (

            q.includes("blue")

            ||

            q.includes("بلو")

        ) {

            result.project =
                "Blue Crest";

        }

        if (

            q.includes("الغردقة")

            ||

            q.includes("hurghada")

        ) {

            result.project =
                "Hurghada Heights";

        }

        // =====================
        // TYPES
        // =====================

        if (

            q.includes("استوديو")

            ||

            q.includes("studio")

        ) {

            result.type =
                "Studio";

        }

        if (

            q.includes("شقة")

            ||

            q.includes("apartment")

        ) {

            result.type =
                "Apartment";

        }

        if (

            q.includes("غرفة واحدة")

            ||

            q.includes("one bedroom")

        ) {

            result.bedrooms = 1;

        }

        if (

            q.includes("غرفتين")

            ||

            q.includes("two bedroom")

        ) {

            result.bedrooms = 2;

        }

        // =====================
        // SORTING
        // =====================

        if (

            q.includes("ارخص")

            ||

            q.includes("أرخص")

            ||

            q.includes("cheapest")

        ) {

            result.sortBy =
                "price_asc";

        }

        if (

            q.includes("اغلى")

            ||

            q.includes("أغلى")

        ) {

            result.sortBy =
                "price_desc";

        }

        return result;

    }

}

export const searchInterpreter =
    new SearchInterpreter();

export default searchInterpreter;