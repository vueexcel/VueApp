import Vue from 'vue'
import Vuex from 'vuex'
import {make} from 'vuex-pathify'
import pathify from './pathify'

const state = { 
    email: null,
    password: null,
    showDismissibleAlert: false,
    selected: 'a',
    options: [
        { value: 'a', text: 'Fixed Monthly' },
        { value: 'b', text: 'Floating Monthly' },
        { value: 'c', text: 'Daily' },
        { value: 'd', text: 'Night Plan' },
      ]
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