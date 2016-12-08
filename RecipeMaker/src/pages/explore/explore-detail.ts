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
    
     ngOnInit(){
         this.categoryId = this.navParams.get('categoryId');
         this.categoryName = Catagories[this.categoryId].name;

         this.page = 0;
         this.perPage = 10;
        
       this.recipeService.lazySearchByCategory(this.categoryId ,this.page,this.perPage)
        .then((data) => { 
          this.recipes.push(data);
      })
         
        console.log(this.recipes);
     }
    
    onScrollEnd(){
        this.page++;                 
        this.recipeService.lazySearchByCategory(this.categoryId,this.page,this.perPage)
        .then((data) => { 
        this.recipes.push(data);
      })
    } 
    
    
    recipeSelected(recipe:Recipe){
        let modal = this.modalCtrl.create(RecipeDetails,{item:recipe});
        modal.present();
        
    }

}