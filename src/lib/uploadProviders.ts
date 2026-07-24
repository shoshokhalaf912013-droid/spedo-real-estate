import {
    CloudinaryProvider,
} from "@/features/property-builder/providers/CloudinaryProvider";

import {
    CloudflareStreamProvider,
} from "@/features/property-builder/providers/CloudflareStreamProvider";

import {
    CloudflareR2Provider,
} from "@/features/property-builder/providers/CloudflareR2Provider";

import type {
    UploadAdapter,
} from "@/features/property-builder/upload/contracts";

export function createAppUploadProviders():
Record<string, UploadAdapter> {

    const cloudinary =
        new CloudinaryProvider({

            cloudName:
                process.env
                    .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,

            apiKey:
                process.env
                    .CLOUDINARY_API_KEY!,

            uploadPreset:
                process.env
                    .NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,

        });

    const cloudflareStream =
        new CloudflareStreamProvider({

            customerCode:
                process.env
                    .CLOUDFLARE_ACCOUNT_ID ?? "",

        });

    const cloudflareR2 =
        new CloudflareR2Provider({

            bucketName:
                process.env
                    .R2_BUCKET_NAME!,

            publicUrl:
                process.env
                    .R2_PUBLIC_URL!,

        });

    return {

        cloudinary,

        "cloudflare-stream":
            cloudflareStream,

        "cloudflare-r2":
            cloudflareR2,

    };

}