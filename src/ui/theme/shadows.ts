export const shadows = {

    sm: "0 1px 2px rgba(0,0,0,.08)",

    md: "0 4px 8px rgba(0,0,0,.10)",

    lg: "0 10px 25px rgba(0,0,0,.15)",

    xl: "0 20px 40px rgba(0,0,0,.20)"

} as const;

export type Shadow =
    keyof typeof shadows;