export type UploadProvider =
    | "cloudinary"
    | "cloudflare-stream"
    | "cloudflare-r2";

export type UploadType =
    | "image"
    | "video"
    | "document";

export type UploadStatus =
    | "idle"
    | "queued"
    | "preparing"
    | "uploading"
    | "paused"
    | "processing"
    | "completed"
    | "failed"
    | "cancelled";

export interface UploadFile {

    id: string;

    file: File;

    name: string;

    size: number;

    mimeType: string;

    uploadType: UploadType;

    provider: UploadProvider;

}

export interface UploadProgress {

    uploadedBytes: number;

    totalBytes: number;

    percentage: number;

    speed: number;

    remainingSeconds: number;

}

export interface UploadChunk {

    index: number;

    start: number;

    end: number;

    uploaded: boolean;

}

export interface UploadResult {

    success: boolean;

    url?: string;

    publicId?: string;

    thumbnail?: string;

    duration?: number;

    width?: number;

    height?: number;

    error?: string;

}

export interface UploadTask {

    id: string;

    file: UploadFile;

    status: UploadStatus;

    progress: UploadProgress;

    chunks: UploadChunk[];

    /*
       نتيجة الرفع بعد اكتماله

       مثال:
       Cloudflare Stream URL
    */
    result?: UploadResult;

    /*
       يتم استدعاؤها أثناء الرفع
       لإرسال النسبة إلى الواجهة
    */
    onProgress?: (

        progress: UploadProgress

    ) => void;

}

export interface UploadAdapter {

    upload(

        task: UploadTask

    ): Promise<UploadResult>;

    pause(

        task: UploadTask

    ): Promise<void>;

    resume(

        task: UploadTask

    ): Promise<UploadResult>;

    cancel(

        task: UploadTask

    ): Promise<void>;

    retry?(

        task: UploadTask

    ): Promise<UploadResult>;

}