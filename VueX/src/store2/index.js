import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutations-types'


//1.安装插件
Vue.use(Vuex)

//2.创建对象

//A模块
const moudelA = {
    state: {
        name: '张三',
    },
    getters: {
        fullName(state) {
            return state.name + '111'
        },
        fullName2(state, getters) {
            return getters.fullName + '222'
        },
        fullName3(state, getters, rootState) {
            return getters.fullName2 + rootState.counter 
        }
    },
    mutations: {
        updateName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        aupdateName(context) {
            setTimeout(() => {
                console.log(context)
                context.commit('updateName', '王五')
            }, 2000)
        }
    },
}

//主模块
const store = new Vuex.Store({
    //1.存放状态
    state: {
        counter: 10,
        students: [
            { id: 1, name: 'a', age: 18 },
            { id: 2, name: 'b', age: 30 },
            { id: 3, name: 'c', age: 40 }
        ],
        info: { name: 'codewhy', age: 100 }
    },
    //2.类似计算属性
    getters: {
        powerCounter(state) {
            return state.counter ** 2
        },
        more20(state) {
            return state.students.filter(s => s.age > 20)
        },
        more20legtn(state, getters) {
            return getters.more20.length
        },
        //传参
        moreage(state) {
            // return function (age) {
            //     return state.students.filter(s => s.age > age)
            // }
            return age => {
                return state.students.filter(s => s.age > age)
            }
        }
    },
    //3.改变state
    mutations: {
        [types.INCREATE](state) {
            state.counter++
        },
        [types.DECRMANET](state) {
            state.counter--
        },
        //1.第一种提交方式
        // addCount(state, count) {
        //     state.counter += count
        // },
        //2.特殊的提交方式
        [types.ADDCOUNT](state, payload) {
            state.counter += payload.count
        },
        [types.ADDSTUDENT](state, student) {
            state.students.push(student)
        },
        updateInfo(state) {
            state.info.name = "nnnn"
        }
    },
    //4.类似于mutations 代替用来进行异步操作
    actions: {
        // aupdateInfo(context, payload) {
        //     setTimeout(() => {
        //         context.commit('updateInfo')
        //         // console.log(payload.message);
        //         // payload.success()   
        //     }, 1000)
        // },
        aupdateInfo(context, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    context.commit('updateInfo')
                    console.log(payload);

                    resolve(11111)
                }, 1000)
            })
        }
    },
    //5.分成多个模块 每个模块都用自己的以上属性
    modules: {
        a: moudelA
    }
})

//3.导出
export default store