const express = require('express');
const { startDevService } = require('./start.dev');
const { startProdService } = require('./start.prod');
const { envConfig } = require('../config');

const app = express();

if (envConfig.mode === 'development') {
  startDevService(app);
} else {
  startProdService(app);
}
