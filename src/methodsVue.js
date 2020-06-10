import {
    countryCodes
} from "./countryCodes";
const moment = require("moment");
const Chart = require("chart.js");
export const methodsVue = {
    // get all countries
    async getAllCountries() {
        let res = await fetch("https://coronavirus-19-api.herokuapp.com/countries")
        let data = await res.json();
        this.countriesData = data;
        this.countriesList = data.map(i => i.country);
    },
    // set date 
    setDate() {
        this.date = moment().format("ddd, MMMM D YYYY");
    },
    // get default data
    async getDefaultData() {
        this.loading = true;
        let res = await fetch("https://coronavirus-19-api.herokuapp.com/countries/Myanmar")
        let data = await res.json()
        this.setData(data);
        this.updateFlag(data);
    },
    // search data
    searchData(e) {
        if (e.key === "Enter" && e.target.value !== "") {
            this.getSearchedData(e);
        }
    },
    // filter searched country
    filterCountry(c) {
        let SEARCHED_API_URL
        if (
            c === "America" ||
            c === "america" ||
            c === "Us" ||
            c === "US" ||
            c === "us" ||
            c === "United States" ||
            c === "United states" ||
            c === "united states"
        ) {
            SEARCHED_API_URL = `https://coronavirus-19-api.herokuapp.com/countries/usa`
        } else if (
            c === "korea" ||
            c === "Korea" ||
            c === "South Korea" ||
            c === "south korea" ||
            c === "South korea"
        ) {
            SEARCHED_API_URL = `https://coronavirus-19-api.herokuapp.com/countries/S. Korea`
        } else {
            SEARCHED_API_URL = `https://coronavirus-19-api.herokuapp.com/countries/${c}`
        }
        return SEARCHED_API_URL;
    },
    // get searched data
    async getSearchedData(e) {
        this.dataText = false;
        this.flagSrc = "#";
        this.loading = true;
        let res = await fetch(this.filterCountry(e.target.value))
        const contentType = res.headers.get("content-type");
        if (contentType === "application/json; charset=utf-8") {
            let data = await res.json()
            this.setData(data);
            this.updateFlag(data);
        } else {
            this.showNotFound();
        }
    },
    // set data
    setData(data) {
        if (data.country === "World") {
            this.inWord = false;
            this.country = "Worldwide";
            this.totalTests = "N/A";
        } else if (data.country === "China" && data.totalTests === 0) {
            this.totalTests = "N/A"
            this.country = "China";
        } else {
            this.inWord = true;
            this.country = data.country;
            this.totalTests = data.totalTests;
        }
        this.title = true;
        this.notFound = false;
        this.loading = false;
        this.dataText = true;
        this.cases = data.cases;
        this.todayCases = data.todayCases;
        this.active = data.active;
        this.recovered = data.recovered;
        this.totalDeaths = data.deaths;
        this.todayDeaths = data.todayDeaths;
        this.critical = data.critical;
    },
    // update flag
    updateFlag(data) {
        let reqFlag = data.country;
        // find method
        const foundFlag = countryCodes.find((country) => {
            return country.Name === reqFlag
        });
        if (reqFlag === "World" || foundFlag === undefined) {
            this.flagSrc = "#";
        } else {
            this.flagSrc = `https://www.countryflags.io/${foundFlag.Code.toLowerCase()}/flat/64.png`;
        }
    },
    // show not found
    showNotFound() {
        this.loading = false;
        this.inWord = false;
        this.country = "";
        this.title = false;
        this.notFound = true;
    },
    createChart() {
        const sbcc = document.getElementById("situation-by-country-chart").getContext('2d');
        new Chart(sbcc, {
          type: "horizontalBar",
          data: {
            labels: this.countriesList.slice(1, 10),
            datasets: [
              {
                label: "test",
                data: this.countriesData.map(i => i.cases).slice(1, 10),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',  
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
              }
            ]
          }
        });
      }
}