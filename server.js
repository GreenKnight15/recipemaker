// Set up
require('./Models/user');
require('./Models/review');
require('./Models/recipe');
var express = require('express');
var app = express(); // create our app w/ express
var mongoose = require('mongoose'); // mongoose for mongodb
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
app.use(express.static('www'));
app.set('port', process.env.PORT || 8080);
// Configuration
var connectionString = require('./connectionString');
mongoose.connect(connectionString.connection);
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Models
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Review = mongoose.model('Review');
var Recipe = mongoose.model('Recipe');
// Routes
app.post('/api/user', function (req, res) {
    console.log('saving user:' + req.body.user_id)
    var query = {
        'user_id': req.body.user_id
    };
    var upsertUser = req.body;
    User.findOneAndUpdate(query, upsertUser, {
        upsert: true
    }, function (err, doc) {
        if (err) return res.send(500, {
            error: err
        });
        return res.send("succesfully saved");
    });
})
app.post('/api/recipe', function (req, res) {
    console.log('saving recipe:' + req.body)
    var query;
    var recipe = req.body;
    if (req.body._id != null) {
        query = {
            Id: req.body._id
        };
        Recipe.findOneAndUpdate(query, recipe, {
            upsert: true
        }, function (err, recipe) {
            if (err) return res.send(500, {
                error: err
            });
        });
    }
    else {
        Recipe.create(recipe, function (err, recipe) {
            if (err) {
                return res.send(500, {
                    error: err
                });
            }
        });
    }
});
app.post('/api/recipe/like', function (req, res) {
    var recipeId = req.body.RecipeId;
    var userId = req.body.UserId;
    Recipe.findOneAndUpdate({
        _id: recipeId
    }, {
        $inc: {
            like_count: 1
        }
    }).exec(function (err, db_res) {
        if (err) {
            console.log(err);
            return res.send(500, {
                error: err
            });
        }
        else {
            console.log("Saving like for recipe " + recipeId);
        }
    });
    User.update({
        user_id: userId
    }, {
        $addToSet: {
            likes: recipeId
        }
    }).exec(function (err, db_res) {
        if (err) {
            console.log(err);
            return res.send(500, {
                error: err
            });
        }
        else {
            console.log("Saving like for:User " + userId);
        }
    });
})
app.post('/api/recipe/unlike', function (req, res) {
        var recipeId = req.body.RecipeId;
        var userId = req.body.UserId;
        Recipe.findOneAndUpdate({
            _id: recipeId
        }, {
            $inc: {
                like_count: -1
            }
        }).exec(function (err, db_res) {
            if (err) {
                console.log(err);
                return res.send(500, {
                    error: err
                });
            }
            else {
                console.log("Saving like for recipe " + recipeId);
            }
        })
        User.update({
            user_id: userId
        }, {
            $pull: {
                likes: recipeId
            }
        }).exec(function (err, db_res) {
            if (err) {
                console.log(err);
                return res.send(500, {
                    error: err
                });
            }
            else {
                console.log("Saving like for:User " + userId);
            }
        });
    })
    // Get user by user id
app.get('/api/getuser/:id', function (req, res) {
    var id = req.param('id');
    console.log("fetching recipes for user: " + id);
    // use mongoose to get all reviews in the database
    User.findOne({
        user_id: id
    , }).exec(function (err, user) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            res.json(user);
        }
    });
});
// Get recipes by user id
app.get('/api/getRecipes/:id', function (req, res) {
    var id = req.param('id');
    console.log("fetching recipes for user: " + id);
    // use mongoose to get all reviews in the database
    Recipe.find({
        userId: id
    , }).exec(function (err, recipes) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            res.json(recipes); // return all reviews in JSON format
        }
    });
});

// Get liked recipes by user id
app.get('/api/getLikedRecipes/:id', function (req, res) {
    var id = req.param('id');
    console.log("fetching recipes for user: " + id);
    // use mongoose to get all reviews in the database
    User.find({
        user_id: id
    , }).exec(function (err, user) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            var likedIds = user;
            Recipe.find({
                Id: {$in:likedIds.likes}
             }).exec(function (err, recipes) {
                // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                if (err) {
                    res.send(err)
                    console.log(err);
                }
                else {
                    res.json(recipes); // return all reviews in JSON format
                }
            });
        }
    });
});

// Get recipes by catagory id
// Get recipes by user id
app.get('/api/category/:id/:page/:perPage', function (req, res) {
    var id = req.param('id');
    var page = parseInt(req.param('page'));
    var perPage = parseInt(req.param('perPage'));
    console.log("fetching recipes for user: " + id);
    // use mongoose to get all reviews in the database
    Recipe.find({
        category: id
    , }).limit(perPage).skip(perPage * page).exec(function (err, recipes) {
        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err)
            console.log(err);
        }
        else {
            res.json(recipes); // return all reviews in JSON format
        }
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
app.use(function (req, res, next) {
        res.status(404).send('Sorry cant find that!')
    })
    // listen (start app with node server.js) ======================================
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});