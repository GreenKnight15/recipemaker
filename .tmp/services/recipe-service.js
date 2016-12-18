import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from './auth/auth.service';
import { URL } from '../app/url';
export var RecipeService = (function () {
    function RecipeService(http, authHttp, auth) {
        this.http = http;
        this.authHttp = authHttp;
        this.auth = auth;
        this.url = URL;
        this.data = null;
    }
    RecipeService.prototype.getUserRecipes = function (id) {
        var _this = this;
        console.log('getUserRecipes:' + id);
        return new Promise(function (resolve) {
            _this.authHttp.get(_this.url + '/api/getRecipes/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                resolve(data);
            });
        });
    };
    RecipeService.prototype.getUserLikedRecipes = function (id) {
        var _this = this;
        console.log('getUserLikedRecipes:' + id);
        return new Promise(function (resolve) {
            _this.authHttp.get(_this.url + '/api/getLikedRecipes/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                resolve(data);
            });
        });
    };
    RecipeService.prototype.saveRecipe = function (recipe, callback) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.authHttp.post(this.url + '/api/recipe', JSON.stringify(recipe), { headers: headers })
            .subscribe(function (res) {
        }, function (error) { return console.log(error); });
    };
    RecipeService.prototype.likeRecipe = function (recipeId, userId) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.authHttp.post(this.url + '/api/recipe/like', { RecipeId: recipeId, UserId: userId }, { headers: headers })
            .subscribe(function (res) {
        }, function (error) { return console.log(error); });
    };
    RecipeService.prototype.unlikeRecipe = function (recipeId, userId) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.authHttp.post(this.url + '/api/recipe/unlike', { RecipeId: recipeId, UserId: userId }, { headers: headers })
            .subscribe(function (res) {
        }, function (error) { return console.log(error); });
    };
    RecipeService.prototype.lazySearchByCategory = function (catagoryId, page, perPage) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.authHttp.get(_this.url + '/api/category/' + catagoryId + '/' + page + '/' + perPage)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    RecipeService.prototype.deleteRecipe = function (id) {
        this.authHttp.delete(this.url + '/api/recipe/' + id).subscribe(function (res) {
            console.log(res.json());
        }, function (error) { return console.log(error); });
    };
    RecipeService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RecipeService.ctorParameters = [
        { type: Http, },
        { type: AuthHttp, },
        { type: AuthService, },
    ];
    return RecipeService;
}());
//# sourceMappingURL=recipe-service.js.map