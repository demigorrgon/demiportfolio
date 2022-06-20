<template>
  <div class="portfolio-navbar">
    <vs-navbar color="#000000" square v-model="active">
      <template #left>
        <vs-navbar-item class="peepologo">
          <p class="brand" @click="toHomePage">demigorrgon.design</p>
          <img
            class="greet-pic"
            src="https://c.tenor.com/dyoCFHNiIAwAAAAM/peepo-hey-peepo.gif"
            alt=""
            @click="toHomePage"
          /> </vs-navbar-item
      ></template>
      <template #right>
        <vs-navbar-item :active="active == 'home'" id="home">
          <router-link to="/" class="navbar-item">Home</router-link>
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'contact-bio'" id="contact">
          <router-link to="/contact" class="navbar-item">Bio/CV</router-link>
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
  methods: {
    toHomePage() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.brand {
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
}
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