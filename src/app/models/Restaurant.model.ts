import { Country } from "./Country.model";

export interface Restaurant {
    id: string;
    name: string;
    image: string;
    country: Country;
    city: string;
    address: string;
}