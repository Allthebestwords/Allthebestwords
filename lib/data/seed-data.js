const Quote = require('../models/quotes');
const quoteData = require('./quotes');
const fs = require('fs');

Promise.all(quoteData.map(quote => {
  return Quote.insert(quote);


}));
