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

  public userRecipes = []; 
    
  ionViewDidLoad() {
  }
    
    
    ngOnInit(){
      this.user = this.auth.user
 
      this.recipeService.getUserRecipes(this.user.user_id)
        .then((data) => { 
          this.userRecipes = data;
      })

    };
    
    recipeSelected(recipe:Recipe){
        let modal = this.modalCtrl.create(RecipeDetails,{item:recipe});
        modal.present();
        
    }
    
    
    
}
