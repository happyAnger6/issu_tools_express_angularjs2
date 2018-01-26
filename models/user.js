var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    Name: {type: String, required: [true]},
    JobNo: {type: String, required: [true], unique: true},
    Email: String,
    Passwd: {type: String, required: [true]},
    Modules: [String],
    Team: String,
    Role: String
});

UserSchema.index({JobNo: 1});
module.exports = mongoose.model('user', UserSchema);