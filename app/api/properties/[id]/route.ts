import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

type PropertySectionInput = {
  type: string;
  title: string;
  content?: string | null;
};

export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  void request;

  try {
    const { id } = await context.params;

    const property = await prisma.property.findUnique({
      where: {
        id,
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

    if (!property) {
      return NextResponse.json(
        {
          success: false,
          message: "Property not found.",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      property,
    });
  } catch (error) {
    console.error("Failed to load property:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load property.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    if (
      typeof body.title !== "string" ||
      !body.title.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Property title is required.",
        },
        {
          status: 400,
        }
      );
    }

    const title = body.title.trim();

    const slug =
      typeof body.slug === "string" && body.slug.trim()
        ? body.slug.trim()
        : title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");

    const sections: PropertySectionInput[] = Array.isArray(
      body.sections
    )
      ? body.sections
      : [];

    const property = await prisma.property.update({
      where: {
        id,
      },
      data: {
        title,
        slug,
        description:
          typeof body.description === "string"
            ? body.description
            : null,
        status:
          typeof body.status === "string"
            ? body.status
            : "draft",

        details: {
          upsert: {
            create: {
              module: body.module,
              propertyType: body.propertyType,
              purpose: body.purpose,
              payment: body.payment,
              price: Number(body.price),
              currency: body.currency,
              area: Number(body.area),
              bedrooms: Number(body.bedrooms),
              bathrooms: Number(body.bathrooms),
              floor: body.floor,
              buildingAge: Number(body.buildingAge),
              parking: Boolean(body.parking),
              garden: Boolean(body.garden),
              pool: Boolean(body.pool),
              elevator: Boolean(body.elevator),
              smartHome: Boolean(body.smartHome),
              furnishing: body.furnishing,
              finishing: body.finishing,
              view: body.view,
              deliveryDate: body.deliveryDate,
            },
            update: {
              module: body.module,
              propertyType: body.propertyType,
              purpose: body.purpose,
              payment: body.payment,
              price: Number(body.price),
              currency: body.currency,
              area: Number(body.area),
              bedrooms: Number(body.bedrooms),
              bathrooms: Number(body.bathrooms),
              floor: body.floor,
              buildingAge: Number(body.buildingAge),
              parking: Boolean(body.parking),
              garden: Boolean(body.garden),
              pool: Boolean(body.pool),
              elevator: Boolean(body.elevator),
              smartHome: Boolean(body.smartHome),
              furnishing: body.furnishing,
              finishing: body.finishing,
              view: body.view,
              deliveryDate: body.deliveryDate,
            },
          },
        },

        location: {
          upsert: {
            create: {
              country: body.country,
              city: body.city,
              district: body.district,
              address: body.address,
              latitude: body.latitude,
              longitude: body.longitude,
            },
            update: {
              country: body.country,
              city: body.city,
              district: body.district,
              address: body.address,
              latitude: body.latitude,
              longitude: body.longitude,
            },
          },
        },

        sections: {
          deleteMany: {},
          create: sections.map((section, index) => ({
            type: section.type,
            title: section.title,
            content: section.content ?? "",
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

    return NextResponse.json({
      success: true,
      property,
    });
  } catch (error) {
    console.error("Failed to update property:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update property.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  context: RouteContext
) {
  void request;

  try {
    const { id } = await context.params;

    const existingProperty =
      await prisma.property.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
        },
      });

    if (!existingProperty) {
      return NextResponse.json(
        {
          success: false,
          message: "Property not found.",
        },
        {
          status: 404,
        }
      );
    }

    await prisma.property.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Failed to delete property:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete property.",
      },
      {
        status: 500,
      }
    );
  }
}