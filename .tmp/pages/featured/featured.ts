import { Component,OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import { NavController, MenuController  } from 'ionic-angular';
import { User } from '../../models/user';


@Component({
  selector: 'page-featured',
  templateUrl: 'featured.html'
})
export class Featured implements OnInit {

    user:User;
    myUser:User;
    userName:String;
    authenticated;
  constructor(public navCtrl: NavController,public auth: AuthService, public menuCtrl: MenuController) {
    if(this.auth.authenticated()){
        this.auth.getCurrentUser(this.auth.user.user_id);
        this.myUser = this.auth.myUser;
        this.authenticated = this.auth.authenticated();
    }
  }
    
    ngOnInit(){

    }
    
    ionViewDidLoad() {
        this.init();
    }
    

    
    init(){
        this.myUser = this.auth.myUser;
        this.userName = this.myUser.name;
        console.log(this.authenticated);


    }
}
