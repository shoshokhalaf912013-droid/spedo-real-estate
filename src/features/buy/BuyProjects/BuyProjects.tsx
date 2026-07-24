import SpedoSection from "@/components/spedo/layout/SpedoSection";
import SpedoContainer from "@/components/spedo/layout/SpedoContainer";
import SectionHeader from "@/components/spedo/display/SectionHeader";
import SpedoProjectCard from "@/components/spedo/cards/SpedoProjectCard";

import { projects } from "@/data/projects";

function getStartingPrice(
    units: (typeof projects)[number]["units"],
    currency: string
): string {
    const validPrices = units
        .map((unit) => unit.price)
        .filter(
            (price): price is number =>
                typeof price === "number" &&
                Number.isFinite(price) &&
                price > 0
        );

    if (validPrices.length === 0) {
        return "Contact Us";
    }

    const minimumPrice = Math.min(...validPrices);

    return `${minimumPrice.toLocaleString("en-US")} ${currency}`;
}

export default function BuyProjects() {
    const publishedProjects = projects.filter(
        (project) =>
            project.manifest.published &&
            project.manifest.ready
    );

    return (
        <SpedoSection variant="projects">
            <SpedoContainer>
                <SectionHeader
                    badge="Featured Projects"
                    title="Investment Opportunities Across The Red Sea"
                    description="Explore verified projects with strong ROI, flexible payment plans, and prime locations across Hurghada, Sahl Hasheesh, Makadi Bay and more."
                />

                <div
                    className="
                        grid
                        gap-8
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {publishedProjects.map((project) => (
                        <SpedoProjectCard
                            key={project.metadata.id}
                            image="/placeholder.svg"
                            project={project.metadata.name}
                            developer={project.metadata.developer}
                            location={`${project.metadata.district}, ${project.metadata.city}`}
                            investmentScore={0}
                            roi="Contact Us"
                            startingPrice={getStartingPrice(
                                project.units,
                                project.metadata.currency
                            )}
                            paymentPlan="Available"
                            status={project.metadata.status}
                        />
                    ))}
                </div>
            </SpedoContainer>
        </SpedoSection>
    );
}