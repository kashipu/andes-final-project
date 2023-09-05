import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CultureComponent } from './pages/culture/culture.component';
import { RecipeComponent } from './pages/recipe/recipe.component';

const routes: Routes = [
  {path: '', component: RecipeComponent,  pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: ':id', component: CultureComponent},
  {path: ':id/:recipeUrl', component: RecipeComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
