import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const mediaAssets = await prisma.mediaAsset.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      data: mediaAssets,
    });
  } catch (error) {
    console.error("Failed to load media assets:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load media assets.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const provider =
      typeof body.provider === "string"
        ? body.provider.trim()
        : "";

    const type =
      typeof body.type === "string"
        ? body.type.trim()
        : "";

    const name =
      typeof body.name === "string"
        ? body.name.trim()
        : "";

    const mimeType =
      typeof body.mimeType === "string"
        ? body.mimeType.trim()
        : "";

    const url =
      typeof body.url === "string"
        ? body.url.trim()
        : "";

    const publicId =
      typeof body.publicId === "string" &&
      body.publicId.trim()
        ? body.publicId.trim()
        : null;

    const size =
      typeof body.size === "number" &&
      Number.isFinite(body.size) &&
      body.size >= 0
        ? Math.floor(body.size)
        : null;

    if (!provider || !type || !name || !mimeType || !url) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Provider, type, name, mimeType and url are required.",
        },
        {
          status: 400,
        }
      );
    }

    const mediaAsset = await prisma.mediaAsset.create({
      data: {
        provider,
        type,
        name,
        mimeType,
        url,
        publicId,
        size,
      },
    });

    return NextResponse.json(
      {
        success: true,
        data: mediaAsset,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Failed to create media asset:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create media asset.",
      },
      {
        status: 500,
      }
    );
  }
}