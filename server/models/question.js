const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    question: { type: Schema.Types.ObjectId, ref: 'Bank' },
    answer: {
        type: String
    },
    options: {
        type: Array
    }
});

module.exports = new mongoose.model('Question', QuestionSchema);