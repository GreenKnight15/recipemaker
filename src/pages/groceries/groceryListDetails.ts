import { Component,OnInit  } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe-service';
import { AuthService } from '../../services/auth/auth.service';
import { GroceryList } from '../../models/groceryList';

@Component({
  selector: 'page-groceryListDetails',
  templateUrl: 'groceryListDetails.html'
})


@Injectable()
export class GroceryListDetails implements OnInit{

    groceryList:GroceryList;
    ingredients:string[];
    listTitle:String;
    
  constructor(public navCtrl: NavController, private recipeService: RecipeService,public auth: AuthService, public navParams: NavParams, ) {}
    
    ngOnInit(){
        this.groceryList = this.navParams.get("item");
        this.ingredients = this.groceryList.ingredients;
        this.listTitle = this.groceryList.title;
    }

    ionViewDidLoad() {

    }
    
}