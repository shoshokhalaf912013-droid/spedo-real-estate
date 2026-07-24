import {
    NextResponse,
} from "next/server";


export const runtime =
    "nodejs";


export const dynamic =
    "force-dynamic";


/* =========================================================
   Constants
   ========================================================= */

const ALLOWED_EXACT_UPLOAD_HOSTS = new Set([

    "api.cloudflare.com",

    "upload.videodelivery.net",

]);


/* =========================================================
   Helpers
   ========================================================= */

function readHeader(

    request: Request,

    name: string

): string {

    return (
        request.headers
            .get(name)
            ?.trim()
        ||
        ""
    );

}


function normalizeUploadUrl(

    value: string

): URL | null {

    try {

        const url = new URL(value);


        if (
            url.protocol !== "https:"
        ) {

            return null;

        }


        return url;

    }
    catch {

        return null;

    }

}


function isAllowedUploadHostname(

    hostname: string

): boolean {

    const normalizedHostname =

        hostname
            .trim()
            .toLowerCase();


    if (
        ALLOWED_EXACT_UPLOAD_HOSTS.has(
            normalizedHostname
        )
    ) {

        return true;

    }


    if (
        normalizedHostname.endsWith(
            ".videodelivery.net"
        )
    ) {

        return true;

    }


    if (
        normalizedHostname.endsWith(
            ".cloudflarestream.com"
        )
    ) {

        return true;

    }


    return false;

}


function parseUploadOffset(

    value: string

): number | null {

    if (
        !/^\d+$/.test(value)
    ) {

        return null;

    }


    const parsedValue =

        Number(value);


    if (
        !Number.isSafeInteger(parsedValue)
        ||
        parsedValue < 0
    ) {

        return null;

    }


    return parsedValue;

}


async function readResponseBody(

    response: Response

): Promise<string> {

    try {

        return await response.text();

    }
    catch {

        return "";

    }

}


function createNoStoreHeaders() {

    return {

        "Cache-Control":
            "no-store, no-cache, must-revalidate",

    };

}


/* =========================================================
   POST
   ========================================================= */

