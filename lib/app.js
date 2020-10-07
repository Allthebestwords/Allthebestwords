const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/sms', require('./controllers/sms'));


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
