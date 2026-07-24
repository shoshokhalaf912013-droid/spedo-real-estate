export type UploadProvider =
    | "cloudinary"
    | "cloudflare-stream"
    | "cloudflare-r2";

export type UploadStatus =
    | "waiting"
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

    type: string;

    provider: UploadProvider;

}

export interface UploadChunk {

    index: number;

    start: number;

    end: number;

    size: number;

    uploaded: boolean;

}

export interface UploadProgress {

    percentage: number;

    uploadedBytes: number;

    totalBytes: number;

    speed: number;

    remainingSeconds: number;

}

export interface UploadSession {

    uploadId: string;

    fileId: string;

    provider: UploadProvider;

    uploadedChunks: number[];

    completed: boolean;

}

export interface UploadResult {

    success: boolean;

    url?: string;

    thumbnail?: string;

    duration?: number;

    width?: number;

    height?: number;

    size?: number;

    error?: string;

}

export interface UploadTask {

    id: string;

    file: UploadFile;

    status: UploadStatus;

    progress: UploadProgress;

    chunks: UploadChunk[];

    session?: UploadSession;

}

export interface UploadQueue {

    active: UploadTask[];

    waiting: UploadTask[];

    completed: UploadTask[];

    failed: UploadTask[];

}

export interface UploadOptions {

    chunkSize: number;

    parallelUploads: number;

    retryCount: number;

    autoResume: boolean;

}

export interface UploadStatistics {

    totalFiles: number;

    completedFiles: number;

    failedFiles: number;

    uploadingFiles: number;

    waitingFiles: number;

}

export interface UploadError {

    code: string;

    message: string;

}