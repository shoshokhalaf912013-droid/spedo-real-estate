"use client";

import CoverSelector from "../Media/CoverSelector";
import GalleryUploader from "../Media/GalleryUploader";
import VideoUploader from "../Media/VideoUploader";
import FloorPlansUploader from "../Media/FloorPlansUploader";
import BrochureUploader from "../Media/BrochureUploader";
import VirtualTourInput from "../Media/VirtualTourInput";

import type { PropertyFormData } from "../hooks/usePropertyForm";

interface Props {

    formData: PropertyFormData;

    updateSection: <T extends keyof PropertyFormData>(

        section: T,

        values: Partial<PropertyFormData[T]>

    ) => void;

}

export default function MarketingAssets({

    formData,

    updateSection,

}: Props) {

    return (

        <section
            className="
                rounded-3xl
                border
                border-[#D4AF37]/10
                bg-[#0F172A]
                p-6
            "
        >

            <div
                className="
                    mb-8
                "
            >

                <h2
                    className="
                        text-2xl
                        font-black
                        text-[#F97316]
                    "
                >
                    Marketing Assets
                </h2>

                <p
                    className="
                        mt-2
                        text-sm
                        text-slate-400
                    "
                >
                    Upload all marketing materials that will appear on SPEDO.
                </p>

            </div>

            {/* Cover */}

            <div
                className="
                    mb-8
                "
            >

                <h3
                    className="
                        mb-4
                        text-lg
                        font-bold
                        text-white
                    "
                >
                    Cover Image
                </h3>

                <CoverSelector

                    value={formData.media.cover}

                    onChange={(value)=>

                        updateSection(

                            "media",

                            {

                                cover:value,

                            }

                        )

                    }

                />

            </div>

            {/* Gallery */}

            <div
                className="
                    mb-8
                "
            >

                <h3
                    className="
                        mb-4
                        text-lg
                        font-bold
                        text-white
                    "
                >
                    Gallery
                </h3>

                <GalleryUploader

                    value={formData.media.gallery}

                    onChange={(value)=>

                        updateSection(

                            "media",

                            {

                                gallery:value,

                            }

                        )

                    }

                />

            </div>

            {/* Videos */}

            <div
                className="
                    mb-8
                "
            >

                <h3
                    className="
                        mb-4
                        text-lg
                        font-bold
                        text-white
                    "
                >
                    Property Videos
                </h3>

                <VideoUploader

                    value={formData.media.videos}

                    onChange={(value)=>

                        updateSection(

                            "media",

                            {

                                videos:value,

                            }

                        )

                    }

                />

            </div>

	              {/* Floor Plans */}

            <div
                className="
                    mb-8
                "
            >

                <h3
                    className="
                        mb-4
                        text-lg
                        font-bold
                        text-white
                    "
                >
                    Floor Plans
                </h3>

                <FloorPlansUploader

                    value={formData.media.floorPlans}

                    onChange={(value)=>

                        updateSection(

                            "media",

                            {

                                floorPlans:value,

                            }

                        )

                    }

                />

            </div>

            {/* Brochures */}

            <div
                className="
                    mb-8
                "
            >

                <h3
                    className="
                        mb-4
                        text-lg
                        font-bold
                        text-white
                    "
                >
                    Brochures & Documents
                </h3>

                <BrochureUploader

                    value={formData.media.brochures}

                    onChange={(value)=>

                        updateSection(

                            "media",

                            {

                                brochures:value,

                            }

                        )

                    }

                />

            </div>

            {/* Virtual Tour */}

            <div
                className="
                    mb-8
                "
            >

                <h3
                    className="
                        mb-4
                        text-lg
                        font-bold
                        text-white
                    "
                >
                    Virtual Tour
                </h3>

                <VirtualTourInput

                    value={formData.media.virtualTour}

                    onChange={(value)=>

                        updateSection(

                            "media",

                            {

                                virtualTour:value,

                            }

                        )

                    }

                />

            </div>

            {/* Summary */}

            <div
                className="
                    rounded-2xl
                    border
                    border-[#D4AF37]/10
                    bg-slate-900/40
                    p-5
                "
            >

                <h3
                    className="
                        text-lg
                        font-bold
                        text-[#F97316]
                    "
                >
                    Marketing Summary
                </h3>

                <div
                    className="
                        mt-5
                        grid
                        gap-4
                        md:grid-cols-3
                    "
                >

                    <div>

                        <p
                            className="
                                text-xs
                                uppercase
                                text-slate-500
                            "
                        >
                            Gallery Images
                        </p>

                        <h4
                            className="
                                mt-1
                                font-bold
                                text-white
                            "
                        >
                            {formData.media.gallery.length}
                        </h4>

                    </div>

                    <div>

                        <p
                            className="
                                text-xs
                                uppercase
                                text-slate-500
                            "
                        >
                            Videos
                        </p>

                        <h4
                            className="
                                mt-1
                                font-bold
                                text-white
                            "
                        >
                            {formData.media.videos.length}
                        </h4>

                    </div>

                    <div>

                        <p
                            className="
                                text-xs
                                uppercase
                                text-slate-500
                            "
                        >
                            Floor Plans
                        </p>

                        <h4
                            className="
                                mt-1
                                font-bold
                                text-white
                            "
                        >
                            {formData.media.floorPlans.length}
                        </h4>

                    </div>

                </div>

            </div>

        </section>

    );

}