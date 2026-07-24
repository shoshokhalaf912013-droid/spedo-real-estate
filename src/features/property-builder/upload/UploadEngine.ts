import type {
    UploadAdapter,
    UploadResult,
    UploadTask,
    UploadProvider,
} from "./contracts";

/* =========================================================
   Options
   ========================================================= */

export interface UploadEngineOptions {

    providers: Record<
        UploadProvider,
        UploadAdapter
    >;

}

/* =========================================================
   Upload Engine
   ========================================================= */

export class UploadEngine {

    private providers: Record<
        UploadProvider,
        UploadAdapter
    >;

    constructor(
        options: UploadEngineOptions
    ) {

        this.providers =
            options.providers;

    }

    /* =====================================================
       Start Upload
       ===================================================== */

    async start(
        task: UploadTask
    ): Promise<UploadResult> {

        const provider =
            this.providers[
                task.file.provider
            ];

        if (!provider) {

            return {

                success: false,

                error:
                    `Upload provider "${task.file.provider}" not found.`

            };

        }

        task.status =
            "uploading";

        return await provider.upload(
            task
        );

    }

    /* =====================================================
       Pause
       ===================================================== */

    async pause(
        task: UploadTask
    ): Promise<void> {

        const provider =
            this.getProvider(
                task
            );

        task.status =
            "paused";

        await provider.pause(
            task
        );

    }

    /* =====================================================
       Resume
       ===================================================== */

    async resume(
        task: UploadTask
    ): Promise<void> {

        const provider =
            this.getProvider(
                task
            );

        task.status =
            "uploading";

        await provider.resume(
            task
        );

    }

    /* =====================================================
       Cancel
       ===================================================== */

    async cancel(
        task: UploadTask
    ): Promise<void> {

        const provider =
            this.getProvider(
                task
            );

        task.status =
            "cancelled";

        await provider.cancel(
            task
        );

    }

    /* =====================================================
       Provider Resolver
       ===================================================== */

    private getProvider(
        task: UploadTask
    ): UploadAdapter {

        const provider =
            this.providers[
                task.file.provider
            ];

        if (!provider) {

            throw new Error(

                `Upload provider "${task.file.provider}" not registered.`

            );

        }

        return provider;

    }

}

/* =========================================================
   Factory
   ========================================================= */

export function createUploadEngine(
    options: UploadEngineOptions
): UploadEngine {

    return new UploadEngine(
        options
    );

}