var mongoose = require('mongoose');
var uri = 'mongodb://localhost/test1';
mongoose.connect(uri);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', function(){
    console.log("open success");
});

function test() {
    var User = require('../../models/user');
    var user = new User({Name: 'zhangxa', JobNo: "z09633"});
    user.save(function (err, user) {
        if (err) console.log(err);
        console.log("Save");
        User.find(function(err, users) {
            console.log(users);
        });
    });
}

test();