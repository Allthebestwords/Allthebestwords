const states = require('../data/stateList');
const State = require('../models/state');


module.exports = async reqBody => {

  const location = reqBody.toUpperCase().trim();
  
  const stateAbbrv = states.find(state => {
    if(state.state === location || state.name === location) {
      return state;
    }
  });
  
  if(stateAbbrv) {
    return await State.findByAbbrv(stateAbbrv.state);
  } else { return null; }
  
  
};
