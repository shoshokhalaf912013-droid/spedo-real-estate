import type {
    UploadAdapter,
    UploadProgress,
    UploadResult,
    UploadTask,
} from "../upload/contracts";


/* =========================================================
   Types
   ========================================================= */

export interface CloudflareStreamOptions {

    customerCode?: string;

    chunkSize?: number;

    sessionEndpoint?: string;

    chunkEndpoint?: string;

    videoEndpoint?: string;

    processingPollInterval?: number;

    processingTimeout?: number;

}


interface StreamSession {

    uploadUrl: string;

    videoUid: string;

    uploadedBytes: number;

}


interface StreamSessionResponse {

    success?: boolean;

    uploadUrl?: unknown;

    videoUid?: unknown;

    error?: unknown;

}


interface StreamVideoStatus {

    state?: unknown;

    percentage?: unknown;

    errorCode?: unknown;

    error?: unknown;

}


interface StreamVideoPlayback {

    hls?: unknown;

    dash?: unknown;

}


interface StreamVideoResponse {

    success?: boolean;

    videoUid?: unknown;

    readyToStream?: unknown;

    status?: StreamVideoStatus;

    playbackUrl?: unknown;

    thumbnailUrl?: unknown;

    playback?: StreamVideoPlayback;

    duration?: unknown;

    width?: unknown;

    height?: unknown;

    size?: unknown;

    error?: unknown;

}


interface ChunkUploadResponse {

    success?: boolean;

    uploadOffset?: unknown;

    error?: unknown;

}


interface TaskControl {

    cancelled: boolean;

    paused: boolean;

    controller: AbortController | null;

}


/* =========================================================
   Constants
   ========================================================= */

const DEFAULT_CHUNK_SIZE =

    10 * 1024 * 1024;


const DEFAULT_SESSION_ENDPOINT =

    "/api/upload/cloudflare-stream/session";


const DEFAULT_CHUNK_ENDPOINT =

    "/api/upload/cloudflare-stream/chunk";


const DEFAULT_VIDEO_ENDPOINT =

    "/api/upload/cloudflare-stream/video";


const DEFAULT_PROCESSING_POLL_INTERVAL =

    2_000;


const DEFAULT_PROCESSING_TIMEOUT =

    5 * 60 * 1_000;


/* =========================================================
   Helpers
   ========================================================= */

function readRequiredString(

    value: unknown

): string {

    if (
        typeof value !== "string"
    ) {

        return "";

    }


    return value.trim();

}


function readOptionalString(

    value: unknown

): string | undefined {

    const normalizedValue =

        readRequiredString(
            value
        );


    return normalizedValue || undefined;

}


function readOptionalNumber(

    value: unknown

): number | undefined {

    if (
        typeof value !== "number"
        ||
        !Number.isFinite(
            value
        )
    ) {

        return undefined;

    }


    return value;

}


function readErrorMessage(

    value: unknown,

    fallback: string

): string {

    const message =

        readRequiredString(
            value
        );


    return message || fallback;

}


function readBoolean(

    value: unknown

): boolean {

    return value === true;

}


function readUploadOffset(

    value: unknown,

    fallback: number

): number {

    const parsedValue =

        typeof value === "number"

            ? value

            : typeof value === "string"

                ? Number(value)

                : Number.NaN;


    if (
        !Number.isSafeInteger(
            parsedValue
        )
        ||
        parsedValue < 0
    ) {

        return fallback;

    }


    return parsedValue;

}


async function readJsonResponse<T>(

    response: Response

): Promise<T | null> {

    const responseText =

        await response.text();


    if (
        !responseText
    ) {

        return null;

    }


    try {

        return JSON.parse(
            responseText
        ) as T;

    }
    catch {

        return null;

    }

}


function clampPercentage(

    percentage: number

): number {

    if (
        !Number.isFinite(
            percentage
        )
    ) {

        return 0;

    }


    return Math.min(

        Math.max(

            Math.round(
                percentage
            ),

            0

        ),

        100

    );

}