export async function POST(

    request: Request

) {

    try {

        const uploadUrlHeader =

            readHeader(

                request,

                "x-cloudflare-stream-upload-url"

            );


        const uploadOffsetHeader =

            readHeader(

                request,

                "x-cloudflare-stream-upload-offset"

            );


        if (
            !uploadUrlHeader
        ) {

            console.error(

                "CLOUDFLARE STREAM CHUNK REJECTED:",

                "Missing x-cloudflare-stream-upload-url header."

            );


            return NextResponse.json(

                {

                    success:
                        false,

                    error:
                        "Cloudflare Stream upload URL is required.",

                    reason:
                        "missing_upload_url",

                },

                {

                    status:
                        400,

                    headers:
                        createNoStoreHeaders(),

                }

            );

        }


        const uploadUrl =

            normalizeUploadUrl(
                uploadUrlHeader
            );


        if (
            !uploadUrl
        ) {

            console.error(

                "CLOUDFLARE STREAM CHUNK REJECTED:",

                "The supplied upload URL is not a valid HTTPS URL."

            );


            return NextResponse.json(

                {

                    success:
                        false,

                    error:
                        "The supplied Cloudflare Stream upload URL is invalid.",

                    reason:
                        "invalid_upload_url",

                },

                {

                    status:
                        400,

                    headers:
                        createNoStoreHeaders(),

                }

            );

        }


        console.log(

            "CLOUDFLARE STREAM UPLOAD HOST:",

            uploadUrl.hostname

        );


        if (
            !isAllowedUploadHostname(
                uploadUrl.hostname
            )
        ) {

            console.error(

                "CLOUDFLARE STREAM CHUNK REJECTED:",

                {

                    reason:
                        "Upload URL hostname is not allowed.",

                    hostname:
                        uploadUrl.hostname,

                }

            );


            return NextResponse.json(

                {

                    success:
                        false,

                    error:
                        "The supplied Cloudflare Stream upload hostname is not allowed.",

                    reason:
                        "disallowed_upload_hostname",

                    hostname:
                        uploadUrl.hostname,

                },

                {

                    status:
                        400,

                    headers:
                        createNoStoreHeaders(),

                }

            );

        }


        const uploadOffset =

            parseUploadOffset(
                uploadOffsetHeader
            );


        if (
            uploadOffset === null
        ) {

            console.error(

                "CLOUDFLARE STREAM CHUNK REJECTED:",

                {

                    reason:
                        "Invalid upload offset.",

                    receivedOffset:
                        uploadOffsetHeader,

                }

            );


            return NextResponse.json(

                {

                    success:
                        false,

                    error:
                        "A valid upload offset is required.",

                    reason:
                        "invalid_upload_offset",

                },

                {

                    status:
                        400,

                    headers:
                        createNoStoreHeaders(),

                }

            );

        }


        const chunk =

            await request.arrayBuffer();


        if (
            chunk.byteLength === 0
        ) {

            console.error(

                "CLOUDFLARE STREAM CHUNK REJECTED:",

                "The received chunk is empty."

            );


            return NextResponse.json(

                {

                    success:
                        false,

                    error:
                        "The uploaded video chunk is empty.",

                    reason:
                        "empty_chunk",

                },

                {

                    status:
                        400,

                    headers:
                        createNoStoreHeaders(),

                }

            );

        }


        console.log(

            "CLOUDFLARE STREAM CHUNK REQUEST:",

            {

                hostname:
                    uploadUrl.hostname,

                offset:
                    uploadOffset,

                chunkSize:
                    chunk.byteLength,

            }

        );


        const cloudflareResponse =

            await fetch(

                uploadUrl.toString(),

                {

                    method:
                        "PATCH",

                    headers: {

                        "Tus-Resumable":
                            "1.0.0",

                        "Upload-Offset":
                            String(uploadOffset),

                        "Content-Type":
                            "application/offset+octet-stream",

                        "Content-Length":
                            String(chunk.byteLength),

                    },

                    body:
                        chunk,

                    cache:
                        "no-store",

                    redirect:
                        "manual",

                    signal:
                        request.signal,

                }

            );


        const responseText =

            await readResponseBody(
                cloudflareResponse
            );


        const nextUploadOffsetHeader =

            cloudflareResponse.headers
                .get("Upload-Offset")
                ?.trim()
            ||
            "";


        const tusVersion =

            cloudflareResponse.headers
                .get("Tus-Resumable")
                ?.trim()
            ||
            "";


        const responseLocation =

            cloudflareResponse.headers
                .get("Location")
                ?.trim()
            ||
            "";


        console.log(

            "CLOUDFLARE STREAM CHUNK RESPONSE:",

            {

                status:
                    cloudflareResponse.status,

                statusText:
                    cloudflareResponse.statusText,

                nextUploadOffset:
                    nextUploadOffsetHeader,

                tusVersion,

                hasLocation:
                    Boolean(responseLocation),

                responseBody:
                    responseText || "(empty)",

            }

        );


        if (
            cloudflareResponse.status >= 300
            &&
            cloudflareResponse.status < 400
        ) {

            return NextResponse.json(

                {

                    success:
                        false,

                    error:
                        "Cloudflare Stream unexpectedly redirected the chunk upload.",

                    reason:
                        "unexpected_redirect",

                    redirectLocation:
                        responseLocation || undefined,

                },

                {

                    status:
                        502,

                    headers:
                        createNoStoreHeaders(),

                }

            );

        }


        if (
            !cloudflareResponse.ok
        ) {

            return NextResponse.json(

                {

                    success:
                        false,

                    error:

                        responseText
                        ||
                        (
                            "Cloudflare Stream rejected the video chunk " +
                            `with status ${cloudflareResponse.status}.`
                        ),

                    reason:
                        "cloudflare_rejected_chunk",

                    cloudflareStatus:
                        cloudflareResponse.status,

                },

                {

                    status:

                        cloudflareResponse.status >= 400
                        &&
                        cloudflareResponse.status < 500

                            ? cloudflareResponse.status

                            : 502,

                    headers:
                        createNoStoreHeaders(),

                }

            );

        }


        const calculatedNextOffset =

            uploadOffset
            +
            chunk.byteLength;


        const returnedNextOffset =

            parseUploadOffset(
                nextUploadOffsetHeader
            );


        const nextUploadOffset =

            returnedNextOffset
            ??
            calculatedNextOffset;


        if (
            nextUploadOffset < calculatedNextOffset
        ) {

            console.error(

                "CLOUDFLARE STREAM INVALID NEXT OFFSET:",

                {

                    currentOffset:
                        uploadOffset,

                    chunkSize:
                        chunk.byteLength,

                    expectedMinimum:
                        calculatedNextOffset,

                    returnedOffset:
                        nextUploadOffset,

                }

            );


            return NextResponse.json(

                {

                    success:
                        false,

                    error:
                        "Cloudflare Stream returned an invalid upload offset.",

                    reason:
                        "invalid_next_upload_offset",

                },

                {

                    status:
                        502,

                    headers:
                        createNoStoreHeaders(),

                }

            );

        }


        return NextResponse.json(

            {

                success:
                    true,

                uploadOffset:
                    nextUploadOffset,

            },

            {

                status:
                    200,

                headers:
                    createNoStoreHeaders(),

            }

        );

    }
    catch (error) {

        if (
            error instanceof DOMException
            &&
            error.name === "AbortError"
        ) {

            console.error(

                "CLOUDFLARE STREAM CHUNK ABORTED."

            );


            return NextResponse.json(

                {

                    success:
                        false,

                    error:
                        "The Cloudflare Stream chunk request was cancelled.",

                    reason:
                        "request_aborted",

                },

                {

                    status:
                        499,

                    headers:
                        createNoStoreHeaders(),

                }

            );

        }


        console.error(

            "CLOUDFLARE STREAM CHUNK ERROR:",

            error

        );


        return NextResponse.json(

            {

                success:
                    false,

                error:

                    error instanceof Error

                        ? error.message

                        : "Cloudflare Stream chunk upload failed.",

                reason:
                    "unexpected_chunk_error",

            },

            {

                status:
                    500,

                headers:
                    createNoStoreHeaders(),

            }

        );

    }

}