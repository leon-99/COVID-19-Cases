<template>
  <div class="col-md-6 --text-blueish tests --padding-top">
    <h5 class="--letter-spacing">TOTAL TESTS</h5>
    <h5 class="mm-text">စုစုပေါင်း ဆေးစစ်မှုများ</h5>
    <h3 v-if="dataText" class="data-numbers">{{ totalTests }}</h3>
    <div class="spinner-grow spinner-blue" role="status" v-if="loading">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
    name: "TotalTests",
    props: ["totalTests", "dataText", "loading"]
};
</script>

<style>
</style>