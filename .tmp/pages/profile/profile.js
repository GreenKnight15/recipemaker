import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
export var Profile = (function () {
    // We need to inject AuthService so that we can
    // use it in the view
    function Profile(auth) {
        this.auth = auth;
    }
    Profile.prototype.ngOnInit = function () {
        this.myUser = this.auth.myUser;
    };
    Profile.decorators = [
        { type: Component, args: [{
                    selector: 'page-profile',
                    templateUrl: 'profile.html'
                },] },
    ];
    /** @nocollapse */
    Profile.ctorParameters = [
        { type: AuthService, },
    ];
    return Profile;
}());
//# sourceMappingURL=profile.js.map