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
        <vs-navbar-item :active="active == 'home'" id="guide">
          Home
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'docs'" id="docs">
          Documents
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'components'" id="components">
          Components
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'license'" id="license">
          license
        </vs-navbar-item></template
      >
      <!-- <template #right></template> -->
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
.peepologo {
}
.greet-pic {
  width: 20%;
}
.square {
  margin-top: 50px;
}
</style>