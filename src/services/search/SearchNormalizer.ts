export function normalizeSearchValue(
    value: string
): string {

    return value

        .toLowerCase()

        .trim()

        .replace(/\s+/g, "")

        .replace(/-/g, "")

        .replace(/_/g, "");

}