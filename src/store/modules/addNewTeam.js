import {make} from 'vuex-pathify'
import addNewTeamService from './../../services/addNewTeam.service'
const state = {
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
        existingMember: null,
        selected: 'a',
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
            },
        ],
    },
}
const mutations = make.mutations(state)
const actions = {
    ...make.actions(state),
    async addNewFunction( { commit },payload) {
        let response = await addNewTeamService.addNew(payload)
        // eslint-disable-next-line
        console.log(response, '555555555555555555555555')
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}