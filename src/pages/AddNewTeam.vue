<template>
  <div class="mobileView mx-auto">
    <!-- nav -->
    <b-nav class="bglightGray border-bottom">
      <div class="d-flex">
        <router-link to="/">
          <p class="mx-auto text-dark mt-2 mb-2">
            <i class="fas fa-chevron-left"></i>
            Admin Login
          </p>
        </router-link>
        <span class="mx-auto text-dark mt-2 mb-2 pl-5 adminFontWeight">Add New Team</span>
      </div>
    </b-nav>
    <!-- nav ends -->
    <!-- form -->
    <b-container>
      <div>
        <p class="fontMedium">Add Team</p>
      </div>
      <b-form @submit.prevent="submitAddNewTeam">
        <div class="d-flex border">
          <span class="p-2 w-50">Name</span>
          <b-input v-model="name" class="custom-search-field"/>
        </div>
        <div class="d-flex border-left border-right">
          <span class="p-2 w-50">Email ID</span>
          <b-input v-model="email" type="email" class="custom-search-field"/>
        </div>
        <div class="d-flex border">
          <span class="p-2 w-50">Phone No</span>
          <b-input v-model="phone" type="number" class="custom-search-field"/>
        </div>
        <div class="d-flex border-left border-right">
          <span class="p-2 w-50">Agreed Rate</span>
          <b-input v-model="agreedRate" type="number" class="custom-search-field"/>
        </div>
        <div class="d-flex border-left border-right border-top">
          <span class="p-2 w-75">Number of Seats</span>
          <b-input v-model="numberOfSeats" type="number" class="custom-search-field"/>
        </div>
        <div class="d-flex border">
          <span class="p-2 w-100">Plan</span>
          <b-form-select v-model="selected" :options="options" class="custom-search-field"/>&nbsp;
        </div>

        <div class="d-flex border">
          <span class="p-2 w-50">Company Name</span>
          <b-input v-model="companyName" class="custom-search-field"/>
        </div>
        <div class="d-flex border-left border-right">
          <span class="p-2 w-50">Pan</span>
          <b-input v-model="pan" class="custom-search-field"/>
        </div>
        <div class="d-flex border">
          <span class="p-2 w-100">Aadhar Card/Id Proof No</span>
          <b-input v-model="idProof" type="number" class="custom-search-field"/>
        </div>
        <div class="d-flex border-left border-right">
          <span class="p-2 w-50">Address</span>
          <b-input v-model="address" class="custom-search-field"/>
        </div>
        <div class="d-flex border">
          <span class="p-2 w-100">Date of Commencemet</span>
          <b-input v-model="dateOfCommencemet" type="date" class="custom-search-field"/>
        </div>
        <div class="d-flex border-left border-right">
          <span class="p-2 w-50">Duration</span>
          <b-input v-model="duration" type="number" class="custom-search-field"/>
        </div>
        <div class="d-flex border">
          <span class="p-2 w-50">Seats Assigned</span>
          <b-input v-model="seatsAssigned" type="number" class="custom-search-field"/>
        </div>
        <div class="d-flex border-left border-right">
          <span class="p-2 w-50">Working Hours</span>
          <b-input v-model="workingHours" type="number" class="custom-search-field"/>
        </div>
        <div class="d-flex border">
          <span class="p-2 w-75">Existing Members</span>
          <label class="switch">
            <input v-model="existingMember" type="checkbox">
            <span class="slider round"></span>
          </label>
        </div>&nbsp;
        <div class="text-center">
          <b-button variant="primary" class="text-center btnWidth btn-lg" type="submit">Submit</b-button>
        </div>
      </b-form>
    </b-container>
    <!-- form ends -->
  </div>
</template>

<script>
import addNewTeamService from "./../services/addNewTeam.service.js";
import { sync, get } from "vuex-pathify";
export default {
  name: "AddNewTeam",
  computed: {
    selected: sync("addNewTeam/form@selected"), //input field PLAN
    options: sync("addNewTeam/form@options"), //input field PLAN
    // form fields
    name: sync("addNewTeam/form@name"),
    email: sync("addNewTeam/form@email"),
    phone: sync("addNewTeam/form@phone"),
    agreedRate: sync("addNewTeam/form@agreedRate"),
    numberOfSeats: sync("addNewTeam/form@numberOfSeats"),
    // optional Fields
    companyName: sync("addNewTeam/form@companyName"),
    pan: sync("addNewTeam/form@pan"),
    idProof: sync("addNewTeam/form@idProof"),
    address: sync("addNewTeam/form@address"),
    dateOfCommencemet: sync("addNewTeam/form@dateOfCommencemet"),
    duration: sync("addNewTeam/form@duration"),
    seatsAssigned: sync("addNewTeam/form@seatsAssigned"),
    workingHours: sync("addNewTeam/form@workingHours"),
    existingMember: sync("addNewTeam/form@existingMember"), //checkbox
    formData: get("addNewTeam/form") //formData
  },
  methods: {
    submitAddNewTeam() {
      if (
        !this.name ||
        !this.email ||
        !this.phone ||
        !this.agreedRate ||
        !this.numberOfSeats
      ) {
        alert("first five fields are mandatory");
      } else {
        let response = addNewTeamService.addNew(this.formData);
      }
    }
  }
};
</script>

<style>
.bglightGray {
  background: #f8f8f8;
}
.fontSmall {
  font-size: 14px;
}
.fontMedium {
  font-size: 25px;
  font-weight: bold;
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
