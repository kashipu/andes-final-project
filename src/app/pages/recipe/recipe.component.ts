import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/Recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent {
  recipeUrl: string | null = null;
  recipeForUrl: Recipe | undefined;
  constructor(private route: ActivatedRoute, private recipesService: RecipesService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const url = params.get('recipeUrl');
      this.recipeUrl = url;
      this.getRecipe();
      this.recipeForUrl = this.getRecipe();
    });
  }
  getRecipe(): Recipe | undefined {
    if (this.recipeUrl) {
      return this.recipesService.getRecipeByUrl(this.recipeUrl);
    } else {
      return undefined;
    }
  }
}
