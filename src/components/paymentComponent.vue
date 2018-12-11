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
      <b-form @submit.prevent>
        <div class="border">


          <b-btn v-b-toggle.collapse1 variant="link" class="btnWidth btn-lg">Online (GST Extra)</b-btn>
            <b-collapse id="collapse1" class="mt-2">
              <b-card>
                <p class="card-text">Collapse contents Here</p>
                <b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>
                <b-collapse id=collapse1_inner class="mt-2">
                  <b-card>Hello!</b-card>
                </b-collapse>
              </b-card>
            </b-collapse>

        </div>
        <div class="border-left border-right">
          
          <b-btn v-b-toggle.collapse2 variant="link" class="btnWidth btn-lg">Cash</b-btn>
            <b-collapse id="collapse2" class="mt-2">
              <b-card>
                <p class="card-text">Collapse contents Here</p>
                <b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>
                <b-collapse id=collapse1_inner class="mt-2">
                  <b-card>Hello!</b-card>
                </b-collapse>
              </b-card>
            </b-collapse>



        </div>
        <div class="border">
          

          <b-btn v-b-toggle.collapse3 variant="link" class="btnWidth btn-lg">Cheque (GST Extra)</b-btn>
            <b-collapse id="collapse3" class="mt-2">
              <b-card>
                <p class="card-text">Collapse contents Here</p>
                <b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>
                <b-collapse id=collapse1_inner class="mt-2">
                  <b-card>Hello!</b-card>
                </b-collapse>
              </b-card>
            </b-collapse>


        </div>
        <div class="border-left border-right">
         
          <b-btn v-b-toggle.collapse4 variant="link" class="btnWidth btn-lg">Wallet</b-btn>
            <b-collapse id="collapse4" class="mt-2">
              <b-card>
                <p class="card-text">Collapse contents Here</p>
                <b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>
                <b-collapse id=collapse1_inner class="mt-2">
                  <b-card>Hello!</b-card>
                </b-collapse>
              </b-card>
            </b-collapse>



        </div>
        <div class="text-center">
          <b-button variant="primary" class="text-center btnWidth btn-lg" type="submit">Pay</b-button>
        </div>
      </b-form>
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
</style>
