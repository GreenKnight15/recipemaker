import { Component,OnInit  } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
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

    constructor(public navCtrl: NavController, private recipeService: RecipeService,public auth: AuthService, public navParams: NavParams,public modalCtrl: ModalController ) {   

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
        console.log(recipePageData)
        return recipePageData;
    }
    
    
    onScrollEnd(){
        this.page++;                 
        this.recipeService.lazySearchByCategory(this.categoryId,this.page,this.perPage)
        .then((data) => {   this.recipes.push(this.compareUserLikesToList(this.parseRecipesObject(data),this.userLikes));
      })
    } 
    
    like(id,i){
        console.log(id,i);
        this.recipeService.likeRecipe(id,this.myUser.user_id);
         setTimeout( () => {
             // update your data
             this.recipes[i].like_count++;
             this.recipes[i].likedByUser = true;

         },100)
         console.log(this.recipes[i]);
    }
    
    unlike(id,i){
        console.log(id,i);
        this.recipeService.unlikeRecipe(id,this.myUser.user_id);
         setTimeout( () => {
             // update your data
             this.recipes[i].like_count--;
             this.recipes[i].likedByUser = false;

         },100)
    }
    
    
    recipeSelected(recipe:Recipe){
        let modal = this.modalCtrl.create(RecipeDetails,{item:recipe});
        modal.present();
        
    }

}