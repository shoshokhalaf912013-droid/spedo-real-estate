import type {
    StorageProvider,
} from "../provider";

import type {
    MediaFile,
    UploadRequest,
} from "../types";

export class CloudinaryProvider
    implements StorageProvider
{

    async upload(
        request: UploadRequest
    ): Promise<MediaFile> {

        const formData =
            new FormData();

        formData.append(
            "file",
            request.file
        );

        formData.append(
            "upload_preset",
            process.env
                .NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
        );

        const cloudName =
            process.env
                .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;

        if (
            request.folder
        ) {

            formData.append(
                "folder",
                request.folder
            );

        }

        if (
            request.tags?.length
        ) {

            formData.append(
                "tags",
                request.tags.join(",")
            );

        }

        const response =
            await fetch(
                `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );

        const result =
            await response.json();

        if (
            !response.ok
        ) {

            throw new Error(
                result.error?.message ??
                "Cloudinary upload failed."
            );

        }

        return {

            id:
                result.public_id,

            publicId:
                result.public_id,

            provider:
                "cloudinary",

            type:
                request.file.type.startsWith(
                    "image/"
                )
                    ? "image"
                    : "video",

            name:
                result.original_filename,

            folder:
                result.folder ?? "",

            mimeType:
                request.file.type,

            extension:
                result.format,

            size:
                result.bytes,

            width:
                result.width,

            height:
                result.height,

            duration:
                result.duration,

            url:
                result.secure_url,

            thumbnail:
                result.secure_url,

            createdAt:
                result.created_at,

        };

    }

}