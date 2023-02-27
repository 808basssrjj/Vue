<template>
  <div>
    <h2>我是用户页面</h2>
    <p>我是用户信息</p>
    <h2>{{ userId }}</h2>
    <h2>{{ $route.params.userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  created() {
    console.log("user created");
  },
  destroyed() {
    console.log("user destroyed");
  },
  computed: {
    userId() {
      // $route 当前活跃的路由
      return this.$route.params.userId;
    },
  },
};
</script>

<style>
</style>
