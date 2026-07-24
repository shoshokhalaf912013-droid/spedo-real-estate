import { NextRequest, NextResponse } from "next/server";

import fs from "fs/promises";
import path from "path";

export async function POST(
    request: NextRequest
) {

    const data = await request.formData();

    const file =
        data.get("file") as File | null;

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

    const bytes =
        await file.arrayBuffer();

    const buffer =
        Buffer.from(bytes);

    const uploadDir =
        path.join(

            process.cwd(),

            "public",

            "uploads"

        );

    await fs.mkdir(

        uploadDir,

        {

            recursive: true

        }

    );

    const filename =

        `${Date.now()}-${file.name}`;

    await fs.writeFile(

        path.join(

            uploadDir,

            filename

        ),

        buffer

    );

    return NextResponse.json({

        success: true,

        url: `/uploads/${filename}`,

        filename,

    });

}