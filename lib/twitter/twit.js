const Twit = require('twit');
const Quote = require('../models/quotes');


const T = new Twit({
  consumer_key: process.env.APPLICATION_CONSUMER_KEY,
  consumer_secret: process.env.APPLICATION_CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});
const dataStream = T.stream('statuses/filter', { track: [1167987584967905281] });
dataStream.on('tweet', () => { 
  console.log(dataStream);
  const randomNumber = Math.floor(Math.random() * 32);
  Quote.findById(randomNumber)
    .then(randomQuote => {
      T.post('statuses/update', { status: `${randomQuote.quote} \n  -${randomQuote.author} \n ${randomQuote.hashtags}` }, (err, data, response) => {
        console.log(randomQuote);
      });
    });

});
// console.log(dataStream);
// const randomNumber = Math.floor(Math.random() * 32);
// Quote.findById(randomNumber)
//   .then(randomQuote => {
//     T.post('statuses/update', { status: `${randomQuote.quote} \n  -${randomQuote.author} \n ${randomQuote.hashtags}` }, (err, data, response) => {
//       console.log(randomQuote);
//     });
//   });






