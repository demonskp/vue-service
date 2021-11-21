<template>
  <div class="about">
    <h1 @click="clickHandle">This is an about page</h1>
  </div>
</template>
<script>
import { userApi } from '../api';

export default {
  data() {
    return {
      a: 1,
    };
  },
  methods: {
    clickHandle() {
      userApi.getUserConfig().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
