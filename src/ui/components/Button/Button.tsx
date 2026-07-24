import { ButtonHTMLAttributes } from "react";

import { colors } from "@/ui/theme/colors";
import { radius } from "@/ui/theme/radius";
import { spacing } from "@/ui/theme/spacing";

export interface ButtonProps
extends ButtonHTMLAttributes<HTMLButtonElement>{

    fullWidth?: boolean;

}

export function Button({

    children,

    fullWidth,

    style,

    ...props

}: ButtonProps){

    return(

        <button

            {...props}

            style={{

                background: colors.primary,

                color: colors.white,

                border: "none",

                borderRadius: radius.md,

                padding: `${spacing.md}px ${spacing.lg}px`,

                cursor: "pointer",

                fontWeight: 600,

                width: fullWidth
                    ? "100%"
                    : undefined,

                transition: ".2s",

                ...style

            }}

        >

            {children}

        </button>

    );

}