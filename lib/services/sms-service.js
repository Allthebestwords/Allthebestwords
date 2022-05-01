const MessagingResponse = require('twilio').twiml.MessagingResponse;
const requestParser = require('./request-parser');

module.exports = async smsBody => {
  const twiml = new MessagingResponse();
  const foundState = await requestParser(smsBody);
  if(foundState){
    twiml.message(`Here is voting information for the state of ${foundState.state}
    register: ${foundState.regUrl}
    ${foundState.checkRegUrl ? 'check registration: ' + foundState.checkRegUrl : ''}
    ${foundState.abReqUrl ? 'absentee ballot request: ' + foundState.abReqUrl : ''}
    `);
  } else {
    twiml.message('We were unable to process your request. Please reply with valid state name or two letter abbreviation');
  }
  return twiml.toString(); 
};

