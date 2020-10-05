const request = require('./request.js');
const parse = require('./parse.js');
const stateList = require('../data/stateList.js');

module.exports = async() => {
  return await Promise.all(stateList.map(state => {
    try {
      request(state.state)
        .then(document => parse(document));
    } catch(error) { console.log(error); }
  }));
};


