"use client";

import { useState } from "react";

export interface PropertyBuilder {

    /* =========================
       GENERAL
    ========================= */

    title: string;

    reference: string;

    sector: string;

    category: string;

    propertyType: string;

    status: string;

    /* =========================
       PRICING
    ========================= */

    price: number;

    currency: string;

    /* =========================
       LOCATION
    ========================= */

    country: string;

    governorate: string;

    city: string;

    district: string;

    address: string;

    latitude: number | null;

    longitude: number | null;

    /* =========================
       DESCRIPTION
    ========================= */

    description: string;

    /* =========================
       SPECIFICATIONS
    ========================= */

    specifications: Record<
        string,
        unknown
    >;

    /* =========================
       MEDIA
    ========================= */

    cover: File | null;

    gallery: File[];

    videos: File[];

    floorPlans: File[];

    brochure: File | null;

    virtualTour: string;

    /* =========================
       SEO
    ========================= */

    slug: string;

    seoTitle: string;

    seoDescription: string;

    keywords: string[];

    /* =========================
       PUBLISH
    ========================= */

    featured: boolean;

    published: boolean;

}

const initialProperty: PropertyBuilder = {

    title: "",

    reference: "",

    sector: "residential",

    category: "sale",

    propertyType: "apartments",

    status: "available",

    price: 0,

    currency: "EGP",

    country: "Egypt",

    governorate: "",

    city: "",

    district: "",

    address: "",

    latitude: null,

    longitude: null,

    description: "",

    specifications: {},

    cover: null,

    gallery: [],

    videos: [],

    floorPlans: [],

    brochure: null,

    virtualTour: "",

    slug: "",

    seoTitle: "",

    seoDescription: "",

    keywords: [],

    featured: false,

    published: false,

};

export default function usePropertyBuilder() {

    const [

        property,

        setProperty,

    ] = useState(initialProperty);

    function updateField(

        field: keyof PropertyBuilder,

        value: any,

    ) {

        setProperty(

            previous => ({

                ...previous,

                [field]: value,

            })

        );

    }

    function updateSpecification(

        key: string,

        value: unknown,

    ) {

        setProperty(

            previous => ({

                ...previous,

                specifications: {

                    ...previous.specifications,

                    [key]: value,

                },

            })

        );

    }

    function resetBuilder() {

        setProperty(initialProperty);

    }

    return {

        property,

        updateField,

        updateSpecification,

        resetBuilder,

    };

}