<template>
  <div
    class="home"
    :style="{
      'background-image': `url(${require('@/assets/sky.jpg')})`,
      'background-size': 'cover',
    }"
  >
    <about-me />
    <vs-row style="margin-top: 30px">
      <vs-col w="1" offset="4">
        <img class="build" :src="require('@/assets/peepobuild.gif')" />
      </vs-col>
      <vs-col w="3">
        <p style="margin-top: 50px">
          Here is the list of the projects that I've done in past 6 months.<br />
          They're clickable, check'em out.
        </p>
      </vs-col>
    </vs-row>
    <project-item
      title="El-shopperino"
      techStackUsed="Backend: Django/Django Rest Framework, PostgreSQL. Frontend: VueJS, Vuex. Styling: Vuesax 3. Containerized with Docker"
      description="E-commerce website with goblin's head on logo. What could go wrong?"
      pictureName="goblin-head.png"
      endpoint="el_shopperino"
      githubLink="https://github.com/demigorrgon/el-shopperino-dj-vue"
      :featuresArray="[
        'REST API',
        'JWT authentication',
        'Account activation upon email verification (c) Shakespear, probably',
        'Product cart',
        'Favorite products',
        'Ordering proccess',
      ]"
    />

    <project-item
      title="IJRA"
      techStackUsed="Backend: Vanilla Flask, PostgreSQL. Frontend: VueJS, Vuex. Styling: Vuesax 3. Containerized with Docker"
      description="Totally not a copy of JIRA. Heavily inspired by ifuckinghatejira.com to make someone's life miserable by design"
      pictureName="ijra.jpg"
      endpoint="ijra"
      githubLink="https://github.com/demigorrgon/ijra"
      :featuresArray="[
        'REST API',
        'JWT authentication',
        'Basic CRUD operations with tasks',
        'Persisted state',
        'You can drag stuff',
      ]"
    />
    <project-item
      title="Twitter clone"
      techStackUsed="Backend: Django/Django Rest Framework, sqlite. Frontend: VanillaJS."
      description="One of the first projects ever done with DRF and JS/Bootstrap. Frontend in this project needs some love (refactoring with frameworks)"
      pictureName="twitter.png"
      endpoint="twitter"
      githubLink="https://github.com/demigorrgon/twitter_clone_django"
      :featuresArray="[
        'Mix of REST API and django templates',
        'Session authentication',
        'All the usual twitter stuff:',
        'Likes, tweets, retweets, followers',
      ]"
    />
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe.vue";
import ProjectItem from "../components/ProjectItem.vue";

export default {
  name: "HomeView",
  components: { AboutMe, ProjectItem },
};
</script>
<style>
.build {
  width: 75%;
}
.home p {
  font-family: "Courier New", Courier, monospace;
  font-weight: 800;
  color: antiquewhite;
}
</style>
