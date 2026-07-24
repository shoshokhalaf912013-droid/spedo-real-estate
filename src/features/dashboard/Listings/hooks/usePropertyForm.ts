"use client";

import {
    useCallback,
    useState,
} from "react";

export interface InformationSection {
    id: string;
    propertyType: string;
    title: string;
    developer: string;
    project: string;
    reference: string;
    owner: string;
    description: string;
    status: string;
}

export interface LocationSection {
    country: string;
    governorate: string;
    city: string;
    area: string;
    district: string;
    compound: string;
    building: string;
    floor: string;
    unit: string;
    address: string;
    googleMaps: string;
    landmark: string;
}

export interface FeaturesSection {
    area: number;
    bedrooms: number;
    bathrooms: number;
    finishing: string;
    furnishing: string;
    view: string;
    parking: number;
    deliveryStatus: string;
    deliveryYear: string;
    amenities: string[];
}

export interface SpecificationsSection {
    builtArea: number;
    landArea: number;
    floorNumber: number;
    totalFloors: number;
    ceilingHeight: string;
    constructionYear: string;
    electricityMeter: boolean;
    waterMeter: boolean;
    gasMeter: boolean;
    notes: string;
}

export interface MediaSection {
    cover: string;
    gallery: string[];
    videos: string[];
    floorPlans: string[];
    brochures: string[];
    virtualTour: string;
}

export interface CashSection {
    enabled: boolean;
    currency: string;
    price: number;
    discount: number;
    finalPrice: number;
    notes: string;
}

export interface InstallmentSection {
    enabled: boolean;
    currency: string;
    totalPrice: number;
    downPaymentPercent: number;
    downPaymentAmount: number;
    years: number;
    installments: number;
    frequency: string;
    maintenancePercent: number;
    maintenanceAmount: number;
    deliveryDate: string;
    gracePeriod: string;
    notes: string;
}

export interface RentSection {
    enabled: boolean;
    daily: number;
    weekly: number;
    monthly: number;
    yearly: number;
    deposit: number;
    minimumPeriod: string;
    notes: string;
}

export interface PropertyFormData {
    information: InformationSection;
    location: LocationSection;
    features: FeaturesSection;
    specifications: SpecificationsSection;
    media: MediaSection;
    cash: CashSection;
    installment: InstallmentSection;
    rent: RentSection;
}

export type PropertyFormSection =
    keyof PropertyFormData;

export type PropertySectionUpdate<
    Section extends PropertyFormSection,
> = Partial<PropertyFormData[Section]>;

const initialPropertyFormData: PropertyFormData = {
    information: {
        id: "",
        propertyType: "",
        title: "",
        developer: "",
        project: "",
        reference: "",
        owner: "",
        description: "",
        status: "draft",
    },

    location: {
        country: "Egypt",
        governorate: "",
        city: "",
        area: "",
        district: "",
        compound: "",
        building: "",
        floor: "",
        unit: "",
        address: "",
        googleMaps: "",
        landmark: "",
    },

    features: {
        area: 0,
        bedrooms: 0,
        bathrooms: 0,
        finishing: "",
        furnishing: "",
        view: "",
        parking: 0,
        deliveryStatus: "",
        deliveryYear: "",
        amenities: [],
    },

    specifications: {
        builtArea: 0,
        landArea: 0,
        floorNumber: 0,
        totalFloors: 0,
        ceilingHeight: "",
        constructionYear: "",
        electricityMeter: false,
        waterMeter: false,
        gasMeter: false,
        notes: "",
    },

    media: {
        cover: "",
        gallery: [],
        videos: [],
        floorPlans: [],
        brochures: [],
        virtualTour: "",
    },

    cash: {
        enabled: false,
        currency: "EGP",
        price: 0,
        discount: 0,
        finalPrice: 0,
        notes: "",
    },

    installment: {
        enabled: false,
        currency: "EGP",
        totalPrice: 0,
        downPaymentPercent: 0,
        downPaymentAmount: 0,
        years: 0,
        installments: 0,
        frequency: "monthly",
        maintenancePercent: 0,
        maintenanceAmount: 0,
        deliveryDate: "",
        gracePeriod: "",
        notes: "",
    },

    rent: {
        enabled: false,
        daily: 0,
        weekly: 0,
        monthly: 0,
        yearly: 0,
        deposit: 0,
        minimumPeriod: "",
        notes: "",
    },
};

function createInitialFormData(): PropertyFormData {
    return {
        information: {
            ...initialPropertyFormData.information,
        },

        location: {
            ...initialPropertyFormData.location,
        },

        features: {
            ...initialPropertyFormData.features,
            amenities: [],
        },

        specifications: {
            ...initialPropertyFormData.specifications,
        },

        media: {
            ...initialPropertyFormData.media,
            gallery: [],
            videos: [],
            floorPlans: [],
            brochures: [],
        },

        cash: {
            ...initialPropertyFormData.cash,
        },

        installment: {
            ...initialPropertyFormData.installment,
        },

        rent: {
            ...initialPropertyFormData.rent,
        },
    };
}

export default function usePropertyForm() {
    const [
        formData,
        setFormData,
    ] = useState<PropertyFormData>(
        createInitialFormData,
    );

    const updateSection = useCallback(
        <Section extends PropertyFormSection>(
            section: Section,
            updates: PropertySectionUpdate<Section>,
        ) => {
            setFormData((previousFormData) => {
                const updatedSection = {
                    ...previousFormData[section],
                    ...updates,
                };

                return {
                    ...previousFormData,
                    [section]: updatedSection,
                };
            });
        },
        [],
    );

    const replaceFormData = useCallback(
        (newFormData: PropertyFormData) => {
            setFormData(newFormData);
        },
        [],
    );

    const resetForm = useCallback(() => {
        setFormData(
            createInitialFormData(),
        );
    }, []);

    return {
        formData,
        setFormData,
        updateSection,
        replaceFormData,
        resetForm,
    };
}