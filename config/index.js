const env = process.argv.env || "development";

const envConfig = require(`./config.${env}.js`);

const config = {
    envConfig,
}

module.exports = config;