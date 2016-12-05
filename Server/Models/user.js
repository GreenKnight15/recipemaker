var mongoose  = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var User = new Schema({
    Id: ObjectId,
    name: {
        first: String,
        last: { type: String, trim: true }
      },
    username: { type: String, required: true, unique: true },
   // password: { type: String, required: true },
    email: String,
    admin: Boolean,
    dateCreated: Date
});

exports = mongoose.model('User', User);