import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { NavController, MenuController } from 'ionic-angular';
export var Featured = (function () {
    function Featured(navCtrl, auth, menuCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        this.user = this.auth.user;
        this.myUser = this.auth.myUser;
        this.authenticated = this.auth.authenticated();
    }
    Featured.prototype.ngOnInit = function () {
    };
    Featured.prototype.ionViewDidLoad = function () {
        this.init();
    };
    Featured.prototype.enableAuthenticatedMenu = function () {
        this.menuCtrl.enable(true, 'authenticated');
        this.menuCtrl.enable(false, 'unauthenticated');
    };
    Featured.prototype.disableAuthenticatedMenu = function () {
        this.menuCtrl.enable(false, 'authenticated');
        this.menuCtrl.enable(true, 'unauthenticated');
    };
    Featured.prototype.init = function () {
        this.myUser = this.auth.myUser;
        this.userName = this.myUser.name;
        console.log(this.authenticated);
        if (this.authenticated) {
            this.enableAuthenticatedMenu();
        }
        else {
            this.disableAuthenticatedMenu();
        }
    };
    Featured.decorators = [
        { type: Component, args: [{
                    selector: 'page-featured',
                    templateUrl: 'featured.html'
                },] },
    ];
    /** @nocollapse */
    Featured.ctorParameters = [
        { type: NavController, },
        { type: AuthService, },
        { type: MenuController, },
    ];
    return Featured;
}());
//# sourceMappingURL=featured.js.map