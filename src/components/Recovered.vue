<template>
  <div class="col-md-4 --text-greenyellow --padding-top">
    <h5 class="--letter-spacing">RECOVERED</h5>
    <h5 class="mm-text">ပြန်လည်ကျန်းမာသူများ</h5>
    <h3 v-if="dataText" class="data-numbers">{{ recovered }}</h3>
   <i class="fas fa-cog  spinner-greenyellow fa-2x mt-3 animation-spinner" v-if="loading"></i>
  </div>
</template>

<script>
export default {
    name: "Recovered",
    props: ["recovered", "dataText", "loading"]
};
</script>

<style>
</style>