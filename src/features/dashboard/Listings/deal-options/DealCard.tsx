"use client";

import { ReactNode } from "react";

interface DealCardProps {

    title: string;

    icon: string;

    color: string;

    enabled: boolean;

    onToggle: () => void;

    children: ReactNode;

}

export default function DealCard({

    title,

    icon,

    color,

    enabled,

    onToggle,

    children,

}: DealCardProps) {

    return (

        <div
            className="
                rounded-3xl
                border
                border-slate-700
                bg-[#111827]
                overflow-hidden
                transition-all
            "
        >

            {/* HEADER */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-slate-700
                    px-6
                    py-5
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    <span
                        className="text-3xl"
                    >
                        {icon}
                    </span>

                    <div>

                        <h3
                            className="
                                text-xl
                                font-black
                            "
                            style={{
                                color,
                            }}
                        >
                            {title}
                        </h3>

                        <p
                            className="
                                text-xs
                                text-slate-400
                            "
                        >
                            Enable this deal type
                        </p>

                    </div>

                </div>

                <button
                    type="button"
                    onClick={onToggle}
                    className={`
                        h-7
                        w-14
                        rounded-full
                        transition-all
                        ${
                            enabled

                                ? "bg-emerald-500"

                                : "bg-slate-700"

                        }
                    `}
                >

                    <div
                        className={`
                            h-6
                            w-6
                            rounded-full
                            bg-white
                            transition-all
                            ${
                                enabled

                                    ? "translate-x-7"

                                    : "translate-x-0"

                            }
                        `}
                    />

                </button>

            </div>

            {/* BODY */}

            {

                enabled && (

                    <div
                        className="
                            p-6
                        "
                    >

                        {children}

                    </div>

                )

            }

        </div>

    );

}