const questionRouter = require('express').Router();
const Question = require('../models/question');
const Bank = require('../models/bank');

questionRouter.get("/", (req, res) => {
    res.send("<body>Hello Cyber cade</body>");
  });


  questionRouter.get('/questions', async (req, res) => {
      const questions = await Bank.find({})
      res.json(questions)
  });

  questionRouter.post('/questions', async (req, res) => {
    const {type, question, options, answer } = req.body;
    const quest = await Bank.find({ type: type })
    if(!quest) {
      const newQuestion = new Bank({
        type: type,
         questions: {
           question: question,
           options: options,
           answer: answer
         }
       });
       newQuestion.save()
       .then(question => {
         res.json(question)
       })
    } else {
      await Bank.findOneAndUpdate({ type: type }, {$push: { questions: {
        question: question,
        options: options,
        answer: answer
      }}})
       .then(question => {
         res.json(question)
       })
    }
  })

module.exports = questionRouter;