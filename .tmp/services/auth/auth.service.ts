import { Storage } from '@ionic/storage';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
//import { Auth0Vars } from '../../auth0-variables';
import { User } from '../../models/user'
// Avoid name not found warnings
declare var Auth0: any;
declare var Auth0Lock: any;
import { Http, Headers } from '@angular/http';
import { URL } from '../../app/url';

@Injectable()
export class AuthService {
  url = URL;
  jwtHelper: JwtHelper = new JwtHelper();
  auth0 = new Auth0({clientID: 'umeSwTUlyXl4YSxFWjSNr6T83DpqkzHt', domain: 'recipemaker.auth0.com' });
  lock = new Auth0Lock('umeSwTUlyXl4YSxFWjSNr6T83DpqkzHt', 'recipemaker.auth0.com', {
    auth: {
      redirect: false,
      params: {
        scope: 'openid offline_access',
      }
    }
  });
  storage: Storage = new Storage();
  refreshSubscription: any;
  user: User;
  myUser:User;
  zoneImpl: NgZone;
  idToken: string;
  data:any;
  
  constructor(private authHttp: AuthHttp, zone: NgZone) {
    this.zoneImpl = zone;
    this.data = null;
    // Check if there is a profile saved in local storage
    this.storage.get('profile').then(profile => {
      this.user = JSON.parse(profile);
      this.getCurrentUser(this.user.user_id).then((data:User) => { 
        this.myUser = data;
        this.storage.set('myUser', JSON.stringify(data));
      });
      this.upsertUser(this.user);
    }).catch(error => {
      console.log(error);
    });

    this.storage.get('id_token').then(token => {
      this.idToken = token;
    });

    this.lock.on('authenticated', authResult => {
      this.storage.set('id_token', authResult.idToken);
      this.idToken = authResult.idToken;

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        profile.user_metadata = profile.user_metadata || {};
        this.storage.set('profile', JSON.stringify(profile));
        this.user = profile;
        this.getCurrentUser(this.user.user_id).then((data:User) => { 
            this.myUser = data;
            this.storage.set('myUser', JSON.stringify(data));
        });
      });

      this.lock.hide();

      this.storage.set('refresh_token', authResult.refreshToken);
      this.zoneImpl.run(() => this.user = authResult.profile);
      // Schedule a token refresh
      this.scheduleRefresh(); 
        
    });    
  }

  public authenticated() { 
    return tokenNotExpired('id_token', this.idToken);
  }

  public loggedIn() {
    return tokenNotExpired();
  }
  
  public login() {
    // Show the Auth0 Lock widget
    this.lock.show();
  }
  
  public logout() {
    this.storage.remove('profile');
    this.storage.remove('id_token');
    this.idToken = null;
    this.storage.remove('myUser');
    this.storage.remove('refresh_token');
    this.zoneImpl.run(() => this.user = null);
    // Unschedule the token refresh
    this.unscheduleRefresh();
  }
    public scheduleRefresh() {
      // If the user is authenticated, use the token stream
      // provided by angular2-jwt and flatMap the token

      let source = Observable.of(this.idToken).flatMap(
        token => {
          console.log('token here', token);
          // The delay to generate in this case is the difference
          // between the expiry time and the issued at time
          let jwtIat = this.jwtHelper.decodeToken(token).iat;
          let jwtExp = this.jwtHelper.decodeToken(token).exp;
          let iat = new Date(0);
          let exp = new Date(0);

          let delay = (exp.setUTCSeconds(jwtExp) - iat.setUTCSeconds(jwtIat));

          return Observable.interval(delay);
        });

      this.refreshSubscription = source.subscribe(() => {
        this.getNewJwt();
      });
    }

    public startupTokenRefresh() {
      // If the user is authenticated, use the token stream
      // provided by angular2-jwt and flatMap the token
      if (this.authenticated()) {
        let source = Observable.of(this.idToken).flatMap(
          token => {
            // Get the expiry time to generate
            // a delay in milliseconds
            let now: number = new Date().valueOf();
            let jwtExp: number = this.jwtHelper.decodeToken(token).exp;
            let exp: Date = new Date(0);
            exp.setUTCSeconds(jwtExp);
            let delay: number = exp.valueOf() - now;

            // Use the delay in a timer to
            // run the refresh at the proper time
            return Observable.timer(delay);
          });

          // Once the delay time from above is
          // reached, get a new JWT and schedule
          // additional refreshes
          source.subscribe(() => {
            this.getNewJwt();
            this.scheduleRefresh();
          });
      }
    }

    public unscheduleRefresh() {
      // Unsubscribe fromt the refresh
      if (this.refreshSubscription) {
        this.refreshSubscription.unsubscribe();
      }
    }

    public getNewJwt() {
      // Get a new JWT from Auth0 using the refresh token saved
      // in local storage
      this.storage.get('refresh_token').then(token => {
        this.auth0.refreshToken(token, (err, delegationRequest) => {
          if (err) {
            alert(err);
          }
          this.storage.set('id_token', delegationRequest.id_token);
          this.idToken = delegationRequest.id_token;
        });
      }).catch(error => {
        console.log(error);
      });

    }

    public upsertUser(user:User){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.authHttp.post(this.url+'/api/user', JSON.stringify(user), {headers: headers})
          .subscribe(res => {
          }, error => console.log(error)
         );
    }

    public getCurrentUser(user_id){
        return new Promise(resolve => {
          this.authHttp.get(this.url+'/api/getuser/' + user_id)
            .map(res => res.json())
            .subscribe(data => {
              this.data = data;
              resolve(this.data);
            });
        });
    }


    

    

}
