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
        
  // We need to inject AuthService so that we can
  // use it in the view
  constructor(public auth: AuthService,public navCtrl: NavController ) { 
      this.auth = auth;

  }
  
    ngOnInit(){

    }
     ionViewDidLoad() {
         this.init();
      }    
    init(){

    }
}