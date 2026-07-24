"use client";

import { useState } from "react";

interface Props {

    title: string;

    values: string[];

    onChange(values: string[]): void;

}

export default function OptionEditor({

    title,

    values,

    onChange,

}: Props) {

    const [value, setValue] = useState("");

    const [editing, setEditing] =
        useState<number | null>(null);

    const [editValue, setEditValue] =
        useState("");

    function add() {

        const text = value.trim();

        if (!text) return;

        if (values.includes(text)) return;

        onChange([

            ...values,

            text,

        ]);

        setValue("");

    }

    function remove(index: number) {

        onChange(

            values.filter(

                (_, i) => i !== index

            )

        );

    }

    function save(index: number) {

        const list = [...values];

        list[index] = editValue.trim();

        onChange(list);

        setEditing(null);

    }

    function moveUp(index: number) {

        if (index === 0) return;

        const list = [...values];

        [list[index - 1], list[index]] =

        [list[index], list[index - 1]];

        onChange(list);

    }

    function moveDown(index: number) {

        if (

            index === values.length - 1

        ) return;

        const list = [...values];

        [list[index + 1], list[index]] =

        [list[index], list[index + 1]];

        onChange(list);

    }

    return (

        <div
            className="
                rounded-3xl
                border
                border-white/10
                bg-[#08101E]
                p-8
            "
        >

            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >

                <h2
                    className="
                        text-2xl
                        font-black
                        text-white
                    "
                >

                    {title}

                </h2>

                <span
                    className="
                        rounded-full
                        bg-[#F97316]/20
                        px-4
                        py-2
                        text-xs
                        font-bold
                        text-[#F97316]
                    "
                >

                    {values.length} Items

                </span>

            </div>

            <div
                className="
                    mt-8
                    flex
                    gap-3
                "
            >

                <input

                    value={value}

                    onChange={e=>

                        setValue(

                            e.target.value

                        )

                    }

                    placeholder={`Add ${title}`}

                    className="
                        h-12
                        flex-1
                        rounded-xl
                        border
                        border-white/10
                        bg-[#020817]
                        px-4
                        text-white
                    "

                />

                <button

                    onClick={add}

                    className="
                        rounded-xl
                        bg-[#F97316]
                        px-6
                        font-bold
                        text-black
                    "

                >

                    + Add

                </button>

            </div>

            <div
                className="
                    mt-8
                    space-y-4
                "
            >

                {

                    values.map(

                        (item,index)=>(

                            <div

                                key={index}

                                className="
                                    flex
                                    items-center
                                    justify-between
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-[#020817]
                                    p-4
                                "
                            >

                                {

                                    editing===index

                                    ?

                                    <input

                                        autoFocus

                                        value={editValue}

                                        onChange={e=>

                                            setEditValue(

                                                e.target.value

                                            )

                                        }

                                        className="
                                            flex-1
                                            bg-transparent
                                            text-white
                                            outline-none
                                        "

                                    />

                                    :

                                    <span
                                        className="
                                            font-medium
                                            text-white
                                        "
                                    >

                                        {item}

                                    </span>

                                }

                                <div
                                    className="
                                        flex
                                        gap-2
                                    "
                                >

                                    <button

                                        onClick={()=>

                                            moveUp(index)

                                        }

                                        className="
                                            rounded-lg
                                            border
                                            border-white/10
                                            px-3
                                            py-2
                                            text-white
                                        "

                                    >

                                        ↑

                                    </button>

                                    <button

                                        onClick={()=>

                                            moveDown(index)

                                        }

                                        className="
                                            rounded-lg
                                            border
                                            border-white/10
                                            px-3
                                            py-2
                                            text-white
                                        "

                                    >

                                        ↓

                                    </button>

                                    {

                                        editing===index

                                        ?

                                        <button

                                            onClick={()=>

                                                save(index)

                                            }

                                            className="
                                                rounded-lg
                                                bg-green-600
                                                px-4
                                                py-2
                                                text-white
                                            "

                                        >

                                            Save

                                        </button>

                                        :

                                        <button

                                            onClick={()=>{

                                                setEditing(index);

                                                setEditValue(item);

                                            }}

                                            className="
                                                rounded-lg
                                                bg-blue-600
                                                px-4
                                                py-2
                                                text-white
                                            "

                                        >

                                            Edit

                                        </button>

                                    }

                                    <button

                                        onClick={()=>

                                            remove(index)

                                        }

                                        className="
                                            rounded-lg
                                            bg-red-600
                                            px-4
                                            py-2
                                            text-white
                                        "

                                    >

                                        Delete

                                    </button>

                                </div>

                            </div>

                        )

                    )

                }

            </div>

        </div>

    );

}