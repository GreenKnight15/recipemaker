import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { RecipeService } from '../../services/recipe-service';
import { AuthService } from '../../services/auth/auth.service';
import { Catagories } from '../../models/catagories';
import { RecipeDetails } from '../recipe-details/recipe-details';
export var ExploreDetail = (function () {
    function ExploreDetail(navCtrl, recipeService, auth, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.recipeService = recipeService;
        this.auth = auth;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.recipes = [];
    }
    ExploreDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryId = this.navParams.get('categoryId');
        this.categoryName = Catagories[this.categoryId].name;
        this.page = 0;
        this.perPage = 10;
        this.recipeService.lazySearchByCategory(this.categoryId, this.page, this.perPage)
            .then(function (data) {
            _this.recipes.push(data);
        });
    };
    ExploreDetail.prototype.onScrollEnd = function () {
        var _this = this;
        this.page++;
        this.recipeService.lazySearchByCategory(this.categoryId, this.page, this.perPage)
            .then(function (data) {
            _this.recipes.push(data);
        });
    };
    ExploreDetail.prototype.recipeSelected = function (recipe) {
        var modal = this.modalCtrl.create(RecipeDetails, { item: recipe });
        modal.present();
    };
    ExploreDetail.decorators = [
        { type: Component, args: [{
                    selector: 'page-explore-detail',
                    templateUrl: 'explore-detail.html'
                },] },
        { type: Injectable },
    ];
    /** @nocollapse */
    ExploreDetail.ctorParameters = [
        { type: NavController, },
        { type: RecipeService, },
        { type: AuthService, },
        { type: NavParams, },
        { type: ModalController, },
    ];
    return ExploreDetail;
}());
//# sourceMappingURL=explore-detail.js.map