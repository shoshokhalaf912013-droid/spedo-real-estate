import { NextRequest, NextResponse } from "next/server";

import {
    GetObjectCommand,
} from "@aws-sdk/client-s3";

import { getR2Client } from "@/lib/r2";

const r2 = getR2Client();

export async function GET(
    request: NextRequest,
    {
        params,
    }: {
        params: Promise<{
            key: string;
        }>;
    }
) {

    try {

        const {
            key,
        } = await params;

        const command =
            new GetObjectCommand({

                Bucket:
                    process.env.R2_BUCKET_NAME,

                Key:
                    decodeURIComponent(
                        key
                    ),

            });

        const result =
            await r2.send(
                command
            );

        if (
            !result.Body
        ) {

            return new NextResponse(

                "File not found",

                {
                    status: 404,
                }

            );

        }

        return new NextResponse(

            result.Body as ReadableStream,

            {

                headers: {

                    "Content-Type":
                        result.ContentType ??
                        "application/octet-stream",

                    "Cache-Control":
                        "public, max-age=31536000",

                },

            }

        );

    }

    catch (
        error
    ) {

        console.error(
            error
        );

        return new NextResponse(

            "File not found",

            {

                status: 404,

            }

        );

    }

}