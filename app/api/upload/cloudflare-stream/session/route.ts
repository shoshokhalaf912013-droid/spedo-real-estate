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

interface CreateStreamSessionBody {

    fileSize?:
        unknown;

    fileName?:
        unknown;

    mimeType?:
        unknown;

}


interface CloudflareErrorItem {

    code?:
        number;

    message?:
        string;

}


interface CloudflareErrorResponse {

    success?:
        boolean;

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

function encodeMetadataValue(

    value: string

): string {

    return Buffer
        .from(
            value,
            "utf8"
        )
        .toString(
            "base64"
        );

}


function createUploadMetadata(

    fileName: string,

    mimeType: string

): string {

    return [

        `name ${encodeMetadataValue(
            fileName
        )}`,

        `filetype ${encodeMetadataValue(
            mimeType
        )}`,

    ].join(",");

}


function parsePositiveInteger(

    value: unknown

): number | null {

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
        parsedValue <= 0
    ) {

        return null;

    }


    return parsedValue;

}


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


function sanitizeFileName(

    value: string

): string {

    return value
        .replace(
            /[\r\n]/g,
            " "
        )
        .trim();

}


function sanitizeMimeType(

    value: string

): string {

    const normalizedValue =

        value
            .replace(
                /[\r\n]/g,
                ""
            )
            .trim();


    if (
        !normalizedValue
    ) {

        return "video/mp4";

    }


    if (
        !normalizedValue.startsWith(
            "video/"
        )
    ) {

        return "application/octet-stream";

    }


    return normalizedValue;

}


function readCloudflareHeader(

    response: Response,

    headerName: string

): string {

    return response.headers
        .get(
            headerName
        )
        ?.trim()
        ||
        "";

}


async function readCloudflareError(

    response: Response

): Promise<string> {

    const responseText =

        await response.text();


    if (
        !responseText
    ) {

        return (
            "Cloudflare request failed with status " +
            `${response.status}.`
        );

    }


    try {

        const data =

            JSON.parse(
                responseText
            ) as CloudflareErrorResponse;


        const errors =

            data.errors
                ?.map(
                    error =>
                        readRequiredString(
                            error.message
                        )
                )
                .filter(
                    Boolean
                )
                .join(" | ");


        if (
            errors
        ) {

            return errors;

        }


        const messages =

            data.messages
                ?.map(
                    message =>
                        readRequiredString(
                            message.message
                        )
                )
                .filter(
                    Boolean
                )
                .join(" | ");


        if (
            messages
        ) {

            return messages;

        }

    }
    catch {

        // Cloudflare did not return a JSON error response.

    }


    return responseText;

}


/* =========================================================
   POST
   ========================================================= */

export async function POST(

    request: Request

) {

    try {

        let body:
            CreateStreamSessionBody;


        try {

            body =

                await request.json() as
                    CreateStreamSessionBody;

        }
        catch {

            return NextResponse.json(

                {

                    success: false,

                    error:
                        "Invalid JSON request body.",

                },

                {

                    status: 400,

                }

            );

        }


        const fileSize =

            parsePositiveInteger(
                body.fileSize
            );


        const fileName =

            sanitizeFileName(

                readRequiredString(
                    body.fileName
                )

            );


        const mimeType =

            sanitizeMimeType(

                readRequiredString(
                    body.mimeType
                )

            );


        if (
            fileSize === null
        ) {

            return NextResponse.json(

                {

                    success: false,

                    error:
                        "A valid positive fileSize is required.",

                },

                {

                    status: 400,

                }

            );

        }


        if (
            !fileName
        ) {

            return NextResponse.json(

                {

                    success: false,

                    error:
                        "fileName is required.",

                },

                {

                    status: 400,

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

                    success: false,

                    error:
                        "Cloudflare Stream is not configured.",

                },

                {

                    status: 500,

                }

            );

        }


        const cloudflareResponse =

            await fetch(

                (
                    `${CLOUDFLARE_STREAM_API_BASE_URL}` +
                    `/accounts/${accountId}` +
                    `/stream?direct_user=true`
                ),

                {

                    method: "POST",

                    headers: {

                        Authorization:
                            `Bearer ${apiToken}`,

                        "Tus-Resumable":
                            "1.0.0",

                        "Upload-Length":
                            String(fileSize),

                        "Upload-Metadata":

                            createUploadMetadata(

                                fileName,

                                mimeType

                            ),

                    },

                    cache: "no-store",

                }

            );


        if (
            !cloudflareResponse.ok
        ) {

            const cloudflareError =

                await readCloudflareError(
                    cloudflareResponse
                );


            console.error(

                "Cloudflare Stream session creation failed:",

                {

                    status:
                        cloudflareResponse.status,

                    error:
                        cloudflareError,

                }

            );


            return NextResponse.json(

                {

                    success: false,

                    error:
                        cloudflareError,

                },

                {

                    status:

                        cloudflareResponse.status >= 400
                        &&
                        cloudflareResponse.status < 500

                            ? 400

                            : 502,

                }

            );

        }


        const uploadUrl =

            readCloudflareHeader(

                cloudflareResponse,

                "Location"

            );


        const videoUid =

            readCloudflareHeader(

                cloudflareResponse,

                "stream-media-id"

            );


        if (
            !uploadUrl
        ) {

            console.error(

                "Cloudflare did not return a Location header."

            );


            return NextResponse.json(

                {

                    success: false,

                    error:
                        "Cloudflare did not return an upload URL.",

                },

                {

                    status: 502,

                }

            );

        }


        if (
            !videoUid
        ) {

            console.error(

                "Cloudflare did not return a stream-media-id header."

            );


            return NextResponse.json(

                {

                    success: false,

                    error:
                        "Cloudflare did not return a video identifier.",

                },

                {

                    status: 502,

                }

            );

        }


        return NextResponse.json(

            {

                success: true,

                uploadUrl,

                videoUid,

            },

            {

                status: 201,

                headers: {

                    "Cache-Control":
                        "no-store",

                },

            }

        );

    }
    catch (error) {

        console.error(

            "Cloudflare Stream session error:",

            error

        );


        return NextResponse.json(

            {

                success: false,

                error:

                    error instanceof Error

                        ? error.message

                        : "Unable to create the video upload session.",

            },

            {

                status: 500,

            }

        );

    }

}