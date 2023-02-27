import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


//1.基本使用
axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get',
  // get用params  post用data
  params: {}
}).then(res => {
  console.log(res);
})


//3.全局配置
axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000


//2.发送并发请求
axios.all([axios({
  url: '/home/multidata',
}), axios({
  url: "https://autumnfish.cn/search",
  params: {
    keywords: 'blinding lights'
  }
})
  // ]).then((results) => {
  //   console.log(results);
  // })
]).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}))


//4.创建axios实例
const instance1 = axios.create({
  baseURL: 'https://autumnfish.cn',
  timeout: 5000,
  // headers: headers
})
instance1({
  url: '/search',
  params: {
    keywords: 'blinding lights'
  },
  method: 'get'
}).then(res => {
  console.log(res);
})

const instance2 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 6000,
  headers: {}
})


//5.封装request模块
import { request } from './network/request';

request({
  url: '/home/multidata',
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
