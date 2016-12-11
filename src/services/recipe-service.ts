import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthHttp} from 'angular2-jwt';
import {AuthService} from './auth/auth.service';
import { Recipe } from '../models/recipe';
 
@Injectable()
export class RecipeService {
    
  data: any;
 
  constructor(private http: Http, private authHttp: AuthHttp, public auth: AuthService) {
    this.data = null;
  }
 
  getUserRecipes(id){
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.authHttp.get('http://localhost:8080/api/getRecipes/' + id)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data
          resolve(this.data);
        });
    });
  }

  createRecipe(recipe:Recipe){
    console.log("inside createRecipe");
    console.log(recipe);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.authHttp.post('http://localhost:8080/api/recipe', JSON.stringify(recipe), {headers: headers})
      .subscribe(res => {
      }, error => console.log(error)
     );
  }
    
  lazySearchByCategory(catagoryId, page, perPage){
      console.log(catagoryId, page, perPage);
    return new Promise(resolve => {
        this.authHttp.get('http://localhost:8080/api/category/'+catagoryId+'/'+page+'/'+perPage)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data
          resolve(this.data);
        });
    });
  }
    
    
 
  deleteRecipe(id){
 
    this.authHttp.delete('http://localhost:8080/api/recipe/' + id).subscribe((res) => {
      console.log(res.json());
    },error => console.log(error));    
 
  }
 
    
    
}