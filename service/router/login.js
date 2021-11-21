/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const { default: axios } = require('axios');
const qs = require('qs');

module.exports = [
  {
    name: 'devLogin',
    path: '/devLogin',
    /**
     * 控制器
     * @param {import('express').Request} req 请求
     * @param {*} res 返回
     */
    controller: async (req, res) => {
      const { tenantCode, userName, password } = req.body || {};
      try {
        const result = await axios.post('https://passport-pbsp-test.myysq.com.cn/auth/login', {
          tenantCode,
          userName,
          password,
        }, {
          transformRequest: [(data) => {
            let ret = '';
            for (const it in data) {
              ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`;
            }
            ret = ret.substring(0, ret.lastIndexOf('&'));
            return ret;
          }],
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        const redireRequest = result.request || {};
        if (!redireRequest.path) {
          throw new Error('登录失败');
        }
        const returnUrl = redireRequest.path.split('?')[1] || '';
        const redireQs = qs.parse(returnUrl);
        const returnParams = redireQs.returnUrl.split('?')[1] || '';
        const returnQs = qs.parse(returnParams);

        res.cookie('TEST_MYPB_ID', returnQs.sid, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
        res.json({
          code: 200,
          msg: '',
          data: {
            returnQs,
          },
        });
      } catch (error) {
        console.error(error);
        res.json({
          code: 1000,
          msg: '请求失败',
        });
      }
    },
  },
];
