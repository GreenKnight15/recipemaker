import {Component} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'

})
export class Profile {
  
  // We need to inject AuthService so that we can
  // use it in the view
  constructor(public auth: AuthService) {}
    
    
}