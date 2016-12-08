import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//Pages
import { Featured } from '../pages/featured/featured';
import { Page2 } from '../pages/page2/page2';
import { CreateRecipe } from '../pages/create-recipe/create-recipe';
import { YourRecipes } from '../pages/your-recipes/your-recipes';
import { RecipeService } from '../services/recipe-service'
import { Profile } from '../pages/profile/profile';
import { Login } from '../pages/login/login';
import { RecipeDetails } from '../pages/recipe-details/recipe-details';
import { Explore } from '../pages/explore/explore';
import { ExploreDetail } from '../pages/explore/explore-detail';

//Models
import { Meal } from '../pages/models/';

import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { AuthService } from '../services/auth/auth.service';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

let storage: Storage = new Storage();

export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token'))
  }), http);
}


@NgModule({
  declarations: [
    MyApp,
    Featured,
    CreateRecipe,
    YourRecipes,
    Profile,
    Login,
    RecipeDetails,
    Explore,
    ExploreDetail
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Featured,
    CreateRecipe,
    YourRecipes,
    Profile,
    Login,
    RecipeDetails,
    Explore,
    ExploreDetail
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, RecipeService,AuthService,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }
             ]
})

export class AppModule {}
