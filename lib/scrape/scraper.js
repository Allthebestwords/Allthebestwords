const request = require('./request.js');
const parse = require('./parse.js');
const stateList = require('../data/stateList.js');
const State = require('../models/state.js');

module.exports = () => {
  return Promise.all(stateList.map(stateObj => {
    return request(stateObj)
      .then(document => parse(document))
      .then(state => State.insert(state));

  }));
};


