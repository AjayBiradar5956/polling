const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    option: {
        type: String,
        required: true,
    },
    vote: {
        type: Number,
        default: 0,
    },
    Link_to_vote: {
        type: String,
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    }
});

const Option = mongoose.model('options', optionSchema);
module.exports = Option;
