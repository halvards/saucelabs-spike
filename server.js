'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const consolidate = require('consolidate');
const path = require('path');
const qs = require('qs');

const app = express();

app.set('view engine', 'mustache');
app.engine('mustache', consolidate.hogan);
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.type('text');
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  let message = req.body ? req.body.message.replace(/[^\w\s]/g, '') : '';
  res.redirect('/?' + qs.stringify({ message }));
});

app.get('/', (req, res) => {
  res.render('index', {
    message: req.query.message
  });
});

const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.log(`App listening on port ${port}`);
});
