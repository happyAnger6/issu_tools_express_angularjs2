var mongoose = require('mongoose');

var ModuleSchema = new mongoose.Schema({
    Name: String,
    Team: String,
    Delivers: [String]
});

module.exports = mongoose.model('module', ModuleSchema);