"use client";

import Link from "next/link";

import type { Listing }
from "@/data/listings/types";

interface ListingCardProps {

    listing: Listing;

}

export default function ListingCard({
    listing,
}: ListingCardProps) {

    return (

        <article
            className="
                group
                overflow-hidden
                rounded-[36px]
                bg-[#F97316]
                shadow-[0_20px_60px_rgba(249,115,22,0.18)]
                transition-all
                duration-500
                hover:-translate-y-3
            "
        >

            {/* IMAGE */}

            <div
                className="
                    relative
                    h-[280px]
                    overflow-hidden
                "
            >

			       <img
  			            src={
   			            listing.media?.cover ??
       			            "/images/placeholder-property.jpg"
   			           }
  				    alt={listing.title}
  				    className="
  			            h-full
    			            w-full
     				    object-cover
    				    transition-transform
    				    duration-700
    				    group-hover:scale-110
   				 "
				/>  
         	     {listing.featured && (
	
                    <div
                        className="
                            absolute
                            left-5
                            top-5
                            rounded-full
                            bg-[#08101E]
                            px-5
                            py-2
                            text-sm
                            font-black
                            text-[#D4AF37]
                        "
                    >
                        FEATURED
                    </div>

                )}

                <div
                    className="
                        absolute
                        right-5
                        top-5
                        rounded-full
                        bg-white/90
                        px-5
                        py-2
                        text-sm
                        font-bold
                        text-[#08101E]
                    "
                >
                    {listing.category.toUpperCase()}
                </div>

                {/* VIDEO BADGE */}

                {!!listing.media?.videos?.length && (

                    <div
                        className="
                            absolute
                            bottom-5
                            left-5
                            rounded-full
                            bg-red-600
                            px-4
                            py-2
                            text-sm
                            font-bold
                            text-white
                        "
                    >
                        🎥 Video Available
                    </div>

                )}

            </div>

            {/* CONTENT */}

            <div className="p-8">

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        text-sm
                        font-bold
                        text-[#08101E]
                    "
                >
                    <span>
                        {listing.city}
                    </span>

                    <span>•</span>

                    <span>
                        {listing.district}
                    </span>
                </div>

                <h3
                    className="
                        mt-5
                        !text-[#08101E]
                        text-3xl
                        font-black
                        leading-tight
                    "
                >
                    {listing.title}
                </h3>

                <div
                    className="
                        mt-6
                        flex
                        flex-wrap
                        gap-3
                    "
                >

                    <span
                        className="
                            rounded-full
                            bg-[#08101E]
                            px-4
                            py-2
                            text-sm
                            font-bold
                            text-white
                        "
                    >
                        {listing.propertyType}
                    </span>

                    {listing.bedrooms && (

                        <span
                            className="
                                rounded-full
                                bg-[#08101E]
                                px-4
                                py-2
                                text-sm
                                font-bold
                                text-white
                            "
                        >
                            {listing.bedrooms} Beds
                        </span>

                    )}

                    {listing.bathrooms && (

                        <span
                            className="
                                rounded-full
                                bg-[#08101E]
                                px-4
                                py-2
                                text-sm
                                font-bold
                                text-white
                            "
                        >
                            {listing.bathrooms} Baths
                        </span>

                    )}

                    <span
                        className="
                            rounded-full
                            bg-[#08101E]
                            px-4
                            py-2
                            text-sm
                            font-bold
                            text-white
                        "
                    >
                        {listing.area} m²
                    </span>

                </div>

                <div className="mt-8">

                    <p
                        className="
                            text-sm
                            font-bold
                            text-[#111827]
                        "
                    >
                        Price
                    </p>

                    <h4
                        className="
                            mt-2
                            !text-[#08101E]
                            text-4xl
                            font-black
                        "
                    >
                        {listing.price.toLocaleString()}

                        <span
                            className="
                                ml-2
                                text-xl
                            "
                        >
                            {listing.currency}
                        </span>

                    </h4>

                </div>

                <Link
                    href={`/listings/${listing.slug}`}
                    className="
                        mt-8
                        flex
                        items-center
                        justify-center
                        rounded-2xl
                        bg-[#08101E]
                        py-4
                        text-lg
                        font-bold
                        text-white
                        transition-all
                        duration-300
                        hover:bg-black
                    "
                >
                    View Details
                </Link>

            </div>

        </article>

    );

}