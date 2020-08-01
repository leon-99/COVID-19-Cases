<template>
  <div class="col-md-4 --text-lightgray --padding-top">
    <h5 class="--letter-spacing">TOTAL DEATHS</h5>
    <h5 class="mm-text">စုစုပေါင်းသေဆုံးမှုများ</h5>
    <h3 v-if="dataText" class="data-numbers">{{ totalDeaths }}</h3>
    <i
      class="fas fa-cog  spinner-gray fa-2x mt-3 animation-spinner"
      v-if="loading"
    ></i>
  </div>
</template>

<script>
export default {
  name: "TotalDeaths",
  props: ["totalDeaths", "dataText", "loading"]
};
</script>

<style></style>
