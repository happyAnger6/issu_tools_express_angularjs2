var mongoose = require('mongoose');
var uri = 'mongodb://localhost/test1';
mongoose.connect(uri);
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', function(){
    console.log("open success");
});

function test() {
    var Branch = require('../../models/branch');
    var branch = new Branch({Name: 'B01D001'});
    branch.save(function (err, user) {
        if (err) console.log(err);
        console.log("Save");
        Branch.find(function(err, branchs) {
            console.log(branchs);
        });
    });
}

test();