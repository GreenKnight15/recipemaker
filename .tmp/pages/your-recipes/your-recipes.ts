import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipeService } from '../../services/recipe-service';
//import { Recipe } from '../../models/recipe';
import { User } from '../../models/user';
import {AuthService} from '../..//services/auth/auth.service';
import { Recipe } from '../../models/recipe';
import { ModalController } from 'ionic-angular';
import { RecipeDetails } from '../recipe-details/recipe-details'
/*
  Generated class for the YourRecipes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-your-recipes',
  templateUrl: 'your-recipes.html'
})
export class YourRecipes implements OnInit{

    user:User;
    r:Recipe;
    
  constructor(public navCtrl: NavController,private recipeService: RecipeService, public auth: AuthService,public modalCtrl: ModalController) {}

  public id = "5845109749ada014e89fde25";    
  public userRecipes = []; 
    
    
  ionViewDidLoad() {
  }
    
    
    ngOnInit(){
      this.user = this.auth.user
      
      this.r = {
        Id:"qweqweqwe",
        category:[2,1],
        title:"Stuff on a bun",
        description:"better stuff on a bun than the other guy", 
        //userId:this.user.user_id,
        userId:'5845109749ada014e89fde25',
        ingredients:["stuff","bun"],
        steps:["put stuff on a bun"],
        meal:[1,2],
        imageUrl:"http://www.hutui6.com/data/out/75/68208733-food-wallpapers.jpg",
        reviews:[],
        //userImg:this.user.picture,
        userImg:"http://www.hutui6.com/data/out/75/68208733-food-wallpapers.jpg",
        likes:["123123123123","123123123"],
        dateCreated:null
    
    };
      
      this.recipeService.getUserRecipes(this.user.identities[0].user_id)
        .then((data) => { 
          this.userRecipes = data;
      })
//      
//    this.userRecipes.push(this.r);
//    console.log(this.userRecipes);
    };
    
    recipeSelected(recipe:Recipe){
        let modal = this.modalCtrl.create(RecipeDetails,{item:recipe});
        modal.present();
        
    }
    
    
    
}
