const Twit = require('twit');

const T = new Twit({
  consumer_key: process.env.APPLICATION_CONSUMER_KEY,
  consumer_secret: process.env.APPLICATION_CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  
});
const latestTweet = '';
const { data } = T.get('statuses/user_timeline', { screen_name: 'GregMall3', count:1 })
  .then(response => console.log(response.data[0].text, response.data[0].id));

// const stream = T.stream('statuses/sample');

// stream.on('tweet', (tweet) => {
//   console.log(tweet.text);
// });

// T.post('statuses/update', { status: 'hello world!' }, (err, data, response) => {
//   console.log(data);
// });

T.post('statuses/update', { status: 'something' }, (err, data, response) => {
  console.log(data);
});
