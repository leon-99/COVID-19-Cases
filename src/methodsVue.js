import {
    countryCodes
} from "./countryCodes";
const moment = require("moment");
export const methodsVue = {
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
        console.log(foundFlag);
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
    async getCountriesList() {
        let res = await fetch("https://coronavirus-19-api.herokuapp.com/countries")
        let data = await res.json()
        this.countriesList = data.map(i => {
            return i["country"]
        })
        this.countriesList.push("United States", "America", "US", "Korea", "South Korea")
    }
}