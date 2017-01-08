import { Component,OnInit  } from '@angular/core';
import { NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
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
import { RecipeDetails } from '../recipe-details/recipe-details'
import { Storage } from '@ionic/storage';
import { User } from '../../models/user';

@Component({
  selector: 'page-explore-detail',
  templateUrl: 'explore-detail.html'
})

@Injectable()
export class ExploreDetail implements OnInit{
    
    page:any;
    perPage:Number;
    categoryId;
    categoryName:String;
    storage: Storage = new Storage();
    recipes = []; 
    myUser:User;
    userLikes;
    parsed;
    colCount;

    constructor(public navCtrl: NavController, private recipeService: RecipeService,public auth: AuthService, public navParams: NavParams,public modalCtrl: ModalController,public platform: Platform ) {   

    this.platform = platform;
    this.auth.getCurrentUser(this.auth.user.user_id).then((data:User) => { 
        this.storage.set('myUser', JSON.stringify(data));
    });
    this.storage.get("myUser").then((user) => {
        var val = JSON.parse(user);
        console.log(val);
        this.myUser = val;
        this.userLikes = this.myUser.likes;  

    });
    console.log(this.userLikes);
    this.categoryId = this.navParams.get('categoryId');
    this.categoryName = Catagories[this.categoryId].name;
    this.page = 0;
    this.perPage = 10;
    if(this.platform.is("Web")){
        this.colCount = 3;
    }else{
        this.colCount = 2;
    }
    
         
    this.recipeService.lazySearchByCategory(this.categoryId ,this.page,this.perPage)
        .then((data) => { 
            var parsed = this.parseRecipesObject(data);
            this.recipes = this.compareUserLikesToList(parsed,this.userLikes);
            console.log(this.recipes);

        })
    }
    
     ngOnInit(){


     }
    
    ionViewDidLoad() {

    }
    
    parseRecipesObject(data){
        var array = [];
        for( var i in data ) {
            if (data.hasOwnProperty(i)){
                array.push(data[i]);
            }
        }
        return array;
    }
    
    compareUserLikesToList(recipePageData,userLikes ){
        for(var i=0; i< recipePageData.length; i++){
            for(var j=0; j< userLikes.length; j++){
                if(recipePageData[i]._id == userLikes[j]){
                    recipePageData[i].likedByUser = true;
                    break;
                }else{
                    recipePageData[i].likedByUser = false;
                }
            }
        }
        let rowCount =0;
        var colArray = [];

        for(var i=0; i< recipePageData.length; i+=this.colCount){
            colArray[rowCount] = Array(this.colCount);
            if(recipePageData[i]){
                colArray[rowCount][0] = recipePageData[i]
            }
            if(recipePageData[i+1]){
                colArray[rowCount][1] = recipePageData[i+1]
            }
            if(this.colCount == 3 && recipePageData[i+2]){
                colArray[rowCount][2]= recipePageData[i+2]
            }
            rowCount++;
        }

        console.log(this.colCount);
        //return recipePageData;
        return colArray;
    }
    
    
    onScrollEnd(){
        this.page++;                 
        this.recipeService.lazySearchByCategory(this.categoryId,this.page,this.perPage)
        .then((data) => {   this.recipes.push(this.compareUserLikesToList(this.parseRecipesObject(data),this.userLikes));
      })
    } 
    
    like(id,i1,i2){
        console.log(id,i1,i2);
        this.recipeService.likeRecipe(id,this.myUser.user_id);
         setTimeout( () => {
             // update your data
             this.recipes[i1][i2].like_count++;
             this.recipes[i1][i2].likedByUser = true;

         },100)
         console.log(this.recipes[i1],this.recipes[i2]);
    }
    
    unlike(id,i1,i2){
        console.log(id,i1,i2);
        this.recipeService.unlikeRecipe(id,this.myUser.user_id);
         setTimeout( () => {
             // update your data
             this.recipes[i1][i2].like_count--;
             this.recipes[i1][i2].likedByUser = false;

         },100)
    }
    
    
    recipeSelected(recipe:Recipe){
        let modal = this.modalCtrl.create(RecipeDetails,{item:recipe});
        modal.present();
        
    }

}