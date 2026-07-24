import {
    NextResponse,
} from "next/server";


/* =========================================================
   Route Configuration
   ========================================================= */

export const runtime =
    "nodejs";


export const dynamic =
    "force-dynamic";


/* =========================================================
   Types
   ========================================================= */

interface RouteContext {

    params:
        Promise<{

            videoUid:
                string;

        }>;

}


interface CloudflareErrorItem {

    code?:
        number;

    message?:
        string;

}


interface CloudflareVideoStatus {

    state?:
        string;

    pctComplete?:
        string;

    errorReasonCode?:
        string;

    errorReasonText?:
        string;

}


interface CloudflareVideoPlayback {

    hls?:
        string;

    dash?:
        string;

}


interface CloudflareVideoDetails {

    uid?:
        string;

    readyToStream?:
        boolean;

    readyToStreamAt?:
        string;

    status?:
        CloudflareVideoStatus;

    preview?:
        string;

    thumbnail?:
        string;

    playback?:
        CloudflareVideoPlayback;

    duration?:
        number;

    input?:
        {

            width?:
                number;

            height?:
                number;

        };

    size?:
        number;

    created?:
        string;

    modified?:
        string;

    requireSignedURLs?:
        boolean;

}


interface CloudflareVideoResponse {

    success?:
        boolean;

    result?:
        CloudflareVideoDetails;

    errors?:
        CloudflareErrorItem[];

    messages?:
        CloudflareErrorItem[];

}


/* =========================================================
   Constants
   ========================================================= */

const CLOUDFLARE_STREAM_API_BASE_URL =

    "https://api.cloudflare.com/client/v4";


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


function normalizeVideoUid(

    value: unknown

): string {

    const videoUid =

        readRequiredString(
            value
        );


    if (
        !videoUid
    ) {

        return "";

    }


    if (
        !/^[a-zA-Z0-9_-]+$/.test(
            videoUid
        )
    ) {

        return "";

    }


    return videoUid;

}


function normalizeStatusState(

    value: unknown

): string {

    return (
        readRequiredString(
            value
        )
        ||
        "unknown"
    );

}


function parsePercentage(

    value: unknown

): number | undefined {

    if (
        typeof value === "number"
        &&
        Number.isFinite(
            value
        )
    ) {

        return Math.min(

            Math.max(
                value,
                0
            ),

            100

        );

    }


    if (
        typeof value !== "string"
    ) {

        return undefined;

    }


    const parsedValue =

        Number(
            value
        );


    if (
        !Number.isFinite(
            parsedValue
        )
    ) {

        return undefined;

    }


    return Math.min(

        Math.max(
            parsedValue,
            0
        ),

        100

    );

}


function collectCloudflareMessages(

    items:
        CloudflareErrorItem[]
        |
        undefined

): string {

    return (
        items
            ?.map(
                item =>
                    readRequiredString(
                        item.message
                    )
            )
            .filter(
                Boolean
            )
            .join(" | ")
        ||
        ""
    );

}


async function readCloudflareResponse(

    response: Response

): Promise<{

    data:
        CloudflareVideoResponse | null;

    responseText:
        string;

}> {

    const responseText =

        await response.text();


    if (
        !responseText
    ) {

        return {

            data:
                null,

            responseText:
                "",

        };

    }


    try {

        return {

            data:

                JSON.parse(
                    responseText
                ) as CloudflareVideoResponse,

            responseText,

        };

    }
    catch {

        return {

            data:
                null,

            responseText,

        };

    }

}


function createCloudflareErrorMessage(

    response: Response,

    data:
        CloudflareVideoResponse | null,

    responseText:
        string

): string {

    const errors =

        collectCloudflareMessages(
            data?.errors
        );


    if (
        errors
    ) {

        return errors;

    }


    const messages =

        collectCloudflareMessages(
            data?.messages
        );


    if (
        messages
    ) {

        return messages;

    }


    if (
        responseText
    ) {

        return responseText;

    }


    return (
        "Cloudflare video request failed with status " +
        `${response.status}.`
    );

}


/* =========================================================
   GET Video Details
   ========================================================= */

