import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
var pc = true
const main = resolve => {
    if (pc) {
        require(['../page/main/main.vue'], resolve)
    }
}
const index = resolve => {
    if (pc) {
        require(['../page/index/index.vue'], resolve)
    }
}
const topic = resolve => {
    if (pc) {
        require(['../page/topic/topic.vue'], resolve)
    }
}
const login = resolve => {
    if (pc) {
        require(['../page/login/login.vue'], resolve)
    }
}
const setting = resolve => {
    if (pc) {
        require(['../page/setting/setting.vue'], resolve)
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
                meta: {
                    keepAlive: true
                }
            },
            {
                path: '/topic/:id',
                name: 'topic',
                component: topic,
                meta: {
                    keepAlive: false
                }
            },
            {
                path: '/login',
                name: 'login',
                component: login,
                meta: {
                    keepAlive: true
                }
            },
            {
                path: '/setting',
                name: 'setting',
                component: setting,
                meta: {
                    keepAlive: true
                }
            }
        ]
    }, ]
})
export default router