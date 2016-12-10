import { Component,OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';

@Component({
  selector: 'page-featured',
  templateUrl: 'featured.html'
})
export class Featured implements OnInit {

    user:User;
    myUser:User;
    userName:String;
  constructor(public navCtrl: NavController,public auth: AuthService) {
    
  }
    
    ngOnInit(){
        this.user = this.auth.user
        this.myUser = this.auth.myUser;

    }
    
    ionViewDidLoad() {
        this.init();
    }
    
    init(){
        this.myUser = this.auth.myUser;
        this.userName = this.myUser.name;
        console.log(this.myUser);
    }
}
