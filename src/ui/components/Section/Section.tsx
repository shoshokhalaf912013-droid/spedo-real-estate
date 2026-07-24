import { PropsWithChildren } from "react";

import { spacing } from "@/ui/theme";

export function Section({

    children

}:PropsWithChildren){

    return(

        <section

            style={{

                padding:

                    `${spacing.xxl}px 0`

            }}

        >

            {children}

        </section>

    );

}