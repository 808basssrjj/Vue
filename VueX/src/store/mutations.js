import * as types from './mutations-types'

export default {
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
}