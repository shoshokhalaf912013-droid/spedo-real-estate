"use client";

import {

    createContext,

    useContext,

    useMemo,

    useState,

    ReactNode,

} from "react";

export interface MediaItem {

    id: number;

    name: string;

    type: "image" | "video" | "pdf";

    url: string;

    favorite: boolean;

    createdAt: Date;

}

interface MediaContextType {

    items: MediaItem[];

    add(item: MediaItem): void;

    remove(id: number): void;

    toggleFavorite(id: number): void;

    clear(): void;

}

const MediaContext =

    createContext<MediaContextType | null>(

        null

    );

export function MediaProvider({

    children,

}:{

    children: ReactNode;

}){

    const [

        items,

        setItems,

    ] = useState<MediaItem[]>([]);

    function add(

        item: MediaItem

    ){

        setItems(

            previous=>

                [

                    item,

                    ...previous,

                ]

        );

    }

    function remove(

        id:number

    ){

        setItems(

            previous=>

                previous.filter(

                    item=>

                        item.id!==id

                )

        );

    }

    function toggleFavorite(

        id:number

    ){

        setItems(

            previous=>

                previous.map(

                    item=>

                        item.id===id

                        ?{

                            ...item,

                            favorite:

                            !item.favorite,

                        }

                        :item

                )

        );

    }

    function clear(){

        setItems([]);

    }

    const value=

        useMemo(

            ()=>({

                items,

                add,

                remove,

                toggleFavorite,

                clear,

            }),

            [items]

        );

    return(

        <MediaContext.Provider

            value={value}

        >

            {children}

        </MediaContext.Provider>

    );

}

export function useMedia(){

    const context=

        useContext(

            MediaContext

        );

    if(!context){

        throw new Error(

            "useMedia must be used inside MediaProvider"

        );

    }

    return context;

}