import { AuthService } from '../../services/auth/auth.service';
import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Featured } from '../featured/featured';
export var Login = (function () {
    // We need to inject AuthService so that we can
    // use it in the view
    function Login(auth, navCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.auth = auth;
    }
    Login.prototype.ngOnInit = function () {
    };
    Login.prototype.ionViewDidLoad = function () {
        this.init();
    };
    Login.prototype.init = function () {
        if (this.auth.authenticated()) {
            this.navCtrl.setRoot(Featured);
        }
    };
    Login.decorators = [
        { type: Component, args: [{
                    selector: 'page-login',
                    templateUrl: 'login.html'
                },] },
        { type: Injectable },
    ];
    /** @nocollapse */
    Login.ctorParameters = [
        { type: AuthService, },
        { type: NavController, },
    ];
    return Login;
}());
//# sourceMappingURL=login.js.map