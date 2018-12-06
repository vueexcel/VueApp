import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue' //bootstrapVUE
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store/modules/store' //vuex store
import firebaseService from "./scripts/firebase.service"; //firebase services

Vue.use(BootstrapVue); //bootstrapVUE


Vue.config.productionTip = false
firebaseService.init(); //initialise firebase

new Vue({
  render: h => h(App),
  store //vuex store
}).$mount('#app')
