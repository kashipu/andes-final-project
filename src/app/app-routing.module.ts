import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CultureComponent } from './pages/culture/culture.component';

const routes: Routes = [
  {path: '', component: HomeComponent,  pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: ':id', component: CultureComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
