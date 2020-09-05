import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex);

import moduleSlider from './slider/moduleSlider.js'
import moduleCommon from './common/moduleCommon.js'

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        moduleSlider: moduleSlider,
        moduleCommon: moduleCommon,
    },
    strict: process.env.NODE_ENV !== 'production'
})
