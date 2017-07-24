import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index/index.vue'
import setting from '../page/setting/setting.vue'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/setting',
            name: 'setting',
            component: setting
        }
    ]
})