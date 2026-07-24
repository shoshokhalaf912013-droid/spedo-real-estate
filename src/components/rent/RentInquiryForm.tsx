"use client";

import { useState } from "react";

export default function RentInquiryForm() {

    const [submitted, setSubmitted] =
        useState(false);

    return (

        <section
            className="
            bg-[#05070D]
            pb-32
            "
        >

            <div
                className="
                mx-auto
                max-w-4xl
                px-6
                "
            >

                <div
                    className="
                    rounded-[40px]
                    border
                    border-[#F97316]/20
                    bg-[#09111C]
                    p-12
                    "
                >

                    <div className="text-center">

                        <span
                            className="
                            uppercase
                            tracking-[4px]
                            text-[#F97316]
                            "
                        >
                            Rental Inquiry
                        </span>

                        <h2
                            className="
                            mt-6
                            font-playfair
                            text-5xl
                            text-white
                            "
                        >
                            Request A Rental
                        </h2>

                        <p
                            className="
                            mt-6
                            text-slate-300
                            "
                        >
                            Tell us what you're looking for and
                            a SPEDO advisor will contact you.
                        </p>

                    </div>

                    {

                        submitted

                        ? (

                            <div
                                className="
                                mt-12
                                rounded-3xl
                                bg-green-600/20
                                p-8
                                text-center
                                text-green-300
                                "
                            >

                                Your rental request has been received successfully.

                            </div>

                        )

                        : (

                            <form
                                className="
                                mt-12
                                grid
                                gap-6
                                md:grid-cols-2
                                "
                                onSubmit={event => {

                                    event.preventDefault();

                                    setSubmitted(true);

                                }}
                            >

                                <input
                                    placeholder="Full Name"
                                    className="rounded-2xl bg-[#111827] p-5 outline-none"
                                />

                                <input
                                    placeholder="WhatsApp Number"
                                    className="rounded-2xl bg-[#111827] p-5 outline-none"
                                />

                                <input
                                    placeholder="Nationality"
                                    className="rounded-2xl bg-[#111827] p-5 outline-none"
                                />

                                <input
                                    placeholder="Monthly Budget"
                                    className="rounded-2xl bg-[#111827] p-5 outline-none"
                                />

                                <select
                                    className="
                                    rounded-2xl
                                    bg-[#111827]
                                    p-5
                                    outline-none
                                    "
                                >

                                    <option>
                                        Apartment
                                    </option>

                                    <option>
                                        Villa
                                    </option>

                                    <option>
                                        Chalet
                                    </option>

                                    <option>
                                        Commercial
                                    </option>

                                </select>

                                <select
                                    className="
                                    rounded-2xl
                                    bg-[#111827]
                                    p-5
                                    outline-none
                                    "
                                >

                                    <option>
                                        Short Term
                                    </option>

                                    <option>
                                        Long Term
                                    </option>

                                </select>

                                <textarea
                                    placeholder="Additional Requirements"
                                    rows={5}
                                    className="
                                    rounded-2xl
                                    bg-[#111827]
                                    p-5
                                    outline-none
                                    md:col-span-2
                                    "
                                />

                                <button
                                    className="
                                    md:col-span-2
                                    rounded-2xl
                                    bg-[#F97316]
                                    py-5
                                    text-lg
                                    font-bold
                                    transition
                                    hover:brightness-110
                                    "
                                >

                                    Submit Rental Request

                                </button>

                            </form>

                        )

                    }

                </div>

            </div>

        </section>

    );

}