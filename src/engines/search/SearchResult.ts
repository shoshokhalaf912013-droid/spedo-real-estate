import { PropertyUnit } from "@/types/property";

export interface SearchResult {

    queryTime: number;

    total: number;

    items: PropertyUnit[];

}