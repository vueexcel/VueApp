<template>
    <div class="mobileView mx-auto" > 
    <!-- nav -->
    <b-nav class="bglightGray border-bottom" >

      <div class="d-flex" >
          <router-link to="/">
            <p class="mx-auto text-dark mt-2 mb-2" >
                <i class="fas fa-chevron-left"></i>
                Admin Login
            </p>
          </router-link>
          <span class="mx-auto text-dark mt-2 mb-2 pl-5 adminFontWeight" >Add New Team</span>
      </div>
    </b-nav>
    <!-- nav ends -->

    <b-container class="mx-auto my-3" >
      <p class="fontSmall" > This page is for coworking admin to add new teams.<br>
      Add stage we will only add Manager of the coworking space <br>
      These terms are important
      <ol>
          <li>admin is the coworking owner</li>
          <li>client/team is the person taking coworking</li>
          <li>manager is the coworking staff</li>
      </ol>
      </p>  
    </b-container>

    <!-- form -->
    <b-container >
      <div><p class="fontMedium" >Add Team</p></div>
      <b-form>
          <div class="d-flex border">
            <span class="p-2 w-50" >Name</span>
            <b-input v-model="name" class="custom-search-field" />
          </div>
          <div class="d-flex border-left border-right">
            <span class="p-2 w-50" >Email ID</span>
            <b-input v-model="email" type="email" class="custom-search-field" />
          </div>
          <div class="d-flex border">
            <span class="p-2 w-50" >Phone No</span>
            <b-input v-model="phone" type="number" class="custom-search-field" />
          </div>
          <div class="d-flex border-left border-right">
            <span class="p-2 w-50" >Agreed Rate</span>
            <b-input v-model="agreedRate" type="number" class="custom-search-field" />
          </div>
          <div class="d-flex border-left border-right border-top">
            <span class="p-2 w-75" >Number of Seats</span>
            <b-input v-model="numberOfSeats" type="number" class="custom-search-field" />
          </div>
          <div class="d-flex border">
            <span class="p-2 w-100" >Plan</span>
            <!-- <b-input class="custom-search-field" /> -->
            <b-form-select v-model="selected" :options="options" class="custom-search-field" /> &nbsp;
          </div>
        
         
        <p class="mt-5" >optional fields.<br>
            these can either filled by cowork admin <br>
            or client
        </p>

        <div class="d-flex border">
           <span class="p-2 w-50" >Company Name</span>
           <b-input  v-model="companyName" class="custom-search-field" />
        </div>
        <div class="d-flex border-left border-right">
           <span class="p-2 w-50" >Pan</span>
           <b-input  v-model="pan" class="custom-search-field" />
        </div>
        <div class="d-flex border">
           <span class="p-2 w-100" >Aadhar Card/Id Proof No</span>
           <b-input v-model="idProof" type="number" class="custom-search-field" />
        </div>
        <div class="d-flex border-left border-right">
           <span class="p-2 w-50" >Address</span>
           <b-input v-model="address" class="custom-search-field" />
        </div>
        <div class="d-flex border">
           <span class="p-2 w-100" >Date of Commencemet</span>
           <b-input  v-model="dateOfCommencemet" type="date" class="custom-search-field" />
        </div> 
        <div class="d-flex border-left border-right">
           <span class="p-2 w-50" >Duration</span>
           <b-input v-model="duration" type="number" class="custom-search-field" />
        </div> 
        <div class="d-flex border">
           <span class="p-2 w-50" >Seats Assigned</span>
           <b-input v-model="seatsAssigned" type="number" class="custom-search-field" />
        </div> 
        <div class="d-flex border-left border-right">
           <span class="p-2 w-50" >Working Hours</span>
           <b-input v-model="workingHours" type="number" class="custom-search-field" />
        </div> 
        <div class="d-flex border">
           <span class="p-2 w-75" >Existing Members</span>
           <!-- <b-input class="custom-search-field" /> -->
           <label class="switch">
                <input v-model="existingMember" type="checkbox">
                <span class="slider round"></span>
           </label>
        </div> &nbsp;

        <div class="text-center" >
        <b-button variant="primary" class="text-center btnWidth btn-lg" @click="submitAddNewTeam" >Submit</b-button>
        </div>
      </b-form>
    </b-container>
    <!-- form ends -->
  </div>
</template>

<script>
import addNewTeamService from "./../services/addNewTeam.service.js";
import {sync, get} from 'vuex-pathify'
export default {
    name: 'AddNewTeam',
    computed: {
        selected: sync('selected'), //input field PLAN
        options: sync('options'), //input field PLAN
        // form fields
        name: sync('form@name'),
        email: sync('form@email'),
        phone: sync('form@phone'),
        agreedRate: sync('form@agreedRate'),
        numberOfSeats: sync('form@numberOfSeats'),
        // optional Fields
        companyName: sync('form@companyName'),
        pan: sync('form@pan'),
        idProof: sync('form@idProof'),
        address: sync('form@address'),
        dateOfCommencemet: sync('form@dateOfCommencemet'),
        duration: sync('form@duration'),
        seatsAssigned: sync('form@seatsAssigned'),
        workingHours: sync('form@workingHours'),
        existingMember: sync('form@existingMember'), //checkbox
        formData: get('form') //formData 
    },
    methods: {
      submitAddNewTeam() {
        if (!this.name || !this.email || !this.phone || !this.agreedRate || !this.numberOfSeats) {
          alert('first five fields are mandatory')
        } else {
          let response = addNewTeamService.addNew(this.formData)
        } 
      }
    }
}
</script>

<style>
.bglightGray {
  background: #F8F8F8;
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
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
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
