import Vue from 'vue'
import Router from 'vue-router'
import main from '../page/main/main.vue'
import index from '../page/index/index.vue'
import topic from '../page/topic/topic.vue'
import setting from '../page/setting/setting.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'main',
            component: main,
            children: [{
                    path: '',
                    redirect: '/home'
                },
                {
                    path: '/home',
                    name: 'index',
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
                    path: '/setting',
                    name: 'setting',
                    component: setting,
                    meta: { keepAlive: true }
                }
            ]
        },

    ]
})