var mongoose = require('mongoose');

var BranchSchema = new mongoose.Schema({
    Name: {type: String, required: [true], unique: true},
    ParentName: String,
    ChildrenNames: [String],
    FeedbackFlag: Number
});

module.exports = mongoose.model('branch', BranchSchema);