var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('main', {
        page:'Main',
        menuId: 'main'
    });
});

router.get('/budget', function(req, res) {
    res.render('budget', {
        page:'Budget',
        menuId: 'budget'
    });
});

router.get('/login', function(req, res) {
    res.render('login', {
        page:'Login',
        menuId: 'login'
    });
});

router.get('/signup', function(req, res) {
    res.render('signup', {
        page:'Signup',
        menuId: 'signup'
    });
});

router.get('/finance', function(req, res) {
    res.render('finance', {
        page:'finance',
        menuId: 'finance'
    });
});



module.exports = router;