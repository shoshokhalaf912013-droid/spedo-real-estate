import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const query = searchParams.get("query")?.trim() ?? "";
    const status = searchParams.get("status")?.trim() ?? "";
    const purpose = searchParams.get("purpose")?.trim() ?? "";
    const propertyType =
      searchParams.get("propertyType")?.trim() ?? "";
    const city = searchParams.get("city")?.trim() ?? "";
    const district = searchParams.get("district")?.trim() ?? "";

    const minimumPriceValue = searchParams.get("minimumPrice");
    const maximumPriceValue = searchParams.get("maximumPrice");

    const minimumPrice =
      minimumPriceValue &&
      Number.isFinite(Number(minimumPriceValue))
        ? Number(minimumPriceValue)
        : undefined;

    const maximumPrice =
      maximumPriceValue &&
      Number.isFinite(Number(maximumPriceValue))
        ? Number(maximumPriceValue)
        : undefined;

    const properties = await prisma.property.findMany({
      where: {
        deletedAt: null,
        archivedAt: null,

        ...(status
          ? {
              status,
            }
          : {}),

        ...(query
          ? {
              OR: [
                {
                  title: {
                    contains: query,
                  },
                },
                {
                  description: {
                    contains: query,
                  },
                },
                {
                  slug: {
                    contains: query,
                  },
                },
              ],
            }
          : {}),

        details: {
          is: {
            ...(purpose
              ? {
                  purpose,
                }
              : {}),

            ...(propertyType
              ? {
                  propertyType,
                }
              : {}),

            ...(minimumPrice !== undefined ||
            maximumPrice !== undefined
              ? {
                  price: {
                    ...(minimumPrice !== undefined
                      ? {
                          gte: minimumPrice,
                        }
                      : {}),
                    ...(maximumPrice !== undefined
                      ? {
                          lte: maximumPrice,
                        }
                      : {}),
                  },
                }
              : {}),
          },
        },

        location: {
          is: {
            ...(city
              ? {
                  city,
                }
              : {}),

            ...(district
              ? {
                  district,
                }
              : {}),
          },
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
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      count: properties.length,
      properties,
    });
  } catch (error) {
    console.error("Failed to search properties:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to search properties.",
      },
      {
        status: 500,
      }
    );
  }
}