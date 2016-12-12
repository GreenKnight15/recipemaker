import { Component,OnInit  } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
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
import { RecipeDetails } from '../recipe-details/recipe-details'

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
    
    constructor(public navCtrl: NavController, private recipeService: RecipeService,public auth: AuthService, public navParams: NavParams,public modalCtrl: ModalController ) {        
    }
    
    public recipes = []; 
    myUser;
    userLikes;
    
     ngOnInit(){
        this.categoryId = this.navParams.get('categoryId');
        this.categoryName = Catagories[this.categoryId].name;
        this.page = 0;
        this.perPage = 10;
         this.recipeService.lazySearchByCategory(this.categoryId ,this.page,this.perPage)
        .then((data) => { 
          this.recipes.push(data);
      })
     }
    
    ionViewDidLoad() {
        this.init();
    }
    
    init(){
        this.myUser = this.auth.myUser;
        this.userLikes = this.myUser.likes;
        console.log(this.userLikes);

    }
    
    compareUserLikesToList(listIndex){
        for(var i=0; i< this.recipes[listIndex]; i++){
            for(var j=0; j< this.userLikes; j++){
                if(this.recipes[listIndex][i]._id === this.userLikes[j]){
                    this.recipes[listIndex][i].likedByUser = true;
                }
            }
        }
    }
    
    onScrollEnd(){
        this.page++;                 
        this.recipeService.lazySearchByCategory(this.categoryId,this.page,this.perPage)
        .then((data) => { 
        this.recipes.push(data);
        this.compareUserLikesToList(this.page);
      })
    } 
    
    like(id,index1,index2){
        console.log(id,index1,index2);
        this.recipeService.likeRecipe(id,this.myUser.user_id);
         setTimeout( () => {
             // update your data
             this.recipes[index1][index2].like_count++;
             this.recipes[index1][index2].likedByUser = true;

         },100)
         console.log(this.recipes[index1][index2]);
    }
    
    unlike(id,index1,index2){
        console.log(id,index1,index2);
        this.recipeService.unlikeRecipe(id,this.myUser.user_id);
         setTimeout( () => {
             // update your data
             this.recipes[index1][index2].like_count--;
             this.recipes[index1][index2].likedByUser = false;

         },100)
    }
    
    
    recipeSelected(recipe:Recipe){
        let modal = this.modalCtrl.create(RecipeDetails,{item:recipe});
        modal.present();
        
    }

}