import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipeService } from '../../services/recipe-service';
//import { Recipe } from '../../models/recipe';

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

  constructor(public navCtrl: NavController,private recipeService: RecipeService) {}

  public id = "5845109749ada014e89fde25";    
  public userRecipes; 
    
  ionViewDidLoad() {
      
  }
    
    ngOnInit(){
      this.recipeService.getUserRecipes(this.id)
        .then((data) => { 
          console.log(data);
          this.userRecipes = data;
      }
    )};  
    
}
