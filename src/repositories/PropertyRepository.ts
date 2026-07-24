import { prisma } from "@/lib/prisma";
import { Property } from "@/models/property/Property";

export default class PropertyRepository {
    async create(property: Property) {
        return prisma.property.create({
            data: {
                id: property.id,
                title: property.title,
                slug: property.slug,
                description: property.description,
            },
        });
    }

    async update(property: Property) {
        return prisma.property.update({
            where: {
                id: property.id,
            },
            data: {
                title: property.title,
                slug: property.slug,
                description: property.description,
            },
        });
    }

    async findById(id: string) {
        return prisma.property.findUnique({
            where: {
                id,
            },
            include: {
                details: true,
                location: true,
                sections: true,
            },
        });
    }

    async findAll() {
        return prisma.property.findMany({
            include: {
                details: true,
                location: true,
                sections: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }

    async delete(id: string) {
        return prisma.property.delete({
            where: {
                id,
            },
        });
    }
}