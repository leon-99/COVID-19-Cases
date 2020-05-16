<template>
  <div class="col-md-4 --text-lightgray --padding-top">
    <h5 class="--letter-spacing">TOTAL DEATHS</h5>
    <h5 class="mm-text">စုစုပေါင်းသေဆုံးမှုများ</h5>
    <h3 v-if="dataText" class="data-numbers">{{ totalDeaths }}</h3>
    <div class="spinner-grow spinner-gray" role="status" v-if="loading">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
    name: "TotalDeaths",
    props: ["totalDeaths", "dataText", "loading"]
};
</script>

<style>
</style>