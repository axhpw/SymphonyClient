var express = require('express');
var router = express.Router();
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Symphony Streaming'
    });
});

/* GET login page. */
router.get('/login', function (req, res, next) {
    res.render('loginSignUp/loginForm', {
        title: 'Symphony Streaming Login'
    });
});

/* GET signup page. */
router.get('/signup', function (req, res, next) {
    res.render('loginSignUp/signupForm', {csrfToken: req.csrfToken()});

});

/* GET signup page. */
router.get('/myAccount', function (req, res, next) {
    res.render('user/myAccount', {
        title: 'Username account'
    });
});

router.post('/signup', function (req, res, next) {
    res.redirect("/");
});

module.exports = router;