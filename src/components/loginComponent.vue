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

    <!-- <b-container class="mx-auto my-3" >
      <p class="fontSmall" >all designs of the app will be mobile first i.e., 
        we will design for mobile first then table then website.<br><br>
      i expect 70% of people using this on mobile
      </p>  
    </b-container> -->

    <!-- form -->
    <b-container style="margin-top: 100px;">
      <div class="text-center" ><p class="fontMedium" >Login</p></div>
      <b-form>
        <div class="input">
          <span class="username">Username</span>
          <b-input type="text" class="mr-sm-2 form-control-lg username-input" id="inlineFormInputName2" v-model="email" />
        </div>
        <div class="input">
          <span class="username">Password</span>
          <b-input type="password" class=" mr-sm-2 form-control-lg username-input" v-model="password" /> <br>
        </div>
        <div class="text-center button" >
        <b-button variant="primary" class="text-center btnWidth btn-lg submit" @click="login" >Submit</b-button>
        <b-button variant="link" class="text-center btnWidth btn-lg reset" >Reset Password</b-button>
        </div>
      </b-form>
    </b-container>
    <!-- form ends -->
  </div>
</template>

<script>
import loginService from "./../services/login.service.js";
import { sync } from "vuex-pathify"; //pathify
export default {
  name: "Home",
  computed: {
    email: sync('email'),
    password: sync('password'),
    showDismissibleAlert: sync('showDismissibleAlert')
  },
  methods: {
    login () {
      // console.log(process.env)
      if(!this.email || !this.password){
        return
      } 
      loginService.login(this.email, this.password).then(data => {
        if(data.message) {
          this.showDismissibleAlert = true
        } else if(!data.message) {
          console.log(data)
          if (data.user.uid === process.env.VUE_APP_ADMIN_ID) {
            
            this.$router.push('/addnewteam')
          }
        }
      }).catch(function(err){
        // eslint-disable-next-line
        console.log(err)        
      })

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input{
  display: flex;
  border: 1px solid #ced4da;
  border-radius: 3px;
}
.username{
  margin-top: 8px;
  font-size: 15px;
  padding: 8px;
}
.username-input{
  border: none;
  font-size: 15px;
}
.button{
  margin-top: 20px;
}
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
.container{
  margin-top: 30px;
}
.submit{
  background-color: #387ef5;
  font-size: 16px;
  border-radius: 3px;
}
.reset{
  font-size: 10px;
  margin-top: 20px;
  color: #b2b2b2;
}
/* media query */
@media screen and (max-width: 425px) {
  .mobileView {
    border: none;
    box-shadow: none;
  }
}
</style>
