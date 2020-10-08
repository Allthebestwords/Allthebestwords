const states = require('../data/stateList');
const State = require('../models/state');


module.exports = async reqBody => {
  const stateAbbrv = states.find(state => {
    if(state.state === reqBody.toUpperCase() || state.name === reqBody.toUpperCase()) {
      return state;
    }
  });

  
  if(stateAbbrv) return await State.findByAbbrv(stateAbbrv.state);
  return null;
  
};
