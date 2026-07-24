"use client";

import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from "react";

import type {
    DynamicSection,
    FloorPlan,
    Gallery,
    PropertyData,
    PropertyMedia,
    Video,
} from "./models";

interface AddVideoWithMediaResult {
    media: PropertyMedia;
    video: Video;
}

interface PropertyStore {
    property: PropertyData;

    galleries: Gallery[];
    videos: Video[];
    floorPlans: FloorPlan[];
    sections: DynamicSection[];
    media: PropertyMedia[];

    setProperty(
        data: Partial<PropertyData>
    ): void;

    updatePropertyField<
        K extends keyof PropertyData,
    >(
        key: K,
        value: PropertyData[K]
    ): void;

    replaceProperty(
        data: PropertyData
    ): void;

    resetProperty(): void;

    addMedia(
        media: PropertyMedia
    ): PropertyMedia;

    updateMedia(
        id: string,
        data: Partial<
            Omit<PropertyMedia, "id">
        >
    ): void;

    removeMedia(
        id: string
    ): void;

    addGallery(
        data?: Partial<
            Omit<Gallery, "id">
        >
    ): Gallery;

    updateGallery(
        id: string,
        data: Partial<
            Omit<Gallery, "id">
        >
    ): void;

    removeGallery(
        id: string
    ): void;

    addMediaToGallery(
        galleryId: string,
        mediaId: string
    ): void;

    removeMediaFromGallery(
        galleryId: string,
        mediaId: string
    ): void;

    addVideo(
        data?: Partial<
            Omit<Video, "id">
        >
    ): Video;

    addVideoWithMedia(
        media: PropertyMedia,
        videoData?: Partial<
            Omit<Video, "id" | "mediaId">
        >
    ): AddVideoWithMediaResult;

    updateVideo(
        id: string,
        data: Partial<
            Omit<Video, "id">
        >
    ): void;

    attachVideoMedia(
        videoId: string,
        mediaId: string
    ): void;

    removeVideo(
        id: string
    ): void;

    addFloorPlan(
        data?: Partial<
            Omit<FloorPlan, "id">
        >
    ): FloorPlan;

    updateFloorPlan(
        id: string,
        data: Partial<
            Omit<FloorPlan, "id">
        >
    ): void;

    attachFloorPlanMedia(
        floorPlanId: string,
        mediaId: string
    ): void;

    removeFloorPlan(
        id: string
    ): void;

    addSection(
        type: string,
        title: string
    ): DynamicSection;

    updateSection(
        id: string,
        data: Partial<
            Omit<DynamicSection, "id">
        >
    ): void;

    removeSection(
        id: string
    ): void;
}

function createId(): string {
    if (
        typeof crypto !== "undefined" &&
        typeof crypto.randomUUID ===
            "function"
    ) {
        return crypto.randomUUID();
    }

    return [
        Date.now().toString(36),
        Math.random()
            .toString(36)
            .slice(2),
    ].join("-");
}

function clonePropertyData(
    data: PropertyData
): PropertyData {
    return {
        ...data,

        media: data.media.map(
            item => ({
                ...item,
            })
        ),

        galleries:
            data.galleries.map(
                gallery => ({
                    ...gallery,

                    mediaIds: [
                        ...gallery.mediaIds,
                    ],
                })
            ),

        videos: data.videos.map(
            video => ({
                ...video,
            })
        ),

        floorPlans:
            data.floorPlans.map(
                floorPlan => ({
                    ...floorPlan,
                })
            ),

        sections:
            data.sections.map(
                section => ({
                    ...section,
                })
            ),
    };
}

