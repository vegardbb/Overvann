var UserSystem = require('./user_system');
var Person = require('./person')
var Company = require('./company')

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

var notFound404 = function(req, res, next) {
    res.status(404);
    res.render('404', {
        title: '404 Not Found'
    });
};

// Exports
module.exports.index = index;
module.exports.signIn = UserSystem.signIn;
module.exports.signInPost = UserSystem.signInPost;
module.exports.signUp = UserSystem.signUp;
module.exports.signUpPost = UserSystem.signUpPost;
module.exports.signOut = UserSystem.signOut;
module.exports.about = about;
module.exports.person = Person.person_page;
module.exports.company = Company.company_page
module.exports.notFound404 = notFound404;