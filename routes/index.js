// http://18.223.187.46:4200
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/time', function(req, res, next) {
    var formattedTime;
    var minutes = req.query['m'];
    var seconds = req.query['s'];
    
    if (seconds < 10) {
        formattedTime = minutes + ":0" + seconds;
    }
    else {
        formattedTime = minutes + ":" + seconds;
    }
    console.log(formattedTime);
    res.json({time: formattedTime});
});

module.exports = router;
