const Quote = require('../models/quotes');
const quoteData = require('./quotes');
const scraper = require('../scrape/scraper');
const pool = require('../utils/pool');
const fs = require('fs');


pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
Promise.all(
    
  quoteData.map(quote => {
    return Quote.insert(quote);
  }),
  scraper()
);


 
