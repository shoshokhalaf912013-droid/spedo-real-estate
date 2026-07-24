export interface ProjectGalleryImage {

    id: string;

    title: string;

    description?: string;

    image: string;

    thumbnail?: string;

    category?:
        | "hero"
        | "exterior"
        | "interior"
        | "masterplan"
        | "layout"
        | "construction";

    featured?: boolean;

}

export interface ProjectGallery {

    cover: string;

    images: ProjectGalleryImage[];

}