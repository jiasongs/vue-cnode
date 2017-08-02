import Vue from 'vue'
import Router from 'vue-router'
var pc = true
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
        // savedPosition is only available for popstate navigations.
        console.log(savedPosition.y)
        return savedPosition
    } else {
        const position = {}
            // new navigation.
            // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
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
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        },
        {
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
                    meta: { keepAlive: true, scrollToTop: true }
                },
                {
                    path: '/topic/:id',
                    name: 'topic',
                    component: topic,
                    meta: { keepAlive: true, scrollToTop: true }
                },
                {
                    path: '/login',
                    name: 'login',
                    component: login,
                    meta: { keepAlive: true, scrollToTop: true }
                },
                {
                    path: '/setting',
                    name: 'setting',
                    component: setting,
                    meta: { keepAlive: true, scrollToTop: true }
                }
            ]
        },
    ]
})
export default router