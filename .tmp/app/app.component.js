import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Featured } from '../pages/featured/featured';
import { Profile } from '../pages/profile/profile';
import { Login } from '../pages/login/login';
import { Explore } from '../pages/explore/explore';
import { CreateRecipe } from '../pages/create-recipe/create-recipe';
import { YourRecipes } from '../pages/your-recipes/your-recipes';
import { AuthService } from '../services/auth/auth.service';
export var MyApp = (function () {
    function MyApp(platform, auth, menuCtrl) {
        var _this = this;
        this.platform = platform;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        this.rootPage = Login;
        this.initializeApp();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            // Schedule a token refresh on app start up
            auth.startupTokenRefresh();
            if (_this.auth.authenticated()) {
                _this.loggedIn = true;
                _this.menuCtrl.enable(true, 'authenticated');
                _this.menuCtrl.enable(false, 'unauthenticated');
            }
            else {
                _this.loggedIn = false;
                _this.menuCtrl.enable(false, 'authenticated');
                _this.menuCtrl.enable(true, 'unauthenticated');
            }
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Featured', component: Featured },
            { title: 'Create Recipe', component: CreateRecipe },
            { title: 'Your Recipes', component: YourRecipes },
            { title: 'Explore', component: Explore },
            { title: 'Profile', component: Profile }
        ];
        this.unAuthPages = [
            { title: 'Login', component: Login },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
        { type: AuthService, },
        { type: MenuController, },
    ];
    MyApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map