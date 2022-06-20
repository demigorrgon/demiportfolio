<template>
  <div class="portfolio-navbar">
    <vs-navbar color="#000000" square v-model="active">
      <template #left>
        <vs-navbar-item class="peepologo">
          <img
            class="greet-pic"
            src="https://c.tenor.com/dyoCFHNiIAwAAAAM/peepo-hey-peepo.gif"
            alt=""
          /> </vs-navbar-item
      ></template>
      <template #right>
        <vs-navbar-item :active="active == 'home'" id="home">
          <router-link to="/" class="navbar-item">Home</router-link>
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'contact-bio'" id="contact">
          <router-link to="/contact#bio" class="navbar-item">Bio</router-link>
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'contact'" id="contact">
          <router-link to="/contact" class="navbar-item"
            >Contact me</router-link
          >
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'roadmap'" id="roadmap">
          <router-link to="/roadmap" class="navbar-item"
            >Dev roadmap</router-link
          >
        </vs-navbar-item>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return { active: "home" };
  },
};
</script>

<style>
.greet-pic {
  width: 20%;
}
.square {
  margin-top: 50px;
}
.navbar-item {
  text-decoration: none;
  color: azure;
}
</style>