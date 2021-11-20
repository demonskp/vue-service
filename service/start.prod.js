const express = require('express');
const history = require('connect-history-api-fallback');
const webpackConfig = require('../webpack.config');

/**
 * 启动开发服务器
 * @param {import('express').Express} app express实例
 */
function startProdService(app) {
  app.all('/api', (req, res) => {
    res.send('hello');
    res.end();
  });

  app.use(history());// history要放在static前面，原理所有html请求并不包含.xx的请求会指向index.html
  app.use(express.static(webpackConfig.output.path));

  app.listen(9000, () => {
    console.log('启动成功：localhost:9000');
  });
}

module.exports = {
  startProdService,
};
