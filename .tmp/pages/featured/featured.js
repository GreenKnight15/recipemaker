import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { NavController, MenuController } from 'ionic-angular';
export var Featured = (function () {
    function Featured(navCtrl, auth, menuCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        if (this.auth.authenticated()) {
            this.auth.getCurrentUser(this.auth.user.user_id);
            this.myUser = this.auth.myUser;
            this.authenticated = this.auth.authenticated();
        }
    }
    Featured.prototype.ngOnInit = function () {
    };
    Featured.prototype.ionViewDidLoad = function () {
        this.init();
    };
    Featured.prototype.init = function () {
        this.myUser = this.auth.myUser;
        this.userName = this.myUser.name;
        console.log(this.authenticated);
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