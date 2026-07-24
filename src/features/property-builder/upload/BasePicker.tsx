"use client";

import {
    type ChangeEvent,
    type DragEvent,
    type KeyboardEvent,
    type ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";

import type {
    UploadProgress,
    UploadProvider,
    UploadTask,
    UploadType,
} from "./contracts";

/* =========================================================
   Public Types
   ========================================================= */

export interface PickerFileMetadata {
    previewUrl?: string;

    duration?: number;

    width?: number;

    height?: number;
}

export interface PreparedPickerFile {
    task: UploadTask;

    metadata: PickerFileMetadata;
}

export interface BasePickerConfiguration {
    uploadType: UploadType;

    provider: UploadProvider;

    accept: string;

    supportedMimeTypes: string[];

    maxFileSize: number;

    heading: string;

    description: string;

    selectButtonLabel: string;

    emptySelectionLabel: string;

    preparingLabel: string;

    fileNounSingular: string;

    fileNounPlural: string;

    readMetadata?(
        file: File
    ): Promise<PickerFileMetadata>;
}

export interface BasePickerProps {
    configuration:
        BasePickerConfiguration;

    multiple: boolean;

    maxFiles: number;

    disabled: boolean;

    onPrepared(
        tasks: UploadTask[]
    ): void | Promise<void>;

    renderPreview?(
        preparedFile:
            PreparedPickerFile
    ): ReactNode;
}

/* =========================================================
   Internal Types
   ========================================================= */

interface ValidationResult {
    valid: boolean;

    error?: string;
}

/* =========================================================
   Helpers
   ========================================================= */

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
    file: File,
    configuration:
        BasePickerConfiguration
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

            uploadType:
                configuration.uploadType,

            provider:
                configuration.provider,
        },

        status: "idle",

        progress:
            createInitialProgress(
                file.size
            ),

        chunks: [],
    };
}

function getFileSignature(
    file: File
): string {
    return [
        file.name,

        file.size,

        file.type,

        file.lastModified,
    ].join("::");
}

function formatBytes(
    bytes: number
): string {
    if (
        !Number.isFinite(bytes) ||
        bytes <= 0
    ) {
        return "0 B";
    }

    const units = [
        "B",
        "KB",
        "MB",
        "GB",
        "TB",
    ];

    const unitIndex = Math.min(
        Math.floor(
            Math.log(bytes) /
                Math.log(1024)
        ),
        units.length - 1
    );

    const value =
        bytes /
        1024 ** unitIndex;

    const fractionDigits =
        unitIndex === 0
            ? 0
            : value >= 100
              ? 0
              : value >= 10
                ? 1
                : 2;

    return `${value.toFixed(
        fractionDigits
    )} ${units[unitIndex]}`;
}

function formatDuration(
    seconds?: number
): string {
    if (
        seconds === undefined ||
        !Number.isFinite(seconds) ||
        seconds <= 0
    ) {
        return "00:00";
    }

    const totalSeconds =
        Math.floor(seconds);

    const hours =
        Math.floor(
            totalSeconds / 3600
        );

    const minutes =
        Math.floor(
            (totalSeconds % 3600) /
                60
        );

    const remainingSeconds =
        totalSeconds % 60;

    const minuteText =
        String(minutes).padStart(
            2,
            "0"
        );

    const secondText =
        String(
            remainingSeconds
        ).padStart(2, "0");

    if (hours > 0) {
        return [
            String(hours).padStart(
                2,
                "0"
            ),

            minuteText,

            secondText,
        ].join(":");
    }

    return [
        minuteText,

        secondText,
    ].join(":");
}

function validateFile(
    file: File,
    configuration:
        BasePickerConfiguration,
    existingSignatures:
        Set<string>
): ValidationResult {
    if (file.size <= 0) {
        return {
            valid: false,

            error: `${file.name}: the file is empty.`,
        };
    }

    if (
        file.size >
        configuration.maxFileSize
    ) {
        return {
            valid: false,

            error: `${file.name}: maximum size is ${formatBytes(
                configuration.maxFileSize
            )}.`,
        };
    }

    if (
        !configuration.supportedMimeTypes.includes(
            file.type
        )
    ) {
        return {
            valid: false,

            error: `${file.name}: unsupported file format.`,
        };
    }

    if (
        existingSignatures.has(
            getFileSignature(file)
        )
    ) {
        return {
            valid: false,

            error: `${file.name}: this file is already selected.`,
        };
    }

    return {
        valid: true,
    };
}

