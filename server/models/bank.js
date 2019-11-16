const mongoose = require("mongoose");
const Question = require('./question');
const Schema = mongoose.Schema;

const BankSchema = new Schema({
    type: {
        type: String
    },
    questions: [
      {
        question: String,
        answer: {
            type: String
        },
        options: {
            type: Array
        }
      }
    ]
});

module.exports = new mongoose.model('Bank', BankSchema);