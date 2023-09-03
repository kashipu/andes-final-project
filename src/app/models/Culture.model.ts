import { Country } from "./Country.model";
import { Recipe } from "./Recipe.model";

export interface Culture {
    id: string;
    name: string;
    description: string;
    recipe: Recipe[] | [];
}