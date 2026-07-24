"use client";

import {
    useMemo,
} from "react";

import BasicInfo from "./BasicInfo";
import PropertyDetails from "./PropertyDetails";
import Location from "./Location";
import GalleryManager from "./GalleryManager";
import VideoManager from "./VideoManager";
import FloorPlanManager from "./FloorPlanManager";
import DynamicSections from "./DynamicSections";
import Seo from "./Seo";
import SaveButton from "./SaveButton";

import {
    PropertyProvider,
} from "./store";

import {
    useUpload,
} from "./upload/hooks";

import {
    createUploadEngine,
} from "./upload/UploadEngine";

import {
    createUploadProviders,
} from "./upload/providerFactory";


/* =========================================================
   Property Content
   ========================================================= */

function PropertyContent() {

    /*
     * Upload providers and the upload engine must remain stable
     * between React renders.
     *
     * Creating them directly inside the component body without
     * useMemo would create new provider instances, upload sessions,
     * controls and queues after every render.
     */
    const engine =

        useMemo(

            () => {

                const providers =

                    createUploadProviders({

                        cloudinary: {

                            cloudName:

                                process.env
                                    .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
                                ??
                                "",

                            apiKey:

                                process.env
                                    .NEXT_PUBLIC_CLOUDINARY_API_KEY
                                ??
                                "",

                            uploadPreset:

                                process.env
                                    .NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                                ??
                                "",

                        },

                        cloudflareStream: {

                            sessionEndpoint:
                                "/api/upload/cloudflare-stream/session",

                            chunkEndpoint:
                                "/api/upload/cloudflare-stream/chunk",

                            videoEndpoint:
                                "/api/upload/cloudflare-stream/video",

                            chunkSize:
                                10 * 1024 * 1024,

                            processingPollInterval:
                                2_000,

                            processingTimeout:
                                5 * 60 * 1_000,

                        },

                        cloudflareR2: {

                            bucketName:

                                process.env
                                    .NEXT_PUBLIC_R2_BUCKET_NAME
                                ??
                                "",

                        },

                    });


                return createUploadEngine({

                    providers,

                });

            },

            []

        );


    const {

        upload,

        pause,

        resume,

        cancel,

    } =

        useUpload({

            engine,

        });


    return (

        <div
            className="
	        property-new-page
                mx-auto
                mt-24
                max-w-7xl
                space-y-8
            "
        >

            <BasicInfo />

            <PropertyDetails />

            <Location />

            <GalleryManager />

            <VideoManager

                onUpload={

                    async task => {

                        return upload(
                            task
                        );

                    }

                }

                onPause={

                    async task => {

                        await pause(
                            task
                        );

                    }

                }

                onResume={

                    async task => {

                        await resume(
                            task
                        );

                    }

                }

                onRetry={

                    async task => {

                        return upload(
                            task
                        );

                    }

                }

                onCancel={

                    async task => {

                        await cancel(
                            task
                        );

                    }

                }

            />

            <FloorPlanManager />

            <DynamicSections />

            <Seo />

            <SaveButton />

        </div>

    );

}


/* =========================================================
   Property Builder
   ========================================================= */

export default function PropertyBuilder() {

    return (

        <PropertyProvider>

            <PropertyContent />

        </PropertyProvider>

    );

}