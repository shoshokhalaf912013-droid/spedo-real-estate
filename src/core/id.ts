export function createId(
    projectCode: string,
    unitNumber?: string
): string {

    if (!unitNumber) {

        console.error(
            "INVALID UNIT NUMBER:",
            projectCode
        );

        return `${projectCode}-UNKNOWN`;

    }

    return `${projectCode}-${unitNumber.replace("-", "")}`;

}