import { Component,OnInit  } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe-service';
import { AuthService } from '../../services/auth/auth.service';
import { GroceryList } from '../../models/groceryList'
import { GroceryListDetails } from '../groceries/groceryListDetails';
import { User } from '../../models/user';

@Component({
  selector: 'page-groceries',
  templateUrl: 'groceries.html'
})


@Injectable()
export class Groceries implements OnInit{
    
  user:User;
  userGroceryLists:GroceryList[];
        
  constructor(public navCtrl: NavController, private recipeService: RecipeService,public auth: AuthService ) {}
    
    ngOnInit(){
        this.user = this.auth.user;
        this.recipeService.getUserGroceryLists(this.user.user_id)
            .then((data) => { 
              this.userGroceryLists = data;
              console.log(data);
          })
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