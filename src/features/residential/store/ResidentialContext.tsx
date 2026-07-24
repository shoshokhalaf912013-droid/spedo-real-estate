"use client";

import {
    createContext,
    useContext,
    useMemo,
    useState,
    useCallback,
    type ReactNode,
} from "react";

import residentialTypes from "../data";

import type {
    ResidentialType,
} from "../data/types";

interface ResidentialContextValue {

    residentialTypes: ResidentialType[];

    currentType: ResidentialType;

    setCurrentType(
        id: string
    ): void;

    updateCurrentType(
        data: ResidentialType
    ): void;

}

const ResidentialContext =
    createContext<ResidentialContextValue | null>(
        null
    );

interface Props {

    children: ReactNode;

}

export function ResidentialProvider({

    children,

}: Props) {

    const [

        types,

        setTypes,

    ] = useState<ResidentialType[]>(

        residentialTypes

    );

    const [

        currentId,

        setCurrentId,

    ] = useState<string>(

        residentialTypes.at(0)?.id ?? ""

    );

    const currentType = useMemo(

        () =>

            types.find(

                item => item.id === currentId

            ) ??

            types.at(0)!,

        [

            types,

            currentId,

        ]

    );

    const updateCurrentType = useCallback(

        (

            data: ResidentialType

        ) => {

            setTypes(

                previous =>

                    previous.map(

                        item =>

                            item.id === data.id

                                ? data
                                : item

                    )

            );

        },

        []

    );

    const value = useMemo(

        () => ({

            residentialTypes: types,

            currentType,

            setCurrentType: setCurrentId,

            updateCurrentType,

        }),

        [

            types,

            currentType,

            updateCurrentType,

        ]

    );

    return (

        <ResidentialContext.Provider

            value={value}

        >

            {children}

        </ResidentialContext.Provider>

    );

}

export function useResidential() {

    const context =

        useContext(

            ResidentialContext

        );

    if (!context) {

        throw new Error(

            "useResidential must be used inside ResidentialProvider."

        );

    }

    return context;

}