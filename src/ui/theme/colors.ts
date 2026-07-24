export const colors = {

    primary: "#0B1F3A",

    primaryLight: "#163A63",

    secondary: "#D4AF37",

    secondaryLight: "#F4D35E",

    success: "#16A34A",

    warning: "#F59E0B",

    danger: "#DC2626",

    info: "#2563EB",

    white: "#FFFFFF",

    black: "#000000",

    background: "#F8FAFC",

    surface: "#FFFFFF",

    border: "#E5E7EB",

    text: "#111827",

    textSecondary: "#6B7280"

} as const;

export type ColorName =
    keyof typeof colors;