export type ItalianSortOption =
    | "price_asc"
    | "price_desc";

export interface ItalianInterpreterResult {
    sortBy?: ItalianSortOption;
}

export class ItalianInterpreter {

    interpret(
        text: string
    ): ItalianInterpreterResult {

        const q =
            text
                .trim()
                .toLowerCase();

        const result:
            ItalianInterpreterResult = {};

        // =====================
        // PRICE SORTING
        // =====================

        if (

            q.includes("più economico")

            ||

            q.includes("piu economico")

            ||

            q.includes("meno costoso")

            ||

            q.includes("prezzo più basso")

            ||

            q.includes("prezzo piu basso")

            ||

            q.includes("cheapest")

            ||

            q.includes("lowest price")

            ||

            q.includes("ارخص")

            ||

            q.includes("أرخص")

        ) {

            result.sortBy =
                "price_asc";

        }

        if (

            q.includes("più costoso")

            ||

            q.includes("piu costoso")

            ||

            q.includes("prezzo più alto")

            ||

            q.includes("prezzo piu alto")

            ||

            q.includes("most expensive")

            ||

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

export const italianInterpreter =
    new ItalianInterpreter();

export default italianInterpreter;