var mongoose  = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Featured = new Schema({
    Id: ObjectId,
    startDate:Date,
    endDate:Date,
    recipeIds:[String]
});


exports = mongoose.model('Featured', Featured);