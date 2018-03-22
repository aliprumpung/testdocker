var express = require('express');
var router = express.Router();
var pg = require('pg');
var pg_ = new pg.Client('postgres://callmesike:12345@localhost/firstdb');

const connect = ()=>{
	pg_.connect((err,res)=>{
		if (err){
			console.log('error occured.');
		}else{
			console.log('connected to database.');
		}
	});
}
connect();
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

module.exports = router;
