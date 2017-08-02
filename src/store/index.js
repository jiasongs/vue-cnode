import * as getters from './getters'
import * as mutations from './mutations'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    pageIndex: 0,
    isLogin: false,
    currentHaderIndex: 0
}
export default new Vuex.Store({
    state,
    modules: {},
    getters,
    mutations
})