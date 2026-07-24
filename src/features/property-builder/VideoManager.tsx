"use client";

import {
    type ChangeEvent,
    type DragEvent,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import type {
    UploadProgress,
    UploadResult,
    UploadStatus,
    UploadTask,
} from "./upload/contracts";

import {
    usePropertyStore,
} from "./store";

type VideoAction = (
    task: UploadTask
) =>
    | UploadResult
    | void
    | Promise<UploadResult | void>;

interface VideoValidationResult {
    validFiles: File[];
    errors: string[];
}

export interface VideoManagerProps {
    value?: UploadTask[];

    defaultValue?: UploadTask[];

    onChange?: (
        videos: UploadTask[]
    ) => void;

    onUpload?: VideoAction;

    onPause?: VideoAction;

    onResume?: VideoAction;

    onRetry?: VideoAction;

    onCancel?: VideoAction;

    maxVideos?: number;

    maxFileSize?: number;

    acceptedTypes?: string[];

    disabled?: boolean;

    className?: string;
}

const DEFAULT_MAX_VIDEOS = 10;

const DEFAULT_MAX_FILE_SIZE =
    2 * 1024 * 1024 * 1024;

const DEFAULT_ACCEPTED_TYPES = [
    "video/mp4",
    "video/webm",
    "video/quicktime",
    "video/x-m4v",
];

const VIDEO_INPUT_ACCEPT = [
    ".mp4",
    ".webm",
    ".mov",
    ".m4v",
].join(",");

const STATUS_LABELS: Record<
    UploadStatus,
    string
> = {
    idle: "جاهز للرفع",
    queued: "في قائمة الانتظار",
    preparing: "جارٍ التجهيز",
    uploading: "جارٍ الرفع",
    paused: "متوقف مؤقتًا",
    processing: "جارٍ المعالجة",
    completed: "اكتمل الرفع",
    failed: "فشل الرفع",
    cancelled: "تم الإلغاء",
};

function createId(): string {
    if (
        typeof crypto !== "undefined" &&
        typeof crypto.randomUUID ===
            "function"
    ) {
        return crypto.randomUUID();
    }

    return [
        Date.now().toString(36),
        Math.random()
            .toString(36)
            .slice(2),
    ].join("-");
}

function clampPercentage(
    percentage: number
): number {
    if (!Number.isFinite(percentage)) {
        return 0;
    }

    return Math.min(
        Math.max(
            Math.round(percentage),
            0
        ),
        100
    );
}

function formatBytes(
    bytes: number
): string {
    if (
        !Number.isFinite(bytes) ||
        bytes <= 0
    ) {
        return "0 MB";
    }

    const megabytes =
        bytes / 1024 / 1024;

    if (megabytes < 1024) {
        return `${megabytes.toFixed(
            megabytes >= 10 ? 0 : 1
        )} MB`;
    }

    const gigabytes =
        megabytes / 1024;

    return `${gigabytes.toFixed(2)} GB`;
}

function createInitialProgress(
    totalBytes: number
): UploadProgress {
    return {
        uploadedBytes: 0,
        totalBytes,
        percentage: 0,
        speed: 0,
        remainingSeconds: 0,
    };
}

function createUploadTask(
    file: File
): UploadTask {
    const id = createId();

    return {
        id,

        file: {
            id,
            file,
            name: file.name,
            size: file.size,

            mimeType:
                file.type ||
                "application/octet-stream",

            uploadType: "video",

            provider:
                "cloudflare-stream",
        },

        status: "idle",

        progress:
            createInitialProgress(
                file.size
            ),

        chunks: [],
    };
}

function validateVideos(
    files: File[],
    maxFileSize: number,
    acceptedTypes: string[],
    availableSlots: number
): VideoValidationResult {
    const validFiles: File[] = [];
    const errors: string[] = [];

    if (
        files.length >
        availableSlots
    ) {
        errors.push(
            `يمكن إضافة ${availableSlots} فيديو فقط`
        );
    }

    for (
        const file of files.slice(
            0,
            availableSlots
        )
    ) {
        if (
            file.size >
            maxFileSize
        ) {
            errors.push(
                `${file.name}: حجم الملف يتجاوز ${formatBytes(
                    maxFileSize
                )}`
            );

            continue;
        }

        if (
            !acceptedTypes.includes(
                file.type
            )
        ) {
            errors.push(
                `${file.name}: نوع الفيديو غير مدعوم`
            );

            continue;
        }

        validFiles.push(file);
    }

    return {
        validFiles,
        errors,
    };
}

function getResultError(
    result: UploadResult | void,
    fallback: string
): string {
    if (
        result &&
        !result.success &&
        result.error
    ) {
        return result.error;
    }

    return fallback;
}

export default function VideoManager(
    props: VideoManagerProps
) {
    const {
        value,
        defaultValue = [],
        onChange,
        onUpload,
        onPause,
        onResume,
        onRetry,
        onCancel,

        maxVideos =
            DEFAULT_MAX_VIDEOS,

        maxFileSize =
            DEFAULT_MAX_FILE_SIZE,

        acceptedTypes =
            DEFAULT_ACCEPTED_TYPES,

        disabled = false,
        className = "",
    } = props;

    const {
        addVideoWithMedia,
    } = usePropertyStore();

    const isControlled =
        value !== undefined;

    const [
        internalVideos,
        setInternalVideos,
    ] = useState<UploadTask[]>(
        defaultValue
    );

    const [
        errors,
        setErrors,
    ] = useState<string[]>([]);

    const inputRef =
        useRef<HTMLInputElement | null>(
            null
        );

    const videos =
        isControlled
            ? value
            : internalVideos;

    useEffect(() => {
        return () => {
            for (
                const task of videos
            ) {
                task.onProgress =
                    undefined;
            }
        };
    }, [videos]);

    const updateVideos =
        useCallback(
            (
                updater:
                    | UploadTask[]
                    | ((
                          current: UploadTask[]
                      ) => UploadTask[])
            ): void => {
                const currentVideos =
                    isControlled
                        ? value
                        : internalVideos;

                const nextVideos =
                    typeof updater ===
                    "function"
                        ? updater(
                              currentVideos
                          )
                        : updater;

                if (!isControlled) {
                    setInternalVideos(
                        nextVideos
                    );
                }

                onChange?.(
                    nextVideos
                );
            },
            [
                internalVideos,
                isControlled,
                onChange,
                value,
            ]
        );

    const updateTask =
        useCallback(
            (
                taskId: string,
                updater: (
                    task: UploadTask
                ) => UploadTask
            ): void => {
                updateVideos(
                    currentVideos =>
                        currentVideos.map(
                            task =>
                                task.id ===
                                taskId
                                    ? updater(
                                          task
                                      )
                                    : task
                        )
                );
            },
            [updateVideos]
        );

    const availableSlots =
        useMemo(() => {
            return Math.max(
                maxVideos -
                    videos.length,
                0
            );
        }, [
            maxVideos,
            videos.length,
        ]);

    const handleFiles =
        useCallback(
            (
                selectedFiles: File[]
            ): void => {
                if (
                    disabled ||
                    availableSlots <= 0
                ) {
                    return;
                }

                const validation =
                    validateVideos(
                        selectedFiles,
                        maxFileSize,
                        acceptedTypes,
                        availableSlots
                    );

                const tasks =
                    validation.validFiles.map(
                        createUploadTask
                    );

                setErrors(
                    validation.errors
                );

                if (
                    tasks.length === 0
                ) {
                    return;
                }

                updateVideos(
                    currentVideos => [
                        ...currentVideos,
                        ...tasks,
                    ]
                );
            },
            [
                acceptedTypes,
                availableSlots,
                disabled,
                maxFileSize,
                updateVideos,
            ]
        );

    const handleInputChange =
        (
            event:
                ChangeEvent<HTMLInputElement>
        ): void => {
            const selectedFiles =
                Array.from(
                    event.target.files ??
                        []
                );

            handleFiles(
                selectedFiles
            );

            event.target.value = "";
        };

    const handleDrop =
        (
            event:
                DragEvent<HTMLDivElement>
        ): void => {
            event.preventDefault();

            if (disabled) {
                return;
            }

            handleFiles(
                Array.from(
                    event.dataTransfer.files
                )
            );
        };
    const startUpload =
        useCallback(
            async (
                selectedTask:
                    UploadTask
            ): Promise<void> => {
                if (
                    disabled ||
                    !onUpload
                ) {
                    return;
                }

                updateTask(
                    selectedTask.id,
                    task => ({
                        ...task,
                        status:
                            "preparing",
                    })
                );

                selectedTask.onProgress =
                    progress => {
                        updateTask(
                            selectedTask.id,
                            task => ({
                                ...task,

                                status:
                                    "uploading",

                                progress: {
                                    ...progress,

                                    percentage:
                                        clampPercentage(
                                            progress.percentage
                                        ),
                                },
                            })
                        );
                    };

                try {
                    const result =
                        await onUpload(
                            selectedTask
                        );

                    if (!result) {
                        throw new Error(
                            "لم تُرجع خدمة الرفع نتيجة"
                        );
                    }

                    if (
                        !result.success
                    ) {
                        throw new Error(
                            getResultError(
                                result,
                                "فشل رفع الفيديو"
                            )
                        );
                    }

                    if (!result.url) {
                        throw new Error(
                            "اكتمل الرفع دون رابط للفيديو"
                        );
                    }

                    const completedProgress:
                        UploadProgress =
                        {
                            ...selectedTask.progress,

                            uploadedBytes:
                                selectedTask.file
                                    .size,

                            totalBytes:
                                selectedTask.file
                                    .size,

                            percentage:
                                100,

                            speed: 0,

                            remainingSeconds:
                                0,
                        };

                    selectedTask.result =
                        result;

                    updateTask(
                        selectedTask.id,
                        task => ({
                            ...task,

                            status:
                                "completed",

                            result,

                            progress:
                                completedProgress,
                        })
                    );

                    addVideoWithMedia(
                        {
                            id:
                                result.publicId?.trim() ||
                                selectedTask.id,

                            type:
                                "video",

                            name:
                                selectedTask.file
                                    .name,

                            url:
                                result.url,
                        },
                        {
                            title:
                                selectedTask.file
                                    .name,
                        }
                    );

                    setErrors(
                        currentErrors =>
                            currentErrors.filter(
                                error =>
                                    !error.startsWith(
                                        `${selectedTask.file.name}:`
                                    )
                            )
                    );
                } catch (error) {
                    const message =
                        error instanceof
                        Error
                            ? error.message
                            : "فشل رفع الفيديو";

                    const failedResult:
                        UploadResult =
                        {
                            success:
                                false,

                            error:
                                message,
                        };

                    selectedTask.result =
                        failedResult;

                    updateTask(
                        selectedTask.id,
                        task => ({
                            ...task,

                            status:
                                "failed",

                            result:
                                failedResult,
                        })
                    );

                    setErrors(
                        currentErrors => [
                            ...currentErrors.filter(
                                currentError =>
                                    !currentError.startsWith(
                                        `${selectedTask.file.name}:`
                                    )
                            ),

                            `${selectedTask.file.name}: ${message}`,
                        ]
                    );
                } finally {
                    selectedTask.onProgress =
                        undefined;
                }
            },
            [
                addVideoWithMedia,
                disabled,
                onUpload,
                updateTask,
            ]
        );

    const pauseUpload =
        useCallback(
            async (
                selectedTask:
                    UploadTask
            ): Promise<void> => {
                if (
                    disabled ||
                    !onPause ||
                    selectedTask.status !==
                        "uploading"
                ) {
                    return;
                }

                try {
                    const result =
                        await onPause(
                            selectedTask
                        );

                    if (
                        result &&
                        !result.success
                    ) {
                        throw new Error(
                            getResultError(
                                result,
                                "تعذر إيقاف الرفع مؤقتًا"
                            )
                        );
                    }

                    updateTask(
                        selectedTask.id,
                        task => ({
                            ...task,
                            status:
                                "paused",
                        })
                    );
                } catch (error) {
                    const message =
                        error instanceof
                        Error
                            ? error.message
                            : "تعذر إيقاف الرفع مؤقتًا";

                    setErrors(
                        currentErrors => [
                            ...currentErrors,
                            `${selectedTask.file.name}: ${message}`,
                        ]
                    );
                }
            },
            [
                disabled,
                onPause,
                updateTask,
            ]
        );

    const resumeUpload =
        useCallback(
            async (
                selectedTask:
                    UploadTask
            ): Promise<void> => {
                if (
                    disabled ||
                    !onResume ||
                    selectedTask.status !==
                        "paused"
                ) {
                    return;
                }

                try {
                    updateTask(
                        selectedTask.id,
                        task => ({
                            ...task,
                            status:
                                "uploading",
                        })
                    );

                    const result =
                        await onResume(
                            selectedTask
                        );

                    if (
                        result &&
                        !result.success
                    ) {
                        throw new Error(
                            getResultError(
                                result,
                                "تعذر استئناف الرفع"
                            )
                        );
                    }

                    if (
                        result?.success &&
                        result.url
                    ) {
                        const completedProgress:
                            UploadProgress =
                            {
                                ...selectedTask.progress,

                                uploadedBytes:
                                    selectedTask
                                        .file.size,

                                totalBytes:
                                    selectedTask
                                        .file.size,

                                percentage:
                                    100,

                                speed: 0,

                                remainingSeconds:
                                    0,
                            };

                        updateTask(
                            selectedTask.id,
                            task => ({
                                ...task,

                                status:
                                    "completed",

                                progress:
                                    completedProgress,

                                result,
                            })
                        );

                        addVideoWithMedia(
                            {
                                id:
                                    result.publicId?.trim() ||
                                    selectedTask.id,

                                type:
                                    "video",

                                name:
                                    selectedTask
                                        .file.name,

                                url:
                                    result.url,
                            },
                            {
                                title:
                                    selectedTask
                                        .file.name,
                            }
                        );
                    }
                } catch (error) {
                    const message =
                        error instanceof
                        Error
                            ? error.message
                            : "تعذر استئناف الرفع";

                    updateTask(
                        selectedTask.id,
                        task => ({
                            ...task,
                            status:
                                "failed",
                        })
                    );

                    setErrors(
                        currentErrors => [
                            ...currentErrors,
                            `${selectedTask.file.name}: ${message}`,
                        ]
                    );
                }
            },
            [
                addVideoWithMedia,
                disabled,
                onResume,
                updateTask,
            ]
        );

    const retryUpload =
        useCallback(
            async (
                selectedTask:
                    UploadTask
            ): Promise<void> => {
                if (
                    disabled ||
                    selectedTask.status !==
                        "failed"
                ) {
                    return;
                }

                const resetTask:
                    UploadTask =
                    {
                        ...selectedTask,

                        status:
                            "idle",

                        progress:
                            createInitialProgress(
                                selectedTask.file
                                    .size
                            ),

                        result:
                            undefined,

                        onProgress:
                            undefined,
                    };

                updateTask(
                    selectedTask.id,
                    () => resetTask
                );

                setErrors(
                    currentErrors =>
                        currentErrors.filter(
                            error =>
                                !error.startsWith(
                                    `${selectedTask.file.name}:`
                                )
                        )
                );

                if (onRetry) {
                    try {
                        const result =
                            await onRetry(
                                resetTask
                            );

                        if (
                            result &&
                            !result.success
                        ) {
                            throw new Error(
                                getResultError(
                                    result,
                                    "تعذر إعادة محاولة الرفع"
                                )
                            );
                        }

                        if (
                            result?.success &&
                            result.url
                        ) {
                            updateTask(
                                selectedTask.id,
                                task => ({
                                    ...task,

                                    status:
                                        "completed",

                                    result,

                                    progress: {
                                        ...task.progress,

                                        uploadedBytes:
                                            task.file
                                                .size,

                                        totalBytes:
                                            task.file
                                                .size,

                                        percentage:
                                            100,

                                        speed:
                                            0,

                                        remainingSeconds:
                                            0,
                                    },
                                })
                            );

                            addVideoWithMedia(
                                {
                                    id:
                                        result.publicId?.trim() ||
                                        resetTask.id,

                                    type:
                                        "video",

                                    name:
                                        resetTask.file
                                            .name,

                                    url:
                                        result.url,
                                },
                                {
                                    title:
                                        resetTask.file
                                            .name,
                                }
                            );
                        }

                        return;
                    } catch (error) {
                        const message =
                            error instanceof
                            Error
                                ? error.message
                                : "تعذر إعادة محاولة الرفع";

                        updateTask(
                            selectedTask.id,
                            task => ({
                                ...task,

                                status:
                                    "failed",

                                result: {
                                    success:
                                        false,

                                    error:
                                        message,
                                },
                            })
                        );

                        setErrors(
                            currentErrors => [
                                ...currentErrors,
                                `${selectedTask.file.name}: ${message}`,
                            ]
                        );

                        return;
                    }
                }

                await startUpload(
                    resetTask
                );
            },
            [
                addVideoWithMedia,
                disabled,
                onRetry,
                startUpload,
                updateTask,
            ]
        );

    const cancelUpload =
        useCallback(
            async (
                selectedTask:
                    UploadTask
            ): Promise<void> => {
                if (
                    disabled ||
                    selectedTask.status ===
                        "completed" ||
                    selectedTask.status ===
                        "cancelled"
                ) {
                    return;
                }

                try {
                    if (onCancel) {
                        const result =
                            await onCancel(
                                selectedTask
                            );

                        if (
                            result &&
                            !result.success
                        ) {
                            throw new Error(
                                getResultError(
                                    result,
                                    "تعذر إلغاء الرفع"
                                )
                            );
                        }
                    }

                    selectedTask.onProgress =
                        undefined;

                    updateTask(
                        selectedTask.id,
                        task => ({
                            ...task,

                            status:
                                "cancelled",
                        })
                    );
                } catch (error) {
                    const message =
                        error instanceof
                        Error
                            ? error.message
                            : "تعذر إلغاء الرفع";

                    setErrors(
                        currentErrors => [
                            ...currentErrors,
                            `${selectedTask.file.name}: ${message}`,
                        ]
                    );
                }
            },
            [
                disabled,
                onCancel,
                updateTask,
            ]
        );

    const removeTask =
        useCallback(
            (
                selectedTask:
                    UploadTask
            ): void => {
                selectedTask.onProgress =
                    undefined;

                updateVideos(
                    currentVideos =>
                        currentVideos.filter(
                            task =>
                                task.id !==
                                selectedTask.id
                        )
                );

                setErrors(
                    currentErrors =>
                        currentErrors.filter(
                            error =>
                                !error.startsWith(
                                    `${selectedTask.file.name}:`
                                )
                        )
                );
            },
            [updateVideos]
        );

    const canStartUpload =
        (
            task: UploadTask
        ): boolean => {
            return (
                Boolean(onUpload) &&
                (
                    task.status ===
                        "idle" ||
                    task.status ===
                        "queued"
                )
            );
        };

    const canPauseUpload =
        (
            task: UploadTask
        ): boolean => {
            return (
                Boolean(onPause) &&
                task.status ===
                    "uploading"
            );
        };

    const canResumeUpload =
        (
            task: UploadTask
        ): boolean => {
            return (
                Boolean(onResume) &&
                task.status ===
                    "paused"
            );
        };

    const canRetryUpload =
        (
            task: UploadTask
        ): boolean => {
            return (
                task.status ===
                "failed"
            );
        };

    const canCancelUpload =
        (
            task: UploadTask
        ): boolean => {
            return (
                task.status !==
                    "completed" &&
                task.status !==
                    "cancelled"
            );
        };
    return (
        <div
            className={`
                space-y-6
                ${className}
            `}
        >
            <div
                onDragOver={event => {
                    event.preventDefault();
                }}
                onDrop={handleDrop}
                className="
                    rounded-xl
                    border
                    border-dashed
                    border-slate-600
                    bg-slate-900
                    p-8
                    text-center
                "
            >
                <input
                    ref={inputRef}
                    type="file"
                    accept={VIDEO_INPUT_ACCEPT}
                    multiple
                    hidden
                    disabled={disabled}
                    onChange={
                        handleInputChange
                    }
                />

                <div
                    className="
                        mx-auto
                        max-w-xl
                        space-y-4
                    "
                >
                    <div>
                        <h3
                            className="
                                text-lg
                                font-bold
                                text-white
                            "
                        >
                            رفع فيديوهات العقار
                        </h3>

                        <p
                            className="
                                mt-2
                                text-sm
                                leading-6
                                text-slate-400
                            "
                        >
                            اسحب ملفات الفيديو هنا
                            أو اخترها من جهازك.
                            الحد الأقصى لكل ملف هو{" "}
                            {formatBytes(
                                maxFileSize
                            )}.
                        </p>
                    </div>

                    <button
                        type="button"
                        disabled={
                            disabled ||
                            availableSlots ===
                                0
                        }
                        onClick={() => {
                            inputRef.current?.click();
                        }}
                        className="
                            rounded-lg
                            bg-blue-600
                            px-6
                            py-3
                            font-bold
                            text-white
                            transition
                            hover:bg-blue-500
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >
                        {availableSlots === 0
                            ? "تم الوصول إلى الحد الأقصى"
                            : "اختيار فيديوهات"}
                    </button>

                    <div
                        className="
                            text-xs
                            text-slate-500
                        "
                    >
                        المتاح:{" "}
                        {availableSlots} من{" "}
                        {maxVideos}
                    </div>
                </div>
            </div>

            {errors.length > 0 && (
                <div
                    className="
                        rounded-xl
                        border
                        border-red-800
                        bg-red-950/40
                        p-4
                    "
                >
                    <div
                        className="
                            mb-2
                            font-bold
                            text-red-300
                        "
                    >
                        تعذر تنفيذ بعض العمليات
                    </div>

                    <div
                        className="
                            space-y-1
                            text-sm
                            text-red-200
                        "
                    >
                        {errors.map(
                            (
                                error,
                                index
                            ) => (
                                <div
                                    key={`${error}-${index}`}
                                >
                                    {error}
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}

            {videos.length === 0 ? (
                <div
                    className="
                        rounded-xl
                        border
                        border-slate-800
                        bg-slate-900
                        p-8
                        text-center
                        text-sm
                        text-slate-400
                    "
                >
                    لم تتم إضافة أي فيديوهات
                    بعد.
                </div>
            ) : (
                <div className="space-y-4">
                    {videos.map(task => {
                        const percentage =
                            clampPercentage(
                                task.progress
                                    .percentage
                            );

                        const resultError =
                            task.result &&
                            !task.result
                                .success
                                ? task.result
                                      .error
                                : undefined;

                        return (
                            <div
                                key={task.id}
                                className="
                                    rounded-xl
                                    border
                                    border-slate-700
                                    bg-slate-900
                                    p-4
                                "
                            >
                                <div
                                    className="
                                        flex
                                        flex-col
                                        gap-4
                                        md:flex-row
                                        md:items-start
                                        md:justify-between
                                    "
                                >
                                    <div
                                        className="
                                            min-w-0
                                            flex-1
                                        "
                                    >
                                        <div
                                            className="
                                                truncate
                                                font-bold
                                                text-white
                                            "
                                            title={
                                                task
                                                    .file
                                                    .name
                                            }
                                        >
                                            {
                                                task
                                                    .file
                                                    .name
                                            }
                                        </div>

                                        <div
                                            className="
                                                mt-1
                                                text-sm
                                                text-slate-400
                                            "
                                        >
                                            {
                                                STATUS_LABELS[
                                                    task
                                                        .status
                                                ]
                                            }
                                        </div>

                                        <div
                                            className="
                                                mt-1
                                                text-xs
                                                text-slate-500
                                            "
                                        >
                                            {formatBytes(
                                                task
                                                    .file
                                                    .size
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        className="
                                            shrink-0
                                            text-lg
                                            font-bold
                                            text-white
                                        "
                                    >
                                        {percentage}%
                                    </div>
                                </div>

                                <div
                                    className="
                                        mt-4
                                        h-3
                                        overflow-hidden
                                        rounded-full
                                        bg-slate-700
                                    "
                                >
                                    <div
                                        className="
                                            h-full
                                            bg-blue-500
                                            transition-all
                                            duration-300
                                        "
                                        style={{
                                            width: `${percentage}%`,
                                        }}
                                    />
                                </div>

                                <div
                                    className="
                                        mt-3
                                        flex
                                        flex-wrap
                                        gap-x-4
                                        gap-y-1
                                        text-xs
                                        text-slate-300
                                    "
                                >
                                    <span>
                                        {formatBytes(
                                            task
                                                .progress
                                                .uploadedBytes
                                        )}{" "}
                                        /{" "}
                                        {formatBytes(
                                            task
                                                .progress
                                                .totalBytes
                                        )}
                                    </span>

                                    {task.progress
                                        .speed >
                                        0 && (
                                        <span>
                                            السرعة:{" "}
                                            {formatBytes(
                                                task
                                                    .progress
                                                    .speed
                                            )}
                                            /ث
                                        </span>
                                    )}

                                    {task.progress
                                        .remainingSeconds >
                                        0 && (
                                        <span>
                                            المتبقي:{" "}
                                            {Math.ceil(
                                                task
                                                    .progress
                                                    .remainingSeconds
                                            )}{" "}
                                            ثانية
                                        </span>
                                    )}
                                </div>

                                {resultError && (
                                    <div
                                        className="
                                            mt-3
                                            rounded-lg
                                            border
                                            border-red-800
                                            bg-red-950/40
                                            px-3
                                            py-2
                                            text-sm
                                            text-red-200
                                        "
                                    >
                                        {resultError}
                                    </div>
                                )}

                                {task.status ===
                                    "completed" &&
                                    task.result
                                        ?.url && (
                                        <div
                                            className="
                                                mt-3
                                                rounded-lg
                                                border
                                                border-emerald-800
                                                bg-emerald-950/30
                                                px-3
                                                py-2
                                                text-sm
                                                text-emerald-200
                                            "
                                        >
                                            تم ربط الفيديو
                                            بالعقار بنجاح.
                                        </div>
                                    )}

                                <div
                                    className="
                                        mt-4
                                        flex
                                        flex-wrap
                                        gap-2
                                    "
                                >
                                    {canStartUpload(
                                        task
                                    ) && (
                                        <button
                                            type="button"
                                            disabled={
                                                disabled
                                            }
                                            onClick={() => {
                                                void startUpload(
                                                    task
                                                );
                                            }}
                                            className="
                                                rounded-lg
                                                bg-green-600
                                                px-4
                                                py-2
                                                text-sm
                                                font-semibold
                                                text-white
                                                transition
                                                hover:bg-green-500
                                                disabled:cursor-not-allowed
                                                disabled:opacity-50
                                            "
                                        >
                                            بدء الرفع
                                        </button>
                                    )}

                                    {canPauseUpload(
                                        task
                                    ) && (
                                        <button
                                            type="button"
                                            disabled={
                                                disabled
                                            }
                                            onClick={() => {
                                                void pauseUpload(
                                                    task
                                                );
                                            }}
                                            className="
                                                rounded-lg
                                                bg-yellow-600
                                                px-4
                                                py-2
                                                text-sm
                                                font-semibold
                                                text-white
                                                transition
                                                hover:bg-yellow-500
                                                disabled:cursor-not-allowed
                                                disabled:opacity-50
                                            "
                                        >
                                            إيقاف مؤقت
                                        </button>
                                    )}

                                    {canResumeUpload(
                                        task
                                    ) && (
                                        <button
                                            type="button"
                                            disabled={
                                                disabled
                                            }
                                            onClick={() => {
                                                void resumeUpload(
                                                    task
                                                );
                                            }}
                                            className="
                                                rounded-lg
                                                bg-indigo-600
                                                px-4
                                                py-2
                                                text-sm
                                                font-semibold
                                                text-white
                                                transition
                                                hover:bg-indigo-500
                                                disabled:cursor-not-allowed
                                                disabled:opacity-50
                                            "
                                        >
                                            استئناف
                                        </button>
                                    )}

                                    {canRetryUpload(
                                        task
                                    ) && (
                                        <button
                                            type="button"
                                            disabled={
                                                disabled
                                            }
                                            onClick={() => {
                                                void retryUpload(
                                                    task
                                                );
                                            }}
                                            className="
                                                rounded-lg
                                                bg-orange-600
                                                px-4
                                                py-2
                                                text-sm
                                                font-semibold
                                                text-white
                                                transition
                                                hover:bg-orange-500
                                                disabled:cursor-not-allowed
                                                disabled:opacity-50
                                            "
                                        >
                                            إعادة المحاولة
                                        </button>
                                    )}

                                    {canCancelUpload(
                                        task
                                    ) && (
                                        <button
                                            type="button"
                                            disabled={
                                                disabled
                                            }
                                            onClick={() => {
                                                void cancelUpload(
                                                    task
                                                );
                                            }}
                                            className="
                                                rounded-lg
                                                bg-red-600
                                                px-4
                                                py-2
                                                text-sm
                                                font-semibold
                                                text-white
                                                transition
                                                hover:bg-red-500
                                                disabled:cursor-not-allowed
                                                disabled:opacity-50
                                            "
                                        >
                                            إلغاء
                                        </button>
                                    )}

                                    {(task.status ===
                                        "completed" ||
                                        task.status ===
                                            "failed" ||
                                        task.status ===
                                            "cancelled" ||
                                        task.status ===
                                            "idle") && (
                                        <button
                                            type="button"
                                            disabled={
                                                disabled
                                            }
                                            onClick={() => {
                                                removeTask(
                                                    task
                                                );
                                            }}
                                            className="
                                                rounded-lg
                                                border
                                                border-slate-600
                                                px-4
                                                py-2
                                                text-sm
                                                font-semibold
                                                text-slate-200
                                                transition
                                                hover:bg-slate-800
                                                disabled:cursor-not-allowed
                                                disabled:opacity-50
                                            "
                                        >
                                            حذف من القائمة
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}