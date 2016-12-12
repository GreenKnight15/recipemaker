import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { RecipeService } from '../../services/recipe-service';
import { Meals } from '../../models/meals';
import { Featured } from '../featured/featured';
import { AuthService } from '../../services/auth/auth.service';
import { Catagories } from '../../models/catagories';
/*
  Generated class for the CreateRecipe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var CreateRecipe = (function () {
    function CreateRecipe(navCtrl, recipeService, formBuilder, auth, platform) {
        this.navCtrl = navCtrl;
        this.recipeService = recipeService;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.events = [];
        this.meals = Meals;
        this.catagories = Catagories;
        this.ingredients = [];
        this.steps = [];
        this.platform = platform;
    }
    CreateRecipe.prototype.ngOnInit = function () {
        this.user = this.auth.user;
        this.recipeForm = new FormGroup({
            title: new FormControl('', [Validators.required, Validators.minLength(5)]),
            description: new FormControl('', [Validators.required, Validators.minLength(5)]),
            meal: new FormControl('', null),
            category: new FormControl('', null)
        });
    };
    CreateRecipe.prototype.addIngredient = function (text) {
        this.ingredients.push(text);
        this.ingredientTxt = '';
    };
    CreateRecipe.prototype.deleteIngredient = function (item) {
        for (var i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i] == item) {
                this.ingredients.splice(i, 1);
            }
        }
    };
    CreateRecipe.prototype.addStep = function (text) {
        this.steps.push(text);
        this.stepTxt = '';
    };
    CreateRecipe.prototype.deleteStep = function (item) {
        for (var i = 0; i < this.steps.length; i++) {
            if (this.steps[i] == item) {
                this.steps.splice(i, 1);
            }
        }
    };
    CreateRecipe.prototype.cancel = function () {
        this.navCtrl.setRoot(Featured);
    };
    CreateRecipe.prototype.ionViewDidLoad = function () {
    };
    CreateRecipe.prototype.save = function (model, isValid) {
        model.ingredients = this.ingredients;
        model.steps = this.steps;
        model.userId = this.user.user_id;
        model.dateCreated = new Date();
        console.log(model);
        if (isValid) {
            this.recipeService.createRecipe(model, function () {
                //pop up saved
                //clear fields
                console.log('saved');
                this.ingredients = [];
                this.ingredientTxt = '';
                this.stepTxt = '';
                this.steps = [];
                this.recipeForm = null;
            });
        }
    };
    CreateRecipe.decorators = [
        { type: Component, args: [{
                    selector: 'page-create-recipe',
                    templateUrl: 'create-recipe.html'
                },] },
        { type: Injectable },
    ];
    /** @nocollapse */
    CreateRecipe.ctorParameters = [
        { type: NavController, },
        { type: RecipeService, },
        { type: FormBuilder, },
        { type: AuthService, },
        { type: Platform, },
    ];
    return CreateRecipe;
}());
//# sourceMappingURL=create-recipe.js.map