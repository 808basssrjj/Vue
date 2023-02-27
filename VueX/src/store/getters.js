export default {
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
}