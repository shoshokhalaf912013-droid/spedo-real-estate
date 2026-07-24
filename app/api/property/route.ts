import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

type PropertySectionInput = {
  type: string;
  title: string;
  content: string | null;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}

function getRequiredString(
  value: unknown,
  fieldName: string
): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${fieldName} is required.`);
  }

  return value.trim();
}

function getOptionalString(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const normalizedValue = value.trim();

  return normalizedValue || null;
}

function createSlug(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseSections(value: unknown): PropertySectionInput[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(isRecord)
    .map((section) => {
      const type =
        typeof section.type === "string"
          ? section.type.trim()
          : "";

      const title =
        typeof section.title === "string"
          ? section.title.trim()
          : "";

      const content = getOptionalString(section.content);

      return {
        type,
        title,
        content,
      };
    })
    .filter((section) => section.type && section.title);
}

export async function GET() {
  try {
    const properties = await prisma.property.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        details: true,
        location: true,
        sections: {
          orderBy: {
            sortOrder: "asc",
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      properties,
    });
  } catch (error) {
    console.error("Failed to load properties:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load properties.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const requestBody: unknown = await request.json();

    if (!isRecord(requestBody)) {
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

    const title = getRequiredString(
      requestBody.title,
      "Property title"
    );

    const providedSlug =
      typeof requestBody.slug === "string"
        ? requestBody.slug.trim()
        : "";

    const slug = createSlug(providedSlug || title);

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          message: "A valid property slug is required.",
        },
        {
          status: 400,
        }
      );
    }

    const description = getOptionalString(
      requestBody.description
    );

    const status =
      typeof requestBody.status === "string" &&
      requestBody.status.trim()
        ? requestBody.status.trim()
        : "draft";

    const sections = parseSections(requestBody.sections);

    const existingProperty =
      await prisma.property.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
        },
      });

    if (existingProperty) {
      return NextResponse.json(
        {
          success: false,
          message: "A property with this slug already exists.",
        },
        {
          status: 409,
        }
      );
    }

    const property = await prisma.property.create({
      data: {
        title,
        slug,
        description,
        status,
        sections: {
          create: sections.map((section, index) => ({
            type: section.type,
            title: section.title,
            content: section.content,
            sortOrder: index,
          })),
        },
      },
      include: {
        details: true,
        location: true,
        sections: {
          orderBy: {
            sortOrder: "asc",
          },
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        property,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Failed to create property:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Failed to create property.";

    const isValidationError =
      message.endsWith("is required.");

    return NextResponse.json(
      {
        success: false,
        message: isValidationError
          ? message
          : "Failed to create property.",
      },
      {
        status: isValidationError ? 400 : 500,
      }
    );
  }
}