import { Component,OnInit } from '@angular/core';
import { NavController,NavParams,Platform  } from 'ionic-angular';
import { RecipeService } from '../../services/recipe-service';
//import { Recipe } from '../../models/recipe';
import { User } from '../../models/user';
import {AuthService} from '../..//services/auth/auth.service';
import { Recipe } from '../../models/recipe';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-recipe-details',
  templateUrl: 'recipe-details.html'
})
export class RecipeDetails implements OnInit{

    user:User;
    recipe:Recipe;
    
  constructor(public navCtrl: NavController,private recipeService: RecipeService, public auth: AuthService, public navParams: NavParams, public viewCtrl: ViewController,platform: Platform) {}

  
    ionViewDidLoad() {
    }
    
    ngOnInit(){
        this.recipe = this.navParams.get('item');
    }; 
    
    registerBackButtonAction(callback, priority){
        this.viewCtrl.dismiss();
    }
 
    dismiss() {
       this.viewCtrl.dismiss();
     }
    
}