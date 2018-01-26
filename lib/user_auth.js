var auth = require('basic-auth');
var User = require('../models/user');

exports.authenticate = function(req, res, next) {
    var user_info = auth(req);
    if (!user_info) {
        res.json({"err": "user_info empty!"});
    }
    console.log("user_info: ", user_info);
    if (user_info.name === "admin") {
        next();
    }
    else {
        User.find({JobNo: user_info.name}, function (err, user) {
            if (err) return res.json({"err": err});
            if (!user.Name) return res.json({"err": "name does't exist."});
            if (user.Passwd === user_info.passwd) return next();
            res.json({"err": "password wrong!"})
        });
    }
};