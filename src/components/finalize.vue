<template>
  <div class="mobileView mx-auto">
    <!-- nav -->
    <b-nav class="bglightGray border-bottom">
      <div class="d-flex">
        <router-link to="/teamNew">
          <p class="mx-auto text-dark mt-2 mb-2">
            <i class="fas fa-chevron-left"></i>
            Add Team
          </p>
        </router-link>
        <span class="mx-auto text-dark mt-2 mb-2 pl-5 adminFontWeight">Finalize</span>
      </div>
    </b-nav>
    <!-- nav ends -->
    <!-- form -->
    <b-container>
      <div>
        <p class="fontMedium">Terms</p>
      </div>
      <b-form @submit.prevent="submitAddNewTeam">
        <div class="text-center">
          <b-button variant="primary" class="text-center btnWidth btn-lg">Edit Details</b-button>
        </div>

        <div class="image mt-3 mb-3" ></div>

        <div class="text-center">
          <b-button variant="primary" class="text-center btnWidth btn-lg">View Agreement</b-button>
        </div>

        <div class="image mt-3 mb-3" ></div>

        <div class="text-center mb-5">
          <b-button variant="primary" class="text-center btnWidth btn-lg">Sign And Send</b-button>
        </div>
      </b-form>
    </b-container>
    <!-- form ends -->
  </div>
</template>

<script>
// import addNewTeamService from "./../services/addNewTeam.service.js";
// import { sync, get } from "vuex-pathify";
export default {
  name: "finalize",
  computed: {  },
  methods: {  }
};
</script>

<style>
/* image div */
.image {
    height: 300px;
    background: lightgray;
}
/* image div ends */
.bglightGray {
  background: #f8f8f8;
}
.fontSmall {
  font-size: 14px;
}
.fontMedium {
  font-size: 25px;
  font-weight: 600;
}
.btnWidth {
  width: 100%;
}
.mobileView {
  width: 425px;
  height: 100%;
  box-shadow: 5px 10px 18px #888888;
}
.adminFontWeight {
  font-weight: 600;
}
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

/* toggle switch */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-top: 7px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
/* toggle switch ends */
/* media query */
@media screen and (max-width: 425px) {
  .mobileView {
    border: none;
    box-shadow: none;
  }
}
</style>
