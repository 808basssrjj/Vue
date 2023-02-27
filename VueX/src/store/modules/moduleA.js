export default {
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