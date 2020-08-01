<template>
  <div class="col-md-4 --text-lightgray --padding-top">
    <h5 class="--letter-spacing">TODAY DEATHS</h5>
    <h5 class="mm-text">ဒီနေ့ သေဆုံးမှုများ</h5>
    <h3 v-if="dataText" class="data-numbers">{{ todayDeaths }}</h3>
    <i
      class="fas fa-cog  spinner-gray fa-2x mt-3 animation-spinner"
      v-if="loading"
    ></i>
  </div>
</template>

<script>
export default {
  name: "TodayDeaths",
  props: ["todayDeaths", "dataText", "loading"]
};
</script>

<style></style>
