import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthHttp} from 'angular2-jwt';
import {AuthService} from './auth/auth.service';
import { Recipe } from '../models/recipe';
 
@Injectable()
export class RecipeService {
    
  data: any;
  url = 'https://dishdesigner.herokuapp.com';

  constructor(private http: Http, private authHttp: AuthHttp, public auth: AuthService) {
    this.data = null;
  }
 
  getUserRecipes(id){
    return new Promise(resolve => {
      this.authHttp.get(this.url+'/api/getRecipes/' + id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  createRecipe(recipe:Recipe, callback){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.authHttp.post(this.url+'/api/recipe', JSON.stringify(recipe), {headers: headers})
      .subscribe(res => {
      }, error => console.log(error)
     );
  }
    
  lazySearchByCategory(catagoryId, page, perPage){
      console.log(catagoryId, page, perPage);
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
 
    
    
}