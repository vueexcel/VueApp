<template>
  <div class="mobileView mx-auto">
    <!-- nav -->
    <b-nav class="bglightGray border-bottom">
      <p class="mx-auto text-dark mt-2 mb-2 adminFontWeight">Admin Login</p>
    </b-nav>
    <!-- nav ends -->
    <!-- alert -->
    <b-container>
      <b-alert
        variant="danger"
        dismissible
        :show="showDismissibleAlert"
        @dismissed="showDismissibleAlert=false"
      >Invalid UserName or Password</b-alert>
    </b-container>
    <!-- alert ends -->
    <!-- form -->
    <b-container style="margin-top: 100px;">
      <div class="text-center">
        <p class="fontMedium">Login</p>
      </div>
      <b-form @submit.prevent="login">
        <div class="d-flex border">
          <span class="p-2 w-50">Name</span>
          <b-input class="custom-search-field" type="text" v-model="email"/>
        </div>
        <div class="d-flex border">
          <span class="p-2 w-50">Password</span>
          <b-input class="custom-search-field" type="password" v-model="password"/>
        </div>
        <div class="text-center button">
          <b-button
            type="submit"
            variant="primary"
            class="text-center btnWidth btn-lg submit"
          >Submit</b-button>
          <b-button variant="link" class="text-center btnWidth btn-lg reset">Reset Password</b-button>
        </div>
      </b-form>
    </b-container>
    <!-- form ends -->
  </div>
</template>

<script>
import { sync, call } from "vuex-pathify"; 
export default {
  name: "Home",
  computed: {
    email: sync("adminLogin/email"),
    password: sync("adminLogin/password"),
    showDismissibleAlert: sync("adminLogin/showDismissibleAlert"),
  },
  methods: {
    login_: call('adminLogin/login'),
    login() {
      if (!this.email || !this.password) {
        return;
      }
      this.login_({
        email: this.email,
        password: this.password
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* for input fields */
.custom-search-field:focus,
.custom-search-field {
  border: none;
  color: #495057;
  background-color: #ffffff;
  border-color: rgba(248, 249, 250, 0);
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0);
}
/* for input fields ends */

.button {
  margin-top: 20px;
}
.bglightGray {
  background: #f8f8f8;
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
.container {
  margin-top: 30px;
}
.submit {
  background-color: #387ef5;
  font-size: 16px;
  border-radius: 3px;
}
.reset {
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
