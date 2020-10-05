const express = require('express');
const app = express();
const request = require('./scrape/request.js');
const parse = require('./scrape/parse.js');
const stateList = require('./data/stateList.js');


app.use(express.json());
stateList.map(state => {
  try {
    request(state.state)
      .then(document => parse(document));
  } catch(error) { console.log(error); }
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
