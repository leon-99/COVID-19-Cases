<template>
  <div class="col-md-6 --text-yellow tests --padding-top">
    <h5 class="--letter-spacing">CRITICAL PATIENTS</h5>
    <h5 class="mm-text">စိုးရိမ်ရအ‌ခြေအ‌နေရှိသော လူနာများ</h5>
    <h3 v-if="dataText" class="data-numbers">{{ critical }}</h3>
    <div class="spinner-grow spinner-yellow" role="status" v-if="loading">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
    name: "Critical",
    props: ["critical", "dataText", "loading"]
};
</script>

<style>
</style>