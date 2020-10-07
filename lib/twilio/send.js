const accountSid = process.env.ACCOUNT_SID_TWILIO;
const authToken = process.env.AUTH_TOKEN_TWILIO;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'This is OUR BOT!?',
    from: '+12055461706',
    to: '+15032010100'
  })
  .then(message => console.log(message.sid));


