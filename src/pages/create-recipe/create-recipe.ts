import { Component,OnInit  } from '@angular/core';
import { NavController, Platform, ToastController, ActionSheetController   } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { RecipeService } from '../../services/recipe-service';
import { Recipe } from '../../models/recipe';
import { YourRecipes } from '../your-recipes/your-recipes';
import { Meal } from '../../models/meal';
import { Meals } from '../../models/meals';
import { Featured } from '../featured/featured';
import { AuthService} from '../../services/auth/auth.service';
import { Catagory } from '../../models/catagory';
import { Catagories } from '../../models/catagories';
import { User } from '../../models/user';
import {Camera, ImagePicker, File,FileChooser } from 'ionic-native';

/*
  Generated class for the CreateRecipe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-recipe',
  templateUrl: 'create-recipe.html'
})

@Injectable()
export class CreateRecipe implements OnInit{

    public recipeForm;
    public submitted: boolean;
    public events: any[] = [];
    public platform;
    public Image: string;


  constructor(public navCtrl: NavController, private recipeService: RecipeService, private formBuilder: FormBuilder,public auth: AuthService,platform: Platform,public toastCtrl: ToastController, public actionSheetCtrl: ActionSheetController ) {
      this.platform = platform;
  }
    
    meals = Meals;
    catagories = Catagories;
    ingredients = [];
    ingredientTxt;
    stepTxt;
    steps = [];
    user:User;
    
    ngOnInit(){
            this.user = this.auth.user;
            this.recipeForm = new FormGroup({
            title: new FormControl('',[<any>Validators.required,<any>Validators.minLength(5)]),
            description: new FormControl('',[<any>Validators.required,<any>Validators.minLength(5)]),       
            meal: new FormControl('',null),
            category: new FormControl('',null)
              });  
    }
    
    addIngredient(text){
        this.ingredients.push(text);
        this.ingredientTxt = '';
    }
    deleteIngredient(item){
        for(var i = 0; i < this.ingredients.length; i++) {
            if(this.ingredients[i] == item){
                this.ingredients.splice(i, 1);
        }
      }
    }
    
    addStep(text){
        this.steps.push(text);
        this.stepTxt = '';
    }
    deleteStep(item){
        for(var i = 0; i < this.steps.length; i++) {
            if(this.steps[i] == item){
                this.steps.splice(i, 1);
            }
      }
    }
    
    addPhoto(){
        this.presentPhotoActionSheet();
    }
    
    cancel(){
        this.navCtrl.setRoot(Featured);
    }
    
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Recipe was added successfully',
      duration: 3000
    });
    toast.present();
  }
    
takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000,
        saveToPhotoAlbum:true
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.Image = "data:image/jpeg;base64," + imageData;
        console.log(this.Image);
    }, (err) => {
        console.log(err);
    });
  }
    
  openWebFiles(){

  }

    openGallery(){
    // if(this.platform.hasReadPermission() || this.platform.is('ios')){
            ImagePicker.getPictures({
                maximumImagesCount:1,
                quality:100
            }).then((results) => {
              for (var i = 0; i < results.length; i++) {
                  console.log('Image URI: ' + results[i]);
              }
            }, (err) => { });
         // }
       // else if(this.platform.is('android')){
       //     this.platform.requestReadPermission()
       // }
    }

    
  presentPhotoActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Upload a Photo',
      buttons: [
        {
          text: 'Camera',
          role: 'destructive',
          handler: () => {
            this.takePicture() 
          }
        },{
          text: 'Gallery',
          handler: () => {
            this.openGallery();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
  actionSheet.present();

  }

    save(model: Recipe, isValid: boolean): void{
      model.ingredients = this.ingredients;
      model.steps = this.steps;
      model.userId = this.user.user_id;
      model.dateCreated = new Date();
      model.like_count = 0;
      console.log(model);
      if(isValid){  
        this.recipeService.saveRecipe(model,function(){
        //pop up saved
        //clear fields
        this.presentToast();
         setTimeout( () => {
            console.log('saved');
            this.ingredients = [];
            this.ingredientTxt = '';
            this.stepTxt ='';
            this.steps = [];
            this.recipeForm = null; 
         },100)
        });
      }
  }
    
}
