const pool = require('../utils/pool');

module.exports = class Quote {
  id;
  quote;
  author;


  constructor(row) {
    this.id = row.id;
    this.quote = row.quote;
    this.author = row.author;

    
  }

  static async insert(quote) {
    const { rows } = await pool.query(
      'INSERT INTO quotes (quote, author) VALUES ($1, $2) RETURNING * ',
      [quote.quote, quote.author]
    );
    return new Quote(rows[0]);
  }

<<<<<<< HEAD
=======

>>>>>>> 12d07d74b772af97607896574a3ab7a8d59eaaae
  static async findById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM quotes WHERE id=$1',
      [id]
    );
    if(!rows[0]) return null;
    else return new Quote(rows[0]);
  }

<<<<<<< HEAD


=======
>>>>>>> 12d07d74b772af97607896574a3ab7a8d59eaaae
};
