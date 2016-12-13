import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { RecipeService } from '../../services/recipe-service';
import { AuthService } from '../../services/auth/auth.service';
import { Catagories } from '../../models/catagories';
import { RecipeDetails } from '../recipe-details/recipe-details';
import { Storage } from '@ionic/storage';
export var ExploreDetail = (function () {
    function ExploreDetail(navCtrl, recipeService, auth, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.recipeService = recipeService;
        this.auth = auth;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = new Storage();
        this.recipes = [];
    }
    ExploreDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryId = this.navParams.get('categoryId');
        this.categoryName = Catagories[this.categoryId].name;
        this.page = 0;
        this.perPage = 10;
        this.auth.getCurrentUser(this.auth.user.user_id).then(function (data) {
            _this.myUser = data;
            _this.storage.set('myUser', JSON.stringify(data));
        });
        this.myUser = this.auth.myUser;
        this.userLikes = this.myUser.likes;
        this.recipeService.lazySearchByCategory(this.categoryId, this.page, this.perPage)
            .then(function (data) {
            setTimeout(function () {
                _this.recipes = _this.compareUserLikesToList(_this.parseRecipesObject(data), _this.userLikes);
            }, 100);
        });
    };
    ExploreDetail.prototype.ionViewDidLoad = function () {
        this.init();
    };
    ExploreDetail.prototype.parseRecipesObject = function (data) {
        var array = [];
        for (var i in data) {
            if (data.hasOwnProperty(i)) {
                array.push(data[i]);
            }
        }
        return array;
    };
    ExploreDetail.prototype.init = function () {
    };
    ExploreDetail.prototype.compareUserLikesToList = function (recipePageData, userLikes) {
        for (var i = 0; i < recipePageData.length; i++) {
            for (var j = 0; j < userLikes.length; j++) {
                if (recipePageData[i]._id == userLikes[j]) {
                    recipePageData[i].likedByUser = true;
                }
                else {
                    recipePageData[i].likedByUser = false;
                }
            }
        }
        return recipePageData;
    };
    ExploreDetail.prototype.onScrollEnd = function () {
        var _this = this;
        this.page++;
        this.recipeService.lazySearchByCategory(this.categoryId, this.page, this.perPage)
            .then(function (data) {
            _this.recipes.push(_this.compareUserLikesToList(_this.parseRecipesObject(data), _this.userLikes));
        });
    };
    ExploreDetail.prototype.like = function (id, i) {
        var _this = this;
        console.log(id, i);
        this.recipeService.likeRecipe(id, this.myUser.user_id);
        setTimeout(function () {
            // update your data
            _this.recipes[i].like_count++;
            _this.recipes[i].likedByUser = true;
        }, 100);
        console.log(this.recipes[i]);
    };
    ExploreDetail.prototype.unlike = function (id, i) {
        var _this = this;
        console.log(id, i);
        this.recipeService.unlikeRecipe(id, this.myUser.user_id);
        setTimeout(function () {
            // update your data
            _this.recipes[i].like_count--;
            _this.recipes[i].likedByUser = false;
        }, 100);
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