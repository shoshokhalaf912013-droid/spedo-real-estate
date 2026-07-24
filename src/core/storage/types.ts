/* ===========================================
   MEDIA TYPE
=========================================== */

export type MediaType =
    | "image"
    | "video"
    | "pdf"
    | "document"
    | "other";

/* ===========================================
   MEDIA FILE
=========================================== */

export interface MediaFile {

    id: string;

    publicId: string;

    provider: "cloudinary" | "r2";

    type: MediaType;

    name: string;

    folder?: string;

    mimeType: string;

    extension?: string;

    size: number;

    width?: number;

    height?: number;

    duration?: number;

    url: string;

    thumbnail?: string;

    createdAt: string;

}

/* ===========================================
   UPLOAD REQUEST
=========================================== */

export interface UploadRequest {

    file: File;

    folder?: string;

    fileName?: string;

    tags?: string[];

    metadata?: Record<string, string>;

}