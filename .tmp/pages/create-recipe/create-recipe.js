import { Component } from '@angular/core';
import { NavController, Platform, ToastController, ActionSheetController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { RecipeService } from '../../services/recipe-service';
import { Meals } from '../../models/meals';
import { Featured } from '../featured/featured';
import { AuthService } from '../../services/auth/auth.service';
import { Catagories } from '../../models/catagories';
import { Camera, ImagePicker } from 'ionic-native';
/*
  Generated class for the CreateRecipe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var CreateRecipe = (function () {
    function CreateRecipe(navCtrl, recipeService, formBuilder, auth, platform, toastCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.recipeService = recipeService;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
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
    CreateRecipe.prototype.addPhoto = function () {
        this.presentPhotoActionSheet();
    };
    CreateRecipe.prototype.cancel = function () {
        this.navCtrl.setRoot(Featured);
    };
    CreateRecipe.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Recipe was added successfully',
            duration: 3000
        });
        toast.present();
    };
    CreateRecipe.prototype.takePicture = function () {
        var _this = this;
        Camera.getPicture({
            destinationType: Camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            saveToPhotoAlbum: true
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.Image = "data:image/jpeg;base64," + imageData;
            console.log(_this.Image);
        }, function (err) {
            console.log(err);
        });
    };
    CreateRecipe.prototype.openWebFiles = function () {
    };
    CreateRecipe.prototype.openGallery = function () {
        // if(this.platform.hasReadPermission() || this.platform.is('ios')){
        ImagePicker.getPictures({
            maximumImagesCount: 1,
            quality: 100
        }).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, function (err) { });
        // }
        // else if(this.platform.is('android')){
        //     this.platform.requestReadPermission()
        // }
    };
    CreateRecipe.prototype.presentPhotoActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Upload a Photo',
            buttons: [
                {
                    text: 'Camera',
                    role: 'destructive',
                    handler: function () {
                        _this.takePicture();
                    }
                }, {
                    text: 'Gallery',
                    handler: function () {
                        _this.openGallery();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    CreateRecipe.prototype.save = function (model, isValid) {
        model.ingredients = this.ingredients;
        model.steps = this.steps;
        model.userId = this.user.user_id;
        model.userImg = this.user.picture;
        model.dateCreated = new Date();
        model.like_count = 0;
        model.username = this.user.nickname;
        console.log(model);
        if (isValid) {
            this.recipeService.saveRecipe(model, function () {
                var _this = this;
                //pop up saved
                //clear fields
                this.presentToast();
                setTimeout(function () {
                    console.log('saved');
                    _this.ingredients = [];
                    _this.ingredientTxt = '';
                    _this.stepTxt = '';
                    _this.steps = [];
                    _this.recipeForm = null;
                }, 100);
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
        { type: ToastController, },
        { type: ActionSheetController, },
    ];
    return CreateRecipe;
}());
//# sourceMappingURL=create-recipe.js.map