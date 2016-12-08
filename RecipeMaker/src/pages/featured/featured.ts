import { Component,OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';

@Component({
  selector: 'page-featured',
  templateUrl: 'featured.html'
})
export class Featured implements OnInit {

    userPic:String;
    user:Object;
    
  constructor(public navCtrl: NavController,public auth: AuthService) {
    
  }
    
    ngOnInit(){
        this.user = this.auth.user
    }
    
        ionViewDidLoad() {
        }
}
