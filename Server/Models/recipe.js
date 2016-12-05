var mongoose  = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Recipe = new Schema({
    Id: ObjectId,
    userId: {type: String, ref: 'User' },
    title: String,
    description: String,
    reviews: {type: mongoose.Schema.ObjectId, ref: 'Review' },
    dateCreated: Date,
});


exports = mongoose.model('Recipe', Recipe);