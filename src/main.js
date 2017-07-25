// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index.js'
import { formatTime } from './global/global'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.filter('formatTime', formatTime)
Vue.directive('title', {
    update: function(el, binding) {
        document.title = binding.value
    }
})
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})