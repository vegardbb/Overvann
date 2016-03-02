// vendor library
var passport = require('passport');
var bcrypt = require('bcrypt-nodejs');

// custom library
// model
var Model = require('./model');

// index
var index = function(req, res, next) {
    var user = req.user;

    if (user !== undefined) {
        user = user.toJSON();
    }
    res.render('index', {
        title: 'Ovase.no - Framsida',
        user: user
    });
};

// sign in
// GET
var signIn = function(req, res, next) {
    if (req.isAuthenticated()) res.redirect('/');
    res.render('signin', {
        title: 'Sign In'
    });
};

// sign in
// POST
var signInPost = function(req, res, next) {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin'
    }, function(err, user, info) {
        if (err) {
            return res.render('signin', {
                title: 'Sign In',
                errorMessage: err.message
            });
        }

        if (!user) {
            return res.render('signin', {
                title: 'Sign In',
                errorMessage: info.message
            });
        }
        return req.logIn(user, function(err) {
            if (err) {
                return res.render('signin', {
                    title: 'Sign In',
                    errorMessage: err.message
                });
            } else {
                return res.redirect('/');
            }
        });
    })(req, res, next);
};

// sign up
// GET
var signUp = function(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/');
    } else {
        res.render('signup', {
            title: 'Sign Up'
        });
    }
};

// sign up
// POST
var signUpPost = function(req, res, next) {
    var user = req.body;
    var usernamePromise = null;
    usernamePromise = new Model.User({
        username: user.username
    }).fetch();

    return usernamePromise.then(function(model) {
        if (model) {
            res.render('signup', {
                title: 'signup',
                errorMessage: 'username already exists'
            });
        } else {
            //****************************************************//
            // MORE VALIDATION GOES HERE(E.G. PASSWORD VALIDATION)
            //****************************************************//
            var password = user.password;
            var hash = bcrypt.hashSync(password);

            var signUpUser = new Model.User({
                username: user.username,
                password: hash
            });

            signUpUser.save().then(function(model) {
                // sign in the newly registered user
                signInPost(req, res, next);
            });
        }
    });
};

// sign out
var signOut = function(req, res, next) {
    if (!req.isAuthenticated()) {
        notFound404(req, res, next);
    } else {
        req.logout();
        res.redirect('/signin');
    }
};

var signOut = function(req, res, next) {
    if (!req.isAuthenticated()) {
        notFound404(req, res, next);
    } else {
        req.logout();
        res.redirect('/signin');
    }
};

// About page, reading from url parameters
var about = function(req, res, next) {
    var user = req.user;

    if (user !== undefined) {
        user = user.toJSON();
    }
    var param = req.query.kake;

    res.render('om', {
        title: 'Ovase.no - Om oss',
        user: user,
        urlparam: param
    });
};

var person = function(req, res, next) {
    var user = req.user;

    if (user !== undefined) {
        user = user.toJSON();
    }

    var requestedPerson = req.params.who;
    
    fakePerson = {
        name: 'Arvid Ekle',
        title: 'Daglig leder',
        company: 'Anlegg & Utemiljø AS',
        phonenumber: '73 96 53 13',
        address: 'Eklesspannvegen 80, 7036 Trondheim',
        industry: 'Anleggsgartner',
        workarea: 'Trondheimsregionen',
        img_name: 'ArvidEkle.png'
    };

    res.render('person', {
        title: 'Ovase.no - Personside',
        user: user,
        who: fakePerson
    });
};

// 404 not found
var notFound404 = function(req, res, next) {
    res.status(404);
    res.render('404', {
        title: '404 Not Found'
    });
};

// export functions
/**************************************/
module.exports.index = index;
module.exports.signIn = signIn;
module.exports.signInPost = signInPost;
module.exports.signUp = signUp;
module.exports.signUpPost = signUpPost;
module.exports.signOut = signOut;
module.exports.about = about;
module.exports.person = person;
module.exports.notFound404 = notFound404;