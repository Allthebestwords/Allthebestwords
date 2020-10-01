const Twit = require('twit');

const T = new Twit({
  consumer_key: process.env.APPLICATION_CONSUMER_KEY_HERE,
  consumer_secret: process.env.APPLICATION_CONSUMER_SECRET_HERE,
  access_token: process.env.ACCESS_TOKEN_HERE,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET_HERE
});
const latestTweet = '';
const { data } = T.get('statuses/user_timeline', { screen_name: 'realdonaldtrump', count:1 })
  .then(response => console.log(response.data[0].text));

// const stream = T.stream('statuses/sample');

// stream.on('tweet', (tweet) => {
//   console.log(tweet.text);
// });
