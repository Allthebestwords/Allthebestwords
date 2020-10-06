const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');



module.exports = async(state) => {
  const response = await fetch(`https://www.google.com/search?q=how+to+vote+${state}`, {
    headers: {
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36'
    }
  });
  const html = await response.text();
 
  const dom = new JSDOM(html);
  
  return dom.window.document;
};


