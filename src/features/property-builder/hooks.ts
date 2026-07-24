"use client";

import { useState } from "react";

import {

    GalleryItem,

    VideoItem,

    FloorPlanItem,

    DynamicSection,

} from "./types";

export function usePropertyBuilder() {

    const [galleries, setGalleries] = useState<GalleryItem[]>([]);

    const [videos, setVideos] = useState<VideoItem[]>([]);

    const [floorPlans, setFloorPlans] = useState<FloorPlanItem[]>([]);

    const [sections, setSections] = useState<DynamicSection[]>([]);

    return {

        galleries,

        setGalleries,

        videos,

        setVideos,

        floorPlans,

        setFloorPlans,

        sections,

        setSections,

    };

}