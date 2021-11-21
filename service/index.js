const express = require('express');
const bodyParser = require('body-parser');
const { startDevService } = require('./start/start.dev');
const { startProdService } = require('./start/start.prod');
const { envConfig } = require('../config');
const { loadAllServer } = require('./server');
const { loadLocalRouter } = require('./router');

const app = express();
app.use(bodyParser.json());

loadLocalRouter(app);

loadAllServer(app, '/api');

if (envConfig.mode === 'development') {
  startDevService(app);
} else {
  startProdService(app);
}
