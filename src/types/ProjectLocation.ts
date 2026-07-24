export interface ProjectCoordinates {

    latitude: number;

    longitude: number;

}

export interface ProjectAddress {

    country: string;

    city: string;

    district: string;

    area?: string;

    street?: string;

}

export interface ProjectLocation {

    address: ProjectAddress;

    coordinates?: ProjectCoordinates;

    googleMaps?: string;

    nearby: string[];

    airportDistanceKm?: number;

    beachDistanceMeters?: number;

    downtownDistanceKm?: number;

}