function delay(

    duration: number,

    signal: AbortSignal

): Promise<void> {

    return new Promise<void>(

        (

            resolve,

            reject

        ) => {

            if (
                signal.aborted
            ) {

                reject(

                    new DOMException(

                        "The operation was aborted.",

                        "AbortError"

                    )

                );


                return;

            }


            const timeoutId =

                window.setTimeout(

                    () => {

                        signal.removeEventListener(

                            "abort",

                            handleAbort

                        );


                        resolve();

                    },

                    duration

                );


            function handleAbort() {

                window.clearTimeout(
                    timeoutId
                );


                signal.removeEventListener(

                    "abort",

                    handleAbort

                );


                reject(

                    new DOMException(

                        "The operation was aborted.",

                        "AbortError"

                    )

                );

            }


            signal.addEventListener(

                "abort",

                handleAbort,

                {

                    once: true,

                }

            );

        }

    );

}


/* =========================================================
   Provider
   ========================================================= */

export class CloudflareStreamProvider

    implements UploadAdapter

{

    private readonly chunkSize: number;

    private readonly sessionEndpoint: string;

    private readonly chunkEndpoint: string;

    private readonly videoEndpoint: string;

    private readonly processingPollInterval: number;

    private readonly processingTimeout: number;


    private readonly sessions:

        Map<string, StreamSession>;


    private readonly controls:

        Map<string, TaskControl>;


    constructor(

        options: CloudflareStreamOptions = {}

    ) {

        this.chunkSize =

            options.chunkSize
            ??
            DEFAULT_CHUNK_SIZE;


        this.sessionEndpoint =

            readRequiredString(
                options.sessionEndpoint
            )
            ||
            DEFAULT_SESSION_ENDPOINT;


        this.chunkEndpoint =

            readRequiredString(
                options.chunkEndpoint
            )
            ||
            DEFAULT_CHUNK_ENDPOINT;


        this.videoEndpoint =

            readRequiredString(
                options.videoEndpoint
            )
            ||
            DEFAULT_VIDEO_ENDPOINT;


        this.processingPollInterval =

            options.processingPollInterval
            ??
            DEFAULT_PROCESSING_POLL_INTERVAL;


        this.processingTimeout =

            options.processingTimeout
            ??
            DEFAULT_PROCESSING_TIMEOUT;


        if (
            !Number.isSafeInteger(
                this.chunkSize
            )
            ||
            this.chunkSize <= 0
        ) {

            throw new Error(
                "Cloudflare Stream chunk size must be a positive integer."
            );

        }


        if (
            !Number.isSafeInteger(
                this.processingPollInterval
            )
            ||
            this.processingPollInterval <= 0
        ) {

            throw new Error(
                "Cloudflare Stream processing poll interval must be a positive integer."
            );

        }


        if (
            !Number.isSafeInteger(
                this.processingTimeout
            )
            ||
            this.processingTimeout <= 0
        ) {

            throw new Error(
                "Cloudflare Stream processing timeout must be a positive integer."
            );

        }


        this.sessions =

            new Map<string, StreamSession>();


        this.controls =

            new Map<string, TaskControl>();

    }


    /* =====================================================
       Upload
       ===================================================== */

    async upload(

        task: UploadTask

    ): Promise<UploadResult> {

        const control =

            this.createTaskControl(
                task.id
            );


        try {

            task.status =

                "preparing";


            const file =

                task.file.file;


            const totalBytes =

                file.size;


            if (
                totalBytes <= 0
            ) {

                throw new Error(
                    "The selected video file is empty."
                );

            }


            const session =

                await this.createSession(

                    task,

                    control

                );


            this.throwIfInterrupted(
                control
            );


            task.status =

                "uploading";


            const startedAt =

                Date.now();


            this.updateProgress(

                task,

                session.uploadedBytes,

                totalBytes,

                startedAt

            );


            while (
                session.uploadedBytes < totalBytes
            ) {

                this.throwIfInterrupted(
                    control
                );


                const chunkStart =

                    session.uploadedBytes;


                const chunkEnd =

                    Math.min(

                        chunkStart
                        +
                        this.chunkSize,

                        totalBytes

                    );


                const chunk =

                    file.slice(

                        chunkStart,

                        chunkEnd,

                        file.type
                        ||
                        "application/octet-stream"

                    );


                const nextUploadOffset =

                    await this.uploadChunk(

                        session,

                        chunk,

                        chunkStart,

                        control,

                        chunkUploadedBytes => {

                            const currentUploadedBytes =

                                Math.min(

                                    chunkStart
                                    +
                                    chunkUploadedBytes,

                                    totalBytes

                                );


                            this.updateProgress(

                                task,

                                currentUploadedBytes,

                                totalBytes,

                                startedAt

                            );

                        }

                    );


                session.uploadedBytes =

                    Math.min(

                        Math.max(

                            nextUploadOffset,

                            chunkEnd

                        ),

                        totalBytes

                    );


                this.sessions.set(

                    task.id,

                    session

                );


                this.updateProgress(

                    task,

                    session.uploadedBytes,

                    totalBytes,

                    startedAt

                );

            }


            this.throwIfInterrupted(
                control
            );


            task.status =

                "processing";


            this.sendProgress(

                task,

                {

                    uploadedBytes:
                        totalBytes,

                    totalBytes,

                    percentage:
                        100,

                    speed:

                        this.calculateSpeed(

                            totalBytes,

                            startedAt

                        ),

                    remainingSeconds:
                        0,

                }

            );


            const video =

                await this.waitUntilVideoReady(

                    session.videoUid,

                    control

                );


            this.throwIfInterrupted(
                control
            );


            const playbackUrl =

                readOptionalString(
                    video.playbackUrl
                )
                ||
                readOptionalString(
                    video.playback?.hls
                )
                ||
                readOptionalString(
                    video.playback?.dash
                );


            if (
                !playbackUrl
            ) {

                throw new Error(
                    "Cloudflare Stream did not return a playable video URL."
                );

            }


            task.status =

                "completed";


            this.sessions.delete(
                task.id
            );


            this.controls.delete(
                task.id
            );


            return {

                success:
                    true,

                url:
                    playbackUrl,

                publicId:

                    readOptionalString(
                        video.videoUid
                    )
                    ||
                    session.videoUid,

                thumbnail:

                    readOptionalString(
                        video.thumbnailUrl
                    ),

            };

        }
        catch (error) {

            const wasCancelled =

                control.cancelled;


            const wasPaused =

                control.paused;


            if (
                wasCancelled
            ) {

                task.status =

                    "cancelled";

            }
            else if (
                wasPaused
            ) {

                task.status =

                    "paused";

            }
            else {

                task.status =

                    "failed";

            }


            this.controls.delete(
                task.id
            );


            if (
                wasCancelled
            ) {

                this.sessions.delete(
                    task.id
                );

            }


            return {

                success:
                    false,

                error:

                    wasCancelled

                        ? "Upload cancelled."

                        : wasPaused

                            ? "Upload paused."

                            : error instanceof Error

                                ? error.message

                                : "Cloudflare Stream upload failed.",

            };

        }

    }


    /* =====================================================
       Create Session
       ===================================================== */

    private async createSession(

        task: UploadTask,

        control: TaskControl

    ): Promise<StreamSession> {

        const existingSession =

            this.sessions.get(
                task.id
            );


        if (
            existingSession
        ) {

            return existingSession;

        }


        this.throwIfInterrupted(
            control
        );


        const controller =

            new AbortController();


        control.controller =

            controller;


        let response: Response;


        try {

            response =

                await fetch(

                    this.sessionEndpoint,

                    {

                        method:
                            "POST",

                        headers: {

                            "Content-Type":
                                "application/json",

                        },

                        body:

                            JSON.stringify({

                                fileSize:
                                    task.file.size,

                                fileName:
                                    task.file.name,

                                mimeType:
                                    task.file.mimeType,

                            }),

                        signal:
                            controller.signal,

                        cache:
                            "no-store",

                    }

                );

        }
        finally {

            if (
                control.controller
                ===
                controller
            ) {

                control.controller =

                    null;

            }

        }


        const data =

            await readJsonResponse<StreamSessionResponse>(
                response
            );


        if (
            !response.ok
            ||
            !data?.success
        ) {

            throw new Error(

                readErrorMessage(

                    data?.error,

                    (
                        "Cloudflare session creation failed " +
                        `with status ${response.status}.`
                    )

                )

            );

        }


        const uploadUrl =

            readRequiredString(
                data.uploadUrl
            );


        const videoUid =

            readRequiredString(
                data.videoUid
            );


        if (
            !uploadUrl
        ) {

            throw new Error(
                "The upload session did not return an upload URL."
            );

        }


        if (
            !videoUid
        ) {

            throw new Error(
                "The upload session did not return a video identifier."
            );

        }


        const session: StreamSession = {

            uploadUrl,

            videoUid,

            uploadedBytes:
                0,

        };


        this.sessions.set(

            task.id,

            session

        );


        return session;

    }
    /* =====================================================
       Upload Chunk
       ===================================================== */

    private async uploadChunk(

        session: StreamSession,

        chunk: Blob,

        offset: number,

        control: TaskControl,

        onProgress: (

            uploadedBytes: number

        ) => void

    ): Promise<number> {

        this.throwIfInterrupted(
            control
        );


        const controller =

            new AbortController();


        control.controller =

            controller;


        try {

            return await new Promise<number>(

                (

                    resolve,

                    reject

                ) => {

                    const request =

                        new XMLHttpRequest();


                    const abortRequest =

                        () => {

                            request.abort();

                        };


                    controller.signal.addEventListener(

                        "abort",

                        abortRequest,

                        {

                            once: true,

                        }

                    );


                    request.open(

                        "POST",

                        this.chunkEndpoint,

                        true

                    );


                    request.setRequestHeader(

                        "X-Cloudflare-Stream-Upload-URL",

                        session.uploadUrl

                    );


                    request.setRequestHeader(

                        "X-Cloudflare-Stream-Upload-Offset",

                        String(
                            offset
                        )

                    );


                    request.setRequestHeader(

                        "Content-Type",

                        "application/offset+octet-stream"

                    );


                    request.upload.onprogress =

                        event => {

                            if (
                                !event.lengthComputable
                            ) {

                                return;

                            }


                            onProgress(

                                Math.min(

                                    event.loaded,

                                    chunk.size

                                )

                            );

                        };


                    request.onload =

                        () => {

                            controller.signal
                                .removeEventListener(

                                    "abort",

                                    abortRequest

                                );


                            let data:
                                ChunkUploadResponse | null =
                                null;


                            if (
                                request.responseText
                            ) {

                                try {

                                    data =

                                        JSON.parse(

                                            request.responseText

                                        ) as
                                            ChunkUploadResponse;

                                }
                                catch {

                                    data =
                                        null;

                                }

                            }


                            if (
                                request.status < 200
                                ||
                                request.status >= 300
                                ||
                                !data?.success
                            ) {

                                reject(

                                    new Error(

                                        readErrorMessage(

                                            data?.error,

                                            (
                                                "Cloudflare chunk upload failed " +
                                                `with status ${request.status}.`
                                            )

                                        )

                                    )

                                );


                                return;

                            }


                            onProgress(
                                chunk.size
                            );


                            resolve(

                                readUploadOffset(

                                    data.uploadOffset,

                                    offset
                                    +
                                    chunk.size

                                )

                            );

                        };


                    request.onerror =

                        () => {

                            controller.signal
                                .removeEventListener(

                                    "abort",

                                    abortRequest

                                );


                            reject(

                                new Error(
                                    "A network error interrupted the Cloudflare Stream upload."
                                )

                            );

                        };


                    request.onabort =

                        () => {

                            controller.signal
                                .removeEventListener(

                                    "abort",

                                    abortRequest

                                );


                            reject(

                                new DOMException(

                                    "The upload request was aborted.",

                                    "AbortError"

                                )

                            );

                        };


                    request.ontimeout =

                        () => {

                            controller.signal
                                .removeEventListener(

                                    "abort",

                                    abortRequest

                                );


                            reject(

                                new Error(
                                    "The Cloudflare Stream upload request timed out."
                                )

                            );

                        };


                    request.send(
                        chunk
                    );

                }

            );

        }
        finally {

            if (
                control.controller
                ===
                controller
            ) {

                control.controller =

                    null;

            }

        }

    }


    /* =====================================================
       Wait Until Video Is Ready
       ===================================================== */

    private async waitUntilVideoReady(

        videoUid: string,

        control: TaskControl

    ): Promise<StreamVideoResponse> {

        const startedAt =

            Date.now();


        while (
            true
        ) {

            this.throwIfInterrupted(
                control
            );


            const video =

                await this.getVideoDetails(

                    videoUid,

                    control

                );


            const statusState =

                readRequiredString(
                    video.status?.state
                )
                .toLowerCase();


            const processingError =

                readOptionalString(
                    video.status?.error
                );


            const processingErrorCode =

                readOptionalString(
                    video.status?.errorCode
                );


            if (
                statusState === "error"
                ||
                statusState === "failed"
            ) {

                throw new Error(

                    processingError
                    ||
                    processingErrorCode
                    ||
                    "Cloudflare Stream could not process the uploaded video."

                );

            }


            if (
                readBoolean(
                    video.readyToStream
                )
            ) {

                return video;

            }


            const elapsedTime =

                Date.now()
                -
                startedAt;


            if (
                elapsedTime >=
                this.processingTimeout
            ) {

                throw new Error(
                    "Cloudflare Stream video processing timed out."
                );

            }


            const controller =

                new AbortController();


            control.controller =

                controller;


            try {

                await delay(

                    this.processingPollInterval,

                    controller.signal

                );

            }
            finally {

                if (
                    control.controller
                    ===
                    controller
                ) {

                    control.controller =

                        null;

                }

            }

        }

    }


    /* =====================================================
       Get Video Details
       ===================================================== */

    private async getVideoDetails(

        videoUid: string,

        control: TaskControl

    ): Promise<StreamVideoResponse> {

        this.throwIfInterrupted(
            control
        );


        const controller =

            new AbortController();


        control.controller =

            controller;


        let response:
            Response;


        try {

            response =

                await fetch(

                    (
                        `${this.videoEndpoint}/` +
                        `${encodeURIComponent(videoUid)}`
                    ),

                    {

                        method:
                            "GET",

                        headers: {

                            Accept:
                                "application/json",

                        },

                        signal:
                            controller.signal,

                        cache:
                            "no-store",

                    }

                );

        }
        finally {

            if (
                control.controller
                ===
                controller
            ) {

                control.controller =

                    null;

            }

        }


        const data =

            await readJsonResponse<StreamVideoResponse>(
                response
            );


        if (
            !response.ok
            ||
            !data?.success
        ) {

            throw new Error(

                readErrorMessage(

                    data?.error,

                    (
                        "Cloudflare video details request failed " +
                        `with status ${response.status}.`
                    )

                )

            );

        }


        return data;

    }


    /* =====================================================
       Pause
       ===================================================== */

    async pause(

        task: UploadTask

    ): Promise<void> {

        const control =

            this.controls.get(
                task.id
            );


        if (
            !control
        ) {

            return;

        }


        if (
            task.status !== "preparing"
            &&
            task.status !== "uploading"
            &&
            task.status !== "processing"
        ) {

            return;

        }


        control.paused =

            true;


        control.controller?.abort();


        task.status =

            "paused";

    }


    /* =====================================================
       Resume
       ===================================================== */

    async resume(

        task: UploadTask

    ): Promise<UploadResult> {

        if (
            task.status !== "paused"
            &&
            task.status !== "failed"
        ) {

            return {

                success:
                    false,

                error:
                    "Only paused or failed uploads can be resumed.",

            };

        }


        this.controls.delete(
            task.id
        );


        return this.upload(
            task
        );

    }


    /* =====================================================
       Cancel
       ===================================================== */

    async cancel(

        task: UploadTask

    ): Promise<void> {

        const control =

            this.controls.get(
                task.id
            );


        if (
            control
        ) {

            control.cancelled =

                true;


            control.paused =

                false;


            control.controller?.abort();

        }


        task.status =

            "cancelled";


        this.controls.delete(
            task.id
        );


        this.sessions.delete(
            task.id
        );

    }


    /* =====================================================
       Retry
       ===================================================== */

    async retry(

        task: UploadTask

    ): Promise<UploadResult> {

        if (
            task.status !== "failed"
            &&
            task.status !== "cancelled"
        ) {

            return {

                success:
                    false,

                error:
                    "Only failed or cancelled uploads can be retried.",

            };

        }


        this.controls.delete(
            task.id
        );


        this.sessions.delete(
            task.id
        );


        return this.upload(
            task
        );

    }


    /* =====================================================
       Task Control
       ===================================================== */

    private createTaskControl(

        taskId: string

    ): TaskControl {

        const existingControl =

            this.controls.get(
                taskId
            );


        if (
            existingControl
        ) {

            existingControl.cancelled =

                false;


            existingControl.paused =

                false;


            existingControl.controller =

                null;


            return existingControl;

        }


        const control: TaskControl = {

            cancelled:
                false,

            paused:
                false,

            controller:
                null,

        };


        this.controls.set(

            taskId,

            control

        );


        return control;

    }


    private throwIfInterrupted(

        control: TaskControl

    ): void {

        if (
            control.cancelled
        ) {

            throw new DOMException(

                "The upload was cancelled.",

                "AbortError"

            );

        }


        if (
            control.paused
        ) {

            throw new DOMException(

                "The upload was paused.",

                "AbortError"

            );

        }

    }


    /* =====================================================
       Progress
       ===================================================== */

    private updateProgress(

        task: UploadTask,

        uploadedBytes: number,

        totalBytes: number,

        startedAt: number

    ): void {

        const normalizedUploadedBytes =

            Math.min(

                Math.max(

                    uploadedBytes,

                    0

                ),

                totalBytes

            );


        const speed =

            this.calculateSpeed(

                normalizedUploadedBytes,

                startedAt

            );


        const remainingBytes =

            Math.max(

                totalBytes
                -
                normalizedUploadedBytes,

                0

            );


        const remainingSeconds =

            speed > 0

                ? Math.ceil(

                    remainingBytes
                    /
                    speed

                )

                : 0;


        const percentage =

            totalBytes > 0

                ? clampPercentage(

                    (
                        normalizedUploadedBytes
                        /
                        totalBytes
                    )
                    *
                    100

                )

                : 0;


        this.sendProgress(

            task,

            {

                uploadedBytes:
                    normalizedUploadedBytes,

                totalBytes,

                percentage,

                speed,

                remainingSeconds,

            }

        );

    }


    private calculateSpeed(

        uploadedBytes: number,

        startedAt: number

    ): number {

        const elapsedMilliseconds =

            Math.max(

                Date.now()
                -
                startedAt,

                1

            );


        const elapsedSeconds =

            elapsedMilliseconds
            /
            1000;


        return Math.max(

            Math.round(

                uploadedBytes
                /
                elapsedSeconds

            ),

            0

        );

    }


    private sendProgress(

        task: UploadTask,

        progress: UploadProgress

    ): void {

        task.progress =

            progress;


        task.onProgress?.(
            progress
        );

    }

}