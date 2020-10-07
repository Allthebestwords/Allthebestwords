const accountSid = process.env.ACCOUNT_SID_TWILIO;
const authToken = process.env.AUTH_TOKEN_TWILIO;
const State = require('../models/state');
const MessagingResponse = require('twilio').twiml.MessagingResponse;


module.exports = async smsBody => {
  const twiml = new MessagingResponse();
  console.log(smsBody);
  const { state, regUrl, checkRegUrl, abReqUrl, votingInfo  } = await State.findById(smsBody);
  
  twiml.message(`Here is voting information for the state of ${state}
  register: ${regUrl}
  ${checkRegUrl ? 'check registration: ' + checkRegUrl : ''}
  ${abReqUrl ? 'absentee ballot request:' + abReqUrl : ''}
  ${votingInfo}`);
  return twiml.toString(); 
};

