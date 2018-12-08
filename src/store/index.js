import Vue from 'vue'
import Vuex from 'vuex'
import pathify from './../pathify'
import adminLogin from './modules/adminLogin'
import addNewTeam from './modules/addNewTeam'

Vue.use(Vuex)
export default new Vuex.Store({
    plugins: [pathify.plugin],
    modules: {
        adminLogin,
        addNewTeam
    }
})