var mongoose = require('mongoose');

var DeliverSchema = new mongoose.Schema({
    Name: {type: String, required: [true], unique: true},
    Module: {type: String, required: [true]},
    Type: {type: String, required: [true]}
});

module.exports = mongoose.model('deliver', DeliverSchema);