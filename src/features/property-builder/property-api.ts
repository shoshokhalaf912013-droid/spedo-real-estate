import type { PropertyData } from "./models";

export type SavePropertyRequest = PropertyData;

export async function saveProperty(
    data: SavePropertyRequest
) {
    const response = await fetch("/api/properties", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to save property");
    }

    return response.json();
}

export async function updateProperty(
    id: string,
    data: SavePropertyRequest
) {
    const response = await fetch(`/api/properties/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to update property");
    }

    return response.json();
}

export async function loadProperty(id: string) {
    const response = await fetch(`/api/properties/${id}`);

    if (!response.ok) {
        throw new Error("Failed to load property");
    }

    return response.json();
}

export async function deleteProperty(id: string) {
    const response = await fetch(`/api/properties/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Failed to delete property");
    }

    return true;
}