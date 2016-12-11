var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var User = new Schema({
    Id: ObjectId,
    email_verified:Boolean,
    family_name:String,
    gender:String,
    given_name:String,
      identities: [
    {
      provider: String,
      user_id: String,
      connection: String,
      isSocial: Boolean
    }
  ],
    locale:String,
    name:String,
    nickname:String,
    picture:String,
    user_id:String,
    email: String,
    admin: Boolean,
    dateCreated: Date
});

exports = mongoose.model('User', User);