const loginRouters = require('./login');

const routers = [
  {
    name: 'hello',
    path: '/hello',
    controller: (req, res) => {
      res.send('hello');
    },
  },
  ...loginRouters,
];

/**
 * 加载前端本地服务
 * @param {import('express').Express} app Express实例
 */
function loadLocalRouter(app) {
  routers.forEach((router) => {
    app.use(router.path, router.controller);
  });
}

module.exports = {
  loadLocalRouter,
};
