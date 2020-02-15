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

module.exports = router;