import {Component , OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'

})
export class Profile implements OnInit {
  
    myUser:User;
    
  // We need to inject AuthService so that we can
  // use it in the view
  constructor(public auth: AuthService) {}
    
    ngOnInit(){
        this.myUser = this.auth.myUser;
    }
}