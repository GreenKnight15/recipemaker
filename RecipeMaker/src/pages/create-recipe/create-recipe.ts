import { Component,OnInit  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { RecipeService } from '../../services/recipe-service';
import { Recipe } from '../../models/recipe';
import { YourRecipes } from '../your-recipes/your-recipes';

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

    public recipeForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];
    private id = "5845109749ada014e89fde25";

  constructor(public navCtrl: NavController, private recipeService: RecipeService, private formBuilder: FormBuilder ) {}
    
    ngOnInit(){
              this.recipeForm = new FormGroup({
            title: new FormControl('',[<any>Validators.required,<any>Validators.minLength(5)]),
            description: new FormControl('',[<any>Validators.required,<any>Validators.minLength(5)])        });  
    }
    
  ionViewDidLoad() {

  }

    save(model: Recipe, isValid: boolean): void{
      this.submitted = true;
      model.userId = this.id;
      console.log(model);
      console.log(model,isValid);
      this.recipeService.createRecipe(model);
      this.navCtrl.push(YourRecipes);
  }
    
}
