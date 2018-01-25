var mongoose = require('mongoose');

var DeliverSchema = new mongoose.Schema({
    Name: String,
    Module: String,
    Type: String
});

module.exports = mongoose.model('deliver', DeliverSchema);