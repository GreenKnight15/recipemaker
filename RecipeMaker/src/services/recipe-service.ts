import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Recipe } from '../models/recipe';
 
@Injectable()
export class RecipeService {
    
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getUserRecipes(id){
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:8080/api/getRecipes/' + id)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data
          resolve(this.data);
        });
    });
 
  }

  createRecipe(recipe:Recipe){
    console.log("inside createRecipe: "+recipe);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:8080/api/recipe', JSON.stringify(recipe), {headers: headers})
      .subscribe(res => {
      }, error => console.log(error)
     );
 
  }
 
  deleteRecipe(id){
 
    this.http.delete('http://localhost:8080/api/recipe/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }
 
    
    
}