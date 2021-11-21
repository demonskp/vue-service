<template>
  <div>
    <div>
      <label for="tenantCode">企业代码：</label>
      <input type="text" name="tenantCode" v-model="tenantCode" />
    </div>
    <div>
      <label for="userName">账号：</label>
      <input type="text" name="userName" v-model="userName">
    </div>
    <div>
      <label  for="password">密码：</label>
      <input type="passwoord" name="password" v-model="password">
    </div>
    <div>
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
import { loginApi } from '../api';

export default {
  data: () => ({
    tenantCode: 'ywycwcg',
    userName: 'ywycwcg',
    password: 'sh123456',
  }),
  methods: {
    login() {
      loginApi.devLogin({
        tenantCode: this.tenantCode,
        userName: this.userName,
        password: this.password,
      }).then((res) => {
        if (res.code === 200) {
          this.$router.push('/');
        }
      });
    },
  },
};
</script>
