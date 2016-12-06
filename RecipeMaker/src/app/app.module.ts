import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Featured } from '../pages/featured/featured';
import { Page2 } from '../pages/page2/page2';
import { CreateRecipe } from '../pages/create-recipe/create-recipe';
import { YourRecipes } from '../pages/your-recipes/your-recipes';
import { RecipeService } from '../services/recipe-service'
import { Profile } from '../pages/profile/profile';
import { Login } from '../pages/login/login';

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
    Page2,
    CreateRecipe,
    YourRecipes,
    Profile,
    Login
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
    YourRecipes,
    Profile,
    Login
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
