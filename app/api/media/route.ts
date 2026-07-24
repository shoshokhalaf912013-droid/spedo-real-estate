import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

type MediaAssetResponse = {
  id: string;
  name: string;
  url: string;
  type: "image" | "video" | "pdf";
};

function normalizeMediaType(
  value: string
): MediaAssetResponse["type"] {
  if (value === "video" || value === "pdf") {
    return value;
  }

  return "image";
}

export async function GET() {
  try {
    const assets = await prisma.mediaAsset.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    const result: MediaAssetResponse[] = assets.map((asset) => {
      let url = asset.url;

      if (asset.provider === "r2" && asset.publicId) {
        url = `/api/r2/file/${encodeURIComponent(
          asset.publicId
        )}`;
      }

      return {
        id: asset.id,
        name: asset.name,
        url,
        type: normalizeMediaType(asset.type),
      };
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Failed to load media:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load media.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    if (
      !body ||
      typeof body !== "object" ||
      Array.isArray(body)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request body.",
        },
        {
          status: 400,
        }
      );
    }

    const input = body as Record<string, unknown>;

    const title =
      typeof input.title === "string"
        ? input.title.trim()
        : "";

    const category =
      typeof input.category === "string"
        ? input.category.trim()
        : "";

    if (!title || !category) {
      return NextResponse.json(
        {
          success: false,
          message: "Title and category are required.",
        },
        {
          status: 400,
        }
      );
    }

    const media = await prisma.media.create({
      data: {
        title,
        category,
        coverImage:
          typeof input.coverImage === "string" &&
          input.coverImage.trim()
            ? input.coverImage.trim()
            : null,
        video:
          typeof input.video === "string" &&
          input.video.trim()
            ? input.video.trim()
            : null,
        brochure:
          typeof input.brochure === "string" &&
          input.brochure.trim()
            ? input.brochure.trim()
            : null,
        virtualTour:
          typeof input.virtualTour === "string" &&
          input.virtualTour.trim()
            ? input.virtualTour.trim()
            : null,
      },
      include: {
        gallery: true,
        floorPlans: true,
      },
    });

    return NextResponse.json(media, {
      status: 201,
    });
  } catch (error) {
    console.error("Failed to create media:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create media.",
      },
      {
        status: 500,
      }
    );
  }
}