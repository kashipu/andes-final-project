import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeroCultureComponent } from './components/hero-culture/hero-culture.component';
import { FooterComponent } from './components/footer/footer.component';
import { CultureComponent } from './pages/culture/culture.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    RestaurantComponent,
    HeaderComponent,
    SidenavComponent,
    HeroCultureComponent,
    FooterComponent,
    CultureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
