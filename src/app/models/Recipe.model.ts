import { Ingredient } from "./Ingredient.model";
import { Culture } from './Culture.model';
import { Country } from './Country.model';

export interface Recipe {
    id: string;
    name: string;
    image: string;
    ingredients: Ingredient[];
    steps: string[];
    culture: Culture;
    country: Country;
}