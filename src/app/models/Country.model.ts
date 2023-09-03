import { Culture } from "./Culture.model";
import { Restaurant } from "./Restaurant.model";

export interface Country {
    id: string;
    name: string;
    region: string;
    subregion: string;
    flag: string;
    culture: Culture;
    restaurants?: Restaurant[];
}