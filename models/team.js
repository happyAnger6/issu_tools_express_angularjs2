var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
    Name: String,
    Manager: String
});

module.exports = mongoose.model('team', TeamSchema);