export async function GET(

    request: Request,

    context: RouteContext

) {

    try {

        const params =

            await context.params;


        const videoUid =

            normalizeVideoUid(
                params.videoUid
            );


        if (
            !videoUid
        ) {

            return NextResponse.json(

                {

                    success:
                        false,

                    error:
                        "A valid Cloudflare Stream video UID is required.",

                },

                {

                    status:
                        400,

                }

            );

        }


        const accountId =

            process.env
                .CLOUDFLARE_ACCOUNT_ID
                ?.trim();


        const apiToken =

            process.env
                .CLOUDFLARE_API_TOKEN
                ?.trim();


        if (
            !accountId
            ||
            !apiToken
        ) {

            console.error(

                "Cloudflare Stream account credentials are missing."

            );


            return NextResponse.json(

                {

                    success:
                        false,

                    error:
                        "Cloudflare Stream is not configured.",

                },

                {

                    status:
                        500,

                }

            );

        }


        const cloudflareResponse =

            await fetch(

                (
                    `${CLOUDFLARE_STREAM_API_BASE_URL}` +
                    `/accounts/${encodeURIComponent(accountId)}` +
                    `/stream/${encodeURIComponent(videoUid)}`
                ),

                {

                    method:
                        "GET",

                    headers: {

                        Authorization:
                            `Bearer ${apiToken}`,

                        Accept:
                            "application/json",

                    },

                    cache:
                        "no-store",

                    signal:
                        request.signal,

                }

            );


        const {

            data,

            responseText,

        } =

            await readCloudflareResponse(
                cloudflareResponse
            );


        if (
            !cloudflareResponse.ok
            ||
            !data?.success
        ) {

            const errorMessage =

                createCloudflareErrorMessage(

                    cloudflareResponse,

                    data,

                    responseText

                );


            console.error(

                "Cloudflare Stream video details request failed:",

                {

                    videoUid,

                    status:
                        cloudflareResponse.status,

                    error:
                        errorMessage,

                }

            );


            const responseStatus =

                cloudflareResponse.status === 404

                    ? 404

                    : cloudflareResponse.status >= 400
                    &&
                    cloudflareResponse.status < 500

                        ? 400

                        : 502;


            return NextResponse.json(

                {

                    success:
                        false,

                    error:
                        errorMessage,

                },

                {

                    status:
                        responseStatus,

                    headers: {

                        "Cache-Control":
                            "no-store",

                    },

                }

            );

        }


        const video =

            data.result;


        if (
            !video
        ) {

            return NextResponse.json(

                {

                    success:
                        false,

                    error:
                        "Cloudflare did not return video details.",

                },

                {

                    status:
                        502,

                    headers: {

                        "Cache-Control":
                            "no-store",

                    },

                }

            );

        }


        const returnedVideoUid =

            normalizeVideoUid(
                video.uid
            )
            ||
            videoUid;


        const statusState =

            normalizeStatusState(
                video.status?.state
            );


        const readyToStream =

            video.readyToStream === true
            ||
            statusState === "ready";


        const playbackUrl =

            readOptionalString(
                video.preview
            );


        const thumbnailUrl =

            readOptionalString(
                video.thumbnail
            );


        const hlsUrl =

            readOptionalString(
                video.playback?.hls
            );


        const dashUrl =

            readOptionalString(
                video.playback?.dash
            );


        const processingError =

            readOptionalString(
                video.status?.errorReasonText
            );


        const processingErrorCode =

            readOptionalString(
                video.status?.errorReasonCode
            );


        return NextResponse.json(

            {

                success:
                    true,

                videoUid:
                    returnedVideoUid,

                readyToStream,

                status: {

                    state:
                        statusState,

                    percentage:

                        parsePercentage(
                            video.status?.pctComplete
                        ),

                    errorCode:
                        processingErrorCode,

                    error:
                        processingError,

                },

                playbackUrl,

                thumbnailUrl,

                playback: {

                    hls:
                        hlsUrl,

                    dash:
                        dashUrl,

                },

                duration:

                    readOptionalNumber(
                        video.duration
                    ),

                width:

                    readOptionalNumber(
                        video.input?.width
                    ),

                height:

                    readOptionalNumber(
                        video.input?.height
                    ),

                size:

                    readOptionalNumber(
                        video.size
                    ),

                createdAt:

                    readOptionalString(
                        video.created
                    ),

                modifiedAt:

                    readOptionalString(
                        video.modified
                    ),

                readyAt:

                    readOptionalString(
                        video.readyToStreamAt
                    ),

                requiresSignedUrls:

                    video.requireSignedURLs === true,

            },

            {

                status:
                    200,

                headers: {

                    "Cache-Control":
                        "no-store, no-cache, must-revalidate",

                },

            }

        );

    }
    catch (error) {

        if (
            error instanceof DOMException
            &&
            error.name === "AbortError"
        ) {

            return NextResponse.json(

                {

                    success:
                        false,

                    error:
                        "The video details request was cancelled.",

                },

                {

                    status:
                        499,

                }

            );

        }


        console.error(

            "Cloudflare Stream video details error:",

            error

        );


        return NextResponse.json(

            {

                success:
                    false,

                error:

                    error instanceof Error

                        ? error.message

                        : "Unable to retrieve Cloudflare Stream video details.",

            },

            {

                status:
                    500,

                headers: {

                    "Cache-Control":
                        "no-store",

                },

            }

        );

    }

}