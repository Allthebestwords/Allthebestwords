const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const Quote = require('../lib/models/quotes');

describe('Quote model routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('inserts a quote into the database', async() => {
    const createdQuote = await Quote.insert({
      quote: 'All work and no play makes Jack a very dull boy',
      author: 'Stephen King',
      hashtags: ['#scary', '#axemurder', '#timberline']

    });
    const { rows } = await pool.query(
      'SELECT * FROM quotes WHERE id = $1', [createdQuote.id]
    );
    expect(rows[0]).toEqual(createdQuote);

  });

  it('finds a quote by id', async() => {
    const createdQuote = await Quote.insert({
      quote: 'All work and no play makes Jack a very dull boy',
      author: 'Stephen King',
      hashtags: ['#scary', '#axemurder', '#timberline']

    });
    const foundQuote = await Quote.findById(createdQuote.id);
    expect(foundQuote).toEqual({
      id: createdQuote.id,
      quote: 'All work and no play makes Jack a very dull boy',
      author: 'Stephen King',
      hashtags: ['#scary', '#axemurder', '#timberline']

    });

  });




});

