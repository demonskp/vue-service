module.exports = {
  mode: 'development',
  publicPath: '/',
  servers: [
    {
      name: 'scanService',
      path: '/scan',
      proxyTo: 'https://pb-sp-test.myysq.com.cn',
      option: null,
    },
  ],
};
