<template>
  <div class="mobileView mx-auto" > 
    <!-- nav -->
    <b-nav class="bglightGray border-bottom" >
      <!-- <b-nav-item class="mx-auto" >Admin Panel</b-nav-item> -->
      <!-- <b-nav-text class="mx-auto text-dark" >Admin Panel<b-nav-text> -->
      <p class="mx-auto text-dark mt-2 mb-2 adminFontWeight" >Admin Login</p>
      <!-- <span class="mx-auto text-dark align-middle" >Admin Panel</span> -->
    </b-nav>
    <!-- nav ends -->

            <!-- alert -->
    <b-container>
      <b-alert variant="danger"
              dismissible
              :show="showDismissibleAlert"
              @dismissed="showDismissibleAlert=false">
        Invalid UserName or Password
      </b-alert>
    </b-container>
    <!-- alert ends --> 

    <b-container class="mx-auto my-3" >
      <p class="fontSmall" >all designs of the app will be mobile first i.e., 
        we will design for mobile first then table then website.<br><br>
      i expect 70% of people using this on mobile
      </p>  
    </b-container>

    <!-- form -->
    <b-container >
      <div class="text-center" ><p class="fontMedium" >Login</p></div>
      <b-form>
        <b-input class="mb-2 mr-sm-2 mb-sm-0 form-control-lg" id="inlineFormInputName2" placeholder="UserName" v-model="email" />
        <b-input class="mb-2 mr-sm-2 mb-sm-0 form-control-lg" placeholder="Password" v-model="password" /> <br>
        <div class="text-center" >
        <b-button variant="primary" class="text-center btnWidth btn-lg" @click="login" >Submit</b-button>
        <b-button variant="link" class="text-center btnWidth btn-lg" >Reset Password</b-button>
        </div>
      </b-form>
    </b-container>
    <!-- form ends -->
  </div>
</template>

<script>
import firebase from "firebase";
import loginService from "./../services/login.service.js";
import { sync, get } from "vuex-pathify"; //pathify
export default {
  name: "Home",
  computed: {
    email: sync('email'),
    password: sync('password'),
    showDismissibleAlert: sync('showDismissibleAlert')
  },
  methods: {
    login () {
      if(!this.email || !this.password){
        return
      } 
      loginService.login(this.email, this.password).then(data => {
        console.log(data, 'from login service')
        if(data.message) {
          // alert (data.message)
          this.showDismissibleAlert = true
        } else if(!data.message) {
          alert ('login success')
        }
      }).catch(function(err){
        console.log(err)        
      })

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
.bglightGray {
  background: #F8F8F8;
}
.fontSmall {
  font-size: 14px;
}
.fontMedium {
  font-size: 38px;
  font-weight: bold;
}
.btnWidth {
  width: 100%;
}
.mobileView {
  width: 425px;
  height: 800px;
  box-shadow: 5px 10px 18px #888888;
}
.adminFontWeight {
  font-weight: 600;
}
/* media query */
@media screen and (max-width: 425px) {
  .mobileView {
    border: none;
    box-shadow: none;
  }
}
</style>
