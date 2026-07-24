import { NextRequest, NextResponse } from "next/server";

import {
    PutObjectCommand,
} from "@aws-sdk/client-s3";

import r2 from "@/lib/r2";

import { prisma } from "@/lib/prisma";

export async function POST(
    request: NextRequest
) {

    try {

        const formData =
            await request.formData();

        const file =
            formData.get("file") as File | null;

        if (!file) {

            return NextResponse.json(

                {

                    success: false,

                    message: "No file uploaded.",

                },

                {

                    status: 400,

                }

            );

        }

        const bytes =
            await file.arrayBuffer();

        const buffer =
            Buffer.from(bytes);

        const fileName =
            `${Date.now()}-${file.name}`;

        await r2.send(

            new PutObjectCommand({

                Bucket:

                    process.env
                        .R2_BUCKET_NAME,

                Key:

                    fileName,

                Body:

                    buffer,

                ContentType:

                    file.type,

            })

        );

	const publicUrl =

  	  `/api/r2/file/${encodeURIComponent(fileName)}`;
        const asset =

            await prisma.mediaAsset.create({

                data: {

                    provider: "r2",

                    type:

                        file.type ===

                        "application/pdf"

                            ? "pdf"

                            : "video",

                    name:

                        file.name,

                    mimeType:

                        file.type,

                    url:

                        publicUrl,

                    publicId:

                        fileName,

                    size:

                        file.size,

                },

            });

        return NextResponse.json({

            success: true,

            asset,

        });

    }

    catch (

        error

    ) {

        console.error(

            error

        );

        return NextResponse.json(

            {

                success: false,

                message:

                    "Upload failed.",

            },

            {

                status: 500,

            }

        );

    }

}