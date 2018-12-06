import Vue from  'vue'
import Router from  'vue-router'
import Login from './../pages/Login'
import AddNewTeam from './../pages/AddNewTeam'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name:'login',
            component: Login
        },
        {
            path:'/addnewteam',
            name: 'addnewteam',
            component: AddNewTeam
        }
    ]
})