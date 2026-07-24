import { PropsWithChildren } from "react";

import { spacing } from "@/ui/theme";

export interface StackProps
extends PropsWithChildren{

    gap?:
        keyof typeof spacing;

}

export function Stack({

    children,

    gap="lg"

}:StackProps){

    return(

        <div

            style={{

                display:"flex",

                flexDirection:"column",

                gap:spacing[gap]

            }}

        >

            {children}

        </div>

    );

}