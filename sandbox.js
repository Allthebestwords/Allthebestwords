const quotes = require('./lib/data/quotes');


const counts = quotes.map(quote => {
  let charCount = 29;
  charCount += quote.quote.length;
  charCount += quote.author.length;
  
  return { ...quote, charCount };
}).filter(quote => quote.charCount > 260);

console.log(counts);
console.log(quotes.length);


