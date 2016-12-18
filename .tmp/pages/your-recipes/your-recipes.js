import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipeService } from '../../services/recipe-service';
import { AuthService } from '../..//services/auth/auth.service';
import { ModalController } from 'ionic-angular';
import { LikedRecipes } from '../your-recipes/liked-recipes';
import { CreatedRecipes } from '../your-recipes/created-recipes';
/*
  Generated class for the YourRecipes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var YourRecipes = (function () {
    function YourRecipes(navCtrl, recipeService, auth, modalCtrl) {
        this.navCtrl = navCtrl;
        this.recipeService = recipeService;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.tab1Root = CreatedRecipes;
        this.tab2Root = LikedRecipes;
    }
    YourRecipes.prototype.switchTabs = function () {
        this.navCtrl.parent.select(2);
    };
    YourRecipes.prototype.ionViewDidLoad = function () {
    };
    YourRecipes.prototype.ngOnInit = function () {
    };
    ;
    YourRecipes.decorators = [
        { type: Component, args: [{
                    selector: 'page-your-recipes',
                    templateUrl: 'your-recipes.html'
                },] },
    ];
    /** @nocollapse */
    YourRecipes.ctorParameters = [
        { type: NavController, },
        { type: RecipeService, },
        { type: AuthService, },
        { type: ModalController, },
    ];
    return YourRecipes;
}());
//# sourceMappingURL=your-recipes.js.map