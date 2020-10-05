const State = require('../models/state');

module.exports = states => {
  return Promise.all(
    states.map(state => State.insert(state))
  );
};
