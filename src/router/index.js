import Vue from 'vue'
import Router from 'vue-router'

const main = resolve => {
    require.ensure([], () => resolve(require('../page/main/main.vue')), 'group-main')
}
const index = resolve => {
    require.ensure([], () => resolve(require('../page/index/index.vue')), 'group-main')
}
const topic = resolve => {
    require.ensure([], () => resolve(require('../page/topic/topic.vue')), 'group-main')
}
const login = resolve => {
    require.ensure([], () => resolve(require('../page/login/login.vue')), 'group-main')
}
const setting = resolve => {
    require.ensure([], () => resolve(require('../page/setting/setting.vue')), 'group-main')
}
const NotFound = resolve => require(['../page/404/notFound.vue'], resolve)

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        if (to.name == 'topic') {
            console.log(to.name + ':' + savedPosition.y)
            to.meta.refresh = false
        }
        return savedPosition
    } else {
        if (to.name == 'topic') {
            to.meta.refresh = true

        }
        console.log(savedPosition)
        const position = {}
        if (to.hash) {
            position.selector = to.hash
        }
        if (to.matched.some(m => m.meta.scrollToTop)) {
            position.x = 0
            position.y = 0
        }
        return position
    }
}
Vue.use(Router)
const router = new Router({
    mode: 'history',
    base: __dirname,
    scrollBehavior,
    routes: [{
        path: '/index.html',
        redirect: '/home'
    }, {
        path: '*',
        name: 'NotFound',
        component: NotFound
    }, {
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
                    scrollToTop: true,
                }
            },
            {
                path: '/topic/:id',
                name: 'topic',
                component: topic,
                meta: {
                    scrollToTop: true,
                    refresh: true
                }
            },
            {
                path: '/login',
                name: 'login',
                component: login,
                meta: {
                    scrollToTop: true
                }
            },
            {
                path: '/setting',
                name: 'setting',
                component: setting,
                meta: {
                    scrollToTop: true
                }
            }
        ]
    }, ]
})
export default router