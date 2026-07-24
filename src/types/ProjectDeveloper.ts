export interface DeveloperContact {

    phone?: string;

    whatsapp?: string;

    email?: string;

    website?: string;

}

export interface DeveloperSocial {

    facebook?: string;

    instagram?: string;

    linkedin?: string;

    youtube?: string;

    twitter?: string;

}

export interface ProjectDeveloper {

    id: string;

    code: string;

    name: string;

    shortName: string;

    slug: string;

    description?: string;

    logo?: string;

    cover?: string;

    established?: number;

    headquarters?: string;

    country?: string;

    city?: string;

    contact: DeveloperContact;

    social: DeveloperSocial;

    projects: string[];

    active: boolean;

}