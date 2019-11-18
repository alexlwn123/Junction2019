const questionRouter = require("express").Router();
const Question = require("../models/question");
const Bank = require("../models/bank");

questionRouter.get("/", (req, res) => {
  res.send("<body>Hello Cyber cade</body>");
});

questionRouter.get("/questions", (req, res) => {
  Bank.find({})
    .then(questions => {
      res.json(questions);
    })
    .catch(err => {
      console.log(err);
    });
});

questionRouter.post("/questions", async (req, res) => {
  const { type, question, options, answer } = req.body;
  const quest = await Bank.find({ type: type });
  if (!quest || !quest.length) {
    const newQuestion = new Bank({
      type: type,
      questions: {
        question: question,
        options: options,
        answer: answer
      }
    });
    newQuestion
      .save()
      .then(question => {
        res.json(question);
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    Bank.findOneAndUpdate(
      { type: type },
      {
        $push: {
          questions: {
            question: question,
            options: options,
            answer: answer
          }
        }
      }
    )
      .then(question => {
        res.json(question);
      })
      .catch(err => {
        console.log(err);
      });
  }
});

questionRouter.put('/questions/:id', async (req, res) => {
    const question = Bank.findById({ questions: {_id: req.params.id }})
    console.log(!question)
  if(!question) {
    return res.send({ error: "malformated id"})
  }
  await Bank.findByIdAndUpdate({ questions }, {$pull: { _id: req.params.id}})
  .then(result => {
    return res.status(204).json(result)
  })
  .catch(err => {
    console.log(err);
  });
})

module.exports = questionRouter;
