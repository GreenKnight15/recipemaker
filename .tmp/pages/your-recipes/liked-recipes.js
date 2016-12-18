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
export var LikedRecipes = (function () {
    function LikedRecipes(navCtrl, recipeService, auth, modalCtrl) {
        this.navCtrl = navCtrl;
        this.recipeService = recipeService;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
    }
    LikedRecipes.prototype.ionViewDidLoad = function () {
    };
    LikedRecipes.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.user;
        this.recipeService.getUserLikedRecipes(this.user.user_id)
            .then(function (data) {
            _this.userRecipes = data;
        });
    };
    ;
    LikedRecipes.prototype.recipeSelected = function (recipe) {
        var modal = this.modalCtrl.create(RecipeDetails, { item: recipe });
        modal.present();
    };
    LikedRecipes.decorators = [
        { type: Component, args: [{
                    selector: 'page-liked-recipes',
                    templateUrl: 'liked-recipes.html'
                },] },
    ];
    /** @nocollapse */
    LikedRecipes.ctorParameters = [
        { type: NavController, },
        { type: RecipeService, },
        { type: AuthService, },
        { type: ModalController, },
    ];
    return LikedRecipes;
}());
//# sourceMappingURL=liked-recipes.js.map