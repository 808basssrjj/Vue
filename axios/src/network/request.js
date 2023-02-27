import axios from 'axios'

export function request(config, success, failure) {
    // 第一种封装
    // 1.创建axios实例
    // const instance = axios.create({
    //     baseURL: 'http://123.207.32.32:8000',
    //     timeout: 5000
    // })

    // //
    // instance(config)
    //     .then(res => {
    //         success(res)
    //     }).catch(err => {
    //         failure(err)
    //     })


    // 第二种封装
    // return new Promise((resolve, reject) => {
    //     const instance = axios.create({
    //         baseURL: 'http://123.207.32.32:8000',
    //         timeout: 5000
    //     })

    //     //
    //     instance(config)
    //         .then(res => {
    //             resolve(res)
    //         }).catch(err => {
    //             reject(err)
    //         })
    // })


    // 第三种封装 axios已经用了promise,所以直接return
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    //2.拦截器
    // 2.1请求拦截
    instance.interceptors.request.use(config => {
        console.log(config);
        //请求拦截的作用
        //1. config信息不符合服务器的要求
        //2.发送请求前,要在界面中显示一个请求图标  show
        //3.某些请求要携带某些信息 比如(登录token)
        return config //拦截后要返回
    }, err => {
        console.log(err);
    })
    //2.2响应拦截
    instance.interceptors.response.use(res => {
        console.log(res);
        return res.data
    }, err => {
        console.log(err);
    })

    //3.发送网络请求
    return instance(config)
}
