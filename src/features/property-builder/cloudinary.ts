import { MediaFile } from "./media";

export async function uploadToCloudinary(
    file: File
): Promise<MediaFile> {

    const formData = new FormData();

    formData.append("file", file);

    formData.append(
        "upload_preset",
        process.env
            .NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
    );

    const cloudName =
        process.env
            .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;

    const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
        {
            method: "POST",
            body: formData,
        }
    );

    if (!response.ok) {

        throw new Error(
            "Cloudinary upload failed."
        );

    }

    const data =
        await response.json();

    return {

        id: crypto.randomUUID(),

        publicId: data.public_id,

        name: file.name,

        url: data.secure_url,

        type:
            file.type.startsWith("image")
                ? "image"
                : file.type.startsWith("video")
                ? "video"
                : "pdf",

        width: data.width,

        height: data.height,

        bytes: data.bytes,

        format: data.format,

        folder: data.folder,

        createdAt: data.created_at,

    };

}