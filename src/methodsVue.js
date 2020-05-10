import {
    countryCodes
} from "./countryCodes";
const moment = require("moment");
export const methodsVue = {
    // set date 
    setDate() {
        this.date = moment().format("ddd, MMMM Do YYYY");
    },
    // get default data
    getDefaultData() {
        this.loading = true;
        fetch("https://coronavirus-19-api.herokuapp.com/countries/Myanmar")
            .then(res => res.json())
            .then(data => {
                this.setData(data);
                this.updateFlag(data);
            });
    },
    // search data
    searchData(e) {
        if (e.key === "Enter" && e.target.value !== "") {
            this.getSearchedData(e);
        }
    },
    // filter searched counry
    filterCountry(c) {
        let SEARCHED_API_URL
        if (
            c === "America" ||
            c === "america" ||
            c === "US" ||
            c === "us"
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
    getSearchedData(e) {
        this.dataText = false;
        this.loading = true;
        fetch(this.filterCountry(e.target.value))
            .then(res => {
                const contentType = res.headers.get("content-type");
                if (contentType === "application/json; charset=utf-8") {
                    return res.json();
                } else {
                    this.showNotFound();
                }
            })
            .then(data => {
                this.setData(data);
                this.updateFlag(data);
            });
    },
    // set data
    setData(data) {
        if (data.country === "World") {
            this.inWord = false;
            this.country = "Worldwide";
            this.totalTests = "N/A";
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
        if (reqFlag === "World") {
            this.flagSrc = "#";
        } else {
            const foundFlag = countryCodes
                .filter(item => {
                    return item.Name === reqFlag;
                })
                .map(item => {
                    return item.Code;
                });
            this.flagSrc = `https://www.countryflags.io/${foundFlag[0].toLowerCase()}/flat/64.png`;
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
    showVersionChanges() {
        let versionChangesText = `
            Version 2.5.0
            What,s new:
            1. Now you can search america data with just US,America or USA.

            2. Now you can also search Korea data with Korea or North Korea.

            3. It has this version number and you can see changes.`

        alert(versionChangesText)
    }
}