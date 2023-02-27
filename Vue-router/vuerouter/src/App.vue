<template>
  <div id="app">
    <h2>我是App组件</h2>

    <!-- 1.tag属性(不修改默认为a链接)  2.replace属性:无法返回 默认为pushState  3.active-class:改变样式名-->
    <router-link to="/home" tag="button" replace active-class="active"
      >首页</router-link
    >
    <router-link to="/about" tag="button" replace active-class="active"
      >关于</router-link
    >
    <!-- 动态路由 -->
    <!-- <router-link v-bind:to="'/user/' + userID" replace>我的</router-link> -->

    <!-- query传参 -->
    <!-- <router-link :to="{path:'/profile', query:{name:'why',age:'18'}}" >档案</router-link> -->

    <!-- 代码方式修改路径 -->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <!-- 路由出口 -->
    <!-- <router-view></router-view> -->

    <!-- 会被缓存  include:包含  exclude:排除-->
    <keep-alive exclude="Profile">
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userID: "lisi",
    };
  },
  methods: {
    userClick() {
      //代码方式修改路径
      this.$router.push("/user/" + this.userID);
      // this.$router.replace("./home");
    },
    profileClick() {
      //query传参
      this.$router.push({
        path: "/profile",
        query: {
          name: "zhangsan",
          age: 100,
        },
      });
    },
  },
};
</script>

<style>
/* 活跃时自动添加 */
/* .router-link-active {
  color: pink;
} */
.active {
  color: red;
}
</style>
