import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from './auth/auth.service';
export var RecipeService = (function () {
    function RecipeService(http, authHttp, auth) {
        this.http = http;
        this.authHttp = authHttp;
        this.auth = auth;
        this.url = 'https://dishdesigner.herokuapp.com';
        this.data = null;
    }
    RecipeService.prototype.getUserRecipes = function (id) {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.authHttp.get(_this.url + '/api/getRecipes/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    RecipeService.prototype.createRecipe = function (recipe) {
        console.log("inside createRecipe");
        console.log(recipe);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.authHttp.post(this.url + '/api/recipe', JSON.stringify(recipe), { headers: headers })
            .subscribe(function (res) {
        }, function (error) { return console.log(error); });
    };
    RecipeService.prototype.lazySearchByCategory = function (catagoryId, page, perPage) {
        var _this = this;
        console.log(catagoryId, page, perPage);
        return new Promise(function (resolve) {
            _this.authHttp.get(_this.url + '/api/category/' + catagoryId + '/' + page + '/' + perPage)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
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