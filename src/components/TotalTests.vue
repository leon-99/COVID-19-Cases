<template>
  <div class="col-md-6 --text-blueish tests --padding-top">
    <h5 class="--letter-spacing">TOTAL TESTS</h5>
    <h5 class="mm-text">စုစုပေါင်း ဆေးစစ်မှုများ</h5>
    <h3 v-if="dataText" class="data-numbers">{{ totalTests }}</h3>
    <i class="fas fa-cog  spinner-blue fa-2x mt-3 animation-spinner" v-if="loading"></i>
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