const express = require('express');
const app = express();
const State = require('./models/state');
const http = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
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

app.post('/sms', async(req, res) => {
  const twiml = new MessagingResponse();
  const smsBody = req.body.Body;
  const { state, regUrl, checkRegUrl, abReqUrl, votingInfo  } = await State.findById(smsBody);
  
  twiml.message(`Here is voting information for the state of ${state}
  register: ${regUrl}
  ${checkRegUrl ? 'check registration: ' + checkRegUrl : ''}
  ${abReqUrl ? 'absentee ballot request:' + abReqUrl : ''}
  ${votingInfo}`);

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
  
});

http.createServer(app).listen(1338, () => {
  console.log('Express server listening on port 1337');
});



app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
