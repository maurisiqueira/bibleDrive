var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var sha1 = require('sha1')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: 'Maurício' });
});

router.post('/logon', function(req, res, next){
  var email = req.body.user;
  var password = sha1(req.body.password);
});

router.post ('/singUp', function(req,res,next){
  var email = req.body.user;
  var password = sha1(req.body.password);


});

/* GET all customers. */
router.get('/users', function (req, res, next) {
  var db = require('../db');
  var Customer = db.Mongoose.model('users', db.UserSchema, 'users');
  Customer.find({}).lean().exec(function(e,docs){
     res.json(docs);
     res.end();
  });
});

module.exports = router;
