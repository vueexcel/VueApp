import Vue from 'vue'
import Router from 'vue-router'
import Login from './../pages/Login'
import TeamNew from './../pages/AddNew.vue'
import Finalize from './../pages/Finalize.vue'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [{
            path: '',
            name: 'login',
            component: Login
        },
        {
            path: '/teamNew',
            name: 'teamNew',
            component: TeamNew
        },
        {
            path: '/finalize',
            name: 'finalize',
            component: Finalize
        }
    ]
})