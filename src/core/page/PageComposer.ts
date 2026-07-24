import { Page } from "./Page";

export class PageComposer {

    compose(page: Page) {

        return page.sections

            .filter(

                section => section.enabled

            )

            .sort(

                (a, b) =>

                    a.order - b.order

            );

    }

}