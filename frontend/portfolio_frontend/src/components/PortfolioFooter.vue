<template>
  <v-footer :dark="true" :absolute="isAbsolute" style="margin-top: 20px;">
    <vs-row>
      <vs-col class="logo-wrapper" w="4" style="border: 1px solid red">
        <p class="logo">
          <a
            class="logo-link"
            href="https://github.com/demigorrgon/demiportfolio"
            >demigorrgon.design</a
          >
        </p>
        <p class="rights">All rights reserved ©</p>
      </vs-col>
      <vs-col
        class="info-wrapper"
        w="7"
        offset="1"
        style="border: 1px solid red"
      >
        <vs-row>
          <vs-col w="3" offset="1" style="border: 1px solid red">
            <a
              class="repo-link"
              href="https://github.com/demigorrgon/demiportfolio"
              >Portfolio's repository</a
            >
            <p class="repo-description">
              Portfolio is written in
              <a href="https://docs.djangoproject.com/en/3.2/">Django</a>/<a
                href="https://www.django-rest-framework.org/"
                >DRF</a
              >, <a href="https://v2.vuejs.org/">VueJS</a>,
              <a
                href="https://vuesax.com/docs/guide/gettingStarted.html#installation"
                >Vuesax 4</a
              >
            </p>
          </vs-col>
          <vs-col w="2" offset="2"
            ><p>
              <router-link to="/contact" class="repo-link"
                >Contact me</router-link
              ><br /><p style="font-size:12px;">UI broke down on your device? Open up
              <a href="https://github.com/demigorrgon/demiportfolio/issues"
                >an issue</a
              ></p>
            </p></vs-col
          >
          <vs-col w="2" offset="2"
            ><p>
              <router-link to="roadmap" class="repo-link"
                >Personal roadmap</router-link
              >
            </p></vs-col
          >
        </vs-row>
      </vs-col>
    </vs-row>
  </v-footer>
</template>

<script>
export default {
  props: ["isAbsolute"],
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: underline;
  color: red;
}
.logo {
  font-family: "Courier New", Courier, monospace;
  font-size: 24px;
  font-weight: 600;
  font-style: italic;
}
.logo-wrapper {
  margin-top: 30px;
  padding: 10px 10px 10px 10px;
}
.info-wrapper {
  margin-top: 30px;
  padding: 10px 10px 10px 10px;
}
.logo-link {
  text-decoration: none;
  color: white;
}
.logo-link:hover {
  text-decoration: underline;
}

.rights {
  font-size: 10px;
  font-weight: 100;
}
.repo-link {
  text-decoration: none;
  color: white;
  font-weight: 600;
}
.repo-link:hover {
  text-decoration: underline;
}
.repo-description {
  font-size: 14px;
  font-weight: 500;
}
</style>