import type {
    UploadAdapter,
    UploadResult,
    UploadTask,
} from "../upload/contracts";

/* =========================================================
   Types
   ========================================================= */

export interface CloudinaryOptions {

    cloudName: string;

    apiKey: string;

    uploadPreset: string;

}

interface CloudinaryResponse {

    secure_url: string;

    public_id: string;

    width?: number;

    height?: number;

}

/* =========================================================
   Provider
   ========================================================= */

export class CloudinaryProvider
    implements UploadAdapter
{

    private cloudName: string;

    private apiKey: string;

    private uploadPreset: string;

    constructor(
        options: CloudinaryOptions
    ) {

        this.cloudName = options.cloudName;

        this.apiKey = options.apiKey;

        this.uploadPreset = options.uploadPreset;

    }

    /* =====================================================
       Upload
       ===================================================== */

    async upload(
        task: UploadTask
    ): Promise<UploadResult> {

        try {

            return await this.uploadImage(task);

        } catch (error) {

            return {

                success: false,

                error:
                    error instanceof Error
                        ? error.message
                        : "Cloudinary upload failed.",

            };

        }

    }

    /* =====================================================
       Upload Image
       ===================================================== */

    private async uploadImage(
        task: UploadTask
    ): Promise<UploadResult> {

        const formData = new FormData();

        formData.append(
            "file",
            task.file.file
        );

        formData.append(
            "upload_preset",
            this.uploadPreset
        );

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`,
            {
                method: "POST",
                body: formData,
            }
        );

        if (!response.ok) {

            throw new Error(
                "Cloudinary image upload failed."
            );

        }

        const data: CloudinaryResponse =
            await response.json();

        return {

            success: true,

            url: data.secure_url,

            publicId: data.public_id,

            width: data.width,

            height: data.height,

        };

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

export function createCloudinaryProvider(
    options: CloudinaryOptions
): CloudinaryProvider {

    return new CloudinaryProvider(options);

}