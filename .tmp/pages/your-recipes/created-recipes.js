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
export var CreatedRecipes = (function () {
    function CreatedRecipes(navCtrl, recipeService, auth, modalCtrl) {
        this.navCtrl = navCtrl;
        this.recipeService = recipeService;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
    }
    CreatedRecipes.prototype.ionViewDidLoad = function () {
    };
    CreatedRecipes.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.auth.user;
        this.recipeService.getUserRecipes(this.user.user_id)
            .then(function (data) {
            _this.userRecipes = data;
        });
    };
    ;
    CreatedRecipes.prototype.recipeSelected = function (recipe) {
        var modal = this.modalCtrl.create(RecipeDetails, { item: recipe });
        modal.present();
    };
    CreatedRecipes.decorators = [
        { type: Component, args: [{
                    selector: 'page-created-recipes',
                    templateUrl: 'created-recipes.html'
                },] },
    ];
    /** @nocollapse */
    CreatedRecipes.ctorParameters = [
        { type: NavController, },
        { type: RecipeService, },
        { type: AuthService, },
        { type: ModalController, },
    ];
    return CreatedRecipes;
}());
//# sourceMappingURL=created-recipes.js.map