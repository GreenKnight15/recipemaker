import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { RecipeService } from '../../services/recipe-service';
import { AuthService } from '../../services/auth/auth.service';
import { Catagories } from '../../models/catagories';
import { ExploreDetail } from '../explore/explore-detail';
export var Explore = (function () {
    function Explore(navCtrl, recipeService, auth) {
        this.navCtrl = navCtrl;
        this.recipeService = recipeService;
        this.auth = auth;
        this.catagories = Catagories;
    }
    Explore.prototype.ngOnInit = function () {
    };
    Explore.prototype.ionViewDidLoad = function () {
    };
    Explore.prototype.selectCategory = function (id) {
        this.navCtrl.push(ExploreDetail, { categoryId: id });
    };
    Explore.decorators = [
        { type: Component, args: [{
                    selector: 'page-explore',
                    templateUrl: 'explore.html'
                },] },
        { type: Injectable },
    ];
    /** @nocollapse */
    Explore.ctorParameters = [
        { type: NavController, },
        { type: RecipeService, },
        { type: AuthService, },
    ];
    return Explore;
}());
//# sourceMappingURL=explore.js.map