const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const questionRouter  = require('./routes/question');

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.set("useCreateIndex", true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useUnifiedTopology', true);
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected to database ", MONGODB_URI);
  })
  .catch(err => {
    console.log(err);
  });
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use('/', questionRouter);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
