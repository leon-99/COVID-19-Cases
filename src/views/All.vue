<template>
  <div class="container main pt-5">
    <div class="row mb-5">
      <div class="col-md-12 text-center">
        <h3>Situation by Country, Territory and Area</h3>
        <p class="my-3">{{ date }}</p>
        <small class="mr-2">cases:</small>
        <div class="red-block d-inline-block mr-4"></div>
        <small class="mr-2">recovered:</small>
        <div class="green-block d-inline-block mr-4"></div>
        <small class="mr-2">deaths:</small>
        <div class="gray-block d-inline-block mr-4"></div>
      </div>
    </div>
    <div class="row" v-if="dataTexts">
      <div
        class="col-md-4 col-12 mb-4 d-flex flex-column align-items-center country-boxes"
        v-for="country in countryData"
        :key="countryData.indexOf(country)"
      >
        <h5 class="country-name mb-3">{{ country.country }}</h5>
        <div class="d-flex mb-3">
          <h5 class="cases-text">{{ !country.cases ? 'N/A' : country.cases }}</h5>
          <h5 class="recovered-text mx-5">{{ !country.recovered ? 'N/A' : country.recovered }}</h5>
          <h5 class="deaths-text">{{ !country.deaths ? 'N/A' : country.deaths }}</h5>
        </div>
      </div>
    </div>
    <div class="row" v-if="loading">
      <div class="col-md-12 text-center">
        <i class="fas fa-cog fa-2x mt-3 animation-spinner"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "All",
  data() {
    return {
      date: "",
      loading: false,
      dataTexts: false,
      countryData: null
    };
  },
  methods: {
    setTime() {
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let date = new Date();
      this.date = `${
        months[date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()}`;
    },
    async getData() {
      this.dataTexts = false;
      this.loading = true;
      let res = await fetch(
        "https://coronavirus-19-api.herokuapp.com/countries"
      );
      let data = await res.json();
      this.setData(data);
    },
    setData(data) {
      this.dataTexts = true;
      this.loading = false;
      this.countryData = data;
    }
  },
  mounted() {
    this.getData();
    this.setTime();
  }
};
</script>