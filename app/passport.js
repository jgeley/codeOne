// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');
var User = require('./models/user');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var bCrypt = require('bcrypt-nodejs');
var expressSession = require('express-session');
var fs = require('fs');

var questionsFile = __dirname + '/../public/questions.json';
fs.readFile(questionsFile, 'utf8', function(err, data) {
	questions = JSON.parse(data);
	questions = questions['games'][0]['questions']
});

var createHash = function(password){
 return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}
passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});
var isValidPassword = function(user, password){
  return bCrypt.compareSync(password, user.password);
}
// passport/login.js
passport.use('login', new LocalStrategy({
        passReqToCallback: true
    },
    function (req, username, password, done) {
        // check in mongo if a user with username exists or not
        User.findOne({
                'username': username
            },
            function (err, user) {
                // In case of any error, return using the done method
                if (err)
                    return done(err);
                // Username does not exist, log error & redirect back
                if (!user) {
                    console.log('User Not Found with username ' + username);
                    return done(null, false,
                        req.flash('message', 'User Not found.'));
                }
                // User exists but wrong password, log the error 
                if (!isValidPassword(user, password)) {
                    console.log('Invalid Password');
                    return done(null, false,
                        req.flash('message', 'Invalid Password'));
                }
                // User and password both match, return user from 
                // done method which will be treated like success
                return done(null, user);
            }
        );
    }));

passport.use('signup', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) {
    findOrCreateUser = function(){
      // find a user in Mongo with provided username
      User.findOne({'username':username},function(err, user) {
        // In case of any error return
        if (err){
          console.log('Error in SignUp: '+err);
          return done(err);
        }
        // already exists
        if (user) {
          console.log('User already exists');
          return done(null, false, 
             req.flash('message','User Already Exists'));
        } else {
          // if there is no user with that email
          // create the user
          var newUser = new User();
          // set the user's local credentials
          newUser.username = username;
          newUser.password = createHash(password);
          newUser.email = req.param('email');
          newUser.firstName = req.param('firstName');
          newUser.lastName = req.param('lastName');
 
          // save the user
          newUser.save(function(err) {
            if (err){
              console.log('Error in Saving user: '+err);  
              throw err;  
            }
            console.log('User Registration succesful');    
            return done(null, newUser);
          });
        }
      });
    };
     
    // Delay the execution of findOrCreateUser and execute 
    // the method in the next tick of the event loop
    process.nextTick(findOrCreateUser);
  })
);



module.exports = function (app) {
  var isAuthenticated = function (req, res, next) {
            if (req.isAuthenticated())
                return next();
            res.redirect('/loginPage');
        };

    /* GET login page. */
    app.get('/loginPage', function (req, res) {
        // Display the Login page with any flash message, if any
        res.render('login.html', {
            message: req.flash('message')
        });
    });

    /* Handle Login POST */
    app.post('/login', passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/loginPage',
        failureFlash: true
    }));

    /* GET Registration Page */
    app.get('/signup', function (req, res) {
        res.render('register.html', {
            message: req.flash('message')
        });
    });

    /* Handle Registration POST */
    app.post('/signup', passport.authenticate('signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true
    }));
    /* Handle Logout */
    app.get('/signout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
    
    app.get('/', function (req, res) {
        //console.log(__dirname  + '/public/home.html');
        console.log(__dirname);
        res.render('main.html');
    });
    
    app.get('/play', isAuthenticated, function (req, res) {
        //console.log(__dirname  + '/public/home.html');
        console.log(__dirname);
        res.render('home.html');
    });

    app.post('/data', isAuthenticated, function (req, res) {
	var category = req.body.category;
	var jsonResponse = [];
	for (i = 0; i < questions.length; i++) { 
 	   if(questions[i]['category'] == category){
		jsonResponse.push(questions[i]);
		}
	}
	res.send(JSON.stringify(jsonResponse));
    });

    app.post('/randData', isAuthenticated, function(req, res){
	var jsonResponse = [];
	for ( i = 0; i < 10; i++) {
		jsonResponse.push(questions[Math.floor(Math.random()*questions.length)])
	}

	res.send(JSON.stringify(jsonResponse));

    });
};
