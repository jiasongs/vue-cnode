// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vux from 'vuex'
import axios from 'axios'
import { formatTime } from './global/global'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.filter('formatTime', formatTime)
Vue.use(Vux)
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})