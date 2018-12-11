<template>
    <div class="mobileView mx-auto">
    <!-- nav -->
    <b-nav class="bglightGray border-bottom">
      <div class="d-flex">
        <router-link to="/finalize">
          <p class="mx-auto text-dark mt-2 mb-2">
            <i class="fas fa-chevron-left"></i>
            Finalize
          </p>
        </router-link>
        <span class="mx-auto text-dark mt-2 mb-2 pl-5 adminFontWeight">Payment</span>
      </div>
    </b-nav>
    <!-- nav ends -->
    <!-- form -->
    <b-container>
      <div>
        <p class="fontMedium">Payments</p>
      </div>
      <!-- <b-form @submit.prevent="submitAddNewTeam">
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
      </b-form> -->
    <b-list-group class="list">
        <b-list-group-item button>Button item</b-list-group-item>
        <b-list-group-item button>I am a button</b-list-group-item>
        <b-list-group-item button>Disabled button</b-list-group-item>
        <b-list-group-item button>This is a button too</b-list-group-item>
    </b-list-group>&nbsp;
        <div class="text-center">
          <b-button variant="primary" class="text-center btnWidth btn-lg" type="submit">Tap me!</b-button>
        </div>
        <br/>
    </b-container>
    <!-- form ends -->
  </div>
</template>

<script>
export default {
name: 'paymentComponent'
}
</script>

<style>
.list:hover{
   cursor: pointer; 
}
</style>
