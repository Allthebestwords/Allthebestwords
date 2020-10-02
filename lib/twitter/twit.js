const Twit = require('twit');
const Quote = require('../models/quotes');


const T = new Twit({
  consumer_key: process.env.APPLICATION_CONSUMER_KEY,
  consumer_secret: process.env.APPLICATION_CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});
const randomNumber = Math.floor(Math.random() * 32);
const randomQuote = Quote.findById(randomNumber);

console.log(randomNumber, randomQuote);

// const ourTweet = T.post('statuses/update', { status: `${randomQuote}` }, (err, data, response) => {
//   console.log(randomQuote);
// });

// module.exports = ourTweet;

