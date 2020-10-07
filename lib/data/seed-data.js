const Quote = require('../models/quotes');
const quoteData = require('./quotes');
const scraper = require('../scrape/scraper');


module.exports = () => {
  Promise.all(
    quoteData.map(quote => {
      return Quote.insert(quote);
    }),
    scraper()
  );
};

 
