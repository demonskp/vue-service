const express = require('express');
const { startDevService } = require('./start/start.dev');
const { startProdService } = require('./start/start.prod');
const { envConfig } = require('../config');
const { loadAllServer } = require('./server');

const app = express();

app.get('/sss', (req, res) => {
  res.send('sdadasd');
  res.end();
});

loadAllServer(app, '/api');

if (envConfig.mode === 'development') {
  startDevService(app);
} else {
  startProdService(app);
}
