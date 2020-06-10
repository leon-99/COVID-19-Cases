<template>
  <div id="app">
    <div class="container">
      <div class="row search-row">
        <div class="col-md-12 search-inner">
          <input
            type="text"
            name="search"
            class="search"
            placeholder="Search for country"
            list="countries"
            @keyup="searchData"
            autocomplete="off"
          />
          <datalist id="countries">
            <option v-for="c in countriesList" :key="c">{{ c }}</option>
          </datalist>
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
        <ConfirmedCases :cases="this.cases" :dataText="this.dataText" :loading="this.loading" />
        <TodayCases
          :todayCases="this.todayCases"
          :data-text="this.dataText"
          :loading="this.loading"
        />
        <ActiveCases :active="this.active" :dataText="this.dataText" :loading="this.loading" />
        <Recovered :recovered="this.recovered" :dataText="this.dataText" :loading="this.loading" />
        <TotalDeaths
          :totalDeaths="this.totalDeaths"
          :dataText="this.dataText"
          :loading="this.loading"
        />
        <TodayDeaths
          :todayDeaths="this.todayDeaths"
          :dataText="this.dataText"
          :loading="this.loading"
        />
        <Critical :critical="this.critical" :dataText="this.dataText" :loading="this.loading" />
        <TotalTests
          :totalTests="this.totalTests"
          :dataText="this.dataText"
          :loading="this.loading"
        />
      </div>
      <!-- <SituationWorldwide /> -->
    </div>
    <Footer :versionNumber="this.versionNumber" :profileHref="this.profileHref" />
  </div>
</template>

<script>
/* eslint-disable */
import { dataVue } from "./dataVue";
import { methodsVue } from "./methodsVue";
import ConfirmedCases from "./components/ComfirmedCases";
import TodayCases from "./components/TodayCases";
import ActiveCases from "./components/ActiveCases";
import Recovered from "./components/Recovered";
import TotalDeaths from "./components/TotalDeaths";
import TodayDeaths from "./components/TodayDeaths";
import Critical from "./components/Critical";
import TotalTests from "./components/TotalTests";
import Footer from "./components/Footer";
// import SituationWorldwide from "./components/SituationWorldwide";

export default {
  name: "App",
  components: {
    ConfirmedCases,
    TodayCases,
    ActiveCases,
    Recovered,
    TotalDeaths,
    TodayDeaths,
    Critical,
    TotalTests,
    // SituationWorldwide,
    Footer
  },
  data() {
    return dataVue;
  },
  methods: methodsVue,
  mounted() {
    this.getAllCountries();
    this.setDate();
    // this.getDefaultData();
    // this.createChart();
  }
};
</script>

<style lang="css">
@import url("../node_modules/bootstrap/dist/css/bootstrap.min.css");
@import url("./assets/css/style.css");
</style>
