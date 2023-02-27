import VueRouter from 'vue-router'
import Vue from 'vue'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'


// 懒加载
const Home = () => import('../components/Home') //component: () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')


// 1.通过ue.use(插件),安装插件
Vue.use(VueRouter)


// 2.创建VueRouter对象
const routes = [
    {
        path: '',
        // 重定向
        redirect: '/home',
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        },
        // 子路由
        children: [
            {
                path: '',
                redirect: 'news',
            },
            {
                path: 'news',
                component: HomeNews
            },
            {
                path: 'message',
                component: HomeMessage
            }
        ]
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        }
    },
    // 动态路由
    {
        path: '/user/:userId',
        component: User,
        meta: {
            title: '用户'
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: '档案'
        }
    }
]
const router = new VueRouter({
    // 1.配置路由和组件的应用关系
    routes,
    // 2.改成  html history模式  url没有'#'
    mode: 'history',
    // 3.修改默认样式名
    // linkActiveClass:'zidingyi'
})

// 全局前置守卫(前置钩子)  (监听跳转)
router.beforeEach((to, from, next) => {
    // console.log(11);
    //To 要进入的  from 要离开的
    document.title = to.matched[0].meta.title
    next()
})
// 全局后置守卫(后置钩子)
router.afterEach((to, from) => {
    // console.log(22);
})


// 3.将VueRouter对象传入到Vue实例
export default router
