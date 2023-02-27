import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import moduleA from './modules/moduleA'

//1.安装插件
Vue.use(Vuex)

//2.创建对象

const state = {
    counter: 10,
    students: [
        { id: 1, name: 'a', age: 18 },
        { id: 2, name: 'b', age: 30 },
        { id: 3, name: 'c', age: 40 }
    ],
    info: { name: 'codewhy', age: 100 }
}
const store = new Vuex.Store({
    //1.存放状态
    state,
    //2.类似计算属性
    getters,
    //3.改变state
    mutations,
    //4.类似于mutations 代替用来进行异步操作
    actions,
    //5.分成多个模块 每个模块都用自己的以上属性
    modules: {
        a: moduleA
    }
})

//3.导出
export default store