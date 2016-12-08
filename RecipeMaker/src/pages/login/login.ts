import {Component} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import { NavController } from 'ionic-angular';
import { Featured } from '../featured/featured';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

})
export class Login {
    
   loggedIn: boolean;
  // We need to inject AuthService so that we can
  // use it in the view
  constructor(public auth: AuthService,public navCtrl: NavController ) {    
  }
  
     ionViewDidLoad() {
         this.loggedIn = this.auth.authenticated();
            console.log(this.loggedIn);
            if(this.loggedIn){
                this.navCtrl.push(Featured);
            }
      }    
}