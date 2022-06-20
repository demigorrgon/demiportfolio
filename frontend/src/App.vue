<template>
  <div id="app">
    <portfolio-navbar />

    <router-view />
    <portfolio-footer :isAbsolute="false" v-if="this.$route.path === '/'" />
    <portfolio-footer :isAbsolute="true" v-else />
  </div>
</template>
<script>
import PortfolioNavbar from "@/components/PortfolioNavbar.vue";
import PortfolioFooter from "./components/PortfolioFooter.vue";

export default {
  components: { PortfolioNavbar, PortfolioFooter },
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
