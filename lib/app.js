const express = require('express');
const app = express();
const State = require('./models/state');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/v1/voteInfo/:abbrv', async(req, res, next) => {
  try {
    const data = await State.findById(req.params.abbrv);
    res.json(data);
  } catch(error) {
    next(error);
  }
});

app.use('/sms', require('./controllers/sms'));


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
