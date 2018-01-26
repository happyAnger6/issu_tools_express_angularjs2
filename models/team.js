var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({
    Name: {type: String, unique: true},
    Manager: String,
});

TeamSchema.index({Name: 1});
module.exports = mongoose.model('team', TeamSchema);