var express = require('express');
var router = express.Router();

var Branch = require('../../models/branch');

/* GET branchs listing. */
router.get('/json', function(req, res, next) {
    Branch.find(function(err, branchs){
       if (err)  {
           return next(err);
       }
       res.json(branchs);
    })
});

router.post('/create', function(req, res, next){
    console.log(req.body);
    var branch = new Branch(req.body);
    branch.save(function (err, u){
        if (err) {
            return next(err);
        }
        res.json(u);
    })
});

router.post('/:branch/delete', function(req, res, next){
    Branch.deleteOne({Name: req.params.branch}, function (err, user){
        if (err) {
            return next(err);
        }
        res.json({});
    })
});

module.exports = router;
