import {make} from 'vuex-pathify'
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
export default {
    namespaced: true,
    state,
    mutations,
}