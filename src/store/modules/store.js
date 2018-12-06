import Vue from 'vue'
import Vuex from 'vuex'
import {make} from 'vuex-pathify'
import pathify from './pathify'

const state = { 
    email: null,
    password: null,
    showDismissibleAlert: false
}
const mutations = make.mutations(state)
const actions = {}
const getters = {}
Vue.use(Vuex)
export default new Vuex.Store({
    plugins: [pathify.plugin],
    state,
    mutations,
    actions,
    getters
})