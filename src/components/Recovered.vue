<template>
  <div class="col-md-4 --text-greenyellow --padding-top">
    <h5 class="--letter-spacing">RECOVERED</h5>
    <h5 class="mm-text">ပြန်လည်ကျန်းမာသူများ</h5>
    <h3 v-if="dataText" class="data-numbers">{{ recovered }}</h3>
    <div class="spinner-grow spinner-greenyellow" role="status" v-if="loading">
      <span class="sr-only">Loading...</span>
    </div>
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