'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.type('text');
  res.send('Hello World!');
});

const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.log(`App listening on port ${port}`);
});
