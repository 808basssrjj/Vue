<template>
  <div id="app">
    <h2>----modules相关----</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{ $store.getters.fullName }}</h2>
    <h2>{{ $store.getters.fullName2 }}</h2>
    <h2>{{ $store.getters.fullName3 }}</h2>
    <button @click="asynUpdateName">异步修改名字</button>
    <hr />

    <h2>----App内容----</h2>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>

    <!-- mutations传参 -->
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudentt">添加学生</button>

    <!-- actions异步操作 -->
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo">修改信息</button>
    <hr />

    <h2>----vuex内容----</h2>
    <vuex />
    <hr />

    <h2>----getters相关----</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20 }}</h2>
    <h2>{{ $store.getters.more20legtn }}</h2>
    <h2>{{ $store.getters.moreage(10) }}</h2>
  </div>
</template>

<script>
import Vuex from "./components/Vuex.vue";
import * as types from "./store/mutations-types";

export default {
  name: "App",
  components: {
    Vuex,
  },
  data() {
    return {
      message: "我是App组件",
      // counter: 0,
    };
  },
  methods: {
    add() {
      //add :事件类型
      //其余的为回调函数
      this.$store.commit(types.INCREATE);
    },
    sub() {
      this.$store.commit(types.DECRMANET);
    },
    addCount(count) {
      //count 参数被称为PayLoad(载荷)
      //1.普通的提交模式
      // this.$store.commit("addCount", count);

      //2.特殊的提交模式
      this.$store.commit({
        type: types.ADDCOUNT,
        count,
      });
    },
    addStudentt() {
      const student = { id: 4, name: "v", age: 50 };
      this.$store.commit(types.ADDSTUDENT, student);
    },
    //异步操作
    // updateInfo() {
    //   this.$store.dispatch("aupdateInfo", {
    //     message: "我是携带的信息",
    //     success: () => console.log("里面完成了"),
    //   });
    // },
    updateInfo() {
      this.$store.dispatch("aupdateInfo", "我是携带的信息").then((res) => {
        console.log("里面完成了");
        console.log(res);
      });
    },

    updateName() {
      this.$store.commit("updateName", "李四");
    },
    asynUpdateName() {
      this.$store.dispatch("aupdateName");
    },
  },
};
</script>

<style>
</style>
