import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthHttp} from 'angular2-jwt';
import {AuthService} from './auth/auth.service';
import { Recipe } from '../models/recipe';
import { URL } from '../app/url';
import { GroceryList } from '../models/groceryList';

@Injectable()
export class RecipeService {
    
  data: any;
  url = URL;

  constructor(private http: Http, private authHttp: AuthHttp, public auth: AuthService) {
    this.data = null ;
  }
 
  public getUserRecipes(id){
      console.log('getUserRecipes:'+id);
    return new Promise(resolve => {
      this.authHttp.get(this.url+'/api/getRecipes/' + id)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data)
          resolve(data);
        });
    });
  }

  public getUserLikedRecipes(id){
    console.log('getUserLikedRecipes:'+id);
    return new Promise(resolve => {
      this.authHttp.get(this.url+'/api/getLikedRecipes/' + id)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data)
          resolve(data);
        });
    });
  }

  public saveRecipe(recipe:Recipe, callback){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.authHttp.post(this.url+'/api/recipe', JSON.stringify(recipe), {headers: headers})
      .subscribe(res => {
      }, error => console.log(error)
     );
  }

  public likeRecipe(recipeId,userId){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.authHttp.post(this.url+'/api/recipe/like', {RecipeId:recipeId,UserId:userId}, {headers: headers})
      .subscribe(res => {
      }, error => console.log(error)
     );
  }

  public unlikeRecipe(recipeId,userId){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.authHttp.post(this.url+'/api/recipe/unlike', {RecipeId:recipeId,UserId:userId}, {headers: headers})
      .subscribe(res => {
      }, error => console.log(error)
     );
  }
    
  lazySearchByCategory(catagoryId, page, perPage){
      return new Promise(resolve => {
      this.authHttp.get(this.url+'/api/category/'+catagoryId+'/'+page+'/'+perPage)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
 
  deleteRecipe(id){
    this.authHttp.delete(this.url+'/api/recipe/' + id).subscribe((res) => {
      console.log(res.json());
    },error => console.log(error));    
 
  }

  saveGroceryList(recipe:Recipe,callback){
    let list:GroceryList = {
        title:recipe.title, 
        ingredients:recipe.ingredients,
        recipeId:recipe.Id,
        user_id:recipe.userId
    };
      
   let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.authHttp.post(this.url+'/api/grocery', JSON.stringify(list), {headers: headers})
      .subscribe(res => {
      }, error => console.log(error)
     );
  }
 
  public getUserGroceryLists(id){
    console.log('getUserGroceryLists:'+id);
    return new Promise(resolve => {
      this.authHttp.get(this.url+'/api/getGroceryLists/' + id)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data)
          resolve(data);
        });
    });
  }
    
 public deleteGroceryList(id){
        this.authHttp.delete(this.url+'/api/grocery/' + id ).subscribe((res) => {
          console.log(res.json());
        },error => console.log(error));    
 
 }

    
}