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
    <div class="row">
      <div class="col-md-12 text-center" v-if="loading">
         <i class="fas fa-cog fa-2x mt-3 animation-spinner"></i>
      </div>
      <div class="col-md-12" v-if="dataTexts">
        <div v-for="country in countryData" :key="countryData.indexOf(country)" class="mb-4 d-flex justify-content-around">
          <p class="country-name">{{ country.country }}</p>
          <p class="ml-1 cases-text">{{ !country.cases ? 'N/A' : country.cases }}</p>
          <p class="ml-1 recovered-text">{{ !country.recovered ? 'N/A' : country.recovered }}</p>
          <p class="ml-1 deaths-text">{{ !country.deaths ? 'N/A' : country.deaths  }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "All",
  data() {
    return {
      date: '',
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

<style lang="css" scoped>
@import '../assets/css/animations.css';


.fa-cog {
  color: gray;
}

.main {
  min-height: 100vh;
}

td {
  padding: 10px;
  border: solid 1px white;
}

.red-block {
  vertical-align: middle;
  width: 10px;
  height: 10px;
  background-color: red;
}

.gray-block {
  vertical-align: middle;
  width: 10px;
  height: 10px;
  background-color: gray;
}

.green-block {
  vertical-align: middle;
  width: 10px;
  height: 10px;
  background-color: greenyellow;
}

.cases-text {
  color: red;
}

.deaths-text {
  color: gray;
}

.recovered-text {
  color: yellowgreen;
}
</style>