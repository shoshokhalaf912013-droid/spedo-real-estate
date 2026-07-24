import {
    CloudinaryProvider,
} from "../providers/CloudinaryProvider";

import {
    CloudflareStreamProvider,
} from "../providers/CloudflareStreamProvider";

import {
    CloudflareR2Provider,
} from "../providers/CloudflareR2Provider";

import type {
    UploadAdapter,
    UploadProvider,
} from "./contracts";

/* =========================================================
   Options
   ========================================================= */

export interface UploadProvidersOptions {

    cloudinary: {

        cloudName: string;

        apiKey: string;

        uploadPreset: string;

    };

    cloudflareStream: {

        customerCode?: string;

        chunkSize?: number;

        sessionEndpoint?: string;

        chunkEndpoint?: string;

        videoEndpoint?: string;

        processingPollInterval?: number;

        processingTimeout?: number;

    };

    cloudflareR2: {

        bucketName: string;

        publicUrl?: string;

    };

}

/* =========================================================
   Provider Factory
   ========================================================= */

export function createUploadProviders(

    options: UploadProvidersOptions

): Record<
    UploadProvider,
    UploadAdapter
> {

    return {

        "cloudinary":

            new CloudinaryProvider({

                cloudName:
                    options.cloudinary.cloudName,

                apiKey:
                    options.cloudinary.apiKey,

                uploadPreset:
                    options.cloudinary.uploadPreset,

            }),

        "cloudflare-stream":

            new CloudflareStreamProvider({

                customerCode:
                    options.cloudflareStream.customerCode ?? "",

                chunkSize:
                    options.cloudflareStream.chunkSize,

                sessionEndpoint:
                    options.cloudflareStream.sessionEndpoint,

                chunkEndpoint:
                    options.cloudflareStream.chunkEndpoint,

                videoEndpoint:
                    options.cloudflareStream.videoEndpoint,

                processingPollInterval:
                    options.cloudflareStream.processingPollInterval,

                processingTimeout:
                    options.cloudflareStream.processingTimeout,

            }),

        "cloudflare-r2":

            new CloudflareR2Provider({

                bucketName:
                    options.cloudflareR2.bucketName,

                publicUrl:
                    options.cloudflareR2.publicUrl ?? "",

            }),

    };

}