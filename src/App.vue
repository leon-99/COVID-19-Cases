<template>
  <div id="app">
    <Header />
    <transition
        name="fade"
        mode="out-in"
      >
    <router-view />
    </transition>
    <Footer
      :versionNumber="this.versionNumber"
      :profileHref="this.profileHref"
      :currentYear="this.currentYear"
    />
  </div>
</template>


<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      versionNumber: "2.6.7",
      currentYear: "",
      profileHref: "https://www.facebook.com/leonzifer"
    };
  },
  methods: {
    setFooterYear() {
      let date = new Date();
      this.currentYear = date.getFullYear();
    }
  },
  mounted() {
    this.setFooterYear();
  }
};
</script>

<style lang="css">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import './assets/css/styles.css';
@import './assets/css/all.css';
@import "./assets/css/animations.css";


/* router view transitions */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: linear;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
