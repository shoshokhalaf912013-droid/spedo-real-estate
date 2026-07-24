export function createSlug(
    project: string,
    unitNumber: string
): string {

    return `${project}-${unitNumber}`
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/--+/g, "-");

}