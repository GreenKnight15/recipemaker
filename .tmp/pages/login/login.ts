import {AuthService} from '../../services/auth/auth.service';
import {Component, OnInit, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Featured } from '../featured/featured';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'

})
@Injectable()
export class Login implements OnInit{
    
    loggedIn: boolean;
    
  // We need to inject AuthService so that we can
  // use it in the view
  constructor(public auth: AuthService,public navCtrl: NavController ) { 
        this.loggedIn = this.auth.authenticated();
      this.auth = auth;

  }
  
    ngOnInit(){

    }
     ionViewDidLoad() {
         this.init();
      }    
    init(){
            this.loggedIn = this.auth.authenticated();

        console.log(this.auth.authenticated());
        if(this.auth.authenticated()){
            this.navCtrl.setRoot(Featured);
        }
    }
}