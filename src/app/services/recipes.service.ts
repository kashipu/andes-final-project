import { Injectable } from '@angular/core';
import { Recipes } from '../data/Recipes.data';
import { Recipe } from '../models/Recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  getRecipes() {
    return Recipes;
  }
  getRecipeByUrl(url: string): Recipe | undefined {
    return Recipes.find(recipe => recipe.recipeUrl === url);
  }
  constructor() { }
}
