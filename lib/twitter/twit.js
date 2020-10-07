const Twit = require('twit');
const Quote = require('../models/quotes');
const fs = require('fs');
const b64content = fs.readFileSync('./assets/votebuttonstweetpiuc.jpg', { encoding: 'base64' });

const T = new Twit({
  consumer_key: process.env.APPLICATION_CONSUMER_KEY,
  consumer_secret: process.env.APPLICATION_CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});
const targetUser = '1280903134290665472';
const dataStream = T.stream('statuses/filter', { follow: targetUser });

dataStream.on('tweet', (tweet) => { 
  console.log(tweet.user.id_str);
  if(tweet.user.id_str === targetUser){
    const randomNumber = Math.ceil(Math.random() * 32);
    Quote.findById(randomNumber)
      .then(randomQuote => {
        T.post('media/upload', { media_data: b64content }, (err, data, response) => {
        
          const mediaIdStr = data.media_id_string;
          const altText = 'TEXT <your state name> TO 205-546-1706.';
          const meta_params = { media_id: mediaIdStr, alt_text: { text: altText } };
       
          T.post('media/metadata/create', meta_params, (err, data, response) => {
            if(!err) {
           
              const params = { status: `@${tweet.user.screen_name}${randomQuote.quote} \n  -${randomQuote.author} \n ${randomQuote.hashtags} \n `, in_reply_to_status_id: tweet.id_str, media_ids: [mediaIdStr] };
       
              T.post('statuses/update', params, (err, data, response) => {
                console.log(data);
              });
            } else console.log(err);
          
          });
        });
      
      });
  } 

});




