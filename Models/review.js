var mongoose  = require('mongoose');
var User = mongoose.model('User').User;

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var Review = new Schema({
    Id: ObjectId,
    useId: {type: String, ref: 'User' },
    text: String,
    stars: Number,
    dateCreated: Date
});

exports = mongoose.model('Review', Review);