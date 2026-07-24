export type RecommendedProject = {

    slug: string;

    url: string;

    name: string;

    location: string;

    roi: string;

    reason: string;

};

export function getRecommendedProject(
    question: string
): RecommendedProject | null {

    const q =
        question.toLowerCase();

    if (

        q.includes("roi") ||

        q.includes("investment") ||

        q.includes("return")

    ) {

        return {

            slug: "blue-crest",

            url: "/projects/blue-crest",

            name: "Blue Crest",

            location: "Al Ahyaa, Hurghada",

            roi: "11% Expected ROI",

            reason:
                "Strong investment returns with hotel and rental management."

        };

    }

    if (

        q.includes("family") ||

        q.includes("living") ||

        q.includes("residency")

    ) {

        return {

            slug: "hurghada-heights",

            url: "/projects/hurghada-heights",

            name: "Hurghada Heights",

            location: "Hurghada",

            roi: "Premium Community",

            reason:
                "Ideal for families and long-term residential living."

        };

    }

    if (

        q.includes("luxury") ||

        q.includes("premium")

    ) {

        return {

            slug: "marvento",

            url: "/projects/marvento",

            name: "Marvento",

            location: "Magawish, Hurghada",

            roi: "Luxury Development",

            reason:
                "A premium lifestyle project with luxury amenities."

        };

    }

    if (

        q.includes("rental") ||

        q.includes("airbnb") ||

        q.includes("tourism")

    ) {

        return {

            slug: "mark-resort",

            url: "/projects/mark-resort",

            name: "Mark Resort",

            location: "Airport Road, Hurghada",

            roi: "10% Expected ROI",

            reason:
                "Excellent choice for short-term rentals and tourism investment."

        };

    }

    return null;

}