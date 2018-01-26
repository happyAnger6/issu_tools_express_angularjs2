var mongoose = require('mongoose');

var ModuleSchema = new mongoose.Schema({
    Name: {type: String, required: [true], unique: true},
    Team: String,
    Delivers: [String]
});

module.exports = mongoose.model('module', ModuleSchema);