function createInitialProperty(): PropertyData {
    return {
        title: "",
        reference: "",
        status: "Draft",
        description: "",

        module: "Residential",
        propertyType: "Apartment",
        purpose: "Sale",
        payment: "Cash",

        price: 0,
        currency: "USD",

        area: 0,
        bedrooms: 0,
        bathrooms: 0,
        floor: "",
        buildingAge: 0,

        parking: false,
        garden: false,
        pool: false,
        elevator: false,
        smartHome: false,

        furnishing: "Unfurnished",
        finishing: "Finished",
        view: "",
        deliveryDate: "",

        country: "Egypt",
        city: "Hurghada",
        district: "El Kawther",
        address: "Airport Road",
        latitude: "27.2579",
        longitude: "33.8116",

        media: [],
        galleries: [],
        videos: [],
        floorPlans: [],

        sections: [],

        seoTitle: "",
        seoDescription: "",
        seoKeywords: "",
        slug: "",

        featured: false,
        publishedAt: "",
    };
}

const Context =
    createContext<PropertyStore | null>(
        null
    );

export function PropertyProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [
        property,
        setPropertyState,
    ] = useState<PropertyData>(
        createInitialProperty
    );

    function setProperty(
        data: Partial<PropertyData>
    ): void {
        setPropertyState(previous => ({
            ...previous,
            ...data,

            media:
                data.media !== undefined
                    ? data.media.map(
                          item => ({
                              ...item,
                          })
                      )
                    : previous.media,

            galleries:
                data.galleries !==
                undefined
                    ? data.galleries.map(
                          gallery => ({
                              ...gallery,

                              mediaIds: [
                                  ...gallery.mediaIds,
                              ],
                          })
                      )
                    : previous.galleries,

            videos:
                data.videos !== undefined
                    ? data.videos.map(
                          video => ({
                              ...video,
                          })
                      )
                    : previous.videos,

            floorPlans:
                data.floorPlans !==
                undefined
                    ? data.floorPlans.map(
                          floorPlan => ({
                              ...floorPlan,
                          })
                      )
                    : previous.floorPlans,

            sections:
                data.sections !==
                undefined
                    ? data.sections.map(
                          section => ({
                              ...section,
                          })
                      )
                    : previous.sections,
        }));
    }

    function updatePropertyField<
        K extends keyof PropertyData,
    >(
        key: K,
        value: PropertyData[K]
    ): void {
        setPropertyState(previous => ({
            ...previous,
            [key]: value,
        }));
    }

    function replaceProperty(
        data: PropertyData
    ): void {
        setPropertyState(
            clonePropertyData(data)
        );
    }

    function resetProperty(): void {
        setPropertyState(
            createInitialProperty()
        );
    }

    function addMedia(
        media: PropertyMedia
    ): PropertyMedia {
        const normalizedMedia: PropertyMedia =
            {
                ...media,
                id:
                    media.id.trim() ||
                    createId(),
            };

        setPropertyState(previous => {
            const existingMedia =
                previous.media.find(
                    item =>
                        item.id ===
                        normalizedMedia.id
                );

            if (existingMedia) {
                return {
                    ...previous,

                    media:
                        previous.media.map(
                            item =>
                                item.id ===
                                normalizedMedia.id
                                    ? {
                                          ...item,
                                          ...normalizedMedia,
                                      }
                                    : item
                        ),
                };
            }

            return {
                ...previous,

                media: [
                    ...previous.media,
                    normalizedMedia,
                ],
            };
        });

        return normalizedMedia;
    }

    function updateMedia(
        id: string,
        data: Partial<
            Omit<PropertyMedia, "id">
        >
    ): void {
        setPropertyState(previous => ({
            ...previous,

            media:
                previous.media.map(
                    item =>
                        item.id === id
                            ? {
                                  ...item,
                                  ...data,
                              }
                            : item
                ),
        }));
    }

    function removeMedia(
        id: string
    ): void {
        setPropertyState(previous => ({
            ...previous,

            media:
                previous.media.filter(
                    item =>
                        item.id !== id
                ),

            galleries:
                previous.galleries.map(
                    gallery => ({
                        ...gallery,

                        mediaIds:
                            gallery.mediaIds.filter(
                                mediaId =>
                                    mediaId !==
                                    id
                            ),
                    })
                ),

            videos:
                previous.videos.map(
                    video =>
                        video.mediaId === id
                            ? {
                                  ...video,
                                  mediaId:
                                      undefined,
                              }
                            : video
                ),

            floorPlans:
                previous.floorPlans.map(
                    floorPlan =>
                        floorPlan.mediaId ===
                        id
                            ? {
                                  ...floorPlan,
                                  mediaId:
                                      undefined,
                              }
                            : floorPlan
                ),
        }));
    }

    function addGallery(
        data: Partial<
            Omit<Gallery, "id">
        > = {}
    ): Gallery {
        const gallery: Gallery = {
            id: createId(),

            title:
                data.title?.trim() ||
                `Gallery ${
                    property.galleries
                        .length + 1
                }`,

            mediaIds: [
                ...(data.mediaIds ?? []),
            ],
        };

        setPropertyState(previous => ({
            ...previous,

            galleries: [
                ...previous.galleries,
                gallery,
            ],
        }));

        return gallery;
    }

    function updateGallery(
        id: string,
        data: Partial<
            Omit<Gallery, "id">
        >
    ): void {
        setPropertyState(previous => ({
            ...previous,

            galleries:
                previous.galleries.map(
                    gallery =>
                        gallery.id === id
                            ? {
                                  ...gallery,
                                  ...data,

                                  mediaIds:
                                      data.mediaIds !==
                                      undefined
                                          ? [
                                                ...data.mediaIds,
                                            ]
                                          : gallery.mediaIds,
                              }
                            : gallery
                ),
        }));
    }

    function removeGallery(
        id: string
    ): void {
        setPropertyState(previous => ({
            ...previous,

            galleries:
                previous.galleries.filter(
                    gallery =>
                        gallery.id !== id
                ),
        }));
    }

    function addMediaToGallery(
        galleryId: string,
        mediaId: string
    ): void {
        setPropertyState(previous => {
            const mediaExists =
                previous.media.some(
                    item =>
                        item.id === mediaId
                );

            if (!mediaExists) {
                return previous;
            }

            return {
                ...previous,

                galleries:
                    previous.galleries.map(
                        gallery => {
                            if (
                                gallery.id !==
                                galleryId
                            ) {
                                return gallery;
                            }

                            if (
                                gallery.mediaIds.includes(
                                    mediaId
                                )
                            ) {
                                return gallery;
                            }

                            return {
                                ...gallery,

                                mediaIds: [
                                    ...gallery.mediaIds,
                                    mediaId,
                                ],
                            };
                        }
                    ),
            };
        });
    }

    function removeMediaFromGallery(
        galleryId: string,
        mediaId: string
    ): void {
        setPropertyState(previous => ({
            ...previous,

            galleries:
                previous.galleries.map(
                    gallery =>
                        gallery.id ===
                        galleryId
                            ? {
                                  ...gallery,

                                  mediaIds:
                                      gallery.mediaIds.filter(
                                          id =>
                                              id !==
                                              mediaId
                                      ),
                              }
                            : gallery
                ),
        }));
    }
    function addVideo(
        data: Partial<
            Omit<Video, "id">
        > = {}
    ): Video {
        const video: Video = {
            id: createId(),

            title:
                data.title?.trim() ||
                `Video ${
                    property.videos.length +
                    1
                }`,

            mediaId: data.mediaId,
        };

        setPropertyState(previous => {
            if (video.mediaId) {
                const validVideoMedia =
                    previous.media.some(
                        item =>
                            item.id ===
                                video.mediaId &&
                            item.type ===
                                "video"
                    );

                if (!validVideoMedia) {
                    return {
                        ...previous,

                        videos: [
                            ...previous.videos,

                            {
                                ...video,
                                mediaId:
                                    undefined,
                            },
                        ],
                    };
                }
            }

            return {
                ...previous,

                videos: [
                    ...previous.videos,
                    video,
                ],
            };
        });

        return video;
    }

    function addVideoWithMedia(
        mediaData: PropertyMedia,
        videoData: Partial<
            Omit<
                Video,
                "id" | "mediaId"
            >
        > = {}
    ): AddVideoWithMediaResult {
        if (
            mediaData.type !== "video"
        ) {
            throw new Error(
                "addVideoWithMedia accepts video media only"
            );
        }

        const mediaItem: PropertyMedia =
            {
                ...mediaData,

                id:
                    mediaData.id.trim() ||
                    createId(),
            };

        const video: Video = {
            id: createId(),

            title:
                videoData.title?.trim() ||
                mediaItem.name.trim() ||
                `Video ${
                    property.videos.length +
                    1
                }`,

            mediaId: mediaItem.id,
        };

        setPropertyState(previous => {
            const existingMedia =
                previous.media.some(
                    item =>
                        item.id ===
                        mediaItem.id
                );

            const nextMedia =
                existingMedia
                    ? previous.media.map(
                          item =>
                              item.id ===
                              mediaItem.id
                                  ? {
                                        ...item,
                                        ...mediaItem,
                                    }
                                  : item
                      )
                    : [
                          ...previous.media,
                          mediaItem,
                      ];

            return {
                ...previous,

                media: nextMedia,

                videos: [
                    ...previous.videos,
                    video,
                ],
            };
        });

        return {
            media: mediaItem,
            video,
        };
    }

    function updateVideo(
        id: string,
        data: Partial<
            Omit<Video, "id">
        >
    ): void {
        setPropertyState(previous => {
            let normalizedData = data;

            if (
                data.mediaId !==
                undefined
            ) {
                const validVideoMedia =
                    previous.media.some(
                        mediaItem =>
                            mediaItem.id ===
                                data.mediaId &&
                            mediaItem.type ===
                                "video"
                    );

                if (!validVideoMedia) {
                    normalizedData = {
                        ...data,
                        mediaId: undefined,
                    };
                }
            }

            return {
                ...previous,

                videos:
                    previous.videos.map(
                        video =>
                            video.id === id
                                ? {
                                      ...video,
                                      ...normalizedData,
                                  }
                                : video
                    ),
            };
        });
    }

    function attachVideoMedia(
        videoId: string,
        mediaId: string
    ): void {
        setPropertyState(previous => {
            const mediaExists =
                previous.media.some(
                    mediaItem =>
                        mediaItem.id ===
                            mediaId &&
                        mediaItem.type ===
                            "video"
                );

            const videoExists =
                previous.videos.some(
                    video =>
                        video.id ===
                        videoId
                );

            if (
                !mediaExists ||
                !videoExists
            ) {
                return previous;
            }

            return {
                ...previous,

                videos:
                    previous.videos.map(
                        video =>
                            video.id ===
                            videoId
                                ? {
                                      ...video,
                                      mediaId,
                                  }
                                : video
                    ),
            };
        });
    }

    function removeVideo(
        id: string
    ): void {
        setPropertyState(previous => ({
            ...previous,

            videos:
                previous.videos.filter(
                    video =>
                        video.id !== id
                ),
        }));
    }

    function addFloorPlan(
        data: Partial<
            Omit<FloorPlan, "id">
        > = {}
    ): FloorPlan {
        const floorPlan: FloorPlan = {
            id: createId(),

            title:
                data.title?.trim() ||
                `Floor Plan ${
                    property.floorPlans
                        .length + 1
                }`,

            mediaId: data.mediaId,
        };

        setPropertyState(previous => {
            if (floorPlan.mediaId) {
                const validMedia =
                    previous.media.some(
                        mediaItem =>
                            mediaItem.id ===
                                floorPlan.mediaId &&
                            (
                                mediaItem.type ===
                                    "image" ||
                                mediaItem.type ===
                                    "pdf"
                            )
                    );

                if (!validMedia) {
                    return {
                        ...previous,

                        floorPlans: [
                            ...previous.floorPlans,

                            {
                                ...floorPlan,
                                mediaId:
                                    undefined,
                            },
                        ],
                    };
                }
            }

            return {
                ...previous,

                floorPlans: [
                    ...previous.floorPlans,
                    floorPlan,
                ],
            };
        });

        return floorPlan;
    }

    function updateFloorPlan(
        id: string,
        data: Partial<
            Omit<FloorPlan, "id">
        >
    ): void {
        setPropertyState(previous => {
            let normalizedData = data;

            if (
                data.mediaId !==
                undefined
            ) {
                const validMedia =
                    previous.media.some(
                        mediaItem =>
                            mediaItem.id ===
                                data.mediaId &&
                            (
                                mediaItem.type ===
                                    "image" ||
                                mediaItem.type ===
                                    "pdf"
                            )
                    );

                if (!validMedia) {
                    normalizedData = {
                        ...data,
                        mediaId: undefined,
                    };
                }
            }

            return {
                ...previous,

                floorPlans:
                    previous.floorPlans.map(
                        floorPlan =>
                            floorPlan.id ===
                            id
                                ? {
                                      ...floorPlan,
                                      ...normalizedData,
                                  }
                                : floorPlan
                    ),
            };
        });
    }

    function attachFloorPlanMedia(
        floorPlanId: string,
        mediaId: string
    ): void {
        setPropertyState(previous => {
            const mediaExists =
                previous.media.some(
                    mediaItem =>
                        mediaItem.id ===
                            mediaId &&
                        (
                            mediaItem.type ===
                                "image" ||
                            mediaItem.type ===
                                "pdf"
                        )
                );

            const floorPlanExists =
                previous.floorPlans.some(
                    floorPlan =>
                        floorPlan.id ===
                        floorPlanId
                );

            if (
                !mediaExists ||
                !floorPlanExists
            ) {
                return previous;
            }

            return {
                ...previous,

                floorPlans:
                    previous.floorPlans.map(
                        floorPlan =>
                            floorPlan.id ===
                            floorPlanId
                                ? {
                                      ...floorPlan,
                                      mediaId,
                                  }
                                : floorPlan
                    ),
            };
        });
    }

    function removeFloorPlan(
        id: string
    ): void {
        setPropertyState(previous => ({
            ...previous,

            floorPlans:
                previous.floorPlans.filter(
                    floorPlan =>
                        floorPlan.id !== id
                ),
        }));
    }

    function addSection(
        type: string,
        title: string
    ): DynamicSection {
        const section: DynamicSection =
            {
                id: createId(),

                type: type.trim(),

                title: title.trim(),

                hidden: false,
            };

        setPropertyState(previous => ({
            ...previous,

            sections: [
                ...previous.sections,
                section,
            ],
        }));

        return section;
    }

    function updateSection(
        id: string,
        data: Partial<
            Omit<
                DynamicSection,
                "id"
            >
        >
    ): void {
        setPropertyState(previous => ({
            ...previous,

            sections:
                previous.sections.map(
                    section =>
                        section.id === id
                            ? {
                                  ...section,
                                  ...data,
                              }
                            : section
                ),
        }));
    }

    function removeSection(
        id: string
    ): void {
        setPropertyState(previous => ({
            ...previous,

            sections:
                previous.sections.filter(
                    section =>
                        section.id !== id
                ),
        }));
    }

    const galleries =
        property.galleries;

    const videos =
        property.videos;

    const floorPlans =
        property.floorPlans;

    const sections =
        property.sections;

    const media =
        property.media;

    return (
        <Context.Provider
            value={{
                property,

                galleries,
                videos,
                floorPlans,
                sections,
                media,

                setProperty,
                updatePropertyField,
                replaceProperty,
                resetProperty,

                addMedia,
                updateMedia,
                removeMedia,

                addGallery,
                updateGallery,
                removeGallery,
                addMediaToGallery,
                removeMediaFromGallery,

                addVideo,
                addVideoWithMedia,
                updateVideo,
                attachVideoMedia,
                removeVideo,

                addFloorPlan,
                updateFloorPlan,
                attachFloorPlanMedia,
                removeFloorPlan,

                addSection,
                updateSection,
                removeSection,
            }}
        >
            {children}
        </Context.Provider>
    );
}

export function usePropertyStore(): PropertyStore {
    const context =
        useContext(Context);

    if (!context) {
        throw new Error(
            "usePropertyStore must be used inside PropertyProvider"
        );
    }

    return context;
}
