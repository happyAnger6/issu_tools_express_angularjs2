var express = require('express');
var router = express.Router();

var Team = require('../../models/team');
var User = require('../../models/user');

/* GET teams listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a teams');
});

/* GET users listing. */
router.get('/json', function(req, res, next) {
    Team.find(function(err, teams){
        if (err) {
            return next(err);
        }
        res.json(teams);
    })
});

router.get('/:name/json', function(req, res, next) {
    Team.find({'Name': req.params.name}, function(err, teams){
        if (err) {
            return next(err);
        }
        res.json(teams);
    });
});

router.post('/create', function(req, res, next){
    var team = new Team(req.body);
    var manager = team.Manager;
    if (manager) {
       User.find({'JobNo': manager}, function(err, user){
           if(err) {
               return next(err);
           }
           if(!user || user.length === 0) {
               var err = 'Manager name:[' + manager + '] is not exist!';
               return res.status(500).json({errmsg: err});
           }
           team.save(function (err, t){
               if (err) {
                   return next(err);
               }
               res.json(t);
           })
       });
    }
    else {
        team.save(function (err, t){
            if (err) {
                return next(err);
            }
            res.json(t);
        });
    }
});

router.post('/:name/delete', function(req, res, next){
    Team.deleteOne({Name: req.params.name}, function (err, t){
        if (err) {
            return next(err);
        }
        res.json({});
    })
});
module.exports = router;
