const State = require('../lib/models/state');
const requestParser = require('../lib/services/request-parser');

describe('test request-parser', () => {
  it('should return a state object given a state name', async() => {
    const Oregon = await State.findById('OR');
    const response = await requestParser('Oregon');

    expect(Oregon).toEqual(response);
  });

  it('should return a state object given a state abbreviation', async() => {
    const Oregon = await State.findById('OR');
    const response = await requestParser('Or');

    expect(Oregon).toEqual(response);
  });
});
