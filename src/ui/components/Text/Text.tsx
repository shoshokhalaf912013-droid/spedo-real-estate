import { PropsWithChildren } from "react";

import { colors } from "@/ui/theme";

export interface TextProps
extends PropsWithChildren{

    size?:number;

    weight?:number;

}

export function Text({

    children,

    size=16,

    weight=400

}:TextProps){

    return(

        <p

            style={{

                margin:0,

                fontSize:size,

                fontWeight:weight,

                color:colors.text

            }}

        >

            {children}

        </p>

    );

}