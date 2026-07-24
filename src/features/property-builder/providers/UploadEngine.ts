import type {
    UploadAdapter,
    UploadResult,
    UploadTask,
    UploadProvider,
} from "../upload/contracts";

/* =========================================================
   Engine Options
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
            this.getProvider(task);

        return await provider.upload(task);

    }

    /* =====================================================
       Pause Upload
       ===================================================== */

    async pause(
        task: UploadTask
    ): Promise<void> {

        const provider =
            this.getProvider(task);

        await provider.pause(task);

    }

    /* =====================================================
       Resume Upload
       ===================================================== */

    async resume(
        task: UploadTask
    ): Promise<UploadResult> {

        const provider =
            this.getProvider(task);

        return await provider.resume(task);

    }

    /* =====================================================
       Cancel Upload
       ===================================================== */

    async cancel(
        task: UploadTask
    ): Promise<void> {

        const provider =
            this.getProvider(task);

        await provider.cancel(task);

    }

    /* =====================================================
       Get Provider
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

    return new UploadEngine(options);

}