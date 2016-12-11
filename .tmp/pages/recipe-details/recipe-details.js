import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { RecipeService } from '../../services/recipe-service';
import { AuthService } from '../..//services/auth/auth.service';
import { ViewController } from 'ionic-angular';
export var RecipeDetails = (function () {
    function RecipeDetails(navCtrl, recipeService, auth, navParams, viewCtrl, platform) {
        this.navCtrl = navCtrl;
        this.recipeService = recipeService;
        this.auth = auth;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    RecipeDetails.prototype.ionViewDidLoad = function () {
    };
    RecipeDetails.prototype.ngOnInit = function () {
        this.recipe = this.navParams.get('item');
    };
    ;
    RecipeDetails.prototype.registerBackButtonAction = function (callback, priority) {
        this.viewCtrl.dismiss();
    };
    RecipeDetails.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RecipeDetails.decorators = [
        { type: Component, args: [{
                    selector: 'page-recipe-details',
                    templateUrl: 'recipe-details.html'
                },] },
    ];
    /** @nocollapse */
    RecipeDetails.ctorParameters = [
        { type: NavController, },
        { type: RecipeService, },
        { type: AuthService, },
        { type: NavParams, },
        { type: ViewController, },
        { type: Platform, },
    ];
    return RecipeDetails;
}());
//# sourceMappingURL=recipe-details.js.map