const pool = require('../utils/pool');

module.exports = class Quote {
  id;
  quote;
  author;
  hashtags;

  constructor(row) {
    this.id = row.id;
    this.quote = row.quote;
    this.author = row.author;
    this.hashtags = row.hashtags;

  }

  static async insert(quote) {
    const { rows } = await pool.query(
      'INSERT INTO quotes (quote, author, hashtags) VALUES ($1, $2, $3) RETURNING * ',
      [quote.quote, quote.author, quote.hashtags]
    );
    return new Quote(rows[0]);
  }

  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM quotes WHERE id=$1',
      [id]
    );
    if(!rows[0]) return null;
    else return new Quote(rows[0]);
  }

};
