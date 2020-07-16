<template>
  <footer>
    <small>v{{ versionNumber }}</small>
    <p class="mb-0 d-inline-block --letter-spacing">
      &copy;
      <span>{{ currentYear }} Leon Made with</span>
      <img src="../assets/heart.svg" alt class="footer-heart animation-breath" />
    </p>
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
  props: ["versionNumber", "profileHref", "currentYear"]
};
</script>

<style>
</style>