"use client";

import { useState } from "react";

export default function PropertyEditor() {

    const [

        title,

        setTitle,

    ] = useState("");

    const [

        description,

        setDescription,

    ] = useState("");

    const [

        moduleType,

        setModuleType,

    ] = useState("Residential");

    const [

        propertyType,

        setPropertyType,

    ] = useState("Apartment");

    const [

        purpose,

        setPurpose,

    ] = useState("Sale");

    const [

        paymentType,

        setPaymentType,

    ] = useState("Cash");

    const [

        price,

        setPrice,

    ] = useState("");

    const [

        currency,

        setCurrency,

    ] = useState("USD");

    const [

        area,

        setArea,

    ] = useState("");

    const [

        bedrooms,

        setBedrooms,

    ] = useState("");

    const [

        bathrooms,

        setBathrooms,

    ] = useState("");

    const [

        floor,

        setFloor,

    ] = useState("");

    const [

        country,

        setCountry,

    ] = useState("Egypt");

    const [

        city,

        setCity,

    ] = useState("");

    const [

        district,

        setDistrict,

    ] = useState("");

    const [

        address,

        setAddress,

    ] = useState("");

    const [galleries, setGalleries] = useState<any[]>([]);

const [videos, setVideos] = useState<any[]>([]);

const [floorPlans, setFloorPlans] = useState<any[]>([]);

function addGallery() {

    setGalleries(prev => [

        ...prev,

        {

            id: crypto.randomUUID(),

            title: `Gallery ${prev.length + 1}`,

        },

    ]);

}

function addVideo() {

    setVideos(prev => [

        ...prev,

        {

            id: crypto.randomUUID(),

            title: `Video ${prev.length + 1}`,

        },

    ]);

}

function addFloorPlan() {

    setFloorPlans(prev => [

        ...prev,

        {

            id: crypto.randomUUID(),

            title: `Floor Plan ${prev.length + 1}`,

        },

    ]);

}


    return (

        <div

            className="

                mx-auto

                max-w-7xl

                space-y-8

            "

        >

            <div>

                <h1

                    className="

                        text-4xl

                        font-black

                        text-white

                    "

                >

                    Property Editor

                </h1>

                <p

                    className="

                        mt-2

                        text-slate-400

                    "

                >

                    Create Residential & Commercial Properties

                </p>

            </div>

            <div

                className="

                    grid

                    gap-6

                    lg:grid-cols-2

                "

            >

                <div

                    className="

                        rounded-2xl

                        border

                        border-slate-700

                        bg-slate-900

                        p-6

                    "

                >

                    <h2

                        className="

                            mb-6

                            text-2xl

                            font-bold

                            text-white

                        "

                    >

                        Basic Information

                    </h2>

                    <div

                        className="

                            grid

                            gap-6

                            md:grid-cols-2

                        "

                    >

                        <div>

                            <label className="mb-2 block text-sm font-bold text-white">

                                Module

                            </label>

                            <select

                                value={moduleType}

                                onChange={e =>

                                    setModuleType(

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                            >

                                <option>Residential</option>

                                <option>Commercial</option>

                                <option>Projects</option>

                            </select>

                        </div>

                        <div>

                            <label className="mb-2 block text-sm font-bold text-white">

                                Property Type

                            </label>

                            <input

                                value={propertyType}

                                onChange={e =>

                                    setPropertyType(

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                            />

                        </div>

                        <div>

                            <label className="mb-2 block text-sm font-bold text-white">

                                Purpose

                            </label>

                            <select

                                value={purpose}

                                onChange={e =>

                                    setPurpose(

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                            >

                                <option>Sale</option>

                                <option>Rent</option>

                            </select>

                        </div>

                        <div>

                            <label className="mb-2 block text-sm font-bold text-white">

                                Price

                            </label>

                            <input

                                value={price}

                                onChange={e =>

                                    setPrice(

                                        e.target.value

                                    )

                                }

                                className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                            />

                        </div>

                        <div>

                            <label className="mb-2 block text-sm font-bold text-white">

                                Currency

                            </label>

			    <select

  				  value={currency}

   				  onChange={e =>

      				  setCurrency(

        			    e.target.value

     				   )

   				 }

  			  className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

			>

   			 <option>USD</option>

   			 <option>EGP</option>

   			 <option>EUR</option>

			</select>

		       </div>

		   <div>

                 <label className="mb-2 block text-sm font-bold text-white">

             Payment

    </label>

                        <select

                            value={paymentType}

                            onChange={e =>

                                setPaymentType(

                                    e.target.value

                                )

                            }

                            className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                        >

                            <option>Cash</option>

                            <option>Installments</option>

                        </select>

                    </div>

                </div>

            </div>

            <section

                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 space-y-6"

            >

                <h2 className="text-2xl font-bold text-white">

                    Property Details

                </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    <input

                        placeholder="Area"

                        value={area}

                        onChange={e =>

                            setArea(

                                e.target.value

                            )

                        }

                        className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                    />

                    <input

                        placeholder="Bedrooms"

                        value={bedrooms}

                        onChange={e =>

                            setBedrooms(

                                e.target.value

                            )

                        }

                        className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                    />

                    <input

                        placeholder="Bathrooms"

                        value={bathrooms}

                        onChange={e =>

                            setBathrooms(

                                e.target.value

                            )

                        }

                        className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                    />

                    <input

                        placeholder="Floor"

                        value={floor}

                        onChange={e =>

                            setFloor(

                                e.target.value

                            )

                        }

                        className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                    />

                </div>

            </section>

	               <section

                className="rounded-2xl border border-slate-700 bg-slate-900 p-6 space-y-6"

            >

                <h2

                    className="text-2xl font-bold text-white"

                >

                    Location

                </h2>

                <div

                    className="grid gap-6 md:grid-cols-2"

                >

                    <input

                        placeholder="Country"

                        value={country}

                        onChange={e =>

                            setCountry(

                                e.target.value

                            )

                        }

                        className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                    />

                    <input

                        placeholder="City"

                        value={city}

                        onChange={e =>

                            setCity(

                                e.target.value

                            )

                        }

                        className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                    />

                    <input

                        placeholder="District"

                        value={district}

                        onChange={e =>

                            setDistrict(

                                e.target.value

                            )

                        }

                        className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                    />

                    <input

                        placeholder="Address"

                        value={address}

                        onChange={e =>

                            setAddress(

                                e.target.value

                            )

                        }

                        className="rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                    />

                </div>

            </section>

            <section

                className="rounded-2xl border border-slate-700 bg-slate-900 p-6"

            >

                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-2xl font-bold text-white">

                        Galleries

                    </h2>

                    <button

                        onClick={addGallery}

                        className="rounded-xl bg-orange-500 px-5 py-3 font-bold text-white"

                    >

                        + Gallery

                    </button>

                </div>

                <div className="space-y-6">

                    {galleries.map(

                        gallery => (

                            <div

                                key={gallery.id}

                                className="rounded-xl border border-slate-700 p-5"

                            >

                                <div className="mb-4 flex items-center justify-between">

                                    <h3 className="font-bold text-white">

                                        {gallery.title}

                                    </h3>

                                    <button

                                        className="rounded-lg bg-red-600 px-4 py-2 text-white"

                                    >

                                        Delete

                                    </button>

                                </div>

                                <button

                                    className="rounded-lg bg-sky-600 px-5 py-3 text-white"

                                >

                                    + Add Images

                                </button>

                            </div>

                        )

                    )}

                </div>

            </section>

	               <section

                className="rounded-2xl border border-slate-700 bg-slate-900 p-6"

            >

                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-2xl font-bold text-white">

                        Videos

                    </h2>

                    <button

                        onClick={addVideo}

                        className="rounded-xl bg-orange-500 px-5 py-3 font-bold text-white"

                    >

                        + Video

                    </button>

                </div>

                <div className="space-y-6">

                    {videos.map(

                        video => (

                            <div

                                key={video.id}

                                className="rounded-xl border border-slate-700 p-5"

                            >

                                <div className="mb-4 flex items-center justify-between">

                                    <h3 className="font-bold text-white">

                                        {video.title}

                                    </h3>

                                    <button

                                        className="rounded-lg bg-red-600 px-4 py-2 text-white"

                                    >

                                        Delete

                                    </button>

                                </div>

                                <button

                                    className="rounded-lg bg-sky-600 px-5 py-3 text-white"

                                >

                                    + Add Video

                                </button>

                            </div>

                        )

                    )}

                </div>

            </section>

            <section

                className="rounded-2xl border border-slate-700 bg-slate-900 p-6"

            >

                <div className="mb-6 flex items-center justify-between">

                    <h2 className="text-2xl font-bold text-white">

                        Floor Plans

                    </h2>

                    <button

                        onClick={addFloorPlan}

                        className="rounded-xl bg-orange-500 px-5 py-3 font-bold text-white"

                    >

                        + Floor Plan

                    </button>

                </div>

                <div className="space-y-6">

                    {floorPlans.map(

                        plan => (

                            <div

                                key={plan.id}

                                className="rounded-xl border border-slate-700 p-5"

                            >

                                <div className="mb-4 flex items-center justify-between">

                                    <h3 className="font-bold text-white">

                                        {plan.title}

                                    </h3>

                                    <button

                                        className="rounded-lg bg-red-600 px-4 py-2 text-white"

                                    >

                                        Delete

                                    </button>

                                </div>

                                <button

                                    className="rounded-lg bg-sky-600 px-5 py-3 text-white"

                                >

                                    + Add PDF

                                </button>

                            </div>

                        )

                    )}

                </div>

            </section>

	               <section

                className="rounded-2xl border border-slate-700 bg-slate-900 p-6"

            >

                <h2

                    className="mb-6 text-2xl font-bold text-white"

                >

                    Description

                </h2>

                <textarea

                    rows={8}

                    value={description}

                    onChange={e =>

                        setDescription(

                            e.target.value

                        )

                    }

                    className="w-full rounded-xl border border-slate-700 bg-[#020817] p-4 text-white"

                />

            </section>

            <section

                className="rounded-2xl border border-slate-700 bg-slate-900 p-6"

            >

                <h2

                    className="mb-6 text-2xl font-bold text-white"

                >

                    SEO

                </h2>

                <input

                    placeholder="SEO Title"

                    className="mb-4 w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                />

                <textarea

                    rows={5}

                    placeholder="SEO Description"

                    className="w-full rounded-xl border border-slate-700 bg-[#020817] p-3 text-white"

                />

            </section>

            <div

                className="flex justify-end"

            >

                <button

                    className="rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white"

                >

                    Save Property

                </button>

            </div>

        </div>

    </div>

);
}