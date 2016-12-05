// Set up
require('./Models/user');
require('./Models/review');
require('./Models/recipe');

var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
 

// Configuration
mongoose.connect('mongodb://admin:Sherlock221@ds119618.mlab.com:19618/recipemaker');
 
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());
 
app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
 
// Models

var mongoose  = require('mongoose');
var User = mongoose.model('User');
var Review = mongoose.model('Review');
var Recipe = mongoose.model('Recipe');
 
// Routes

//     app.get('/api/james', function() {
//        console.log("James made");
//        var newUser = new User({
//            name:{first:"James",last:"Ritter"},
//            username : "GreenKnight15",
//            email:"jamesritter15@gmail.com",
//            admin:true,
//            dateCreated:Date.now()
//        });
//         
//        newUser.save(function(err, recipe) {
//
//        });
// 
//    });
 
    // Get recipes
    app.get('/api/getRecipes/:id', function(req, res) {
        var id = req.param('id');
        console.log("fetching recipes for user: "+id);
        // use mongoose to get all reviews in the database
        Recipe.find(
            {
                userId:id
            }
        )
        .exec(function(err, recipes) {
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err){
                res.send(err)
                console.log(err);
            }else{
                res.json(recipes); // return all reviews in JSON format
            }
        });
    });
 
    // create review and send back all reviews after creation
    app.post('/api/recipe', function(req, res) {
        console.log("creating recipe: "+req.body.title);
        // create a recipe, information comes from request from Ionic
        var newRecipe = new Recipe({
            title : req.body.title,
            description : req.body.description,
            userId:req.body.userId,
        }).save(function(err, recipe) {
            if (err)
                res.send(err);
        });
 
    });
 
//    // delete a review
//    app.delete('/api/reviews/:review_id', function(req, res) {
//        Review.remove({
//            _id : req.params.review_id
//        }, function(err, review) {
// 
//        });
//    });
 
 
// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");