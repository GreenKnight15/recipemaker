import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipeService } from '../../services/recipe-service';
//import { Recipe } from '../../models/recipe';
import { User } from '../../models/user';
import {AuthService} from '../..//services/auth/auth.service';
import { Recipe } from '../../models/recipe';
import { ModalController } from 'ionic-angular';
import { RecipeDetails } from '../recipe-details/recipe-details'
import { LikedRecipes } from '../your-recipes/liked-recipes'
import { CreatedRecipes } from '../your-recipes/created-recipes'

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


    tab1Root = CreatedRecipes;
    tab2Root = LikedRecipes;
    
  constructor(public navCtrl: NavController,private recipeService: RecipeService, public auth: AuthService,public modalCtrl: ModalController) {

  }
    
    switchTabs() {
      this.navCtrl.parent.select(2);
    }
    
  ionViewDidLoad() {

  }
    

    ngOnInit(){

    };
    

    
    
    
}
