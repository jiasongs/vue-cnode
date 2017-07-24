import * as getters from './getters'
import * as mutations from './mutations'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    pageIndex: 0,
    elLocation: null
}
export default new Vuex.Store({
    state,
    modules: {},
    getters,
    mutations
})