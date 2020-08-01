<template>
  <div id="nav" class="nav">
    <router-link to="/" class="search-link"><i class="fas fa-search"></i></router-link>
    <router-link to="/all" class="list-link"><i class="fas fa-bars"></i></router-link>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.nav {
  justify-content: center;
  margin-top: 20px;
}

.search-link,
.list-link {
  display: inline-block;
  background-color: transparent;
  border: solid rgba(255, 0, 0, 0.7) 1px;
  color: rgba(255, 0, 0, 0.7);
  padding: 3px 10px;
  margin-right: 15px;
  margin-left: 15px;
  transition: all linear 0.3s;
}

.search-link,
.list-link:hover {
    text-decoration: none;
}

.router-link-exact-active {
  color: white;
  background-color: rgba(255, 0, 0, 0.3);
}
</style>