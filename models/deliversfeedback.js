var mongoose = require('mongoose');

var DeliversFeedbackSchema = new mongoose.Schema({
    Name: String,
    BranchName: String,
    PreB: Number,
    PreX: Number,
    PreY: Number,
    PreZ: Number,
    B: Number,
    X: Number,
    Y: Number,
    Z: Number,
    Md5: String,
    ChangeState: Number,
    FeedbackFlag: Number
});

module.exports = mongoose.model('deliversfeedback', DeliversFeedbackSchema);