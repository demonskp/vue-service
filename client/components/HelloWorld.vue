<template>
  <div class="hello">
    <h1 @click="clickHandle">{{ msg }}</h1>
    <div>{{ testData }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      data: 1,
    };
  },
  methods: {
    clickHandle() {
      axios.post('https://passport-pbsp-test.myysq.com.cn/auth/login', {
        tenantCode: 'ywycwcg',
        userName: 'ywycwcg',
        password: 'sh123456',
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
      }).then((res) => {
        console.log(1111, res);
      });
    },
  },
  computed: {
    ...mapState({
      testData: 'testData',
    }),

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
