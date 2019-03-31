import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navShow: true
    },
    mutations: {
        changeNavShow(state, flag) {
            state.navShow = flag;
        }
    },
    actions: {}
})
