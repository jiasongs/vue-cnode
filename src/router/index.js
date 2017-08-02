import Vue from 'vue'
import Router from 'vue-router'
import main from '../page/main/main.vue'
// import index from '../page/index/index.vue'
import topic from '../page/topic/topic.vue'
import login from '../page/login/login.vue'
import setting from '../page/setting/setting.vue'
Vue.use(Router)
var pc = true
const index = resolve => {
    if (pc) {
         require(['../page/index/index.vue'], resolve)
    }
}
const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: main,
        children: [{
                path: '',
                redirect: '/home'
            },
            {
                path: '/home',
                name: 'home',
                component: index,
                meta: { keepAlive: true }
            },
            {
                path: '/topic/:id',
                name: 'topic',
                component: topic,
                meta: { keepAlive: false }
            },
            {
                path: '/login',
                name: 'login',
                component: login,
                meta: { keepAlive: true }
            },
            {
                path: '/setting',
                name: 'setting',
                component: setting,
                meta: { keepAlive: true }
            }
        ]
    }, ]
})
export default router

