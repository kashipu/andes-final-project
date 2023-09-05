import { Ingredient } from "./Ingredient.model";
import { Culture } from './Culture.model';
import { Country } from './Country.model';

export interface Recipe {
    RecipeId: string;
    name: string;
    description: string;
    image: string;
    ingredients: Ingredient[];
    steps: string[];
    culture: Culture;
    recipeUrl: string | null;
}