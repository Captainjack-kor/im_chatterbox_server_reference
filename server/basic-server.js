const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require('./routes.js');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log(`${req.method}\t ${req.url}`)
  next()
})

app.use('/', routes);
const server = app.listen(3000, () => {
  /* eslint no-console: 0 */
  console.log('chatterbox-serer listen on 3000');
});

module.exports = server;
