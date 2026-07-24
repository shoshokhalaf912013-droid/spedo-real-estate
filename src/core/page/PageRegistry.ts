import { Page } from "./Page";

export class PageRegistry {

    private readonly pages =
        new Map<string, Page>();

    register(page: Page) {

        this.pages.set(
            page.id,
            page
        );

    }

    get(id: string) {

        return this.pages.get(id);

    }

    all() {

        return Array.from(
            this.pages.values()
        );

    }

}