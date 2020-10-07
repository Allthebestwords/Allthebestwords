const { Router } = require('express');
const createTwiml = require('../services/sms-service');


module.exports = Router()
  .post('/', (req, res, next) => {
    createTwiml(req.body.Body)
      .then(twimlMessage => {
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twimlMessage);
      });

    
  });
