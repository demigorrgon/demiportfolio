<template>
  <div class="home">
    <about-me />
    <p>
      Here is the list of the projects that I've done in past 6 months.<br />
      They're clickable, don't be scared.
    </p>

    <project-item
      title="El-shopperino"
      techStackUsed="Backend: Django/Django Rest Framework, PostgreSQL. Frontend: VueJS, Vuex. Styling: Vuesax 3. Containerized with Docker"
      description="E-commerce website with goblin's head on logo. What could go wrong?"
      pictureName="github-pic.png"
      :featuresArray="[
        'REST API',
        'JWT authorization',
        'Product cart',
        'Favorite products',
        'Ordering proccess',
        'Permission based product creation (like a worker)',
        'TODO: add a map on frontend where user can pick a location where he wants the stuff to be delivered to',
      ]"
    />

    <project-item
      title="IJRA"
      techStackUsed="Backend: Vanilla Flask, PostgreSQL. Frontend: VueJS, Vuex. Styling: Vuesax 3. Containerized with Docker"
      description="Totally not a copy of JIRA. My take on making kanban board"
      pictureName="github-pic.png"
      :featuresArray="[
        'REST API',
        'JWT authorization',
        'Basic CRUD operations with tasks',
        'Persisted state',
        'You can drag stuff',
      ]"
      githubLink="https://github.com/demigorrgon/el-shopperino-dj-vue"
    />
  </div>
</template>

<script>
import AboutMe from "../components/AboutMe.vue";
import ProjectItem from "../components/ProjectItem.vue";
// @ is an alias to /src
export default {
  name: "HomeView",
  components: { AboutMe, ProjectItem },
};
</script>
