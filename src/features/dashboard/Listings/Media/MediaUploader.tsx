"use client";

import { useRef } from "react";
import {
    Upload,
    Image as ImageIcon,
    Video,
    FileText,
    Star,
    Trash2,
    MonitorSmartphone,
    FolderOpen,
} from "lucide-react";

interface Props {
    title: string;
    description: string;
    accept?: string;
    multiple?: boolean;
    value: string[];
    onChange: (files: string[]) => void;
}

export default function MediaUploader({

    title,
    description,
    accept = "*/*",
    multiple = true,
    value,
    onChange,

}: Props) {

    const inputRef = useRef<HTMLInputElement>(null);

    const openPicker = () => inputRef.current?.click();

    function handleFiles(
        e: React.ChangeEvent<HTMLInputElement>
    ) {

        const files = Array.from(e.target.files ?? []);

        if (!files.length) return;

        onChange([
            ...value,
            ...files.map(file => URL.createObjectURL(file)),
        ]);

    }

    function remove(index: number) {

        onChange(
            value.filter((_, i) => i !== index)
        );

    }

    function makeCover(index: number) {

        if (index === 0) return;

        const list = [...value];

        const cover = list.splice(index, 1)[0];

        list.unshift(cover);

        onChange(list);

    }

    const isImage = accept.startsWith("image");

    return (

        <section className="rounded-[34px] border border-white/10 bg-[#0B1220] p-8">

            <div className="flex items-center justify-between">

                <div>

                    <h2 className="text-2xl font-black text-white">
                        {title}
                    </h2>

                    <p className="mt-2 text-slate-400">
                        {description}
                    </p>

                </div>

                <div className="rounded-full bg-[#F97316]/15 px-5 py-2 text-sm font-bold text-[#F97316]">
                    {value.length} Files
                </div>

            </div>

            <div
                onClick={openPicker}
                className="
                    mt-8
                    cursor-pointer
                    rounded-3xl
                    border-2
                    border-dashed
                    border-[#F97316]/40
                    bg-[#08101E]
                    p-14
                    transition
                    hover:border-[#F97316]
                    hover:bg-[#101B2E]
                "
            >

                <div className="flex flex-col items-center">

                    <Upload
                        size={60}
                        className="text-[#F97316]"
                    />

                    <h3 className="mt-6 text-2xl font-black text-white">
                        Drag & Drop Files
                    </h3>

                    <p className="mt-3 text-slate-400">
                        Photos, Videos, Floor Plans &
                        Documents
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <button
                            type="button"
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-2xl
                                bg-[#F97316]
                                px-6
                                py-3
                                font-bold
                                text-black
                            "
                        >

                            <FolderOpen size={18} />

                            Computer

                        </button>

                        <button
                            type="button"
                            className="
                                flex
                                items-center
                                gap-2
                                rounded-2xl
                                border
                                border-white/10
                                bg-[#111827]
                                px-6
                                py-3
                                text-white
                            "
                        >

                            <MonitorSmartphone size={18} />

                            Mobile

                        </button>

                    </div>

                </div>

            </div>

            <input
                hidden
                ref={inputRef}
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={handleFiles}
            />

            {value.length > 0 && (

                <>

                    <div className="mt-10 flex items-center justify-between">

                        <h3 className="text-xl font-black text-white">
                            Gallery
                        </h3>

                        <span className="text-sm text-slate-400">
                            First image = Cover
                        </span>

                    </div>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                        {value.map((file, index) => (

                            <div
                                key={index}
                                className="
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-[#101827]
                                "
                            >

                                <div className="relative">

                                    {isImage ? (

                                        <img
                                            src={file}
                                            alt=""
                                            className="h-60 w-full object-cover"
                                        />

                                    ) : (

                                        <div className="flex h-60 items-center justify-center">

                                            {accept.startsWith("video")
                                                ? <Video size={70} />
                                                : <FileText size={70} />}

                                        </div>

                                    )}

                                    {index === 0 && (

                                        <div
                                            className="
                                                absolute
                                                left-4
                                                top-4
                                                rounded-full
                                                bg-[#F97316]
                                                px-4
                                                py-2
                                                text-xs
                                                font-black
                                                text-black
                                            "
                                        >
                                            COVER
                                        </div>

                                    )}

                                </div>

                                <div className="grid grid-cols-2">

                                    <button
                                        type="button"
                                        onClick={() => makeCover(index)}
                                        className="
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                            border-r
                                            border-white/10
                                            py-4
                                            text-white
                                        "
                                    >
                                        <Star size={18} />
                                        Cover
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => remove(index)}
                                        className="
                                            flex
                                            items-center
                                            justify-center
                                            gap-2
                                            py-4
                                            text-red-400
                                        "
                                    >
                                        <Trash2 size={18} />
                                        Delete
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </>

            )}

        </section>

    );

}