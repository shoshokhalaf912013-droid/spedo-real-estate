"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import PropertyTypeSelector from "./Selectors/PropertyTypeSelector";
import CategorySelector from "./Selectors/CategorySelector";
import SectorSelector from "./Selectors/SectorSelector";

import CoverSelector from "./Media/CoverSelector";
import GalleryUploader from "./Media/GalleryUploader";
import VideoUploader from "./Media/VideoUploader";
import FloorPlansUploader from "./Media/FloorPlansUploader";
import BrochureUploader from "./Media/BrochureUploader";
import VirtualTourInput from "./Media/VirtualTourInput";

export default function AddListingForm() {
    const searchParams = useSearchParams();

    const initialCategory =
        searchParams.get("category") || "sale";

    const initialSector =
        searchParams.get("sector") || "residential";

    const initialType =
        searchParams.get("type") || "apartments";

    const [
        category,
        setCategory,
    ] = useState(initialCategory);

    const [
        sector,
        setSector,
    ] = useState(initialSector);

    const [
        propertyType,
        setPropertyType,
    ] = useState(initialType);

    const [
        coverImage,
        setCoverImage,
    ] = useState("");

    const [
        galleryImages,
        setGalleryImages,
    ] = useState<string[]>([]);

    const [
        propertyVideos,
        setPropertyVideos,
    ] = useState<string[]>([]);

    const [
        floorPlans,
        setFloorPlans,
    ] = useState<string[]>([]);

    const [
        brochures,
        setBrochures,
    ] = useState<string[]>([]);

    const [
        virtualTour,
        setVirtualTour,
    ] = useState("");

    return (
        <form
            className="
                mx-auto
                max-w-7xl
                space-y-10
            "
        >
            {/* HEADER */}

            <section
                className="
                    rounded-[40px]
                    bg-[#111827]
                    p-10
                "
            >
                <h1
                    className="
                        text-5xl
                        font-black
                        text-[#F97316]
                    "
                >
                    Create New Property
                </h1>

                <p
                    className="
                        mt-4
                        text-slate-400
                    "
                >
                    Add residential and commercial
                    properties with images, videos,
                    floor plans and brochures.
                </p>
            </section>

            {/* PROPERTY SETTINGS */}

            <section
                className="
                    rounded-[40px]
                    bg-[#111827]
                    p-10
                "
            >
                <h2
                    className="
                        mb-8
                        text-3xl
                        font-black
                        text-white
                    "
                >
                    Property Settings
                </h2>

                <div
                    className="
                        grid
                        gap-6
                        md:grid-cols-3
                    "
                >
                    <CategorySelector
                        value={category}
                        onChange={setCategory}
                    />

                    <SectorSelector
                        value={sector}
                        onChange={setSector}
                    />

                    <PropertyTypeSelector
                        value={propertyType}
                        onChange={setPropertyType}
                    />
                </div>
            </section>

            {/* PROPERTY INFORMATION */}

            <section
                className="
                    rounded-[40px]
                    bg-[#111827]
                    p-10
                "
            >
                <h2
                    className="
                        mb-8
                        text-3xl
                        font-black
                        text-white
                    "
                >
                    Property Information
                </h2>

                <div
                    className="
                        grid
                        gap-6
                        md:grid-cols-2
                    "
                >
                    <input
                        placeholder="Property Title"
                        className="
                            rounded-2xl
                            bg-[#08101E]
                            p-5
                            text-white
                            outline-none
                        "
                    />

                    <input
                        placeholder="Price"
                        className="
                            rounded-2xl
                            bg-[#08101E]
                            p-5
                            text-white
                            outline-none
                        "
                    />

                    <input
                        placeholder="City"
                        className="
                            rounded-2xl
                            bg-[#08101E]
                            p-5
                            text-white
                            outline-none
                        "
                    />

                    <input
                        placeholder="District"
                        className="
                            rounded-2xl
                            bg-[#08101E]
                            p-5
                            text-white
                            outline-none
                        "
                    />

                    <input
                        placeholder="Area (m²)"
                        className="
                            rounded-2xl
                            bg-[#08101E]
                            p-5
                            text-white
                            outline-none
                        "
                    />

                    <input
                        placeholder="Bedrooms"
                        className="
                            rounded-2xl
                            bg-[#08101E]
                            p-5
                            text-white
                            outline-none
                        "
                    />

                    <input
                        placeholder="Bathrooms"
                        className="
                            rounded-2xl
                            bg-[#08101E]
                            p-5
                            text-white
                            outline-none
                        "
                    />
                </div>

                <textarea
                    placeholder="Property Description"
                    rows={8}
                    className="
                        mt-6
                        w-full
                        rounded-2xl
                        bg-[#08101E]
                        p-6
                        text-white
                        outline-none
                    "
                />
            </section>
            {/* PROPERTY MEDIA */}

            <section
                className="
                    rounded-[40px]
                    bg-[#111827]
                    p-10
                "
            >
                <h2
                    className="
                        mb-8
                        text-3xl
                        font-black
                        text-white
                    "
                >
                    Property Media
                </h2>

                <div
                    className="
                        space-y-8
                    "
                >
                    <CoverSelector
                        value={coverImage}
                        onChange={setCoverImage}
                    />

                    <GalleryUploader
                        value={galleryImages}
                        onChange={setGalleryImages}
                    />

                    <VideoUploader
                        value={propertyVideos}
                        onChange={setPropertyVideos}
                    />

                    <FloorPlansUploader
                        value={floorPlans}
                        onChange={setFloorPlans}
                    />

                    <BrochureUploader
                        value={brochures}
                        onChange={setBrochures}
                    />

                    <VirtualTourInput
                        value={virtualTour}
                        onChange={setVirtualTour}
                    />
                </div>
            </section>

            {/* ACTIONS */}

            <section
                className="
                    flex
                    gap-6
                "
            >
                <button
                    type="button"
                    className="
                        rounded-full
                        bg-slate-700
                        px-10
                        py-5
                        font-bold
                        text-white
                    "
                >
                    Save Draft
                </button>

                <button
                    type="submit"
                    className="
                        rounded-full
                        bg-[#F97316]
                        px-10
                        py-5
                        font-bold
                        text-black
                    "
                >
                    Publish Property
                </button>
            </section>
        </form>
    );
}