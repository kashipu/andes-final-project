import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Culture } from 'src/app/models/Culture.model';
import { CountriesService } from 'src/app/services/countries.service';
import { Recipes } from 'src/app/data/Recipes.data';
import { Recipe } from 'src/app/models/Recipe.model';

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.scss']
})
export class CultureComponent implements OnInit {
  culturaId: string | null = null;
  cultura: Culture | undefined = undefined;
  flagsCulture: string[] | undefined = undefined;
  recipes: Recipe[] = [];

  constructor(private route: ActivatedRoute, private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.culturaId = params.get('id');
      this.getCulture();
      this.getFlags();
      this.getRecipes();
    });
  }
  getCulture(): void {
    if (this.culturaId) {
      this.cultura = this.countriesService.getCultureById(this.culturaId);
    }
  }
  getFlags(): string[] {
    if (this.culturaId) {
      const flags = this.countriesService.getFlagsByCulture(this.culturaId);
      this.flagsCulture = flags;
    }
    return [];
  }
  getRecipes() {
    const recipes = Recipes.filter(recipe => recipe.culture.id === this.culturaId);
    this.recipes = recipes;
  }
}