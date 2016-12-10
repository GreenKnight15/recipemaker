import { Component,OnInit  } from '@angular/core';
import { NavController, Platform  } from 'ionic-angular';
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
import { User } from '../../models/user';

/*
  Generated class for the CreateRecipe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-recipe',
  templateUrl: 'create-recipe.html'
})

@Injectable()
export class CreateRecipe implements OnInit{

    public recipeForm;
    public submitted: boolean;
    public events: any[] = [];
    public platform;

  constructor(public navCtrl: NavController, private recipeService: RecipeService, private formBuilder: FormBuilder,public auth: AuthService,platform: Platform ) {
      this.platform = platform;
  }
    
    meals = Meals;
    catagories = Catagories;
    ingredients = [];
    ingredientTxt;
    stepTxt;
    steps = [];
    user:User;
    
    ngOnInit(){
            this.user = this.auth.user;
            this.recipeForm = new FormGroup({
            title: new FormControl('',[<any>Validators.required,<any>Validators.minLength(5)]),
            description: new FormControl('',[<any>Validators.required,<any>Validators.minLength(5)]),       
            meal: new FormControl('',null),
            category: new FormControl('',null)
              });  
    }
    
    addIngredient(text){
        this.ingredients.push(text);
        this.ingredientTxt = '';
    }
    deleteIngredient(item){
        for(var i = 0; i < this.ingredients.length; i++) {
            if(this.ingredients[i] == item){
                this.ingredients.splice(i, 1);
        }
      }
    }
    
    addStep(text){
        this.steps.push(text);
        this.stepTxt = '';
    }
    deleteStep(item){
        for(var i = 0; i < this.steps.length; i++) {
            if(this.steps[i] == item){
                this.steps.splice(i, 1);
            }
      }
    }
    
    cancel(){
        this.navCtrl.setRoot(Featured);
    }
  ionViewDidLoad() {

  }

    save(model: Recipe, isValid: boolean): void{
      model.ingredients = this.ingredients;
      model.steps = this.steps;
      model.userId = this.user.identities[0].user_id;
      model.dateCreated = new Date();

      console.log(model);
      if(isValid){  
        this.recipeService.createRecipe(model);
        this.navCtrl.setRoot(YourRecipes);
      }
  }
    
}
