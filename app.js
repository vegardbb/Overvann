// vendor libraries
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
var ejs = require('ejs');
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


// custom libraries
var YpRouting = require('./yellow_pages/yp_routing')
var Model = require('./model');
var app = express();

passport.use(new LocalStrategy(function(username, password, done) {
	new Model.User({
		username: username
	}).fetch().then(function(data) {
		var user = data;
		if (user === null) {
			return done(null, false, {
				message: 'Invalid username or password'
			});
		} else {
			user = data.toJSON();
			if (!bcrypt.compareSync(password, user.password)) {
				return done(null, false, {
					message: 'Invalid username or password'
				});
			} else {
				return done(null, user);
			}
		}
	});
}));

passport.serializeUser(function(user, done) {
	done(null, user.username);
});

passport.deserializeUser(function(username, done) {
	new Model.User({
		username: username
	}).fetch().then(function(user) {
		done(null, user);
	});
});

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));	// to support JSON-encoded bodies
app.use(bodyParser.json()); 						// to support URL-encoded bodies
app.use(session({
	secret: 'overvann er best!',
	saveUninitialized: false,
	resave: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Static content
app.use(express.static('static'));

// Routing
app.get('/', YpRouting.index);
app.get('/signin', YpRouting.signIn);
app.post('/signin', YpRouting.signInPost);
app.get('/signup', YpRouting.signUp);
app.post('/signup', YpRouting.signUpPost);
app.get('/signout', YpRouting.signOut);
app.get('/om', YpRouting.about);
app.get('/person/:who', YpRouting.person);
app.get('/company/:who', YpRouting.company);
app.get('/product', YpRouting.product);
// 404 not found
app.use(YpRouting.notFound404);

/*
NYTTIG OM ROUTING
If you use router.route('/search/:word'), and if your request is
/places/search/test
then your req.params.word="test"
*/

var server = app.listen(app.get('port'), function(err) {
	if (err) throw err;

	var message = 'Server is running @ http://localhost:' + server.address().port;
	console.log(message);
});