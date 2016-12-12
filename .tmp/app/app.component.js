import { Component, ViewChild, Injectable, NgZone } from '@angular/core';
import { AuthHttp, JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Observable } from 'rxjs/Rx';
import { Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Featured } from '../pages/featured/featured';
import { Profile } from '../pages/profile/profile';
import { Login } from '../pages/login/login';
import { Explore } from '../pages/explore/explore';
import { CreateRecipe } from '../pages/create-recipe/create-recipe';
import { YourRecipes } from '../pages/your-recipes/your-recipes';
export var MyApp = (function () {
    function MyApp(platform, menuCtrl, authHttp, zone) {
        var _this = this;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.authHttp = authHttp;
        this.rootPage = Featured;
        this.url = 'https://dishdesigner.herokuapp.com';
        this.jwtHelper = new JwtHelper();
        this.auth0 = new Auth0({ clientID: 'umeSwTUlyXl4YSxFWjSNr6T83DpqkzHt', domain: 'recipemaker.auth0.com' });
        this.lock = new Auth0Lock('umeSwTUlyXl4YSxFWjSNr6T83DpqkzHt', 'recipemaker.auth0.com', {
            auth: {
                redirect: false,
                params: {
                    scope: 'openid offline_access',
                }
            }
        });
        this.storage = new Storage();
        this.initializeApp();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            // Schedule a token refresh on app start up
            _this.startupTokenRefresh();
            //        if(this.auth.authenticated()){
            //            this.menuCtrl.enable(true, 'authenticated');
            //            this.menuCtrl.enable(false, 'unauthenticated');
            //        }else{
            //            this.menuCtrl.enable(false, 'authenticated');
            //            this.menuCtrl.enable(true, 'unauthenticated');
            //        }
            _this.zoneImpl = zone;
            _this.data = null;
            // Check if there is a profile saved in local storage
            _this.storage.get('profile').then(function (profile) {
                _this.user = JSON.parse(profile);
                _this.getCurrentUser(_this.user.user_id).then(function (data) {
                    _this.myUser = data;
                });
                _this.upsertUser(_this.user);
            }).catch(function (error) {
                console.log(error);
            });
            _this.storage.get('id_token').then(function (token) {
                _this.idToken = token;
            });
            _this.lock.on('authenticated', function (authResult) {
                _this.storage.set('id_token', authResult.idToken);
                _this.idToken = authResult.idToken;
                // Fetch profile information
                _this.lock.getProfile(authResult.idToken, function (error, profile) {
                    if (error) {
                        // Handle error
                        alert(error);
                        return;
                    }
                    profile.user_metadata = profile.user_metadata || {};
                    _this.storage.set('profile', JSON.stringify(profile));
                    _this.user = profile;
                    _this.getCurrentUser(_this.user.user_id).then(function (data) {
                        _this.myUser = data;
                    });
                });
                _this.nav.setRoot(Featured);
                _this.lock.hide();
                _this.storage.set('refresh_token', authResult.refreshToken);
                _this.zoneImpl.run(function () { return _this.user = authResult.profile; });
                // Schedule a token refresh
                _this.scheduleRefresh();
            });
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Featured', component: Featured },
            { title: 'Create Recipe', component: CreateRecipe },
            { title: 'Your Recipes', component: YourRecipes },
            { title: 'Explore', component: Explore },
            { title: 'Profile', component: Profile }
        ];
        this.unAuthPages = [
            { title: 'Login', component: Login },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.authenticated = function () {
        return tokenNotExpired('id_token', this.idToken);
    };
    MyApp.prototype.loggedIn = function () {
        return tokenNotExpired();
    };
    MyApp.prototype.login = function () {
        // Show the Auth0 Lock widget
        this.lock.show();
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.storage.remove('profile');
        this.storage.remove('id_token');
        this.idToken = null;
        this.storage.remove('refresh_token');
        this.zoneImpl.run(function () { return _this.user = null; });
        // Unschedule the token refresh
        this.unscheduleRefresh();
        this.nav.pop();
    };
    MyApp.prototype.scheduleRefresh = function () {
        // If the user is authenticated, use the token stream
        // provided by angular2-jwt and flatMap the token
        var _this = this;
        var source = Observable.of(this.idToken).flatMap(function (token) {
            console.log('token here', token);
            // The delay to generate in this case is the difference
            // between the expiry time and the issued at time
            var jwtIat = _this.jwtHelper.decodeToken(token).iat;
            var jwtExp = _this.jwtHelper.decodeToken(token).exp;
            var iat = new Date(0);
            var exp = new Date(0);
            var delay = (exp.setUTCSeconds(jwtExp) - iat.setUTCSeconds(jwtIat));
            return Observable.interval(delay);
        });
        this.refreshSubscription = source.subscribe(function () {
            _this.getNewJwt();
        });
    };
    MyApp.prototype.startupTokenRefresh = function () {
        var _this = this;
        // If the user is authenticated, use the token stream
        // provided by angular2-jwt and flatMap the token
        if (this.authenticated()) {
            var source = Observable.of(this.idToken).flatMap(function (token) {
                // Get the expiry time to generate
                // a delay in milliseconds
                var now = new Date().valueOf();
                var jwtExp = _this.jwtHelper.decodeToken(token).exp;
                var exp = new Date(0);
                exp.setUTCSeconds(jwtExp);
                var delay = exp.valueOf() - now;
                // Use the delay in a timer to
                // run the refresh at the proper time
                return Observable.timer(delay);
            });
            // Once the delay time from above is
            // reached, get a new JWT and schedule
            // additional refreshes
            source.subscribe(function () {
                _this.getNewJwt();
                _this.scheduleRefresh();
            });
        }
    };
    MyApp.prototype.unscheduleRefresh = function () {
        // Unsubscribe fromt the refresh
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    MyApp.prototype.getNewJwt = function () {
        var _this = this;
        // Get a new JWT from Auth0 using the refresh token saved
        // in local storage
        this.storage.get('refresh_token').then(function (token) {
            _this.auth0.refreshToken(token, function (err, delegationRequest) {
                if (err) {
                    alert(err);
                }
                _this.storage.set('id_token', delegationRequest.id_token);
                _this.idToken = delegationRequest.id_token;
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    MyApp.prototype.upsertUser = function (user) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.authHttp.post(this.url + '/api/user', JSON.stringify(user), { headers: headers })
            .subscribe(function (res) {
        }, function (error) { return console.log(error); });
    };
    MyApp.prototype.getCurrentUser = function (user_id) {
        var _this = this;
        console.log(this.url);
        return new Promise(function (resolve) {
            _this.authHttp.get(_this.url + '/api/getuser/' + user_id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
        { type: Injectable },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
        { type: MenuController, },
        { type: AuthHttp, },
        { type: NgZone, },
    ];
    MyApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map