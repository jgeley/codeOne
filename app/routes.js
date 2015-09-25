// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');
var User = require('./models/user');

//var isAuthenticated = function (req, res, next) {
//            if (req.isAuthenticated())
//                return next();
//            res.redirect('/login');
//        };
module.exports = function (app) {
//    app.get('/', isAuthenticated, function (req, res) {
//        res.render('home.html', {
//            user: req.user
//        });
//    });

    // As with any middleware it is quintessential to call next()
    // if the user is authenticated
  
        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

    // sample api route
//    app.get('/api/nerds', function (req, res) {
//        // use mongoose to get all nerds in the database
//        Nerd.find(function (err, nerds) {
//
//            // if there is an error retrieving, send the error. 
//            // nothing after res.send(err) will execute
//            if (err)
//                res.send(err);
//
//            res.json(nerds); // return all nerds in JSON format
//        });
//    });
//    app.get('/api/savenerd/:name', function (req, res) {
//        var nerd = new Nerd({
//            name: req.params.name,
//        });
//        nerd.save(function (err, nerd) {
//            if (err) res.send(err);
//            res.json(nerd);
//        });
//    });
//        app.get('/', function (req, res) {
//            res.sendfile('home.html'); // load our public/index.html file
//        });

};