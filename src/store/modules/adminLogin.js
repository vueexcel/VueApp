import {make} from 'vuex-pathify'
import loginService from './../../services/login.service'
import router from './../../router/index'
import config from '../../config/config'
const state = {
        email: null,
        password: null,
        showDismissibleAlert: false,
}
const mutations = make.mutations(state)
const actions = {
    ...make.actions(state),
    login({state,commit}, payload) {
        loginService
            .login(payload.email, payload.password)
            .then(data => {
                if (data.message) {
                    commit('showDismissibleAlert', true)
                } else if (!data.message) {
                    if (data.user.uid === config.adminID) {
                        router.push("/teamNew")
                        commit('email', null)
                        commit('password', null)
                    }
                }
            })
            .catch(function (err) {});
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}