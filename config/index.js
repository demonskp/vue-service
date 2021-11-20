const env = process.env.NODE_ENV || 'development';

// eslint-disable-next-line import/no-dynamic-require
const envConfig = require(`./config.${env}.js`);

const config = {
  envConfig,
};

module.exports = config;
