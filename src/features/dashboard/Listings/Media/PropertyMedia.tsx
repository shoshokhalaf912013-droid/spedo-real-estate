"use client";

import { useState } from "react";

import CoverSelector from "./CoverSelector";
import GalleryUploader from "./GalleryUploader";
import VideoUploader from "./VideoUploader";
import FloorPlansUploader from "./FloorPlansUploader";
import BrochureUploader from "./BrochureUploader";
import VirtualTourInput from "./VirtualTourInput";

export default function PropertyMedia() {
    const [coverImage, setCoverImage] = useState<string>("");

    const [galleryImages, setGalleryImages] = useState<string[]>([]);

    const [videos, setVideos] = useState<string[]>([]);

    const [floorPlans, setFloorPlans] = useState<string[]>([]);

    const [brochures, setBrochures] = useState<string[]>([]);

    const [virtualTour, setVirtualTour] = useState<string>("");

    return (
        <section
            className="
                space-y-8
            "
        >
            <div
                className="
                    rounded-[40px]
                    bg-[#111827]
                    p-10
                "
            >
                <h2
                    className="
                        mb-3
                        text-4xl
                        font-black
                        text-[#F97316]
                    "
                >
                    Property Media
                </h2>

                <p
                    className="
                        text-slate-400
                    "
                >
                    Upload photos, videos,
                    floor plans, brochures
                    and virtual tours.
                </p>
            </div>

            <CoverSelector
                value={coverImage}
                onChange={setCoverImage}
            />

            <GalleryUploader
                value={galleryImages}
                onChange={setGalleryImages}
            />

            <VideoUploader
                value={videos}
                onChange={setVideos}
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
        </section>
    );
}