import Vue from 'vue'
import Vuex from 'vuex'
import {make} from 'vuex-pathify'
import pathify from './pathify'

const state = {
    email: null,
    password: null,
    showDismissibleAlert: false,
    selected: 'a', //page 2 form field
    options: [{
            value: 'a',
            text: 'Fixed Monthly'
        },
        {
            value: 'b',
            text: 'Floating Monthly'
        },
        {
            value: 'c',
            text: 'Daily'
        },
        {
            value: 'd',
            text: 'Night Plan'
        }, //page 2 form field
    ],
    // page 2 form fields
    form: {
        name: null,
        email: null,
        phone: null,
        agreedRate: null,
        numberOfSeats: 1,
        // optional Fields
        companyName: null,
        pan: null,
        idProof: null,
        address: null,
        dateOfCommencemet: null,
        duration: null,
        seatsAssigned: null,
        workingHours: null,
        existingMember: null
    },
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