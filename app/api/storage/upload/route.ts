import { NextRequest, NextResponse } from "next/server";

import { StorageEngine } from "@/core/storage";

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

                    message: "No file uploaded."

                },

                {

                    status: 400

                }

            );

        }

        const folder =
            formData.get("folder")?.toString();

        const fileName =
            formData.get("fileName")?.toString();

        const tags =
            formData.get("tags");

        const metadata =
            formData.get("metadata");

        const media =

            await StorageEngine.upload({

                file,

                folder,

                fileName,

                tags: tags
                    ? JSON.parse(
                          tags.toString()
                      )
                    : [],

                metadata: metadata
                    ? JSON.parse(
                          metadata.toString()
                      )
                    : {},

            });

        return NextResponse.json(
            media
        );

    }

    catch (error) {

        console.error(error);

        return NextResponse.json(

            {

                success: false,

                message:

                    error instanceof Error
                        ? error.message
                        : "Upload failed."

            },

            {

                status: 500

            }

        );

    }

}