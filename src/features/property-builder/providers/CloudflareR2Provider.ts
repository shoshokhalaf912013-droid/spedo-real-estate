import type {
    UploadAdapter,
    UploadResult,
    UploadTask,
} from "../upload/contracts";

import {
    PutObjectCommand,
} from "@aws-sdk/client-s3";

import {
    getR2Client,
} from "@/lib/r2";

/* =========================================================
   Types
   ========================================================= */

export interface CloudflareR2Options {

    bucketName: string;

    publicUrl: string;

}

interface R2UploadResponse {

    key: string;

    url: string;

}

/* =========================================================
   Provider
   ========================================================= */

export class CloudflareR2Provider
    implements UploadAdapter
{

    private bucketName: string;

    private publicUrl: string;

    constructor(
        options: CloudflareR2Options
    ) {

        this.bucketName = options.bucketName;

        this.publicUrl = options.publicUrl;

    }

    /* =====================================================
       Upload
       ===================================================== */

    async upload(
        task: UploadTask
    ): Promise<UploadResult> {

        try {

            const result =
                await this.uploadFile(task);

            return {

                success: true,

                url: result.url,

                publicId: result.key,

            };

        } catch (error) {

            return {

                success: false,

                error:
                    error instanceof Error
                        ? error.message
                        : "Cloudflare R2 upload failed.",

            };

        }

    }

    /* =====================================================
       Upload File
       ===================================================== */

    private async uploadFile(
        task: UploadTask
    ): Promise<R2UploadResponse> {

        const key =
            this.createKey(task);

        await getR2Client().send(

            new PutObjectCommand({

                Bucket: this.bucketName,

                Key: key,

                Body: task.file.file,

                ContentType: task.file.mimeType,

            })

        );

        return {

            key,

            url: `${this.publicUrl}/${key}`,

        };

    }

    /* =====================================================
       Create Object Key
       ===================================================== */

    private createKey(
        task: UploadTask
    ): string {

        const timestamp =
            Date.now();

        const safeName =
            task.file.name.replace(/\s+/g, "-");

        return `property-files/${timestamp}-${safeName}`;

    }

    /* =====================================================
       Pause
       ===================================================== */

    async pause(
        task: UploadTask
    ): Promise<void> {

        task.status = "paused";

    }

    /* =====================================================
       Resume
       ===================================================== */

    async resume(
        task: UploadTask
    ): Promise<UploadResult> {

        return this.upload(task);

    }

    /* =====================================================
       Cancel
       ===================================================== */

    async cancel(
        task: UploadTask
    ): Promise<void> {

        task.status = "cancelled";

    }

}

/* =========================================================
   Factory
   ========================================================= */

export function createCloudflareR2Provider(
    options: CloudflareR2Options
): CloudflareR2Provider {

    return new CloudflareR2Provider(options);

}