var mongoose = require('mongoose');
var uri = 'mongodb://localhost/mongoose-test1';
mongoose.connect(uri);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', function(){
    console.log("open success");
    test();
});

function test() {
    var UserSchema = mongoose.Schema({
        Name: String
    });

    var User = mongoose.model('User', UserSchema);
    var user = new User({name: 'zhangxa'});
    user.save(function (err, user) {
        if (err) console.log(err);
        console.log("Save");
        User.find(function(err, users) {
            console.log(users);
        });
    });
}
