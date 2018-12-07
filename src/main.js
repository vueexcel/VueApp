import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue' //bootstrapVUE
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebaseService from "./scripts/firebase.service";
import router from './router'
import store from './store/modules/store'


Vue.use(BootstrapVue); //bootstrapVUE


Vue.config.productionTip = false
firebaseService.init(); //initialise firebase

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')