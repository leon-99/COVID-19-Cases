import {
    countryCodes
} from "./countryCodes";
const moment = require("moment");
export const methodsVue = {
    // set date 
    setDate() {
        this.date = moment().format("ddd, MMMM D YYYY");
    },
    // get all countries
    async getAllCountries() {
        this.loading = true;
        let res = await fetch("https://coronavirus-19-api.herokuapp.com/countries");
        let data = await res.json();
        this.countriesData = data;
        this.countriesList = data.map(i => i.country);
        this.setDefaultData(data);
    },
    // set default data
    setDefaultData(data) {
        this.loading = true;
        this.setData(data.find(i => i.country === this.defaultCountry));
        this.updateFlag(data.find(i => i.country === this.defaultCountry));
    },
    // search data
    searchData(e) {
        if (e.key === "Enter" && e.target.value !== "") this.getSearchedData(e);
    },
    // filter searched country
    filterCountry(c) {
        let SEARCHED_COUNTRY;
        if (
            c === "America" ||
            c === "america" ||
            c === "Us" ||
            c === "US" ||
            c === "us" ||
            c === "United States" ||
            c === "United states" ||
            c === "united states"
        ) SEARCHED_COUNTRY = this.countriesData.find(i => i.country === "Usa");
        else if (
            c === "korea" ||
            c === "Korea" ||
            c === "South Korea" ||
            c === "south korea" ||
            c === "South korea"
        ) SEARCHED_COUNTRY = this.countriesData.find(i => i.country === "S. Korea");
        else SEARCHED_COUNTRY = this.countriesData.find(i => i.country === c);
        return SEARCHED_COUNTRY;
    },
    // get searched data
    async getSearchedData(e) {
        this.dataText = false;
        this.flagSrc = "#";
        this.loading = true;
        if (this.filterCountry(e.target.value) !== undefined) {
           setTimeout(() => {
            this.setData(this.filterCountry(e.target.value));
           }, 300);
            this.updateFlag(this.filterCountry(e.target.value));
        } else this.showNotFound();
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
        const foundFlag = countryCodes.find((country) => country.Name === data.country);
        if (data.country === "World" || data.country === undefined);
        else this.flagSrc = `https://www.countryflags.io/${foundFlag.Code.toLowerCase()}/flat/64.png`;
    },
    // show not found
    showNotFound() {
        this.loading = false;
        this.inWord = false;
        this.country = "";
        this.title = false;
        this.notFound = true;
    }
}