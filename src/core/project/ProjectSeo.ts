import type { Project } from "./Project";

export class ProjectSeo {

    constructor(
        private readonly project: Project
    ) {}

    title(): string {

        return this.project.metadata.name;

    }

    description(): string {

        return `${this.project.metadata.name} by ${this.project.metadata.developer} in ${this.project.metadata.city}, ${this.project.metadata.country}.`;

    }

    slug(): string {

        return this.project.metadata.slug;

    }

    canonicalUrl(): string {

        return `/projects/${this.project.metadata.slug}`;

    }

    keywords(): string[] {

        return [

            this.project.metadata.name,

            this.project.metadata.shortName,

            this.project.metadata.developer,

            this.project.metadata.city,

            this.project.metadata.country,

            this.project.metadata.category,

            this.project.metadata.propertyType

        ];

    }

    openGraph() {

        return {

            title: this.title(),

            description: this.description(),

            url: this.canonicalUrl()

        };

    }

    jsonLd() {

        return {

            "@context": "https://schema.org",

            "@type": "Residence",

            name: this.project.metadata.name,

            description: this.description(),

            url: this.canonicalUrl()

        };

    }

}