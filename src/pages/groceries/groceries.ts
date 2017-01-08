import { Component,OnInit  } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe-service';
import { AuthService } from '../../services/auth/auth.service';
import { GroceryList } from '../../models/groceryList'
import { GroceryListDetails } from '../groceries/groceryListDetails';

@Component({
  selector: 'page-groceries',
  templateUrl: 'groceries.html'
})


@Injectable()
export class Groceries implements OnInit{
    
    testList1:GroceryList = {
        Id:"qweqwe",
        title:"TEST 1", 
        ingredients:["1 Cup of Flour","3 Eggs"],
        recipeId:"asdasdasd",
        user_id:"asdasd"
    };
        testList2:GroceryList = {
        Id:"qweqwe",
        title:"TEST 2", 
        ingredients:["1 Cup of Flour","3 Eggs"],
        recipeId:"asdasdasd",
        user_id:"asdasd"
    };

    userGroceryLists:GroceryList[] = [this.testList1, this.testList2];
        
  constructor(public navCtrl: NavController, private recipeService: RecipeService,public auth: AuthService ) {}
    
    ngOnInit(){
    }

    ionViewDidLoad() {

    }
    
    selectGroceryList(selected){
        this.navCtrl.push(GroceryListDetails,{item:selected})
    }
    
    deleteList(i){
        this.userGroceryLists.splice(i,1);
    }
    
}