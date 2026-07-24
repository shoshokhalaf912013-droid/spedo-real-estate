export function getProjectCover(
    project: string
) {

    switch (
        project.toLowerCase()
    ) {

        case "blue crest":

            return "/projects/blue-crest/cover.jpg";

        case "marvento":

            return "/projects/marvento/hero.jpeg";

        case "mark resort":

            return "/projects/mark-resort/gallery-4.jpg";

        case "hurghada heights":

            return "/projects/hurghada-heights/cover.jpg";

        default:

            return "/projects/default-property.jpg";

    }

}