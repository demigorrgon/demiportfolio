<template>
  <div id="app">
    <portfolio-navbar />
    <router-view />
  </div>
</template>
<script>
import PortfolioNavbar from "@/components/PortfolioNavbar.vue";

export default {
  components: { PortfolioNavbar },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
