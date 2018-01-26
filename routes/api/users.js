var express = require('express');
var router = express.Router();

var User = require('../../models/user');

/* GET users listing. */
router.get('/json', function(req, res, next) {
  User.find(function(err, users){
    if (err) next(err);
    res.json(users);
  })
});

router.get('/:jobno/json', function(req, res, next) {
  User.find({'JobNo': req.params.jobno}, function(err, users){
    if (err) next(err);
    res.json(users);
  });
});

router.post('/create', function(req, res, next){
  var user = new User(req.body);
  user.save(function (err, u){
    if (err) {
        next(err);
    }
    res.json(u);
  })
});

router.post('/:jobno/delete', function(req, res, next){
    User.deleteOne({JobNo: req.params.jobno}, function (err, user){
        if (err) {
            next(err);
        }
        res.json({});
    })
});

module.exports = router;
