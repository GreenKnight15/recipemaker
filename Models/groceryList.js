var mongoose  = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var GroceryList = new Schema({
    Id: ObjectId,
    title:String,
    ingredients:[String],
    recipeId:String,
    user_id:String
});


exports = mongoose.model('GroceryList', GroceryList);