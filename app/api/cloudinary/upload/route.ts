import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";

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

        const result =
            await new Promise<any>(

                (

                    resolve,

                    reject

                ) => {

                    const stream =

                        cloudinary.uploader.upload_stream(

                            {

                                folder: "spedo",

                                resource_type: "auto",

                            },

                            (

                                error,

                                result

                            ) => {

                                if (

                                    error

                                ) {

                                    reject(

                                        error

                                    );

                                    return;

                                }

                                resolve(

                                    result

                                );

                            }

                        );

                    stream.end(

                        buffer

                    );

                }

            );

        const asset =

            await prisma.mediaAsset.create({

                data: {

                    provider: "cloudinary",

                    type: "image",

                    name: file.name,

                    mimeType: file.type,

                    url: result.secure_url,

                    publicId:

                        result.public_id,

                    size: file.size,

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