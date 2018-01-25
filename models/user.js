var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    Name: String,
    JobNo: String,
    Email: String,
    Passwd: String,
    Modules: [String],
    Team: String,
    Role: String
});

module.exports = mongoose.model('user', UserSchema);