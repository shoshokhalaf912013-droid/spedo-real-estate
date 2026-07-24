"use client";

import {
    type MouseEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

import ImagePicker from "./ImagePicker";
import VideoPicker from "./VideoPicker";
import DocumentPicker from "./DocumentPicker";

import type {
    UploadTask,
    UploadType,
} from "./contracts";

/* =========================================================
   Public Contract
   ========================================================= */

export interface UploadDialogProps {
    open: boolean;

    uploadType: UploadType;

    onClose(): void;

    onPrepared(
        tasks: UploadTask[]
    ): void | Promise<void>;

    multiple?: boolean;

    maxFiles?: number;

    disabled?: boolean;

    title?: string;
}

/* =========================================================
   Picker Contract
   ========================================================= */

export interface UploadPickerProps {
    multiple: boolean;

    maxFiles: number;

    disabled: boolean;

    onPrepared(
        tasks: UploadTask[]
    ): void | Promise<void>;

    onCancel(): void;
}

/* =========================================================
   Constants
   ========================================================= */

const DEFAULT_MAX_FILES: Record<
    UploadType,
    number
> = {
    image: 20,

    video: 10,

    document: 10,
};

const DEFAULT_TITLES: Record<
    UploadType,
    string
> = {
    image: "Upload Images",

    video: "Upload Videos",

    document: "Upload Documents",
};

const TYPE_DESCRIPTIONS: Record<
    UploadType,
    string
> = {
    image:
        "Select or drag image files to prepare them for upload.",

    video:
        "Select or drag video files to prepare them for Cloudflare Stream.",

    document:
        "Select or drag document files to prepare them for upload.",
};

/* =========================================================
   Component
   ========================================================= */

export default function UploadDialog({
    open,
    uploadType,
    onClose,
    onPrepared,
    multiple = true,
    maxFiles,
    disabled = false,
    title,
}: UploadDialogProps) {
    const dialogRef =
        useRef<HTMLDivElement | null>(
            null
        );

    const [
        submitting,
        setSubmitting,
    ] = useState(false);

    const [
        error,
        setError,
    ] = useState<string | null>(
        null
    );

    const resolvedMaxFiles =
        maxFiles ??
        DEFAULT_MAX_FILES[
            uploadType
        ];

    const resolvedTitle =
        title ??
        DEFAULT_TITLES[
            uploadType
        ];

    /* =====================================================
       Close
       ===================================================== */

    const closeDialog =
        useCallback(() => {
            if (
                submitting ||
                disabled
            ) {
                return;
            }

            setError(null);

            onClose();
        }, [
            disabled,
            onClose,
            submitting,
        ]);

    /* =====================================================
       Prepared Tasks
       ===================================================== */

    const handlePrepared =
        useCallback(
            async (
                tasks: UploadTask[]
            ) => {
                if (
                    disabled ||
                    submitting ||
                    tasks.length === 0
                ) {
                    return;
                }

                setSubmitting(true);

                setError(null);

                try {
                    await onPrepared(
                        tasks
                    );

                    onClose();
                } catch (
                    caughtError
                ) {
                    setError(
                        caughtError instanceof
                            Error
                            ? caughtError.message
                            : "Unable to prepare the selected files."
                    );
                } finally {
                    setSubmitting(
                        false
                    );
                }
            },
            [
                disabled,
                onClose,
                onPrepared,
                submitting,
            ]
        );

    /* =====================================================
       Escape Key
       ===================================================== */

    useEffect(() => {
        if (!open) {
            return;
        }

        function handleKeyDown(
            event: KeyboardEvent
        ) {
            if (
                event.key !==
                "Escape"
            ) {
                return;
            }

            event.preventDefault();

            closeDialog();
        }

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [
        closeDialog,
        open,
    ]);

    /* =====================================================
       Page Scroll Lock
       ===================================================== */

    useEffect(() => {
        if (!open) {
            return;
        }

        const previousOverflow =
            document.body.style
                .overflow;

        document.body.style.overflow =
            "hidden";

        return () => {
            document.body.style.overflow =
                previousOverflow;
        };
    }, [open]);

    /* =====================================================
       Dialog Focus
       ===================================================== */

    useEffect(() => {
        if (!open) {
            return;
        }

        const timeoutId =
            window.setTimeout(
                () => {
                    dialogRef.current?.focus();
                },
                0
            );

        return () => {
            window.clearTimeout(
                timeoutId
            );
        };
    }, [open]);

    /* =====================================================
       Backdrop
       ===================================================== */

    const handleBackdropClick =
        useCallback(
            (
                event: MouseEvent<HTMLDivElement>
            ) => {
                if (
                    event.target !==
                    event.currentTarget
                ) {
                    return;
                }

                closeDialog();
            },
            [closeDialog]
        );

    /* =====================================================
       Picker
       ===================================================== */

    const pickerProps: UploadPickerProps =
        {
            multiple,

            maxFiles:
                resolvedMaxFiles,

            disabled:
                disabled ||
                submitting,

            onPrepared:
                handlePrepared,

            onCancel:
                closeDialog,
        };

    if (!open) {
        return null;
    }
    return (
        <div
            className="relative w-full max-w-3xl overflow-y-auto max-h-[85vh] rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-black/40 outline-none"
            onMouseDown={
                handleBackdropClick
            }
            aria-hidden={
                !open
            }
        >
            <div className="flex min-h-full items-center justify-center">
                <div
                    ref={dialogRef}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="upload-dialog-title"
                    aria-describedby="upload-dialog-description"
                    tabIndex={-1}
                    className="w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-black/40 outline-none"
                    onMouseDown={event =>
                        event.stopPropagation()
                    }
                >
                    {/* =====================================
                        Header
                        ===================================== */}

                    <div className="flex items-start justify-between gap-4 border-b border-slate-800 px-6 py-5">
                        <div className="min-w-0">
                            <h2
                                id="upload-dialog-title"
                                className="text-2xl font-bold text-white"
                            >
                                {resolvedTitle}
                            </h2>

                            <p
                                id="upload-dialog-description"
                                className="mt-2 text-sm leading-6 text-slate-400"
                            >
                                {
                                    TYPE_DESCRIPTIONS[
                                        uploadType
                                    ]
                                }
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={
                                closeDialog
                            }
                            disabled={
                                disabled ||
                                submitting
                            }
                            aria-label="Close upload dialog"
                            className={[
                                "flex h-10 w-10 shrink-0 items-center justify-center",
                                "rounded-xl border text-xl transition",
                                disabled ||
                                submitting
                                    ? "cursor-not-allowed border-slate-800 text-slate-700"
                                    : "border-slate-700 text-slate-400 hover:border-slate-500 hover:bg-slate-800 hover:text-white",
                            ].join(
                                " "
                            )}
                        >
                            ×
                        </button>
                    </div>

                    {/* =====================================
                        Error
                        ===================================== */}

                    {error && (
                        <div className="mx-6 mt-6 rounded-xl border border-red-900/70 bg-red-950/40 p-4">
                            <div className="flex items-start gap-3">
                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500/15 font-bold text-red-300">
                                    !
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="font-semibold text-red-200">
                                        Unable to prepare files
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-red-300">
                                        {error}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setError(
                                            null
                                        )
                                    }
                                    className="rounded-lg px-2 py-1 text-xs font-semibold text-red-300 transition hover:bg-red-500/10"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    {/* =====================================
                        Picker
                        ===================================== */}

                    <div className="p-6">
                        {uploadType ===
                            "image" && (
                            <ImagePicker
                                {...pickerProps}
                            />
                        )}

                        {uploadType ===
                            "video" && (
                            <VideoPicker
                                {...pickerProps}
                            />
                        )}

                        {uploadType ===
                            "document" && (
                            <DocumentPicker
                                {...pickerProps}
                            />
                        )}
                    </div>

                    {/* =====================================
                        Footer
                        ===================================== */}

                    <div className="flex flex-col gap-3 border-t border-slate-800 bg-slate-950/40 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs leading-5 text-slate-500">
                            Maximum files:{" "}
                            {
                                resolvedMaxFiles
                            }
                            {multiple
                                ? ""
                                : " — single file mode"}
                        </p>

                        <button
                            type="button"
                            onClick={
                                closeDialog
                            }
                            disabled={
                                disabled ||
                                submitting
                            }
                            className={[
                                "rounded-xl border px-5 py-2.5",
                                "text-sm font-bold transition",
                                disabled ||
                                submitting
                                    ? "cursor-not-allowed border-slate-800 text-slate-600"
                                    : "border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700",
                            ].join(
                                " "
                            )}
                        >
                            Close
                        </button>
                    </div>

                    {/* =====================================
                        Submitting Overlay
                        ===================================== */}

                    {submitting && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
                            <div className="flex flex-col items-center rounded-2xl border border-slate-700 bg-slate-900 px-8 py-6 shadow-xl">
                                <span className="h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-orange-500" />

                                <span className="mt-4 text-sm font-semibold text-white">
                                    Preparing files...
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}