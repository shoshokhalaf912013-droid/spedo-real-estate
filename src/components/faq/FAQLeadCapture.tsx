"use client";

import { useState } from "react";

const interests = [

    "Investment Property",

    "Rental Income",

    "Family Living",

    "Luxury Property",

    "Golden Visa & Residency",

    "Commercial Investment"

];

export default function FAQLeadCapture() {

    const [form, setForm] = useState({

        name: "",

        email: "",

        whatsapp: "",

        interest: interests[0]

    });

    const [submitted, setSubmitted] =
        useState(false);

    const handleSubmit = (

        event: React.FormEvent

    ) => {

        event.preventDefault();

        const message = `
🏡 SPEDO REAL ESTATE

New Consultation Request

👤 Name:
${form.name}

📧 Email:
${form.email}

📱 WhatsApp:
${form.whatsapp}

🎯 Investment Interest:
${form.interest}
`;

        const phone =
            "+2010580070998"; // ضع رقم واتساب SPEDO الحقيقي هنا

        const whatsappUrl =
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(
            whatsappUrl,
            "_blank"
        );

        setSubmitted(true);

    };

    if (submitted) {

        return (

            <section
                className="
                bg-[#020202]
                py-24
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
                        border-[#d4af37]/20
                        bg-[#111111]
                        p-12
                        text-center
                        "
                    >

                        <div
                            className="
                            mx-auto
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-full
                            bg-[#d4af37]
                            text-4xl
                            text-black
                            "
                        >
                            ✓
                        </div>

                        <h2
                            className="
                            mt-8
                            text-4xl
                            font-light
                            text-[#ff8c1a]
                            "
                        >
                            Consultation Request
                            Received
                        </h2>

                        <p
                            className="
                            mx-auto
                            mt-8
                            max-w-2xl
                            text-lg
                            leading-8
                            text-gray-400
                            "
                        >
                            Thank you for contacting
                            SPEDO.

                            Our investment team
                            will contact you shortly
                            with personalized
                            opportunities matching
                            your requirements.
                        </p>

                    </div>

                </div>

            </section>

        );

    }
        return (

        <section
            className="
            bg-[#020202]
            py-24
            "
        >

            <div
                className="
                mx-auto
                max-w-5xl
                px-6
                "
            >

                <div
                    className="
                    rounded-[48px]
                    border
                    border-[#d4af37]/10
                    bg-[#0b0b0b]
                    p-12
                    shadow-[0_30px_120px_rgba(0,0,0,.55)]
                    "
                >

                    <div
                        className="
                        text-center
                        "
                    >

                        <span
                            className="
                            text-xs
                            uppercase
                            tracking-[4px]
                            text-[#d4af37]
                            "
                        >
                            FREE CONSULTATION
                        </span>

                        <h2
                            className="
                            mt-8
                            text-5xl
                            font-light
                            text-[#ff8c1a]
                            md:text-6xl
                            "
                        >
                            Need Personalized
                            Investment Advice?
                        </h2>

                        <p
                            className="
                            mx-auto
                            mt-8
                            max-w-3xl
                            text-lg
                            leading-8
                            text-gray-400
                            "
                        >
                            Speak directly with
                            a SPEDO investment
                            specialist and receive
                            tailored recommendations
                            based on your goals.
                        </p>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="
                        mt-16
                        grid
                        gap-6
                        md:grid-cols-2
                        "
                    >

                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            value={form.name}
                            onChange={e =>
                                setForm({
                                    ...form,
                                    name:
                                        e.target.value
                                })
                            }
                            className="
                            rounded-[24px]
                            border
                            border-[#d4af37]/10
                            bg-[#111111]
                            px-6
                            py-5
                            text-white
                            outline-none
                            placeholder:text-gray-500
                            focus:border-[#d4af37]/30
                            "
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            value={form.email}
                            onChange={e =>
                                setForm({
                                    ...form,
                                    email:
                                        e.target.value
                                })
                            }
                            className="
                            rounded-[24px]
                            border
                            border-[#d4af37]/10
                            bg-[#111111]
                            px-6
                            py-5
                            text-white
                            outline-none
                            placeholder:text-gray-500
                            focus:border-[#d4af37]/30
                            "
                        />

                        <input
                            type="text"
                            placeholder="WhatsApp Number"
                            required
                            value={form.whatsapp}
                            onChange={e =>
                                setForm({
                                    ...form,
                                    whatsapp:
                                        e.target.value
                                })
                            }
                            className="
                            rounded-[24px]
                            border
                            border-[#d4af37]/10
                            bg-[#111111]
                            px-6
                            py-5
                            text-white
                            outline-none
                            placeholder:text-gray-500
                            focus:border-[#d4af37]/30
                            "
                        />

                        <select
                            value={form.interest}
                            onChange={e =>
                                setForm({
                                    ...form,
                                    interest:
                                        e.target.value
                                })
                            }
                            className="
                            rounded-[24px]
                            border
                            border-[#d4af37]/10
                            bg-[#111111]
                            px-6
                            py-5
                            text-white
                            outline-none
                            focus:border-[#d4af37]/30
                            "
                        >

                            {

                                interests.map(

                                    item => (

                                        <option
                                            key={item}
                                            value={item}
                                        >
                                            {item}
                                        </option>

                                    )

                                )

                            }

                        </select>

                        <div
                            className="
                            md:col-span-2
                            "
                        >

                            <button
                                type="submit"
                                className="
                                w-full
                                rounded-full
                                bg-[#d4af37]
                                px-10
                                py-5
                                text-sm
                                font-semibold
                                uppercase
                                tracking-[2px]
                                text-black
                                transition-all
                                duration-300
                                hover:scale-[1.01]
                                hover:shadow-[0_0_40px_rgba(212,175,55,.30)]
                                "
                            >
                                Book Free Consultation
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </section>

    );

}