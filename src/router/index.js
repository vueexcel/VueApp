import Vue from 'vue'
import Router from 'vue-router'
import Login from './../pages/Login'
import TeamNew from './../pages/AddNewTeam.vue'

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
        }
    ]
})