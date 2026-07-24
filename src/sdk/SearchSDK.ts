import { SearchService } from "@/core/services/SearchService";

const searchService = new SearchService();

export class SearchSDK {

    search(query: unknown) {
        return searchService.search(query as never);
    }

}