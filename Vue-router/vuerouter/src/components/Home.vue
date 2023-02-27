<template>
  <div>
    <h2>我是主页</h2>
    <p>我是主页内容</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    console.log("home created");
  },
  destroyed() {
    console.log("home destroyed");
  },
  // 使用了keep-alive才有效
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
};
</script>

<style>
</style>
