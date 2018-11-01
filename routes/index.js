// http://18.223.187.46:4200
var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

// router.get('/owl', function(req, res, next) {
// 	var url = "https://owlbot.info/api/v1/dictionary/";
// 	console.log("query ", req.query);
// 	url += req.query['q'];
// 	url += "?format=json";
// 	request(url).pipe(res);
// });

// router.get('/getcity', function(req, res, next) {
// 	var url = "http://bioresearch.byu.edu/cs260/jquery/getcity.cgi?q=";
// 	console.log("query ", req.query);
// 	url += req.query['q'];
// 	console.log(url);
// 	request(url).pipe(res);
// });

module.exports = router;
