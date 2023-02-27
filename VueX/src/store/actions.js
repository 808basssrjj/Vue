export default {
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
}