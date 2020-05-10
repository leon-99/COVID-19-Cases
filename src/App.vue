<template>
  <div id="app">
    <div class="container">
      <div class="row search-row">
        <div class="col-md-12">
          <input
            type="text"
            name="search"
            class="search"
            placeholder="Search for country"
            @keyup="searchData"
          />
        </div>
      </div>
      <div class="row row-1">
        <div class="col-md-12">
          <h3 class="--letter-spacing">
            <span v-if="title">COVID-19 Cases</span> &nbsp;
            <span v-if="notFound">Country not found!</span>
            <span v-if="inWord">in</span> &nbsp;
            <span id="country-text">{{ country }}</span>
          </h3>
          <div class="spinner-grow spinner-gray" role="status" v-if="loading">
            <span class="sr-only">Loading...</span>
          </div>
          <img :src="flagSrc" alt class="pb-2" v-if="dataText" />
          <h6>{{ date }}</h6>
        </div>
      </div>
      <div class="row row-2">
        <div class="col-md-4 --text-red --padding-top">
          <h5 class="--letter-spacing">CONFIRMED CASES</h5>
          <h5 class="mm-text">ဗိုင်းရပ်စ်ပိုးကူးစက်ခံရသူများ</h5>
          <h3 v-if="dataText" class="data-numbers">{{ cases }}</h3>
          <div class="spinner-grow spinner-red" role="status" v-if="loading">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div class="col-md-4 --text-red --padding-top">
          <h5 class="--letter-spacing">TODAY CASES</h5>
          <h5 class="mm-text">ဒီနေ့ ဗိုင်းရပ်စ်ပိုးကူးစက်ခံရသူများ</h5>
          <h3 v-if="dataText" class="data-numbers">{{ todayCases }}</h3>
          <div class="spinner-grow spinner-red" role="status" v-if="loading">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div class="col-md-4 --text-red --padding-top">
          <h5 class="--letter-spacing">ACTIVE CASES</h5>
          <h5 class="mm-text">ကုသဆဲ လူနာများ</h5>
          <h3 v-if="dataText" class="data-numbers">{{ active }}</h3>
          <div class="spinner-grow spinner-red" role="status" v-if="loading">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div class="col-md-4 --text-greenyellow --padding-top">
          <h5 class="--letter-spacing">RECOVERED</h5>
          <h5 class="mm-text">ပြန်လည်ကျန်းမာသူများ</h5>
          <h3 v-if="dataText" class="data-numbers">{{ recovered }}</h3>
          <div class="spinner-grow spinner-greenyellow" role="status" v-if="loading">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div class="col-md-4 --text-lightgray --padding-top">
          <h5 class="--letter-spacing">TOTAL DEATHS</h5>
          <h5 class="mm-text">စုစုပေါင်းသေဆုံးမှုများ</h5>
          <h3 v-if="dataText" class="data-numbers">{{ totalDeaths }}</h3>
          <div class="spinner-grow spinner-gray" role="status" v-if="loading">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div class="col-md-4 --text-lightgray --padding-top">
          <h5 class="--letter-spacing">TODAY DEATHS</h5>
          <h5 class="mm-text">ဒီနေ့ သေဆုံးမှုများ</h5>
          <h3 v-if="dataText" class="data-numbers">{{ todayDeaths }}</h3>
          <div class="spinner-grow spinner-gray" role="status" v-if="loading">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div class="col-md-6 --text-yellow tests --padding-top">
          <h5 class="--letter-spacing">CRITICAL PATIENTS</h5>
          <h5 class="mm-text">စိုးရိမ်ရအ‌ခြေအ‌နေရှိသော လူနာများ</h5>
          <h3 v-if="dataText" class="data-numbers">{{ critical }}</h3>
          <div class="spinner-grow spinner-yellow" role="status" v-if="loading">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div class="col-md-6 --text-blueish tests --padding-top">
          <h5 class="--letter-spacing">TOTAL TESTS</h5>
          <h5 class="mm-text">စုစုပေါင်း ဆေးစစ်မှုများ</h5>
          <h3 v-if="dataText" class="data-numbers">{{ totalTests }}</h3>
          <div class="spinner-grow spinner-blue" role="status" v-if="loading">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <small class="--letter-spacing">
        Created by
        <a :href="profileHref" class="profile-link">Leon</a> &nbsp;
      </small>
      <small class="credit-text --letter-spacing">
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </small>
    </footer>
  </div>
</template>

<script>
import { dataVue } from "./dataVue";
import { methodsVue } from "./methodsVue";
export default {
  name: "App",
  data() {
    return dataVue
  },
  methods: methodsVue,
  mounted() {
    this.setDate();
    this.getDefaultData();
  }
};
</script>

<style lang="css">
@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
@import url("./assets/css/style.css");
</style>
