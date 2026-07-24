import { PropsWithChildren } from "react";

export interface ContainerProps
extends PropsWithChildren{

    wide?: boolean;

}

export function Container({

    children,

    wide = false

}: ContainerProps){

    return(

        <div

            style={{

                width:"100%",

                maxWidth:
                    wide
                        ?1280
                        :1180,

                margin:"0 auto",

                padding:"0 20px"

            }}

        >

            {children}

        </div>

    );

}