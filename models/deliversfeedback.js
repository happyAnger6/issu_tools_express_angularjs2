var mongoose = require('mongoose');

var DeliversFeedbackSchema = new mongoose.Schema({
    Name: {type: String, required: [true]},
    BranchName: {type: String, required: [true]},
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