import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Featured } from '../pages/featured/featured';
import { CreateRecipe } from '../pages/create-recipe/create-recipe';
import { YourRecipes } from '../pages/your-recipes/your-recipes';
import { RecipeService } from '../services/recipe-service';
import { Profile } from '../pages/profile/profile';
import { Login } from '../pages/login/login';
import { RecipeDetails } from '../pages/recipe-details/recipe-details';
import { Explore } from '../pages/explore/explore';
import { ExploreDetail } from '../pages/explore/explore-detail';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { AuthService } from '../services/auth/auth.service';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
var storage = new Storage();
export function getAuthHttp(http) {
    return new AuthHttp(new AuthConfig({
        globalHeaders: [{ 'Accept': 'application/json' }],
        tokenGetter: (function () { return storage.get('id_token'); })
    }), http);
}
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
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
                    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, RecipeService, AuthService,
                        {
                            provide: AuthHttp,
                            useFactory: getAuthHttp,
                            deps: [Http]
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map