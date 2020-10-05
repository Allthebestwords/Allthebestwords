const request = require('./request.js');
const parse = require('./parse.js');
const stateList = require('../data/stateList.js');

module.exports = () => {
  return Promise.all(stateList.map(state => {
    return request(state.state)
      .then(document => parse(document));

  }));
};


