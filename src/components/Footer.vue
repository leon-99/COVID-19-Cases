<template>
  <footer>
    <small>v{{ versionNumber }}</small>
    <small class="--letter-spacing">
      Created by
      <a :href="profileHref" class="profile-link">Leon</a> &nbsp;
    </small>
    <small class="credit-text --letter-spacing">
      Icons made by
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </small>
  </footer>
</template>

<script>
export default {
    name: "Footer",
    props: ["versionNumber", "profileHref"]
};
</script>

<style>
</style>