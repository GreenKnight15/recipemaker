export var User = (function () {
    function User(Id, family_name, given_name, email, dateCreated, email_verified, gender, locale, name, nickname, picture, user_id, admin, identities) {
        this.Id = Id;
        this.family_name = family_name;
        this.given_name = given_name;
        this.email = email;
        this.dateCreated = dateCreated;
        this.email_verified = email_verified;
        this.gender = gender;
        this.locale = locale;
        this.name = name;
        this.nickname = nickname;
        this.picture = picture;
        this.user_id = user_id;
        this.admin = admin;
        this.identities = identities;
    }
    return User;
}());
//# sourceMappingURL=user.js.map