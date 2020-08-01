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
          <i class="fas fa-cog spinner-gray fa-2x mt-3 animation-spinner mb-3" v-if="loading"></i>
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
    </div>
  </div>
</template>

<script>
import { searchDataVue } from "../searchDataVue";
import { searchMethodsVue } from "../searchMethodsVue";
import ConfirmedCases from "../components/ComfirmedCases";
import TodayCases from "../components/TodayCases";
import ActiveCases from "../components/ActiveCases";
import Recovered from "../components/Recovered";
import TotalDeaths from "../components/TotalDeaths";
import TodayDeaths from "../components/TodayDeaths";
import Critical from "../components/Critical";
import TotalTests from "../components/TotalTests";

export default {
  name: "Search",
  components: {
    ConfirmedCases,
    TodayCases,
    ActiveCases,
    Recovered,
    TotalDeaths,
    TodayDeaths,
    Critical,
    TotalTests
  },
  data() {
    return searchDataVue;
  },
  methods: searchMethodsVue,
  mounted() {
    this.getAllCountries();
    this.setTime();
  }
};
</script>
