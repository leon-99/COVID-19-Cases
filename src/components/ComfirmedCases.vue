<template>
  <div class="col-md-4 --text-red --padding-top">
    <h5 class="--letter-spacing">CONFIRMED CASES</h5>
    <h5 class="mm-text">ဗိုင်းရပ်စ်ပိုးကူးစက်ခံရသူများ</h5>
    <h3 v-if="dataText" class="data-numbers">{{ cases }}</h3>
    <i
      class="fas fa-cog  spinner-red fa-2x mt-3 animation-spinner"
      v-if="loading"
    ></i>
  </div>
</template>

<script>
export default {
  name: " ConfirmedCases",
  props: ["cases", "dataText", "loading"]
};
</script>

<style></style>
