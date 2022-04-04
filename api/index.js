const app = require('express')();
//const { v4 } = require('uuid');

app.get('/api', (req, res)=>{
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.json({"test": 'testing purposes'})
});

module.exports = app; 