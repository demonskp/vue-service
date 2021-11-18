const env = process.env.NODE_ENV || "development";

const envConfig = require(`./config.${env}.js`);

const config = {
    envConfig,
}

module.exports = config;