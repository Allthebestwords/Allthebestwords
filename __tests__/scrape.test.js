const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const parse = require('../lib/scrape/parse');
const scrape = require('../lib/scrape/scraper.js');

describe('VTMFOA routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  
  it('returns scraped information with specific date', async() => {
    const scrapedData = await scrape();

    expect(scrapedData).toEqual({
      state: expect.any(String),        
      regUrl: expect.any(String),
      checkRegUrl: expect.any(String),
      abReqUrl: expect.any(String),        
      votingInfo: expect.any(String)
   
    });
  });
});

