export type ProjectStatus =
  | "coming-soon"
  | "available"
  | "sold-out";

export type ProjectCategory =
  | "apartment"
  | "villa"
  | "townhouse"
  | "chalet"
  | "studio"
  | "commercial";

export interface ProjectDeveloper {
  id: string;
  name: string;
  logo?: string;
  website?: string;
}

export interface ProjectLocation {
  country: string;
  city: string;
  district: string;
  latitude?: number;
  longitude?: number;
  googleMapsUrl?: string;
}

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  cover?: boolean;
}

export interface ProjectAmenity {
  id: string;
  title: string;
  icon?: string;
}

export interface ProjectFeature {
  id: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;

  slug: string;

  name: string;

  subtitle?: string;

  description: string;

  status: ProjectStatus;

  category: ProjectCategory;

  heroImage: string;

  gallery: ProjectImage[];

  location: ProjectLocation;

  developer: ProjectDeveloper;

  amenities: ProjectAmenity[];

  features: ProjectFeature[];

  startingPrice: number;

  currency: string;

  installmentYears?: number;

  deliveryYear?: number;

  areaFrom?: number;

  areaTo?: number;

  seoTitle?: string;

  seoDescription?: string;
}