const Quote = require('../models/quotes');
const quoteData = require('./quotes');


Promise.all(quoteData.map(quote => {
  return Quote.insert(quote);


}));
