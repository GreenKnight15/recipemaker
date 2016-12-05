import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Featured } from '../pages/featured/featured';
import { Page2 } from '../pages/page2/page2';
import { CreateRecipe } from '../pages/create-recipe/create-recipe';
import { YourRecipes } from '../pages/your-recipes/your-recipes';
import { RecipeService } from '../services/recipe-service'

@NgModule({
  declarations: [
    MyApp,
    Featured,
    Page2,
    CreateRecipe,
    YourRecipes
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Featured,
    Page2,
    CreateRecipe,
    YourRecipes  
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, RecipeService]
})
export class AppModule {}