function revokePreviewUrl(
    preparedFile:
        PreparedPickerFile
): void {
    const previewUrl =
        preparedFile.metadata
            .previewUrl;

    if (previewUrl) {
        URL.revokeObjectURL(
            previewUrl
        );
    }
}

async function prepareFile(
    file: File,
    configuration:
        BasePickerConfiguration
): Promise<PreparedPickerFile> {
    const metadata =
        configuration.readMetadata
            ? await configuration.readMetadata(
                  file
              )
            : {};

    return {
        task: createUploadTask(
            file,
            configuration
        ),

        metadata,
    };
}

/* =========================================================
   Component
   ========================================================= */

export default function BasePicker({
    configuration,
    multiple,
    maxFiles,
    disabled,
    onPrepared,
    renderPreview,
}: BasePickerProps) {
    const inputRef =
        useRef<HTMLInputElement | null>(
            null
        );

    const preparedFilesRef =
        useRef<
            PreparedPickerFile[]
        >([]);

    const [
        preparedFiles,
        setPreparedFiles,
    ] = useState<
        PreparedPickerFile[]
    >([]);

    const [
        isDragging,
        setIsDragging,
    ] = useState(false);

    const [
        isPreparing,
        setIsPreparing,
    ] = useState(false);

    const [
        errorMessages,
        setErrorMessages,
    ] = useState<string[]>([]);

    useEffect(() => {
        preparedFilesRef.current =
            preparedFiles;
    }, [preparedFiles]);

    useEffect(() => {
        return () => {
            preparedFilesRef.current.forEach(
                revokePreviewUrl
            );
        };
    }, []);

    const selectedSignatures =
        useMemo(
            () =>
                new Set(
                    preparedFiles.map(
                        preparedFile =>
                            getFileSignature(
                                preparedFile
                                    .task.file
                                    .file
                            )
                    )
                ),
            [preparedFiles]
        );

    const availableSlots =
        Math.max(
            maxFiles -
                preparedFiles.length,
            0
        );

    const selectionDescription =
        multiple
            ? `${preparedFiles.length} of ${maxFiles} ${configuration.fileNounPlural} selected`
            : preparedFiles.length === 0
              ? configuration.emptySelectionLabel
              : `1 ${configuration.fileNounSingular} selected`;

    const openFileDialog =
        useCallback(() => {
            if (
                disabled ||
                isPreparing ||
                availableSlots === 0
            ) {
                return;
            }

            inputRef.current?.click();
        }, [
            availableSlots,
            disabled,
            isPreparing,
        ]);

	    /* =====================================================
       File Processing
       ===================================================== */

    const prepareFiles =
        useCallback(
            async (
                files: File[]
            ) => {
                if (
                    disabled ||
                    isPreparing ||
                    files.length === 0
                ) {
                    return;
                }

                setErrorMessages([]);

                if (
                    availableSlots === 0
                ) {
                    setErrorMessages([
                        `Maximum ${maxFiles} files allowed.`,
                    ]);

                    return;
                }

                const limitedFiles =
                    multiple
                        ? files.slice(
                              0,
                              availableSlots
                          )
                        : files.slice(
                              0,
                              1
                          );

                const errors: string[] =
                    [];

                const validFiles: File[] =
                    [];

                const batchSignatures =
                    new Set<string>();

                limitedFiles.forEach(
                    file => {
                        const validation =
                            validateFile(
                                file,
                                configuration,
                                selectedSignatures
                            );

                        const signature =
                            getFileSignature(
                                file
                            );

                        if (
                            !validation.valid
                        ) {
                            errors.push(
                                validation.error ??
                                    `${file.name}: invalid file`
                            );

                            return;
                        }

                        if (
                            batchSignatures.has(
                                signature
                            )
                        ) {
                            errors.push(
                                `${file.name}: duplicated in selection`
                            );

                            return;
                        }

                        batchSignatures.add(
                            signature
                        );

                        validFiles.push(
                            file
                        );
                    }
                );

                if (
                    files.length >
                    limitedFiles.length
                ) {
                    errors.push(
                        `Only ${maxFiles} files can be selected.`
                    );
                }

                if (
                    validFiles.length === 0
                ) {
                    setErrorMessages(
                        errors
                    );

                    return;
                }

                setIsPreparing(true);

                const prepared:
                    PreparedPickerFile[] =
                    [];

                for (
                    const file of validFiles
                ) {
                    try {
                        const result =
                            await prepareFile(
                                file,
                                configuration
                            );

                        prepared.push(
                            result
                        );
                    } catch (
                        caughtError
                    ) {
                        errors.push(
                            caughtError instanceof
                                Error
                                ? `${file.name}: ${caughtError.message}`
                                : `${file.name}: unable to prepare file`
                        );
                    }
                }

                setPreparedFiles(
                    previous => {
                        if (!multiple) {
                            previous.forEach(
                                revokePreviewUrl
                            );

                            return prepared.slice(
                                0,
                                1
                            );
                        }

                        return [
                            ...previous,
                            ...prepared,
                        ].slice(
                            0,
                            maxFiles
                        );
                    }
                );

                setErrorMessages(
                    errors
                );

                setIsPreparing(false);
            },
            [
                availableSlots,
                configuration,
                disabled,
                isPreparing,
                maxFiles,
                multiple,
                selectedSignatures,
            ]
        );


    /* =====================================================
       Input Change
       ===================================================== */

    const handleInputChange =
        useCallback(
            async (
                event: ChangeEvent<HTMLInputElement>
            ) => {
                const files =
                    Array.from(
                        event.target.files ??
                            []
                    );

                event.target.value =
                    "";

                await prepareFiles(
                    files
                );
            },
            [
                prepareFiles,
            ]
        );


    /* =====================================================
       Drag Events
       ===================================================== */

    const handleDragEnter =
        useCallback(
            (
                event: DragEvent<HTMLDivElement>
            ) => {
                event.preventDefault();

                event.stopPropagation();

                if (
                    disabled ||
                    isPreparing
                ) {
                    return;
                }

                setIsDragging(true);
            },
            [
                disabled,
                isPreparing,
            ]
        );


    const handleDragOver =
        useCallback(
            (
                event: DragEvent<HTMLDivElement>
            ) => {
                event.preventDefault();

                event.stopPropagation();

                if (
                    disabled ||
                    isPreparing
                ) {
                    event.dataTransfer.dropEffect =
                        "none";

                    return;
                }

                event.dataTransfer.dropEffect =
                    "copy";

                setIsDragging(true);
            },
            [
                disabled,
                isPreparing,
            ]
        );


    const handleDragLeave =
        useCallback(
            (
                event: DragEvent<HTMLDivElement>
            ) => {
                event.preventDefault();

                event.stopPropagation();

                const relatedTarget =
                    event.relatedTarget;

                if (
                    relatedTarget instanceof
                        Node &&
                    event.currentTarget.contains(
                        relatedTarget
                    )
                ) {
                    return;
                }

                setIsDragging(false);
            },
            []
        );


    const handleDrop =
        useCallback(
            async (
                event: DragEvent<HTMLDivElement>
            ) => {
                event.preventDefault();

                event.stopPropagation();

                setIsDragging(false);

                const files =
                    Array.from(
                        event.dataTransfer
                            .files
                    );

                await prepareFiles(
                    files
                );
            },
            [
                prepareFiles,
            ]
        );


    /* =====================================================
       Remove Selected File
       ===================================================== */

    const removePreparedFile =
        useCallback(
            (
                taskId: string
            ) => {
                if (
                    disabled ||
                    isPreparing
                ) {
                    return;
                }

                setPreparedFiles(
                    previous =>
                        previous.filter(
                            item => {
                                if (
                                    item.task
                                        .id ===
                                    taskId
                                ) {
                                    revokePreviewUrl(
                                        item
                                    );

                                    return false;
                                }

                                return true;
                            }
                        )
                );
            },
            [
                disabled,
                isPreparing,
            ]
        );


    const clearFiles =
        useCallback(() => {
            if (
                disabled ||
                isPreparing
            ) {
                return;
            }

            setPreparedFiles(
                previous => {
                    previous.forEach(
                        revokePreviewUrl
                    );

                    return [];
                }
            );

            setErrorMessages([]);
        }, [
            disabled,
            isPreparing,
        ]);


    /* =====================================================
       Submit
       ===================================================== */

    const submitFiles =
        useCallback(
            async () => {
                if (
                    disabled ||
                    isPreparing ||
                    preparedFiles.length ===
                        0
                ) {
                    return;
                }

                setIsPreparing(true);

try {

   	 await onPrepared(
            preparedFiles.map(
               item =>
                    item.task
          )
     );


    preparedFiles.forEach(
        revokePreviewUrl
    );


    setPreparedFiles([]);


   } catch (error) {

      console.error(
         "Upload failed:",
          error
     );

    setErrorMessages([

        error instanceof Error
            ? error.message
            : "Upload failed."

    ]);

} finally {

    setIsPreparing(false);

}

           },
            [
                disabled,
                isPreparing,
                onPrepared,
                preparedFiles,
            ]
        );

	    return (
        <div className="space-y-6">

            {/* =============================================
                Hidden Input
            ============================================= */}

            <input
                ref={inputRef}
                type="file"
                accept={configuration.accept}
                multiple={multiple}
                disabled={
                    disabled ||
                    isPreparing
                }
                onChange={
                    handleInputChange
                }
                className="hidden"
            />


            {/* =============================================
                Drop Zone
            ============================================= */}

            <div
                role="button"
                tabIndex={
                    disabled
                        ? -1
                        : 0
                }
                 onClick={(event) => {

                    if (
                        event.target instanceof HTMLButtonElement
                     ) {
            return;
                     }

    openFileDialog();

}}
                onKeyDown={(
                    event: KeyboardEvent<HTMLDivElement>
                ) => {
                    if (
                        event.key ===
                            "Enter" ||
                        event.key === " "
                    ) {
                        event.preventDefault();

                        openFileDialog();
                    }
                }}
                onDragEnter={
                    handleDragEnter
                }
                onDragOver={
                    handleDragOver
                }
                onDragLeave={
                    handleDragLeave
                }
                onDrop={
                    handleDrop
                }
                className={[
                    "relative overflow-hidden rounded-2xl border-2 border-dashed",
                    "p-10 text-center transition",
                    "outline-none focus:ring-2",
                    "focus:ring-orange-500",
                    isDragging
                        ? "border-orange-400 bg-orange-500/10"
                        : "border-slate-700 bg-slate-950/40 hover:border-slate-500",
                    disabled
                        ? "cursor-not-allowed opacity-60"
                        : "cursor-pointer",
                ].join(" ")}
            >

                <div className="mx-auto max-w-xl">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 text-slate-300">

                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-8 w-8"
                        >
                            <path d="M12 16V4" />

                            <path d="m7 9 5-5 5 5" />

                            <path d="M5 20h14" />

                        </svg>

                    </div>


                    <h3 className="mt-5 text-xl font-bold text-white">

                        {isDragging
                            ? "Drop files here"
                            : configuration.heading}

                    </h3>


                    <p className="mt-3 text-sm leading-6 text-slate-400">

                        {
                            configuration.description
                        }

                    </p>


		     <button
  			  type="button"
   			  onClick={(event) => {

      			      event.stopPropagation();

                              openFileDialog();

                           }}	
                           disabled={
                           disabled ||
                           isPreparing
                           }
                            className="mt-6 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:bg-slate-700"
 			>

                        {
                            configuration.selectButtonLabel
                        }

                    </button>

                </div>


                {isPreparing && (

                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">

                        <div className="flex flex-col items-center">

                            <span className="h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-orange-500" />


                            <span className="mt-4 text-sm font-semibold text-white">

                                Preparing files...

                            </span>


                        </div>

                    </div>

                )}

            </div>



            {/* =============================================
                Errors
            ============================================= */}

            {
                errorMessages.length > 0 && (

                    <div className="rounded-xl border border-red-900/70 bg-red-950/40 p-4">

                        <h3 className="font-bold text-red-200">

                            Some files need attention

                        </h3>


                        <ul className="mt-2 space-y-1 text-sm text-red-300">

                            {
                                errorMessages.map(
                                    error => (

                                        <li
                                            key={error}
                                        >
                                            {error}
                                        </li>

                                    )
                                )
                            }

                        </ul>

                    </div>

                )
            }



            {/* =============================================
                Selected Files
            ============================================= */}

            {
                preparedFiles.length > 0 && (

                    <div className="space-y-4">


                        <div className="flex items-center justify-between">

                            <div>

                                <h3 className="text-lg font-bold text-white">

                                    Selected Files

                                </h3>


                                <p className="mt-1 text-sm text-slate-400">

                                    {
                                        selectionDescription
                                    }

                                </p>

                            </div>



                            <button
                                type="button"
                                onClick={
                                    clearFiles
                                }
                                disabled={
                                    disabled ||
                                    isPreparing
                                }
                                className="rounded-xl border border-red-800 bg-red-950/30 px-4 py-2 text-sm font-bold text-red-300 transition hover:bg-red-950/60 disabled:opacity-50"
                            >

                                Clear

                            </button>


                        </div>



                        <div className="grid gap-4 sm:grid-cols-2">

                            {
                                preparedFiles.map(
                                    item => (

                                        <div
                                            key={
                                                item.task.id
                                            }
                                            className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/50"
                                        >

                                            {
                                                renderPreview
                                                    ? renderPreview(
                                                          item
                                                      )
                                                    : item.metadata
                                                          .previewUrl && (

                                                        <div className="aspect-video bg-black">

                                                            <img
                                                                src={
                                                                    item.metadata
                                                                        .previewUrl
                                                                }
                                                                alt={
                                                                    item.task
                                                                        .file
                                                                        .name
                                                                }
                                                                className="h-full w-full object-contain"
                                                            />

                                                        </div>

                                                    )
                                            }


                                            <div className="p-4">

                                                <p
                                                    title={
                                                        item.task
                                                            .file
                                                            .name
                                                    }
                                                    className="truncate text-sm font-bold text-white"
                                                >

                                                    {
                                                        item.task
                                                            .file
                                                            .name
                                                    }

                                                </p>


                                                <p className="mt-1 text-xs text-slate-400">

                                                    {
                                                        formatBytes(
                                                            item.task
                                                                .file
                                                                .size
                                                        )
                                                    }

                                                </p>


                                                {
                                                    item.metadata
                                                        .duration && (

                                                        <p className="mt-1 text-xs text-slate-500">

                                                            Duration:
                                                            {" "}
                                                            {
                                                                formatDuration(
                                                                    item.metadata
                                                                        .duration
                                                                )
                                                            }

                                                        </p>

                                                    )
                                                }


                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removePreparedFile(
                                                            item.task.id
                                                        )
                                                    }
                                                    disabled={
                                                        disabled ||
                                                        isPreparing
                                                    }
                                                    className="mt-4 w-full rounded-xl border border-red-800 bg-red-950/30 px-4 py-2 text-sm font-bold text-red-300 transition hover:bg-red-950/60 disabled:opacity-50"
                                                >

                                                    Remove

                                                </button>


                                            </div>


                                        </div>

                                    )
                                )
                            }

                        </div>


                    </div>

                )
            }



            {/* =============================================
                Submit
            ============================================= */}

            <div className="flex justify-end border-t border-slate-800 pt-5">


                <button
                    type="button"
                     onClick={() => {

 		        console.log(
                          "PREPARE CLICKED"
                   );

                   submitFiles();

                }}
                    disabled={
                        disabled ||
                        isPreparing ||
                        preparedFiles.length ===
                            0
                    }
                    className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:bg-slate-700"
                >

                    Prepare & Continue

                </button>


            </div>


        </div>
    );
}
