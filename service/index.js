const express = require('express');
const { startDevService } = require('./start/start.dev');
const { startProdService } = require('./start/start.prod');
const { envConfig } = require('../config');

const app = express();

if (envConfig.mode === 'development') {
  startDevService(app);
} else {
  startProdService(app);
}
