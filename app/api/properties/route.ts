import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
    try {

        const properties = await prisma.property.findMany({

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

        console.error(error);

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

export async function POST(request: Request) {

    try {

        const body = await request.json();

        console.log("========== CREATE PROPERTY ==========");
        console.log(body);

         const slug =
              body.slug?.trim()
                 ? body.slug
                 : body.title
                 .toLowerCase()
                 .trim()
                 .replace(/[^\w\s-]/g, "")
                 .replace(/\s+/g, "-");
        const property = await prisma.property.create({

            data: {

                title: body.title,

                slug,

                description: body.description,

                status: body.status ?? "draft",

                details: {

                    create: {

                        module: body.module,

                        propertyType: body.propertyType,

                        purpose: body.purpose,

                        payment: body.payment,

                        price: Number(body.price ?? 0),

                        currency: body.currency,

                        area: Number(body.area ?? 0),

                        bedrooms: Number(body.bedrooms ?? 0),

                        bathrooms: Number(body.bathrooms ?? 0),

                        floor: body.floor ?? "",

                        buildingAge: Number(body.buildingAge ?? 0),

                        parking: Boolean(body.parking),

                        garden: Boolean(body.garden),

                        pool: Boolean(body.pool),

                        elevator: Boolean(body.elevator),

                        smartHome: Boolean(body.smartHome),

                        furnishing: body.furnishing ?? "",

                        finishing: body.finishing ?? "",

                        view: body.view ?? "",

                        deliveryDate: body.deliveryDate ?? "",

                    },

                },

                location: {

                    create: {

                        country: body.country ?? "",

                        city: body.city ?? "",

                        district: body.district ?? "",

                        address: body.address ?? "",

                        latitude: body.latitude ?? "",

                        longitude: body.longitude ?? "",

                    },

                },

            },

            include: {

                details: true,

                location: true,

                sections: true,

            },

        });

        console.log("========== PROPERTY CREATED ==========");
        console.log(property.id);

        return NextResponse.json({

            success: true,

            property,

        });

    } catch (error) {

        console.error("========== CREATE ERROR ==========");
        console.error(error);

        return NextResponse.json(

            {

                success: false,

                message: "Failed to create property.",

            },

            {

                status: 500,

            }

        );

    }

}