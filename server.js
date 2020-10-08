const app = require('./lib/app');
const pool = require('./lib/utils/pool');

const PORT = process.env.PORT || 7890;
const twitBot = require('./lib/twitter/twit');

// const seed = require('./lib/data/seed-data');
twitBot();
// seed();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Started on ${PORT}`);
});

process.on('exit', () => {
  console.log('Goodbye!');
  pool.end();
});
