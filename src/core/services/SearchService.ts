import { searchEngine } from "@/core/search";

import { SearchQuery } from "@/engines/search/SearchQuery";
import { SearchSort } from "@/engines/search/Sort";

export class SearchService {

    search(
        query: SearchQuery,
        sort?: SearchSort
    ) {

        return searchEngine.search(
            query,
            sort
        );

    }

}