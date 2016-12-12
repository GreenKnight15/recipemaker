var mongoose  = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Recipe = new Schema({
    Id: ObjectId,
    userId: String,
    title: String,
    description: String,
    ingredients:[String],
    steps:[String],
    meal:[Number],
    imageUrl:String,
    reviews: [{type: String, ref: 'Review' }],
    dateCreated: Date,
    like_count:Number,
    category:[Number],
    userImg:String
});


exports = mongoose.model('Recipe', Recipe);