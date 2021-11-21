const proxy = require('express-http-proxy');
const { envConfig } = require('../../config');

/**
 * 加载所有API转发服务
 * @param {import('express').Express} app express实例
 * @param {String} apiPath 转发的路由前缀
 */
function loadAllServer(app, apiPath = '') {
  const { servers = [] } = envConfig;
  servers.forEach((server) => {
    app.use(apiPath + server.path, proxy(server.proxyTo, server.option));
  });
}

module.exports = {
  loadAllServer,
};
