const State = require('../lib/models/state');
const requestParser = require('../lib/services/request-parser');
const fs = require('fs');
const pool = require('../lib/utils/pool');
const seedData = require('../lib/data/seed-data');

describe('test request-parser', () => {
  beforeEach(() => {
    pool.query(fs.readFileSync('./sql/setup.SQL', 'utf-8'));
    return seedData();
  });
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
