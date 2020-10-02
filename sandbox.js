// const Twit = require('twit');

// const T = new Twit({
//   consumer_key: process.env.APPLICATION_CONSUMER_KEY,
//   consumer_secret: process.env.APPLICATION_CONSUMER_SECRET,
//   access_token: process.env.ACCESS_TOKEN,
//   access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  
// });
// const latestTweet = '';
// const { data } = T.get('statuses/user_timeline', { screen_name: 'GregMall3', count:1 })
//   .then(response => console.log(response.data[0].text, response.data[0].id));

// const stream = T.stream('statuses/sample');

// stream.on('tweet', (tweet) => {
//   console.log(tweet.text);
// });

// T.post('statuses/update', { status: 'hello world!' }, (err, data, response) => {
//   console.log(data);
// });

// T.post('statuses/update', { status: 'something' }, (err, data, response) => {
//   console.log(data);
// });
const request = require('superagent');
const fs = require('fs');
const pool = require('./lib/utils/pool');
const State = require('./lib/models/state');
pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));

const googleKey = process.env.GOOGLE_TOKEN;
const address = '25301';

const zipArray = [
  { state:'AL', zip:'36104' },
  { state:'AK', zip:'99801' },
  { state:'AZ', zip:'85001' },
  { state:'AR', zip:'72201' },
  { state:'CA', zip:'95814' },
  { state:'CO', zip:'80202' },
  { state:'CT', zip:'06103' },
  { state:'DE', zip:'19901' },
  { state:'FL', zip:'32301' },
  { state:'GA', zip:'30303' },
  { state:'HI', zip:'96813' },
  { state:'ID', zip:'83702' },
  { state:'IL', zip:'62701' },
  { state:'IN', zip:'46225' },
  { state:'IA', zip:'50309' },
  { state:'KS', zip:'66603' },
  { state:'KY', zip:'40601' },
  { state:'LA', zip:'70802' },
  { state:'ME', zip:'04330' },
  { state:'MD', zip:'21401' },
  { state:'MA', zip:'02201' },
  { state:'MI', zip:'48933' },
  { state:'MN', zip:'55102' },
  { state:'MS', zip:'39205' },
  { state:'MO', zip:'65101' },
  { state:'MT', zip:'59623' },
  { state:'NE', zip:'68502' },
  { state:'NV', zip:'89701' },
  { state:'NH', zip:'03301' },
  { state:'NJ', zip:'08608' },
  { state:'NM', zip:'87501' },
  { state:'NY', zip:'12207' },
  { state:'NC', zip:'27601' },
  { state:'ND', zip:'58501' },
  { state:'OH', zip:'43215' },
  { state:'OK', zip:'73102' },
  { state:'OR', zip:'97301' },
  { state:'PA', zip:'17101' },
  { state:'RI', zip:'02903' },
  { state:'SC', zip:'29217' },
  { state:'SD', zip:'57501' },
  { state:'TN', zip:'37219' },
  { state:'TX', zip:'78701' },
  { state:'UT', zip:'84111' },
  { state:'VT', zip:'05602' },
  { state:'VA', zip:'23219' },
  { state:'WA', zip:'98507' },
  { state:'WV', zip:'25301' },
  { state:'WI', zip:'53703' },
  { state:'WY', zip:'82001' },
  // { state:'AS', zip:'96799' },
  { state:'DC', zip:'20001' }];
  // { state:'FM', zip:'96941' },
  // { state:'GU', zip:'96910' },
  // { state:'MH', zip:'96960' },
  // { state:'MP', zip:'96950' },
  // { state:'PW', zip:'96939' },
  // { state:'PR', zip:'00901' },
  // { state:'VI', zip:'00802' }];

const dataArray = [];
const sampleData = zipArray.forEach(zip => {
  const queryString = `https://www.googleapis.com/civicinfo/v2/voterinfo/?key=${googleKey}&address=${zip.zip}&electionId=7000`;
  
  const response = request.get(queryString)
    .then(response => {
      const data = response.body.state[0].electionAdministrationBody;
      console.log(data);
      State.insert({
        state: zip.state,
        name: data.name,
        electionInfo: data.electionInfoUrl,
        registrationUrl: data.electionRegistrationUrl,
        votingLocation: data.votingLocationFinderUrl,
        ballotInfo: data.ballotInfoUrl,  
      });});
});
console.table(dataArray);



