var mongoose = require('mongoose');

var BranchSchema = new mongoose.Schema({
    Name: String,
    ParentName: String,
    ChildrenNames: [String],
    FeedbackFlag: Number
});

module.exports = mongoose.model('branch', BranchSchema);