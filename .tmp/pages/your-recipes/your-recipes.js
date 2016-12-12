import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipeService } from '../../services/recipe-service';
import { AuthService } from '../..//services/auth/auth.service';
import { ModalController } from 'ionic-angular';
import { RecipeDetails } from '../recipe-details/recipe-details';
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
    }
    YourRecipes.prototype.ionViewDidLoad = function () {
    };
    YourRecipes.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.user;
        this.recipeService.getUserRecipes(this.user.user_id)
            .then(function (data) {
            _this.userRecipes = data;
        });
    };
    ;
    YourRecipes.prototype.recipeSelected = function (recipe) {
        var modal = this.modalCtrl.create(RecipeDetails, { item: recipe });
        modal.present();
    };
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