import { Component,OnInit  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe-service';
import {AuthService} from '../../services/auth/auth.service';
import { Catagories } from '../../models/catagories';
import { ExploreDetail } from '../explore/explore-detail';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})


@Injectable()
export class Explore implements OnInit{
    
catagories = Catagories;
    
  constructor(public navCtrl: NavController, private recipeService: RecipeService,public auth: AuthService ) {}
    
    ngOnInit(){
    
    }

    ionViewDidLoad() {

    }
    
    selectCategory(id){
        this.navCtrl.push(ExploreDetail,{categoryId:id})
    }
    

}