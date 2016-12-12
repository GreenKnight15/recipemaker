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
import { Storage } from '@ionic/storage';
import { User } from '../../models/user'

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

    constructor(public navCtrl: NavController, private recipeService: RecipeService,public auth: AuthService, public navParams: NavParams,public modalCtrl: ModalController ) {        
    }
    
    public recipes = []; 
    myUser:User;
    userLikes;
    
     ngOnInit(){
        this.categoryId = this.navParams.get('categoryId');
        this.categoryName = Catagories[this.categoryId].name;
        this.page = 0;
        this.perPage = 10;
        this.recipeService.lazySearchByCategory(this.categoryId ,this.page,this.perPage)
        .then((data) => { 
          this.addRecipePage(data);
      })

        this.auth.getCurrentUser(this.auth.user.user_id).then((data:User) => { 
            this.myUser = data;
            this.storage.set('myUser', JSON.stringify(data));
          });
        this.myUser = this.auth.myUser;
        this.userLikes = this.myUser.likes;        
         this.compareUserLikesToList();
     }
    
    ionViewDidLoad() {


        this.init();
    }
    
    addRecipePage(data){
        for( var i in data ) {
            if (data.hasOwnProperty(i)){
                this.recipes.push(data[i]);
            }
        }
    }
    
    init(){
    }
    
    compareUserLikesToList(){
            console.log("comparing");
         setTimeout( () => {

            for(var i=0; i< this.recipes.length; i++){
                for(var j=0; j< this.userLikes.length; j++){
                    if(this.recipes[i]._id == this.myUser.likes[j]){
                        console.log(this.recipes[i]._id);
                        console.log(this.myUser.likes[j]);

                        this.recipes[i].likedByUser = true;
                    }
                }
            }
         },200)
        
    }
    
    
    onScrollEnd(){
        this.page++;                 
        this.recipeService.lazySearchByCategory(this.categoryId,this.page,this.perPage)
        .then((data) => { 
        this.recipes.push(data);
        this.compareUserLikesToList();
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