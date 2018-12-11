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
      <b-form @submit.prevent>
        <div class="text-center">
          <b-button
            variant="primary"
            class="text-center btnWidth btn-lg"
            @click="editDetails"
          >Edit Details</b-button>
        </div>

        <div class="image mt-3 mb-3">
          <!-- <embed src="./../assets/samplecontract.pdf" type="application/pdf" height="300px" /> -->
          <!-- <embed src="./../assets/samplecontract.pdf" type="application/pdf" width="100%" height="600px" /> -->
          <!-- <vue-pdf-viewer height="300px" url="./../assets/test.pdf">
          </vue-pdf-viewer>-->
          <!-- <iframe src="./../assets/samplecontract.pdf" height="300px"></iframe> -->
        </div>

        <div class="text-center">
          <b-button variant="primary" class="text-center btnWidth btn-lg">View Agreement</b-button>
        </div>

        <div class="mt-4 mb-3">
          <vueSignature ref="signature" :sigOption="option" :w="'100%'" :h="'300px'"></vueSignature>
          <!-- <vueSignature ref="signature1" :sigOption="option"></vueSignature> -->
          <!-- <button @click="save">Save</button> -->
          <!-- <button @click="clear">Clear</button> -->
          <b-button variant="secondary" class="text-center btnWidth btn-lg" @click="clear">Clear</b-button>
          <!-- <button @click="undo">Undo</button> -->
          <!-- <button @click="addWaterMark">addWaterMark</button> -->
        </div>

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
// import VuePDFViewer from 'vue-pdf-viewer'
export default {
  name: "finalize",
  data() {
    return {
      option: {
        penColor: "rgb(0, 0, 0)",
        backgroundColor: "rgb(255,255,255)"
      }
    };
  },
  components: {
    // 'vue-pdf-viewer': VuePDFViewer
  },
  computed: {},
  methods: {
    editDetails() {
      this.$router.push("/teamNew");
    },
    clear() {
      var _this = this;
      _this.$refs.signature.clear();
    },
  }
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
